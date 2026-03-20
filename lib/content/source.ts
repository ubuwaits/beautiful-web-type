import fs from "node:fs";
import path from "node:path";

import { load } from "js-yaml";

import type {
  CategoryName,
  CategorySlug,
  GlyphPage,
  Pairing,
  Sample,
  SampleShade,
  TextData,
  Typeface,
  Weight
} from "./types";

export const DEFAULT_CONTENT_DIR = path.join(process.cwd(), "content");

type ContentSource = {
  typefaces: Typeface[];
  glyphPages: GlyphPage[];
  samples: Sample[];
  pairings: Pairing[];
  text: TextData;
};

const CATEGORY_SLUGS: Record<CategoryName, CategorySlug> = {
  Display: "display",
  Monospaced: "monospaced",
  "Sans-Serif": "sans-serif",
  Serif: "serif"
};

function listDirectories(directory: string): string[] {
  if (!fs.existsSync(directory)) {
    throw new Error(`Expected directory to exist: ${directory}`);
  }

  return fs
    .readdirSync(directory, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => path.join(directory, entry.name))
    .sort((left, right) => path.basename(left).localeCompare(path.basename(right)));
}

function readRequiredTextFile(filePath: string): string {
  if (!fs.existsSync(filePath)) {
    throw new Error(`Expected file to exist: ${filePath}`);
  }

  return fs.readFileSync(filePath, "utf8").trim();
}

function readYamlFile(filePath: string): Record<string, unknown> {
  if (!fs.existsSync(filePath)) {
    throw new Error(`Expected file to exist: ${filePath}`);
  }

  const parsed = load(fs.readFileSync(filePath, "utf8"));

  if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
    throw new Error(`Expected YAML object in ${filePath}`);
  }

  return parsed as Record<string, unknown>;
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

function assertObject(
  value: unknown,
  key: string,
  filePath: string
): Record<string, unknown> {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    throw new Error(`Expected "${key}" to be an object in ${filePath}`);
  }

  return value as Record<string, unknown>;
}

function assertCategory(value: unknown, filePath: string): CategoryName {
  if (typeof value !== "string" || !(value in CATEGORY_SLUGS)) {
    throw new Error(`Expected "category" to be a valid category in ${filePath}`);
  }

  return value as CategoryName;
}

function maybeString(value: unknown): string | undefined {
  return typeof value === "string" && value.length > 0 ? value : undefined;
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

function assertSampleShade(
  value: unknown,
  key: string,
  filePath: string
): SampleShade | undefined {
  if (value === undefined || value === null) {
    return undefined;
  }

  if (value === "light" || value === "dark") {
    return value;
  }

  throw new Error(`Expected "${key}" to be "light" or "dark" in ${filePath}`);
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

function categoryToSlug(category: CategoryName): CategorySlug {
  return CATEGORY_SLUGS[category];
}

function loadTypefaceBundles(contentDir: string): {
  typefaces: Typeface[];
  glyphPages: GlyphPage[];
  samples: Sample[];
} {
  const typefaces: Typeface[] = [];
  const glyphPages: GlyphPage[] = [];
  const samples: Sample[] = [];
  const typefaceDirectories = listDirectories(path.join(contentDir, "typefaces"));

  for (const directory of typefaceDirectories) {
    const slug = path.basename(directory);
    const metaPath = path.join(directory, "meta.yml");
    const detailPath = path.join(directory, "detail.html");
    const samplePath = path.join(directory, "sample.html");
    const glyphsPath = path.join(directory, "glyphs.yml");
    const meta = readYamlFile(metaPath);
    const glyphs = readYamlFile(glyphsPath);
    const latestRelease = assertObject(meta.latestRelease, "latestRelease", metaPath);
    const creator = assertObject(meta.creator, "creator", metaPath);
    const category = assertCategory(meta.category, metaPath);
    const typefaceName = assertString(meta.name, "name", metaPath);

    typefaces.push({
      slug,
      name: typefaceName,
      dateAdded: toDateString(meta.dateAdded, "dateAdded", metaPath),
      category,
      categorySlug: categoryToSlug(category),
      styles: assertStringOrNumber(meta.styles, "styles", metaPath),
      weights: assertWeights(meta.weights, metaPath),
      latestRelease: {
        version: assertStringValue(latestRelease.version, "latestRelease.version", metaPath),
        date: assertString(latestRelease.date, "latestRelease.date", metaPath)
      },
      projectUrl: assertString(meta.projectUrl, "projectUrl", metaPath),
      gFontsUrl: maybeString(meta.gFontsUrl),
      creator: {
        name: assertString(creator.name, "creator.name", metaPath),
        url: assertString(creator.url, "creator.url", metaPath)
      },
      description: assertString(meta.description, "description", metaPath),
      italic: maybeBoolean(meta.italic),
      smallcap: maybeBoolean(meta.smallcap),
      familyFaces: Array.isArray(meta.familyFaces)
        ? assertStringArray(meta.familyFaces, "familyFaces", metaPath)
        : undefined,
      comparisonFaces: Array.isArray(meta.comparisonFaces)
        ? assertStringArray(meta.comparisonFaces, "comparisonFaces", metaPath)
        : undefined,
      bodyHtml: readRequiredTextFile(detailPath),
      bodyClass: `${categoryToSlug(category)} detail`
    });

    glyphPages.push({
      slug,
      typefaceName,
      fontFile: assertString(glyphs.fontFile, "fontFile", glyphsPath),
      bodyClass: `${categoryToSlug(category)} glyphs`
    });

    samples.push({
      slug,
      typefaceName,
      sampleShade: assertSampleShade(meta.sampleShade, "sampleShade", metaPath),
      bodyHtml: readRequiredTextFile(samplePath)
    });
  }

  return { typefaces, glyphPages, samples };
}

function loadPairings(contentDir: string): Pairing[] {
  const pairings: Pairing[] = [];
  const pairingDirectories = listDirectories(path.join(contentDir, "pairings"));

  for (const directory of pairingDirectories) {
    const slug = path.basename(directory);
    const metaPath = path.join(directory, "meta.yml");
    const samplePath = path.join(directory, "sample.html");
    const meta = readYamlFile(metaPath);

    pairings.push({
      slug,
      name: assertString(meta.name, "name", metaPath),
      dateAdded: toDateString(meta.dateAdded, "dateAdded", metaPath),
      typefaces: assertStringArray(meta.typefaces, "typefaces", metaPath),
      sampleShade: assertSampleShade(meta.sampleShade, "sampleShade", metaPath),
      bodyHtml: readRequiredTextFile(samplePath)
    });
  }

  return pairings;
}

function loadTextData(contentDir: string): TextData {
  const textPath = path.join(contentDir, "site", "text.yml");
  const parsed = readYamlFile(textPath);

  return {
    words: assertStringArray(parsed.words, "words", textPath),
    headlines: assertStringArray(parsed.headlines, "headlines", textPath),
    paragraphs: assertStringArray(parsed.paragraphs, "paragraphs", textPath)
  };
}

export function loadContentSource(contentDir = DEFAULT_CONTENT_DIR): ContentSource {
  const { typefaces, glyphPages, samples } = loadTypefaceBundles(contentDir);

  return {
    typefaces,
    glyphPages,
    samples,
    pairings: loadPairings(contentDir),
    text: loadTextData(contentDir)
  };
}
