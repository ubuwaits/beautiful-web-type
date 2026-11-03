import type { TypefaceData } from "@/lib/content/types";

const typeface: TypefaceData = {
  slug: "dm-serif-text",
  name: "DM Serif Text",
  dateAdded: "2026-11-03",
  category: "Serif",
  styles: 2,
  glyphCount: 355,
  italic: true,
  weights: [{ weight: 400, name: "Regular" }],
  latestRelease: { version: "v5.200", date: "17 Oct 2019" },
  projectUrl: "https://github.com/googlefonts/dm-fonts",
  gFontsUrl: "https://fonts.google.com/specimen/DM+Serif+Text",
  creator: { name: "Colophon Foundry", url: "https://github.com/googlefonts/dm-fonts" },
  summary: "DM Serif Text is Colophon Foundry’s lower-contrast companion to DM Serif Display, with reinforced details and an italic for subheadings and shorter passages.",
  description: `DM Serif Text was developed by Colophon Foundry for DeepMind under the creative direction of MultiAdaptor and released in 2019. Derived from the Latin portion of Frank Grießhammer’s <em>Source Serif Pro</em> for Adobe, it carries the transitional influence of Pierre-Simon Fournier into a contemporary editorial family. Where <em>DM Serif Display</em> emphasizes strong stroke contrast for large titles, Text is the lower-contrast optical counterpart, intended for smaller subheadings and text settings.

The design reinforces crossbars, bracketed serifs, and fine strokes while retaining the upright structure and rounded terminals of its display sibling. The lowercase combines open counters with teardrop details on letters such as <em>c</em>, <em>f</em>, and <em>r</em>, balancing a firm baseline with calligraphic accents. Its spacing is more relaxed than Display’s, helping separate character forms in continuous lines. The italic changes the rhythm through cursive construction, flowing strokes, and single-storey forms, providing emphasis without adding another weight.

DM Serif Text is available in Regular and Italic, so layouts that require bold references or a more extensive weight hierarchy need a complementary family. Its serif details also call for care in very small labels and densely packed interface elements. It is well suited to article introductions, chapter openers, quotations, shorter essays, and book subheadings. Within the DM suite, it bridges the large-scale titling of <em>DM Serif Display</em> and the supporting information set in <em>DM Sans</em>, offering a consistent serif voice at more moderate sizes.`,
  familyFaces: ["DM Sans", "DM Serif Display"],
  fontFile: "/assets/fonts/dm-serif-text/DMSerifText-Regular.woff2",
  features: [
    {
      type: "comparison", title: "Standard Ligatures", code: "font-feature-settings: 'liga';",
      before: { features: { liga: 0 } }, after: { features: { liga: 1 } }, examples: ["ff", "fi", "fl"]
    },
    {
      type: "comparison", title: "Discretionary Ligatures", code: "font-feature-settings: 'dlig';",
      before: { features: { dlig: 0 } }, after: { features: { dlig: 1 } }, examples: ["fb", "fh", "fj", "fk"]
    },
    {
      type: "figures", title: "Figures",
      examples: [
        { text: "1234567890", label: "Proportional Lining (default)", options: { features: "normal" } },
        { text: "1/2 3/4", label: "Fractions: 'frac'", options: { features: { frac: 1 } } },
        { text: "1234", reference: "H", label: "Superscripts: 'sups'", options: { features: { sups: 1 } } }
      ]
    },
    {
      type: "comparison", title: "Ordinals", code: "font-feature-settings: 'ordn';",
      before: { features: { ordn: 0 } }, after: { features: { ordn: 1 } }, examples: ["3a", "4o"]
    }
  ]
};

export default typeface;
