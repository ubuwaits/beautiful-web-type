import fs from "node:fs";
import path from "node:path";

import matter from "gray-matter";
import { cache } from "react";

import { getReservedTopLevelSlugs } from "../routes";
import type {
  CategoryName,
  CategorySlug,
  ContentGraph,
  GlyphPage,
  Pairing,
  Sample,
  TextData,
  Typeface,
  Weight
} from "./types";

const ROOT_DIR = process.cwd();
const TYPEFACES_DIR = path.join(ROOT_DIR, "_typefaces");
const GLYPHS_DIR = path.join(ROOT_DIR, "_glyphs");
const SAMPLES_DIR = path.join(ROOT_DIR, "_samples");
const PAIRINGS_DIR = path.join(ROOT_DIR, "_pairings");

const CATEGORY_SLUGS: Record<CategoryName, CategorySlug> = {
  Display: "display",
  Monospaced: "monospaced",
  "Sans-Serif": "sans-serif",
  Serif: "serif"
};

const RESERVED_TOP_LEVEL_SLUGS = getReservedTopLevelSlugs();

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

function readFrontMatterFile(filePath: string): {
  data: Record<string, unknown>;
  content: string;
} {
  const fileContents = fs.readFileSync(filePath, "utf8");
  const parsed = matter(fileContents);

  return {
    data: parsed.data as Record<string, unknown>,
    content: parsed.content.trim()
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

function maybeString(value: unknown): string | undefined {
  return typeof value === "string" && value.length > 0 ? value : undefined;
}

function assertStringOrNumber(
  value: unknown,
  key: string,
  filePath: string
): string | number {
  if (typeof value !== "string" && typeof value !== "number") {
    throw new Error(`Expected "${key}" to be a string or number in ${filePath}`);
  }

  return value;
}

function maybeBoolean(value: unknown): boolean | undefined {
  return typeof value === "boolean" ? value : undefined;
}

function assertStringArray(value: unknown, key: string, filePath: string): string[] {
  if (!Array.isArray(value) || value.some((entry) => typeof entry !== "string")) {
    throw new Error(`Expected "${key}" to be a string array in ${filePath}`);
  }

  return value as string[];
}

function assertWeights(value: unknown, filePath: string): Weight[] {
  if (!Array.isArray(value)) {
    throw new Error(`Expected "weights" to be an array in ${filePath}`);
  }

  return value.map((entry) => {
    if (
      typeof entry !== "object" ||
      entry === null ||
      typeof (entry as { name?: unknown }).name !== "string" ||
      typeof (entry as { weight?: unknown }).weight !== "number"
    ) {
      throw new Error(`Invalid weight entry in ${filePath}`);
    }

    return {
      name: (entry as { name: string }).name,
      weight: (entry as { weight: number }).weight
    };
  });
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

function typefaceSlugFromFile(filePath: string): string {
  return path.basename(filePath, path.extname(filePath));
}

function categoryToSlug(category: CategoryName): CategorySlug {
  return CATEGORY_SLUGS[category];
}

function sanitizeFontFile(fontFile: string): string {
  return fontFile.replace(/^['"]|['"]$/g, "");
}

function sortByDateDesc<T extends { dateAdded: string }>(entries: readonly T[]): T[] {
  return [...entries].sort((left, right) =>
    right.dateAdded.localeCompare(left.dateAdded)
  );
}

function loadTypefaces(): Typeface[] {
  return listFilesRecursively(TYPEFACES_DIR, ".html").map((filePath) => {
    const { data, content } = readFrontMatterFile(filePath);
    const category = assertString(data.category, "category", filePath) as CategoryName;

    if (!(category in CATEGORY_SLUGS)) {
      throw new Error(`Unknown category "${category}" in ${filePath}`);
    }

    const creator = data.creator as { name?: unknown; url?: unknown } | undefined;
    const latestRelease = data.latest_release as
      | { version?: unknown; date?: unknown }
      | undefined;

    if (!creator || typeof creator !== "object") {
      throw new Error(`Expected "creator" object in ${filePath}`);
    }

    if (!latestRelease || typeof latestRelease !== "object") {
      throw new Error(`Expected "latest_release" object in ${filePath}`);
    }

    const slug = typefaceSlugFromFile(filePath);

    return {
      slug,
      name: assertString(data.name, "name", filePath),
      dateAdded: toDateString(data.date_added, "date_added", filePath),
      category,
      categorySlug: categoryToSlug(category),
      styles: assertStringOrNumber(data.styles, "styles", filePath),
      weights: assertWeights(data.weights, filePath),
      latestRelease: {
        version: assertStringValue(latestRelease.version, "latest_release.version", filePath),
        date: assertString(latestRelease.date, "latest_release.date", filePath)
      },
      projectUrl: assertString(data.project_url, "project_url", filePath),
      gFontsUrl: maybeString(data.g_fonts_url),
      creator: {
        name: assertString(creator.name, "creator.name", filePath),
        url: assertString(creator.url, "creator.url", filePath)
      },
      description: assertString(data.description, "description", filePath),
      italic: maybeBoolean(data.italic),
      smallcap: maybeBoolean(data.smallcap),
      familyFaces: Array.isArray(data.family_faces)
        ? assertStringArray(data.family_faces, "family_faces", filePath)
        : undefined,
      comparisonFaces: Array.isArray(data.comparison_faces)
        ? assertStringArray(data.comparison_faces, "comparison_faces", filePath)
        : undefined,
      bodyHtml: content,
      bodyClass: `${categoryToSlug(category)} detail`
    };
  });
}

function loadGlyphPages(typefaceByName: Map<string, Typeface>): GlyphPage[] {
  return listFilesRecursively(GLYPHS_DIR, ".html").map((filePath) => {
    const { data } = readFrontMatterFile(filePath);
    const typefaceName = assertString(data.typeface, "typeface", filePath);
    const typeface = typefaceByName.get(typefaceName);

    if (!typeface) {
      throw new Error(
        `Glyph page in ${filePath} references missing typeface "${typefaceName}"`
      );
    }

    return {
      slug: typefaceSlugFromFile(filePath),
      typefaceName,
      fontFile: sanitizeFontFile(assertString(data.font_file, "font_file", filePath)),
      bodyClass: `${typeface.categorySlug} glyphs`
    };
  });
}

function loadSamples(): Sample[] {
  return listFilesRecursively(SAMPLES_DIR, ".html").map((filePath) => {
    const { data, content } = readFrontMatterFile(filePath);

    return {
      slug: typefaceSlugFromFile(filePath),
      typefaceName: assertString(data.typeface, "typeface", filePath),
      sampleShade: maybeString(data.sample_shade),
      bodyHtml: content
    };
  });
}

function loadPairings(): Pairing[] {
  return listFilesRecursively(PAIRINGS_DIR, ".html").map((filePath) => {
    const { data, content } = readFrontMatterFile(filePath);

    return {
      slug: typefaceSlugFromFile(filePath),
      name: assertString(data.name, "name", filePath),
      dateAdded: toDateString(data.date_added, "date_added", filePath),
      typefaces: assertStringArray(data.typefaces, "typefaces", filePath),
      sampleShade: maybeString(data.sample_shade),
      bodyHtml: content
    };
  });
}

function loadTextData(): TextData {
  const textDataPath = path.join(ROOT_DIR, "_data", "text.yml");
  const rawValue = fs.readFileSync(textDataPath, "utf8");
  const parsed = matter(`---\n${rawValue}\n---`);
  const data = parsed.data as Record<string, unknown>;

  return {
    words: assertStringArray(data.words, "words", textDataPath),
    headlines: assertStringArray(data.headlines, "headlines", textDataPath),
    paragraphs: assertStringArray(data.paragraphs, "paragraphs", textDataPath)
  };
}

function validateContentGraph(graph: ContentGraph): void {
  for (const typeface of graph.typefaces) {
    if (RESERVED_TOP_LEVEL_SLUGS.has(typeface.slug)) {
      throw new Error(`Typeface slug "${typeface.slug}" collides with a reserved route`);
    }

    if (!graph.sampleByTypefaceName.has(typeface.name)) {
      throw new Error(`Missing sample for typeface "${typeface.name}"`);
    }

    if (!graph.glyphPageByTypefaceName.has(typeface.name)) {
      throw new Error(`Missing glyph page for typeface "${typeface.name}"`);
    }

    for (const relatedName of typeface.familyFaces ?? []) {
      if (!graph.typefaceByName.has(relatedName)) {
        throw new Error(`Missing family face "${relatedName}" referenced by "${typeface.name}"`);
      }
    }

    for (const relatedName of typeface.comparisonFaces ?? []) {
      if (!graph.typefaceByName.has(relatedName)) {
        throw new Error(
          `Missing comparison face "${relatedName}" referenced by "${typeface.name}"`
        );
      }
    }
  }

  for (const sample of graph.samples) {
    if (!graph.typefaceByName.has(sample.typefaceName)) {
      throw new Error(
        `Sample "${sample.slug}" references missing typeface "${sample.typefaceName}"`
      );
    }
  }

  for (const pairing of graph.pairings) {
    for (const typefaceName of pairing.typefaces) {
      if (!graph.typefaceByName.has(typefaceName)) {
        throw new Error(`Pairing "${pairing.name}" references missing typeface "${typefaceName}"`);
      }
    }
  }
}

function buildContentGraph(): ContentGraph {
  const typefaces = loadTypefaces();
  const typefaceBySlug = new Map(typefaces.map((entry) => [entry.slug, entry]));
  const typefaceByName = new Map(typefaces.map((entry) => [entry.name, entry]));
  const glyphPages = loadGlyphPages(typefaceByName);
  const glyphPageBySlug = new Map(glyphPages.map((entry) => [entry.slug, entry]));
  const glyphPageByTypefaceName = new Map(
    glyphPages.map((entry) => [entry.typefaceName, entry])
  );
  const samples = loadSamples();
  const sampleByTypefaceName = new Map(samples.map((entry) => [entry.typefaceName, entry]));
  const pairings = loadPairings();
  const pairingsByTypefaceName = new Map<string, Pairing[]>();

  for (const pairing of pairings) {
    for (const typefaceName of pairing.typefaces) {
      const currentEntries = pairingsByTypefaceName.get(typefaceName) ?? [];
      currentEntries.push(pairing);
      pairingsByTypefaceName.set(typefaceName, currentEntries);
    }
  }

  const graph: ContentGraph = {
    typefaces,
    typefaceBySlug,
    typefaceByName,
    glyphPages,
    glyphPageBySlug,
    glyphPageByTypefaceName,
    samples,
    sampleByTypefaceName,
    pairings,
    pairingsByTypefaceName,
    latestTypefaces: sortByDateDesc(typefaces),
    latestPairings: sortByDateDesc(pairings),
    text: loadTextData()
  };

  validateContentGraph(graph);

  return graph;
}

const getCachedContentGraph = cache(buildContentGraph);

export function getContentGraph(): ContentGraph {
  return getCachedContentGraph();
}
