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
  fontFile: string;
};

/** Authored font data; page markup and derived route fields are added by the loader. */
export type TypefaceData = Omit<Typeface, "bodyHtml" | "categorySlug"> & {
  glyphSource?: string;
};

export type TextData = {
  words: string[];
  headlines: string[];
  paragraphs: string[];
};
