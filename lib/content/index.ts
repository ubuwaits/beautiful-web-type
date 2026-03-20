export {
  getAllTypefaceSlugs,
  getAllTypefaces,
  getGlyphPageBySlug,
  getLatestPairings,
  getLatestTypefaces,
  getPairingsForTypeface,
  getSampleForTypeface,
  getTextData,
  getTypefaceBySlug,
  getTypefacesByCategory,
  resolveTypefaceSlugByName
} from "./queries";

export type {
  CategoryName,
  CategorySlug,
  GlyphPage,
  Pairing,
  Sample,
  TextData,
  Typeface,
  Weight
} from "./types";
