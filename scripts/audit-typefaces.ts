import { execFile } from "node:child_process";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { promisify } from "node:util";

import { getAllTypefaces, type Typeface } from "../lib/content";

const OUTPUT_PATH = path.join(process.cwd(), "reports", "typeface-audit.md");
const REQUEST_TIMEOUT_MS = 15_000;
const USER_AGENT =
  "Mozilla/5.0 (compatible; beautiful-web-type-audit/1.0; +https://github.com/chad/beautiful-web-type)";
const REQUEST_HEADERS = {
  "user-agent": USER_AGENT,
  accept: "text/html,application/xhtml+xml,application/json;q=0.9,*/*;q=0.8"
};
const execFileAsync = promisify(execFile);

type LinkStatus =
  | {
      status: "ok";
      httpStatus: number;
      finalUrl: string;
    }
  | {
      status: "broken";
      httpStatus?: number;
      finalUrl?: string;
      error?: string;
    }
  | {
      status: "error";
      error: string;
    }
  | {
      status: "n/a";
    };

type GitHubTagCandidate = {
  name: string;
};

type UpstreamReleaseStatus =
  | {
      status: "current";
      source: "github-tag" | "discovered-github-tag";
      repo: string;
      version: string;
      date?: string;
      url: string;
      note?: string;
    }
  | {
      status: "newer";
      source: "github-tag" | "discovered-github-tag";
      repo: string;
      version: string;
      date?: string;
      url: string;
      note?: string;
    }
  | {
      status: "unknown";
      source:
        | "no-project-link"
        | "no-github-repo"
        | "github-no-tags"
        | "github-api-error"
        | "project-link-unavailable";
      repo?: string;
      url?: string;
      date?: string;
      note: string;
    };

type AuditRow = {
  typeface: Typeface;
  googleFonts: LinkStatus;
  project: LinkStatus;
  release: UpstreamReleaseStatus;
};

const linkCheckCache = new Map<string, Promise<LinkStatus>>();
const htmlCache = new Map<string, Promise<string | undefined>>();
const discoveredRepoCache = new Map<string, Promise<string | undefined>>();
const githubTagsCache = new Map<string, Promise<GitHubTagCandidate[] | undefined>>();
const githubLatestCommitCache = new Map<
  string,
  Promise<
    | {
        date?: string;
        url: string;
      }
    | undefined
  >
>();

function isSuccessStatus(status: number): boolean {
  return status >= 200 && status < 300;
}

function formatIsoDate(isoDate?: string): string {
  return isoDate ? isoDate.slice(0, 10) : "unknown";
}

function normalizeVersion(value?: string): string {
  const normalized = (value ?? "")
    .trim()
    .toLowerCase()
    .replace(/^v\.?/, "")
    .replace(/\s+/g, "");

  if (/^\d+(?:\.\d+)*$/.test(normalized)) {
    const parts = normalized.split(".");

    while (parts.length > 1 && /^0+$/.test(parts.at(-1) ?? "")) {
      parts.pop();
    }

    return parts
      .map((part, index) => {
        if (index === 0) {
          return String(Number(part));
        }

        return part;
      })
      .join(".");
  }

  return normalized;
}

function stripReleaseQualifier(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/^v\.?/, "")
    .replace(/\s+/g, "")
    .replace(/-(?:vf|var|variable|upright|roman|italic|u|i)$/i, "")
    .replace(/r$/i, "")
    .replace(/[-_]+$/, "");
}

function extractVersionCandidates(value?: string): string[] {
  const raw = (value ?? "").trim();

  if (!raw) {
    return [];
  }

  const candidates = new Set<string>();
  const push = (candidate?: string) => {
    const normalized = normalizeVersion(candidate);

    if (normalized) {
      candidates.add(normalized);
    }
  };

  push(raw);

  for (const part of raw.split(/[\/_]+/)) {
    push(part);

    const stripped = stripReleaseQualifier(part);
    if (stripped !== part) {
      push(stripped);
    }
  }

  return Array.from(candidates);
}

function versionsMatch(recordedVersion?: string, upstreamVersion?: string): boolean {
  const recordedCandidates = extractVersionCandidates(recordedVersion);
  const upstreamCandidates = new Set(extractVersionCandidates(upstreamVersion));

  return recordedCandidates.some((candidate) => upstreamCandidates.has(candidate));
}

function formatVersionLabel(value?: string): string {
  const trimmed = (value ?? "").trim();

  if (!trimmed) {
    return "";
  }

  return /^v/i.test(trimmed) ? trimmed : `v${trimmed}`;
}

function compactUrl(url?: string): string | undefined {
  if (!url) {
    return undefined;
  }

  try {
    const parsed = new URL(url);
    const pathname =
      parsed.pathname === "/" && !parsed.search && !parsed.hash
        ? ""
        : `${parsed.pathname}${parsed.search}${parsed.hash}`;

    return `${parsed.host}${pathname}`.replace(/\/$/, "");
  } catch {
    return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
  }
}

function wrapText(text: string, width = 88, indent = "  "): string[] {
  const normalized = text.trim().replace(/\s+/g, " ");

  if (normalized.length === 0) {
    return [indent.trimEnd()];
  }

  const words = normalized.split(" ");
  const lines: string[] = [];
  let current = indent;

  for (const word of words) {
    if (current.trim().length === 0) {
      current = `${indent}${word}`;
      continue;
    }

    if (`${current} ${word}`.length <= width) {
      current = `${current} ${word}`;
      continue;
    }

    lines.push(current);
    current = `${indent}${word}`;
  }

  lines.push(current);
  return lines;
}

function formatLinkStatus(status: LinkStatus): string {
  if (status.status === "n/a") {
    return "n/a";
  }

  if (status.status === "ok") {
    return `ok (${status.httpStatus})`;
  }

  if (status.status === "broken") {
    return `broken (${status.httpStatus ?? "?"})`;
  }

  return `error (${status.error})`;
}

function normalizeGitHubRepoUrl(url: string): string | undefined {
  try {
    const parsed = new URL(url);

    if (parsed.hostname !== "github.com" && parsed.hostname !== "www.github.com") {
      return undefined;
    }

    const [owner, repo] = parsed.pathname.split("/").filter(Boolean);

    if (!owner || !repo) {
      return undefined;
    }

    return `https://github.com/${owner}/${repo.replace(/\.git$/, "")}`;
  } catch {
    return undefined;
  }
}

function parseGitHubOwnerRepo(repoUrl: string): { owner: string; repo: string } | undefined {
  const normalized = normalizeGitHubRepoUrl(repoUrl);

  if (!normalized) {
    return undefined;
  }

  const match = normalized.match(/^https:\/\/github\.com\/([^/]+)\/([^/]+)$/);
  if (!match) {
    return undefined;
  }

  return {
    owner: match[1],
    repo: match[2]
  };
}

function scoreGitHubCandidate(
  candidate: {
    originalUrl: string;
    repoUrl: string;
  },
  typeface: Typeface
): number {
  const normalizedCandidate = candidate.repoUrl.toLowerCase();
  const normalizedSlug = typeface.slug.toLowerCase();
  const normalizedName = typeface.name.toLowerCase().replace(/[^a-z0-9]+/g, "");
  const compactCandidate = normalizedCandidate.replace(/[^a-z0-9]+/g, "");
  let score = 0;

  const trimmedOriginal = candidate.originalUrl.replace(/\/$/, "");
  const trimmedRepo = candidate.repoUrl.replace(/\/$/, "");
  if (trimmedOriginal === trimmedRepo) {
    score += 20;
  }

  if (normalizedCandidate.includes(normalizedSlug)) {
    score += 6;
  }

  if (compactCandidate.includes(normalizedName)) {
    score += 6;
  }

  for (const token of normalizedSlug.split("-")) {
    if (token.length > 2 && normalizedCandidate.includes(token)) {
      score += 1;
    }
  }

  return score;
}

async function fetchWithFallback(url: string): Promise<Response> {
  const headResponse = await fetch(url, {
    method: "HEAD",
    headers: REQUEST_HEADERS,
    redirect: "follow",
    signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS)
  });

  if (isSuccessStatus(headResponse.status)) {
    return headResponse;
  }

  if (headResponse.status !== 405 && headResponse.status !== 403) {
    return headResponse;
  }

  if (headResponse.body) {
    await headResponse.body.cancel();
  }

  return fetch(url, {
    method: "GET",
    headers: REQUEST_HEADERS,
    redirect: "follow",
    signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS)
  });
}

async function checkLink(url?: string): Promise<LinkStatus> {
  if (!url) {
    return { status: "n/a" };
  }

  const cached = linkCheckCache.get(url);
  if (cached) {
    return cached;
  }

  const promise = (async (): Promise<LinkStatus> => {
    try {
      const response = await fetchWithFallback(url);
      const finalUrl = response.url || url;

      if (response.body) {
        await response.body.cancel();
      }

      if (isSuccessStatus(response.status)) {
        return {
          status: "ok",
          httpStatus: response.status,
          finalUrl
        };
      }

      return {
        status: "broken",
        httpStatus: response.status,
        finalUrl
      };
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      return {
        status: "error",
        error: message
      };
    }
  })();

  linkCheckCache.set(url, promise);
  return promise;
}

async function fetchHtml(url: string): Promise<string | undefined> {
  const cached = htmlCache.get(url);
  if (cached) {
    return cached;
  }

  const promise = (async () => {
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: REQUEST_HEADERS,
        redirect: "follow",
        signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS)
      });

      if (!isSuccessStatus(response.status)) {
        if (response.body) {
          await response.body.cancel();
        }

        return undefined;
      }

      const contentType = response.headers.get("content-type") ?? "";
      if (!/html|xml/i.test(contentType)) {
        if (response.body) {
          await response.body.cancel();
        }

        return undefined;
      }

      return response.text();
    } catch {
      return undefined;
    }
  })();

  htmlCache.set(url, promise);
  return promise;
}

async function discoverGitHubRepo(typeface: Typeface, project: LinkStatus): Promise<string | undefined> {
  const cached = discoveredRepoCache.get(typeface.slug);
  if (cached) {
    return cached;
  }

  const promise = (async () => {
    if (project.status === "ok") {
      const redirectedRepo = normalizeGitHubRepoUrl(project.finalUrl);
      if (redirectedRepo) {
        return redirectedRepo;
      }
    }

    const directProjectRepo = normalizeGitHubRepoUrl(typeface.projectUrl);
    if (directProjectRepo) {
      return directProjectRepo;
    }

    if (project.status !== "ok") {
      return undefined;
    }

    const html = await fetchHtml(typeface.projectUrl);
    if (!html) {
      return undefined;
    }

    const candidates = new Map<
      string,
      {
        originalUrl: string;
        repoUrl: string;
      }
    >();

    for (const match of html.matchAll(/href=["'](https?:\/\/github\.com\/[^"'<> ]+)["']/g)) {
      const originalUrl = match[1];
      const repoUrl = normalizeGitHubRepoUrl(originalUrl);

      if (!repoUrl) {
        continue;
      }

      const existing = candidates.get(repoUrl);
      if (!existing || originalUrl === repoUrl) {
        candidates.set(repoUrl, { originalUrl, repoUrl });
      }
    }

    if (candidates.size === 0) {
      return undefined;
    }

    const rankedCandidates = Array.from(candidates.values()).sort((left, right) => {
      return scoreGitHubCandidate(right, typeface) - scoreGitHubCandidate(left, typeface);
    });

    const bestCandidate = rankedCandidates[0];
    if (!bestCandidate || scoreGitHubCandidate(bestCandidate, typeface) < 4) {
      return undefined;
    }

    return bestCandidate.repoUrl;
  })();

  discoveredRepoCache.set(typeface.slug, promise);
  return promise;
}

function isLikelyStableTag(name: string): boolean {
  return (
    /^v?\.?\d/i.test(name) &&
    !/^[a-f0-9]{7,}$/i.test(name) &&
    !/(alpha|beta|preview|prerelease|rc)/i.test(name)
  );
}

function tagPriority(name: string): number {
  if (/^v?\.?\d/i.test(name)) {
    return 2;
  }

  return /\d/.test(name) ? 1 : 0;
}

function compareTagNames(left: string, right: string): number {
  const leftPriority = tagPriority(left);
  const rightPriority = tagPriority(right);

  if (leftPriority !== rightPriority) {
    return rightPriority - leftPriority;
  }

  const leftNumbers = Array.from(left.matchAll(/\d+/g), (match) => Number(match[0]));
  const rightNumbers = Array.from(right.matchAll(/\d+/g), (match) => Number(match[0]));
  const maxLength = Math.max(leftNumbers.length, rightNumbers.length);

  for (let index = 0; index < maxLength; index += 1) {
    const leftNumber = leftNumbers[index] ?? -1;
    const rightNumber = rightNumbers[index] ?? -1;

    if (leftNumber !== rightNumber) {
      return rightNumber - leftNumber;
    }
  }

  return right.localeCompare(left);
}

async function getLatestGitHubTag(repoUrl: string): Promise<GitHubTagCandidate[] | undefined> {
  const cached = githubTagsCache.get(repoUrl);
  if (cached) {
    return cached;
  }

  const promise = (async () => {
    try {
      const { stdout } = await execFileAsync(
        "git",
        ["ls-remote", "--tags", "--refs", `${repoUrl}.git`],
        {
          cwd: process.cwd(),
          timeout: REQUEST_TIMEOUT_MS,
          maxBuffer: 1024 * 1024
        }
      );

      return stdout
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean)
        .map((line) => line.split(/\s+/)[1] ?? "")
        .filter((ref) => ref.startsWith("refs/tags/"))
        .map((ref) => ref.replace(/^refs\/tags\//, ""))
        .filter((tag) => isLikelyStableTag(tag))
        .sort(compareTagNames)
        .map((name) => ({ name }));
    } catch {
      return undefined;
    }
  })();

  githubTagsCache.set(repoUrl, promise);
  return promise;
}

async function getLatestGitHubCommit(
  repoUrl: string
): Promise<
  | {
      date?: string;
      url: string;
    }
  | undefined
> {
  const cached = githubLatestCommitCache.get(repoUrl);
  if (cached) {
    return cached;
  }

  const promise = (async () => {
    const repo = parseGitHubOwnerRepo(repoUrl);
    if (!repo) {
      return undefined;
    }

    try {
      const response = await fetch(
        `https://api.github.com/repos/${repo.owner}/${repo.repo}/commits?per_page=1`,
        {
          method: "GET",
          headers: {
            "user-agent": USER_AGENT,
            accept: "application/vnd.github+json"
          },
          redirect: "follow",
          signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS)
        }
      );

      if (!isSuccessStatus(response.status)) {
        if (response.body) {
          await response.body.cancel();
        }

        return undefined;
      }

      const payload = (await response.json()) as Array<{
        commit?: {
          committer?: {
            date?: string;
          };
          author?: {
            date?: string;
          };
        };
      }>;
      const latestCommit = payload[0];

      return {
        date: latestCommit?.commit?.committer?.date ?? latestCommit?.commit?.author?.date,
        url: `${repoUrl}/commits`
      };
    } catch {
      return undefined;
    }
  })();

  githubLatestCommitCache.set(repoUrl, promise);
  return promise;
}

function compareVersions(typeface: Typeface, upstreamVersion: string): "current" | "newer" {
  if (versionsMatch(typeface.latestRelease.version, upstreamVersion)) {
    return "current";
  }

  if (!typeface.latestRelease.version.trim() && upstreamVersion.trim()) {
    return "newer";
  }

  return "newer";
}

async function getReleaseStatus(typeface: Typeface, project: LinkStatus): Promise<UpstreamReleaseStatus> {
  if (!typeface.projectUrl) {
    return {
      status: "unknown",
      source: "no-project-link",
      note: "No project link in metadata."
    };
  }

  if (project.status !== "ok") {
    return {
      status: "unknown",
      source: "project-link-unavailable",
      note: "Project page did not resolve, so upstream release could not be checked."
    };
  }

  const repoUrl = await discoverGitHubRepo(typeface, project);
  if (!repoUrl) {
    return {
      status: "unknown",
      source: "no-github-repo",
      note: "No GitHub repo could be identified from the project URL."
    };
  }

  const tags = await getLatestGitHubTag(repoUrl);
  if (!tags) {
    return {
      status: "unknown",
      source: "github-api-error",
      repo: repoUrl,
      note: "GitHub tag lookup failed."
    };
  }

  const latestTag = tags[0];
  if (!latestTag) {
    const latestCommit = await getLatestGitHubCommit(repoUrl);

    return {
      status: "unknown",
      source: "github-no-tags",
      repo: repoUrl,
      url: latestCommit?.url ?? `${repoUrl}/commits`,
      date: latestCommit?.date,
      note: latestCommit?.date
        ? "GitHub repo has no stable version tags; latest repo activity falls back to the newest commit."
        : "GitHub repo has no stable version tags."
    };
  }

  const repoSource: "github-tag" | "discovered-github-tag" =
    normalizeGitHubRepoUrl(typeface.projectUrl) === repoUrl ? "github-tag" : "discovered-github-tag";
  const comparison = compareVersions(typeface, latestTag.name);

  if (comparison === "current") {
    const directMatch =
      normalizeVersion(typeface.latestRelease.version) === normalizeVersion(latestTag.name);

    return {
      status: "current",
      source: repoSource,
      repo: repoUrl,
      version: latestTag.name,
      url: `${repoUrl}/tags`,
      note: directMatch
        ? "Recorded release matches the latest stable GitHub tag."
        : "Recorded release matches a component of the latest stable GitHub tag."
    };
  }

  return {
    status: "newer",
    source: repoSource,
    repo: repoUrl,
    version: latestTag.name,
    url: `${repoUrl}/tags`,
    note: "A newer stable GitHub tag exists than the release recorded in metadata."
  };
}

function formatNewerReleaseStatus(release: UpstreamReleaseStatus): string {
  if (release.status === "newer") {
    return "yes";
  }

  if (release.status === "current") {
    return "no";
  }

  return "unknown";
}

function buildNotes(row: AuditRow): string[] {
  const notes: string[] = [];

  if (row.googleFonts.status === "ok" && row.googleFonts.finalUrl !== row.typeface.gFontsUrl) {
    notes.push(`Google Fonts redirects to ${compactUrl(row.googleFonts.finalUrl)}`);
  }

  if (row.project.status === "ok" && row.project.finalUrl !== row.typeface.projectUrl) {
    notes.push(`Project URL redirects to ${compactUrl(row.project.finalUrl)}`);
  }

  if (row.release.status === "unknown") {
    if (row.release.repo) {
      notes.push(`Repo: ${compactUrl(row.release.repo)}`);
    }
    notes.push(row.release.note);
  } else {
    notes.push(`Repo: ${compactUrl(row.release.repo)}`);
    if (row.release.note) {
      notes.push(row.release.note);
    }
  }

  return notes;
}

function buildSummaryBlock(title: string, names: string[]): string[] {
  const lines = [`- ${title}: ${names.length}`];

  if (names.length === 0) {
    lines.push("  none");
    return lines;
  }

  return [...lines, ...wrapText(names.join(", "), 88, "  ")];
}

function buildTypefaceSection(row: AuditRow): string[] {
  const lines = [`## ${row.typeface.name}`];
  const googleUrl = compactUrl(row.typeface.gFontsUrl);
  const googleResolved =
    row.googleFonts.status === "ok" ? compactUrl(row.googleFonts.finalUrl) : undefined;
  const projectUrl = compactUrl(row.typeface.projectUrl);
  const projectResolved = row.project.status === "ok" ? compactUrl(row.project.finalUrl) : undefined;
  const notes = buildNotes(row);

  lines.push(`- google-fonts: ${formatLinkStatus(row.googleFonts)}`);
  if (googleUrl) {
    lines.push(`  url: ${googleUrl}`);
  }
  if (googleResolved && googleResolved !== googleUrl) {
    lines.push(`  resolved: ${googleResolved}`);
  }

  lines.push(`- project-link: ${formatLinkStatus(row.project)}`);
  if (projectUrl) {
    lines.push(`  url: ${projectUrl}`);
  }
  if (projectResolved && projectResolved !== projectUrl) {
    lines.push(`  resolved: ${projectResolved}`);
  }

  lines.push(
    `- recorded-release: ${formatVersionLabel(row.typeface.latestRelease.version) || "(blank)"} (${row.typeface.latestRelease.date})`
  );

  if (row.release.status === "unknown") {
    if (row.release.source === "github-no-tags") {
      lines.push("- upstream-release: unknown (no stable tags)");

      if (row.release.date) {
        lines.push(`  latest-commit: ${formatIsoDate(row.release.date)}`);
      }

      if (row.release.url) {
        lines.push(`  source: ${compactUrl(row.release.url)}`);
      }
    } else {
      lines.push("- upstream-release: unknown");

      if (row.release.url) {
        lines.push(`  source: ${compactUrl(row.release.url)}`);
      }
    }
  } else {
    lines.push(`- upstream-release: ${formatVersionLabel(row.release.version)} (${formatIsoDate(row.release.date)})`);
    lines.push(`  source: ${compactUrl(row.release.url)}`);
  }

  lines.push(`- newer-release: ${formatNewerReleaseStatus(row.release)}`);

  if (notes.length > 0) {
    lines.push("- notes:");
    for (const note of notes) {
      lines.push(...wrapText(note, 88, "  "));
    }
  }

  return lines;
}

function buildReport(rows: AuditRow[]): string {
  const googleOk = rows.filter((row) => row.googleFonts.status === "ok").length;
  const googleBroken = rows.filter((row) => row.googleFonts.status === "broken").length;
  const googleError = rows.filter((row) => row.googleFonts.status === "error").length;
  const googleMissing = rows.filter((row) => row.googleFonts.status === "n/a").length;
  const projectOk = rows.filter((row) => row.project.status === "ok").length;
  const projectBroken = rows.filter((row) => row.project.status === "broken").length;
  const projectError = rows.filter((row) => row.project.status === "error").length;
  const newerRelease = rows.filter((row) => row.release.status === "newer").length;
  const currentRelease = rows.filter((row) => row.release.status === "current").length;
  const unknownRelease = rows.filter((row) => row.release.status === "unknown").length;
  const generatedAt = new Date().toISOString();
  const brokenGoogleNames = rows
    .filter((row) => row.googleFonts.status === "broken" || row.googleFonts.status === "error")
    .map((row) => row.typeface.name);
  const projectProblemNames = rows
    .filter((row) => row.project.status === "broken" || row.project.status === "error")
    .map((row) => row.typeface.name);
  const newerReleaseNames = rows
    .filter((row) => row.release.status === "newer")
    .map((row) => row.typeface.name);
  const unknownNoStableTagNames = rows
    .filter((row) => row.release.status === "unknown" && row.release.source === "github-no-tags")
    .map((row) => row.typeface.name);
  const unknownNoRepoNames = rows
    .filter((row) => row.release.status === "unknown" && row.release.source === "no-github-repo")
    .map((row) => row.typeface.name);
  const unknownProjectUnavailableNames = rows
    .filter((row) => row.release.status === "unknown" && row.release.source === "project-link-unavailable")
    .map((row) => row.typeface.name);
  const unknownApiErrorNames = rows
    .filter((row) => row.release.status === "unknown" && row.release.source === "github-api-error")
    .map((row) => row.typeface.name);
  const unknownNoProjectLinkNames = rows
    .filter((row) => row.release.status === "unknown" && row.release.source === "no-project-link")
    .map((row) => row.typeface.name);

  const lines = [
    "# Typeface Audit",
    "",
    `Generated: ${generatedAt}`,
    "",
    "Method:",
    "- Google Fonts and project URLs are checked with live HTTP requests that follow redirects.",
    "- Upstream release checks use `git ls-remote` against the latest stable GitHub tag when the project URL is a GitHub repo or when a GitHub repo can be discovered from the project page.",
    "- If no GitHub repo or stable GitHub tag can be identified, the newer-release result is marked `unknown`.",
    "",
    "Summary:",
    `- Total typefaces: ${rows.length}`,
    `- Google Fonts links: ${googleOk} ok, ${googleBroken} broken, ${googleError} error, ${googleMissing} n/a`,
    `- Project links: ${projectOk} ok, ${projectBroken} broken, ${projectError} error`,
    `- Newer upstream release: ${newerRelease} yes, ${currentRelease} no, ${unknownRelease} unknown`,
    "",
    "Attention:",
    ...buildSummaryBlock("Broken Google Fonts links", brokenGoogleNames),
    ...buildSummaryBlock("Problem project links", projectProblemNames),
    ...buildSummaryBlock("Typefaces with newer upstream releases", newerReleaseNames),
    ...buildSummaryBlock(
      "Unknown upstream release: GitHub repo has no stable tags",
      unknownNoStableTagNames
    ),
    ...buildSummaryBlock("Unknown upstream release: no GitHub repo identified", unknownNoRepoNames),
    ...buildSummaryBlock(
      "Unknown upstream release: project link unavailable",
      unknownProjectUnavailableNames
    ),
    ...buildSummaryBlock("Unknown upstream release: GitHub lookup failed", unknownApiErrorNames),
    ...buildSummaryBlock("Unknown upstream release: no project link", unknownNoProjectLinkNames),
    "",
    "Detailed Results:",
    ""
  ];

  for (const row of rows) {
    lines.push(...buildTypefaceSection(row), "");
  }

  return `${lines.join("\n")}\n`;
}

async function auditTypeface(typeface: Typeface): Promise<AuditRow> {
  const googleFonts = await checkLink(typeface.gFontsUrl);
  const project = await checkLink(typeface.projectUrl);
  const release = await getReleaseStatus(typeface, project);

  return {
    typeface,
    googleFonts,
    project,
    release
  };
}

async function main() {
  const typefaces = getAllTypefaces().sort((left, right) => left.name.localeCompare(right.name));
  const rows: AuditRow[] = [];

  for (const typeface of typefaces) {
    rows.push(await auditTypeface(typeface));
  }

  await mkdir(path.dirname(OUTPUT_PATH), { recursive: true });
  await writeFile(OUTPUT_PATH, buildReport(rows), "utf8");

  console.log(`Wrote ${rows.length} audited typefaces to ${OUTPUT_PATH}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
