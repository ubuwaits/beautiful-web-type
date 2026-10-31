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
  updatedAt?: string;
  category: CategoryName;
  categorySlug: CategorySlug;
  styles: string | number;
  glyphCount: number;
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
  bodyHtml: string;
  bodyClass: string;
};

/** Authored font data; page markup and derived route fields are added by the loader. */
export type TypefaceData = Omit<Typeface, "bodyHtml" | "bodyClass" | "categorySlug"> & {
  fontFile: string;
  glyphSource?: string;
};

export type GlyphPage = {
  slug: string;
  typefaceName: string;
  fontFile: string;
  bodyClass: string;
};

export type TextData = {
  specimen: {
    primary: string;
  };
  words: string[];
  headlines: string[];
  paragraphs: string[];
};

export type ContentGraph = {
  typefaces: Typeface[];
  typefaceBySlug: Map<string, Typeface>;
  typefaceByName: Map<string, Typeface>;
  glyphPages: GlyphPage[];
  glyphPageBySlug: Map<string, GlyphPage>;
  glyphPageByTypefaceName: Map<string, GlyphPage>;
  latestTypefaces: Typeface[];
  text: TextData;
};
