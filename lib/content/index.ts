import fs from "node:fs";
import path from "node:path";
import { cache } from "react";

import { specimenText } from "@/content/site/text";
import { typefaceData } from "@/content/typefaces";
import { getReservedTopLevelSlugs } from "@/lib/routes";
import type { CategoryName, CategorySlug, TextData, Typeface, TypefaceData } from "./types";

export type { CategoryName, CategorySlug, TextData, Typeface, Weight } from "./types";

const PUBLIC_DIR = path.join(process.cwd(), "public");
const RESERVED_SLUGS = getReservedTopLevelSlugs();
const CATEGORY_SLUGS: Record<CategoryName, CategorySlug> = {
  Display: "display",
  Monospaced: "monospaced",
  "Sans-Serif": "sans-serif",
  Serif: "serif"
};

/** Validate authored font data and its references before generating pages. */
export function loadTypefaces(fonts: TypefaceData[] = typefaceData, publicDir = PUBLIC_DIR): Typeface[] {
  const names = new Set(fonts.map((font) => font.name));
  return fonts.map(({ glyphSource: _glyphSource, ...font }) => {
    if (RESERVED_SLUGS.has(font.slug)) {
      throw new Error(`Typeface slug "${font.slug}" collides with a reserved route`);
    }
    for (const name of font.familyFaces ?? []) {
      if (!names.has(name)) throw new Error(`Missing family face "${name}" referenced by "${font.name}"`);
    }

    const assetPath = font.fontFile.replace(/^\/+/, "");
    const fontPath = path.join(publicDir, assetPath);
    if (!fs.existsSync(fontPath)) {
      throw new Error(`Expected "fontFile" asset to exist: ${fontPath}`);
    }

    return {
      ...font,
      categorySlug: CATEGORY_SLUGS[font.category]
    };
  });
}

export const getAllTypefaces = cache(() => loadTypefaces());

export function getAllTypefaceSlugs(): string[] {
  return getAllTypefaces().map((font) => font.slug);
}

export function getLatestTypefaces(): Typeface[] {
  return [...getAllTypefaces()].sort((left, right) => right.dateAdded.localeCompare(left.dateAdded));
}

export function getTypefacesByCategory(categorySlug: CategorySlug): Typeface[] {
  return getAllTypefaces().filter((font) => font.categorySlug === categorySlug);
}

export function getTypefaceBySlug(slug: string): Typeface | undefined {
  return getAllTypefaces().find((font) => font.slug === slug);
}

export function getTextData(): TextData {
  return specimenText;
}

export function resolveTypefaceSlugByName(name: string): string {
  const font = getAllTypefaces().find((font) => font.name === name);
  if (!font) throw new Error(`Unknown typeface "${name}"`);
  return font.slug;
}
