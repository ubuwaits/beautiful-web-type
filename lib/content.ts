import fs from "node:fs";
import path from "node:path";

import matter from "gray-matter";

export const SITE_NAME = "Beautiful Web Type";
export const SITE_URL = "https://beautifulwebtype.com";
export const DEFAULT_SITE_DESCRIPTION =
  "Discover the best free fonts from Google and across the web. See beautiful examples, recommended pairings, OpenType features, and more.";

export type CategoryName = "Display" | "Monospaced" | "Sans-Serif" | "Serif";

export type CategorySlug = "display" | "monospaced" | "sans-serif" | "serif";

export type Weight = {
  weight: number;
  name: string;
};

export type Typeface = {
  slug: string;
  name: string;
  dateAdded: string;
  category: CategoryName;
  categorySlug: CategorySlug;
  styles: string | number;
  weights: Weight[];
  latestRelease: {
    version: string;
    date: string;
  };
  projectUrl: string;
  gFontsUrl?: string;
  creator: {
    name: string;
    url: string;
  };
  description: string;
  italic?: boolean;
  smallcap?: boolean;
  familyFaces?: string[];
  comparisonFaces?: string[];
  bodyHtml: string;
  bodyClass: string;
};

export type GlyphPage = {
  slug: string;
  typefaceName: string;
  fontFile: string;
  bodyClass: string;
};

export type Sample = {
  slug: string;
  typefaceName: string;
  sampleShade?: string;
  bodyHtml: string;
};

export type Pairing = {
  slug: string;
  name: string;
  dateAdded: string;
  typefaces: string[];
  sampleShade?: string;
  bodyHtml: string;
};

export type TextData = {
  words: string[];
  headlines: string[];
  paragraphs: string[];
};

export type StaticPageConfig = {
  slug: string;
  title: string;
  description?: string;
  bodyClass?: string;
  permalink: string;
};

export type SiteData = {
  homePage: StaticPageConfig;
  pairingsPage: StaticPageConfig;
  categories: StaticPageConfig[];
  categoriesBySlug: Map<string, StaticPageConfig>;
  typefaces: Typeface[];
  typefaceBySlug: Map<string, Typeface>;
  typefaceByName: Map<string, Typeface>;
  glyphPages: GlyphPage[];
  glyphPageBySlug: Map<string, GlyphPage>;
  glyphPageByTypefaceName: Map<string, GlyphPage>;
  samples: Sample[];
  sampleByTypefaceName: Map<string, Sample>;
  pairings: Pairing[];
  pairingsByTypefaceName: Map<string, Pairing[]>;
  latestTypefaces: Typeface[];
  latestPairings: Pairing[];
  text: TextData;
};

const ROOT_DIR = process.cwd();
const TYPEFACES_DIR = path.join(ROOT_DIR, "_typefaces");
const GLYPHS_DIR = path.join(ROOT_DIR, "_glyphs");
const SAMPLES_DIR = path.join(ROOT_DIR, "_samples");
const PAIRINGS_DIR = path.join(ROOT_DIR, "_pairings");
const CATEGORIES_DIR = path.join(ROOT_DIR, "categories");

const RESERVED_TOP_LEVEL_SLUGS = new Set([
  "assets",
  "css",
  "display",
  "feed.xml",
  "google146824b99fdbed48.html",
  "js",
  "monospaced",
  "pairings",
  "sans-serif",
  "serif",
  "sitemap.xml",
  "v1"
]);

const CATEGORY_SLUGS: Record<CategoryName, CategorySlug> = {
  Display: "display",
  Monospaced: "monospaced",
  "Sans-Serif": "sans-serif",
  Serif: "serif"
};

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

function assertString(
  value: unknown,
  key: string,
  filePath: string
): string {
  if (typeof value !== "string" || value.length === 0) {
    throw new Error(`Expected "${key}" to be a non-empty string in ${filePath}`);
  }

  return value;
}

function assertStringValue(
  value: unknown,
  key: string,
  filePath: string
): string {
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

function assertStringArray(
  value: unknown,
  key: string,
  filePath: string
): string[] {
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

function sortByDateDesc<T extends { dateAdded: string }>(entries: T[]): T[] {
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
      throw new Error(`Glyph page in ${filePath} references missing typeface "${typefaceName}"`);
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

function loadStaticPageConfig(filePath: string): StaticPageConfig {
  const { data } = readFrontMatterFile(filePath);
  const basename = path.basename(filePath, path.extname(filePath));
  const permalink = maybeString(data.permalink) ?? `/${basename}/`;

  return {
    slug: basename,
    title: assertString(data.title, "title", filePath),
    description: maybeString(data.description),
    bodyClass: maybeString(data["body-class"]),
    permalink
  };
}

function loadHomePageConfig(): StaticPageConfig {
  return loadStaticPageConfig(path.join(ROOT_DIR, "index.html"));
}

function loadPairingsPageConfig(): StaticPageConfig {
  return loadStaticPageConfig(path.join(ROOT_DIR, "pairings.html"));
}

function loadCategoryPages(): StaticPageConfig[] {
  return listFilesRecursively(CATEGORIES_DIR, ".html").map((filePath) =>
    loadStaticPageConfig(filePath)
  );
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

function validateSiteData(data: SiteData): void {
  for (const typeface of data.typefaces) {
    if (RESERVED_TOP_LEVEL_SLUGS.has(typeface.slug)) {
      throw new Error(`Typeface slug "${typeface.slug}" collides with a reserved route`);
    }

    if (!data.sampleByTypefaceName.has(typeface.name)) {
      throw new Error(`Missing sample for typeface "${typeface.name}"`);
    }

    if (!data.glyphPageByTypefaceName.has(typeface.name)) {
      throw new Error(`Missing glyph page for typeface "${typeface.name}"`);
    }

    for (const relatedName of typeface.familyFaces ?? []) {
      if (!data.typefaceByName.has(relatedName)) {
        throw new Error(`Missing family face "${relatedName}" referenced by "${typeface.name}"`);
      }
    }

    for (const relatedName of typeface.comparisonFaces ?? []) {
      if (!data.typefaceByName.has(relatedName)) {
        throw new Error(
          `Missing comparison face "${relatedName}" referenced by "${typeface.name}"`
        );
      }
    }
  }

  for (const sample of data.samples) {
    if (!data.typefaceByName.has(sample.typefaceName)) {
      throw new Error(`Sample "${sample.slug}" references missing typeface "${sample.typefaceName}"`);
    }
  }

  for (const pairing of data.pairings) {
    for (const typefaceName of pairing.typefaces) {
      if (!data.typefaceByName.has(typefaceName)) {
        throw new Error(`Pairing "${pairing.name}" references missing typeface "${typefaceName}"`);
      }
    }
  }
}

let cachedSiteData: SiteData | null = null;

export function getSiteData(): SiteData {
  if (cachedSiteData) {
    return cachedSiteData;
  }

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

  const categories = loadCategoryPages();
  const categoriesBySlug = new Map(categories.map((entry) => [entry.slug, entry]));

  cachedSiteData = {
    homePage: loadHomePageConfig(),
    pairingsPage: loadPairingsPageConfig(),
    categories,
    categoriesBySlug,
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

  validateSiteData(cachedSiteData);

  return cachedSiteData;
}

export function getTypefacesByCategory(categorySlug: string): Typeface[] {
  return getSiteData().typefaces.filter((entry) => entry.categorySlug === categorySlug);
}

export function getTypefacesForFooter(): Record<CategorySlug, Typeface[]> {
  return {
    display: getTypefacesByCategory("display"),
    monospaced: getTypefacesByCategory("monospaced"),
    "sans-serif": getTypefacesByCategory("sans-serif"),
    serif: getTypefacesByCategory("serif")
  };
}

export function resolveTypefaceSlugByName(typefaceName: string): string {
  const typeface = getSiteData().typefaceByName.get(typefaceName);

  if (!typeface) {
    throw new Error(`Unknown typeface "${typefaceName}"`);
  }

  return typeface.slug;
}

export function getTypefacePath(typeface: Pick<Typeface, "slug">): string {
  return `/${typeface.slug}/`;
}

export function getGlyphPath(typeface: Pick<Typeface, "slug">): string {
  return `/${typeface.slug}/glyphs/`;
}

export function getPublicRoutes(): string[] {
  const site = getSiteData();

  return [
    "/",
    ...site.categories.map((entry) => entry.permalink),
    site.pairingsPage.permalink,
    ...site.typefaces.map((entry) => getTypefacePath(entry)),
    ...site.typefaces.map((entry) => getGlyphPath(entry))
  ];
}

function xmlEscape(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function absoluteUrl(routePath: string): string {
  return new URL(routePath, SITE_URL).toString();
}

export function buildSitemapXml(buildDate = new Date().toISOString()): string {
  const urls = getPublicRoutes()
    .map(
      (routePath) => `<url>
<loc>${xmlEscape(absoluteUrl(routePath))}</loc>
<lastmod>${xmlEscape(buildDate)}</lastmod>
</url>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

export function buildFeedXml(buildDate = new Date().toISOString()): string {
  const { latestTypefaces } = getSiteData();
  const entries = latestTypefaces
    .map((typeface) => {
      const imageUrl = absoluteUrl(`/assets/images/${typeface.slug}.png`);
      const typefaceUrl = absoluteUrl(getTypefacePath(typeface));

      return `<entry>
  <title>${xmlEscape(`${typeface.name} by ${typeface.creator.name}`)}</title>
  <link href="${xmlEscape(typefaceUrl)}" />
  <id>${xmlEscape(typefaceUrl)}</id>
  <updated>${xmlEscape(new Date(typeface.dateAdded).toISOString())}</updated>
  <summary type="html">${xmlEscape(typeface.description)}</summary>
  <content type="xhtml"><div xmlns="http://www.w3.org/1999/xhtml"><p>${xmlEscape(
    typeface.description
  )}</p><p><a href="${xmlEscape(typefaceUrl)}"><img src="${xmlEscape(
    imageUrl
  )}" alt="${xmlEscape(`${typeface.name} by ${typeface.creator.name}`)}" /></a></p></div>
  </content>
</entry>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>${SITE_NAME}</title>
  <link href="${absoluteUrl("/feed.xml")}" rel="self" />
  <link href="${SITE_URL}" />
  <id>${SITE_URL}/</id>
  <updated>${xmlEscape(buildDate)}</updated>
  <author>
    <name>Chad Mazzola</name>
    <email>ubuwaits@gmail.com</email>
    <uri>${SITE_URL}</uri>
  </author>
${entries}
</feed>
`;
}
