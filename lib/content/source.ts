import fs from "node:fs";
import path from "node:path";

import { specimenText } from "@/content/site/text";
import { typefaceData } from "@/content/typefaces";
import type { CategoryName, CategorySlug, GlyphPage, TextData, Typeface, TypefaceData } from "./types";

export const DEFAULT_CONTENT_DIR = path.join(process.cwd(), "content");

type ContentSource = {
  typefaces: Typeface[];
  glyphPages: GlyphPage[];
  text: TextData;
};

const CATEGORY_SLUGS: Record<CategoryName, CategorySlug> = {
  Display: "display",
  Monospaced: "monospaced",
  "Sans-Serif": "sans-serif",
  Serif: "serif"
};

function readRequiredTextFile(filePath: string): string {
  if (!fs.existsSync(filePath)) throw new Error(`Expected file to exist: ${filePath}`);
  return fs.readFileSync(filePath, "utf8").trim();
}

function validateFontAsset(fontFile: string, contentDir: string): void {
  const relativePath = fontFile.replace(/^\/+/, "");
  const candidates = [
    path.join(contentDir, "public", relativePath),
    path.join(path.dirname(contentDir), "public", relativePath)
  ];
  if (!candidates.some((candidate) => fs.existsSync(candidate))) {
    throw new Error(`Expected "fontFile" asset to exist: ${candidates[0]}`);
  }
}

export function loadContentSource(
  contentDir = DEFAULT_CONTENT_DIR,
  fonts: TypefaceData[] = typefaceData,
  text: TextData = specimenText
): ContentSource {
  const typefaces: Typeface[] = [];
  const glyphPages: GlyphPage[] = [];

  for (const { fontFile, glyphSource: _glyphSource, ...data } of fonts) {
    const directory = path.join(contentDir, "typefaces", data.slug);
    const categorySlug = CATEGORY_SLUGS[data.category];
    validateFontAsset(fontFile, contentDir);
    typefaces.push({
      ...data,
      categorySlug,
      bodyHtml: readRequiredTextFile(path.join(directory, "detail.html")),
      bodyClass: `${categorySlug} detail`
    });
    glyphPages.push({
      slug: data.slug,
      typefaceName: data.name,
      fontFile,
      bodyClass: `${categorySlug} glyphs`
    });
  }

  return { typefaces, glyphPages, text };
}
