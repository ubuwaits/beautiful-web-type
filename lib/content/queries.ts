import type {
  CategorySlug,
  GlyphPage,
  Pairing,
  Sample,
  TextData,
  Typeface
} from "./types";
import { getContentGraph } from "./graph";

export function getAllTypefaces(): Typeface[] {
  return getContentGraph().typefaces;
}

export function getAllTypefaceSlugs(): string[] {
  return getAllTypefaces().map((typeface) => typeface.slug);
}

export function getLatestTypefaces(): Typeface[] {
  return getContentGraph().latestTypefaces;
}

export function getLatestPairings(): Pairing[] {
  return getContentGraph().latestPairings;
}

export function getTypefacesByCategory(categorySlug: CategorySlug): Typeface[] {
  return getAllTypefaces().filter((typeface) => typeface.categorySlug === categorySlug);
}

export function getTypefaceBySlug(typefaceSlug: string): Typeface | undefined {
  return getContentGraph().typefaceBySlug.get(typefaceSlug);
}

export function getGlyphPageBySlug(typefaceSlug: string): GlyphPage | undefined {
  return getContentGraph().glyphPageBySlug.get(typefaceSlug);
}

export function getSampleForTypeface(typefaceName: string): Sample | undefined {
  return getContentGraph().sampleByTypefaceName.get(typefaceName);
}

export function getPairingsForTypeface(typefaceName: string): Pairing[] {
  return getContentGraph().pairingsByTypefaceName.get(typefaceName) ?? [];
}

export function getTextData(): TextData {
  return getContentGraph().text;
}

export function resolveTypefaceSlugByName(typefaceName: string): string {
  const typeface = getContentGraph().typefaceByName.get(typefaceName);

  if (!typeface) {
    throw new Error(`Unknown typeface "${typefaceName}"`);
  }

  return typeface.slug;
}
