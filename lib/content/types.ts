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
  features: FontFeature[];
  fontFile: string;
};

/** Authored font data; page markup and derived route fields are added by the loader. */
export type TypefaceData = Omit<Typeface, "categorySlug"> & {
  glyphSource?: string;
};

export type TextData = {
  words: string[];
  headlines: string[];
  paragraphs: string[];
};

export type FeatureSettings = Record<string, number> | "normal";

export type FeatureSampleOptions = {
  features?: FeatureSettings;
  axes?: Record<string, number>;
  italic?: boolean;
  language?: string;
  direction?: "auto" | "ltr" | "rtl";
  opticalSizing?: "auto" | "none";
  size?: "compact";
};

type ComparisonExample = {
  text: string;
  label?: string;
  before?: FeatureSampleOptions;
  after?: FeatureSampleOptions;
};

type FigureExample = {
  text: string;
  label: string;
  reference?: string;
  options?: FeatureSampleOptions;
};

export type FontFeature = {
  type: "comparison";
  title: string;
  code?: string;
  before?: FeatureSampleOptions;
  after?: FeatureSampleOptions;
  examples: (string | ComparisonExample)[];
} | {
  type: "figures";
  title: string;
  options?: FeatureSampleOptions;
  responsive?: boolean;
  examples: FigureExample[];
} | {
  type: "axis";
  title: string;
  axis: string;
  text: string;
  values: number[];
};
