import fs from "node:fs";
import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";

import { dump, load } from "js-yaml";

const ROOT_DIR = process.cwd();
const CONTENT_DIR = path.join(ROOT_DIR, "content");
const LEGACY_DATA_DIR = path.join(ROOT_DIR, "_data");
const LEGACY_GLYPHS_DIR = path.join(ROOT_DIR, "_glyphs");
const LEGACY_PAIRINGS_DIR = path.join(ROOT_DIR, "_pairings");
const LEGACY_SAMPLES_DIR = path.join(ROOT_DIR, "_samples");
const LEGACY_TYPEFACES_DIR = path.join(ROOT_DIR, "_typefaces");

const CATEGORY_SLUGS = {
  Display: "display",
  Monospaced: "monospaced",
  "Sans-Serif": "sans-serif",
  Serif: "serif"
} as const;

type CategoryName = keyof typeof CATEGORY_SLUGS;
type CategorySlug = (typeof CATEGORY_SLUGS)[CategoryName];
type SampleShade = "light" | "dark";

function listFilesRecursively(directory: string, extension: string): string[] {
  const entries = fs
    .readdirSync(directory, { withFileTypes: true })
    .sort((left, right) => left.name.localeCompare(right.name));

  return entries.flatMap((entry) => {
    const entryPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      return listFilesRecursively(entryPath, extension);
    }

    return entry.name.endsWith(extension) ? [entryPath] : [];
  });
}

function parseYamlText(rawValue: string, filePath: string): Record<string, unknown> {
  const parsed = load(rawValue);

  if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
    throw new Error(`Expected YAML object in ${filePath}`);
  }

  return parsed as Record<string, unknown>;
}

function parseFrontMatterFile(filePath: string): {
  data: Record<string, unknown>;
  content: string;
} {
  const fileContents = fs.readFileSync(filePath, "utf8");
  const match = fileContents.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);

  if (!match) {
    throw new Error(`Expected front matter in ${filePath}`);
  }

  return {
    data: parseYamlText(match[1], filePath),
    content: match[2].trim()
  };
}

function assertString(value: unknown, key: string, filePath: string): string {
  if (typeof value !== "string" || value.length === 0) {
    throw new Error(`Expected "${key}" to be a non-empty string in ${filePath}`);
  }

  return value;
}

function assertStringValue(value: unknown, key: string, filePath: string): string {
  if (typeof value !== "string") {
    throw new Error(`Expected "${key}" to be a string in ${filePath}`);
  }

  return value;
}

function assertCategory(value: unknown, filePath: string): CategoryName {
  if (typeof value !== "string" || !(value in CATEGORY_SLUGS)) {
    throw new Error(`Expected "category" to be a valid category in ${filePath}`);
  }

  return value as CategoryName;
}

function assertStringArray(value: unknown, key: string, filePath: string): string[] {
  if (!Array.isArray(value) || value.some((entry) => typeof entry !== "string")) {
    throw new Error(`Expected "${key}" to be a string array in ${filePath}`);
  }

  return value as string[];
}

function maybeBoolean(value: unknown): boolean | undefined {
  return typeof value === "boolean" ? value : undefined;
}

function maybeString(value: unknown): string | undefined {
  return typeof value === "string" && value.length > 0 ? value : undefined;
}

function maybeSampleShade(value: unknown, filePath: string): SampleShade | undefined {
  if (value === undefined || value === null || value === "") {
    return undefined;
  }

  if (value === "light" || value === "dark") {
    return value;
  }

  if (value === "h1ght") {
    return "light";
  }

  throw new Error(`Expected "sample_shade" to be "light" or "dark" in ${filePath}`);
}

function toDateString(value: unknown, key: string, filePath: string): string {
  if (value instanceof Date) {
    return value.toISOString().slice(0, 10);
  }

  if (typeof value === "string") {
    const parsed = new Date(value);

    if (!Number.isNaN(parsed.getTime())) {
      return parsed.toISOString().slice(0, 10);
    }
  }

  throw new Error(`Expected "${key}" to be a date-like value in ${filePath}`);
}

function sanitizeFontFile(fontFile: string): string {
  return fontFile.replace(/^['"]|['"]$/g, "");
}

function compactObject<T extends Record<string, unknown>>(value: T): T {
  return Object.fromEntries(
    Object.entries(value).filter(([, entry]) => entry !== undefined)
  ) as T;
}

function serializeYaml(value: Record<string, unknown>): string {
  return dump(value, {
    lineWidth: -1,
    noRefs: true,
    sortKeys: false
  }).trimEnd();
}

async function writeYamlFile(filePath: string, value: Record<string, unknown>) {
  await writeFile(filePath, `${serializeYaml(value)}\n`, "utf8");
}

async function writeHtmlFile(filePath: string, html: string) {
  const fileContents = html.length > 0 ? `${html}\n` : "";
  await writeFile(filePath, fileContents, "utf8");
}

function categoryToSlug(category: CategoryName): CategorySlug {
  return CATEGORY_SLUGS[category];
}

async function prepareContentDirectories() {
  await mkdir(CONTENT_DIR, { recursive: true });

  for (const directory of ["site", "pairings", "typefaces"]) {
    await rm(path.join(CONTENT_DIR, directory), { recursive: true, force: true });
    await mkdir(path.join(CONTENT_DIR, directory), { recursive: true });
  }
}

async function migrateTextData() {
  const legacyTextPath = path.join(LEGACY_DATA_DIR, "text.yml");
  const nextTextPath = path.join(CONTENT_DIR, "site", "text.yml");
  const parsed = parseYamlText(await readFile(legacyTextPath, "utf8"), legacyTextPath);

  await writeYamlFile(nextTextPath, {
    specimen: {
      primary: "Signal & Shape"
    },
    words: assertStringArray(parsed.words, "words", legacyTextPath),
    headlines: assertStringArray(parsed.headlines, "headlines", legacyTextPath),
    paragraphs: assertStringArray(parsed.paragraphs, "paragraphs", legacyTextPath)
  });
}

async function migrateTypefaceBundles() {
  const typefaceFiles = listFilesRecursively(LEGACY_TYPEFACES_DIR, ".html");

  for (const typefaceFile of typefaceFiles) {
    const slug = path.basename(typefaceFile, ".html");
    const { data, content } = parseFrontMatterFile(typefaceFile);
    const category = assertCategory(data.category, typefaceFile);
    const categorySlug = categoryToSlug(category);
    const sampleFile = path.join(LEGACY_SAMPLES_DIR, categorySlug, `${slug}.html`);
    const glyphFile = path.join(LEGACY_GLYPHS_DIR, categorySlug, `${slug}.html`);

    if (!fs.existsSync(sampleFile)) {
      throw new Error(`Missing legacy sample file for "${slug}" at ${sampleFile}`);
    }

    if (!fs.existsSync(glyphFile)) {
      throw new Error(`Missing legacy glyph file for "${slug}" at ${glyphFile}`);
    }

    const sample = parseFrontMatterFile(sampleFile);
    const glyphs = parseFrontMatterFile(glyphFile);

    const name = assertString(data.name, "name", typefaceFile);
    const sampleTypefaceName = assertString(sample.data.typeface, "typeface", sampleFile);
    const glyphTypefaceName = assertString(glyphs.data.typeface, "typeface", glyphFile);

    if (sampleTypefaceName !== name) {
      throw new Error(
        `Legacy sample "${sampleFile}" references "${sampleTypefaceName}" instead of "${name}"`
      );
    }

    if (glyphTypefaceName !== name) {
      throw new Error(
        `Legacy glyph file "${glyphFile}" references "${glyphTypefaceName}" instead of "${name}"`
      );
    }

    const nextTypefaceDir = path.join(CONTENT_DIR, "typefaces", slug);
    const creator = data.creator as { name?: unknown; url?: unknown } | undefined;
    const latestRelease = data.latest_release as
      | { version?: unknown; date?: unknown }
      | undefined;

    if (!creator || typeof creator !== "object") {
      throw new Error(`Expected "creator" object in ${typefaceFile}`);
    }

    if (!latestRelease || typeof latestRelease !== "object") {
      throw new Error(`Expected "latest_release" object in ${typefaceFile}`);
    }

    await mkdir(nextTypefaceDir, { recursive: true });
    await writeYamlFile(
      path.join(nextTypefaceDir, "meta.yml"),
      compactObject({
        name,
        dateAdded: toDateString(data.date_added, "date_added", typefaceFile),
        category,
        styles: data.styles,
        italic: maybeBoolean(data.italic),
        smallcap: maybeBoolean(data.smallcap),
        sampleShade: maybeSampleShade(sample.data.sample_shade, sampleFile),
        weights: data.weights,
        latestRelease: {
          version: assertStringValue(
            latestRelease.version,
            "latest_release.version",
            typefaceFile
          ),
          date: assertString(latestRelease.date, "latest_release.date", typefaceFile)
        },
        projectUrl: assertString(data.project_url, "project_url", typefaceFile),
        gFontsUrl: maybeString(data.g_fonts_url),
        creator: {
          name: assertString(creator.name, "creator.name", typefaceFile),
          url: assertString(creator.url, "creator.url", typefaceFile)
        },
        description: assertString(data.description, "description", typefaceFile),
        familyFaces: Array.isArray(data.family_faces)
          ? assertStringArray(data.family_faces, "family_faces", typefaceFile)
          : undefined,
        comparisonFaces: Array.isArray(data.comparison_faces)
          ? assertStringArray(data.comparison_faces, "comparison_faces", typefaceFile)
          : undefined
      })
    );
    await writeHtmlFile(path.join(nextTypefaceDir, "detail.html"), content);
    await writeHtmlFile(path.join(nextTypefaceDir, "sample.html"), sample.content);
    await writeYamlFile(path.join(nextTypefaceDir, "glyphs.yml"), {
      fontFile: sanitizeFontFile(assertString(glyphs.data.font_file, "font_file", glyphFile))
    });
  }
}

async function migratePairingBundles() {
  const pairingFiles = listFilesRecursively(LEGACY_PAIRINGS_DIR, ".html");

  for (const pairingFile of pairingFiles) {
    const slug = path.basename(pairingFile, ".html");
    const { data, content } = parseFrontMatterFile(pairingFile);
    const nextPairingDir = path.join(CONTENT_DIR, "pairings", slug);

    await mkdir(nextPairingDir, { recursive: true });
    await writeYamlFile(
      path.join(nextPairingDir, "meta.yml"),
      compactObject({
        name: assertString(data.name, "name", pairingFile),
        dateAdded: toDateString(data.date_added, "date_added", pairingFile),
        typefaces: assertStringArray(data.typefaces, "typefaces", pairingFile),
        sampleShade: maybeSampleShade(data.sample_shade, pairingFile)
      })
    );
    await writeHtmlFile(path.join(nextPairingDir, "sample.html"), content);
  }
}

async function removeLegacyDirectories() {
  for (const directory of [
    LEGACY_DATA_DIR,
    LEGACY_GLYPHS_DIR,
    LEGACY_PAIRINGS_DIR,
    LEGACY_SAMPLES_DIR,
    LEGACY_TYPEFACES_DIR
  ]) {
    await rm(directory, { recursive: true, force: true });
  }
}

async function main() {
  const shouldDeleteLegacy = process.argv.includes("--delete-legacy");

  await prepareContentDirectories();
  await Promise.all([migrateTextData(), migrateTypefaceBundles(), migratePairingBundles()]);

  if (shouldDeleteLegacy) {
    await removeLegacyDirectories();
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
