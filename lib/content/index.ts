export {
  getAllTypefaceSlugs,
  getAllTypefaces,
  getGlyphPageBySlug,
  getLatestTypefaces,
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
  Sample,
  TextData,
  Typeface,
  Weight
} from "./types";
