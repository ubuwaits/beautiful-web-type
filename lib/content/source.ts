import fs from "node:fs";
import path from "node:path";

import { load } from "js-yaml";

import type {
  CategoryName,
  CategorySlug,
  GlyphPage,
  Sample,
  TextData,
  Typeface,
  Weight
} from "./types";

export const DEFAULT_CONTENT_DIR = path.join(process.cwd(), "content");

type ContentSource = {
  typefaces: Typeface[];
  glyphPages: GlyphPage[];
  samples: Sample[];
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

function assertPositiveInteger(value: unknown, key: string, filePath: string): number {
  if (typeof value !== "number" || !Number.isSafeInteger(value) || value <= 0) {
    throw new Error(`Expected "${key}" to be a positive integer in ${filePath}`);
  }
  return value;
}

function assertPublicAssetPath(
  value: unknown,
  key: string,
  filePath: string,
  contentDir: string
): string {
  const assetPath = assertString(value, key, filePath);
  const normalizedAssetPath = assetPath.replace(/^\/+/, "");
  const publicAssetPaths = [
    path.join(contentDir, "public", normalizedAssetPath),
    path.join(path.dirname(contentDir), "public", normalizedAssetPath)
  ];

  if (!publicAssetPaths.some((candidatePath) => fs.existsSync(candidatePath))) {
    throw new Error(`Expected "${key}" asset to exist: ${publicAssetPaths[0]}`);
  }

  return assetPath;
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

function maybeDateString(
  value: unknown,
  key: string,
  filePath: string
): string | undefined {
  return value === undefined || value === null
    ? undefined
    : toDateString(value, key, filePath);
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
      updatedAt: maybeDateString(meta.updatedAt, "updatedAt", metaPath),
      category,
      categorySlug: categoryToSlug(category),
      sampleText: maybeString(meta.sampleText),
      sampleClasses: maybeString(meta.sampleClasses),
      styles: assertStringOrNumber(meta.styles, "styles", metaPath),
      glyphCount: assertPositiveInteger(meta.glyphCount, "glyphCount", metaPath),
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
      bodyHtml: readRequiredTextFile(detailPath),
      bodyClass: `${categoryToSlug(category)} detail`
    });

    glyphPages.push({
      slug,
      typefaceName,
      fontFile: assertPublicAssetPath(glyphs.fontFile, "fontFile", glyphsPath, contentDir),
      bodyClass: `${categoryToSlug(category)} glyphs`
    });

    samples.push({
      slug,
      typefaceName,
      bodyHtml: readRequiredTextFile(samplePath)
    });
  }

  return { typefaces, glyphPages, samples };
}

function loadTextData(contentDir: string): TextData {
  const textPath = path.join(contentDir, "site", "text.yml");
  const parsed = readYamlFile(textPath);
  const specimen = assertObject(parsed.specimen, "specimen", textPath);

  return {
    specimen: {
      primary: assertString(specimen.primary, "specimen.primary", textPath)
    },
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
    text: loadTextData(contentDir)
  };
}
