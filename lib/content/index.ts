export {
  getAllTypefaceSlugs,
  getAllTypefaces,
  getGlyphPageBySlug,
  getLatestTypefaces,
  getTextData,
  getTypefaceBySlug,
  getTypefacesByCategory,
  resolveTypefaceSlugByName
} from "./queries";

export type {
  CategoryName,
  CategorySlug,
  GlyphPage,
  TextData,
  Typeface,
  Weight
} from "./types";
