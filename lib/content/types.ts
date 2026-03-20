export type CategoryName = "Display" | "Monospaced" | "Sans-Serif" | "Serif";

export type CategorySlug = "display" | "monospaced" | "sans-serif" | "serif";

export type Weight = {
  weight: number;
  name: string;
};

export type SampleShade = "light" | "dark";

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
  sampleShade?: SampleShade;
  bodyHtml: string;
};

export type Pairing = {
  slug: string;
  name: string;
  dateAdded: string;
  typefaces: string[];
  sampleShade?: SampleShade;
  bodyHtml: string;
};

export type TextData = {
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
  samples: Sample[];
  sampleByTypefaceName: Map<string, Sample>;
  pairings: Pairing[];
  pairingsByTypefaceName: Map<string, Pairing[]>;
  latestTypefaces: Typeface[];
  latestPairings: Pairing[];
  text: TextData;
};
