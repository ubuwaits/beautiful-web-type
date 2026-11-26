import type { TypefaceData } from "@/lib/content/types";

const typeface: TypefaceData = {
  slug: "roboto-serif",
  name: "Roboto Serif",
  dateAdded: "2026-11-26T19:32:17+01:00",
  category: "Serif",
  styles: "Variable",
  glyphCount: 1264,
  italic: true,
  weights: [
    { weight: 100, name: "Thin" },
    { weight: 200, name: "Extra Light" },
    { weight: 300, name: "Light" },
    { weight: 400, name: "Regular" },
    { weight: 500, name: "Medium" },
    { weight: 600, name: "Semi Bold" },
    { weight: 700, name: "Bold" },
    { weight: 800, name: "Extra Bold" },
    { weight: 900, name: "Black" }
  ],
  latestRelease: { version: "v1.008", date: "28 Feb 2023" },
  projectUrl: "https://github.com/googlefonts/roboto-serif",
  gFontsUrl: "https://fonts.google.com/specimen/Roboto+Serif",
  creator: { name: "Greg Gazdowicz of Commercial Type", url: "https://vault.commercialtype.com/custom/roboto_serif_for_google_fonts" },
  familyFaces: ["Roboto"],
  summary: "Greg Gazdowicz designed Roboto Serif for reading on screen. Its grade axis lightens or darkens a paragraph while keeping every line break in place.",
  description: `Google’s Material Design team commissioned Roboto Serif for long stretches of reading on screen. Greg Gazdowicz of Commercial Type matched the cap height and x-height by eye to those of the original sans, then experimented with the widths of the letters. He tried the relatively even proportions of a newspaper face and the more varied ones of a book face. The finished design, released in 2022, comes closer to the latter. In a word like <em>from</em>, the narrow <em>f</em> and <em>r</em> give way to a broad <em>o</em> and a still wider <em>m</em>.

The plain slab serifs of the early drawings softened as Gazdowicz tested them in text. At the foot of the lowercase <em>n</em>, the outer edge of the stem curves gently into the serif. Under the arch the join is sharper, leaving more white space inside the letter. The terminals have a different geometry. Gazdowicz squared them off, giving the ends of curved strokes a bluntness that comes through even at small sizes.

The smallest optical size has a tall lowercase and strokes that thin where they meet, keeping the counters clear in captions and footnotes. At display sizes the fine strokes grow more delicate. The width axis has its greatest range here, since the lighter joins leave room to condense a headline before the counters begin to close. Changing the grade makes the text darker or lighter without changing the width of the words.`,
  fontFile: "/assets/fonts/roboto-serif/RobotoSerif.woff2",
  features: [
    { type: "axis", title: "Grade", axis: "GRAD", text: "Grade", values: [-50, 0, 100] },
    { type: "axis", title: "Optical Size", axis: "opsz", text: "Type", values: [8, 20, 144] },
    { type: "axis", title: "Width", axis: "wdth", text: "Wide", values: [50, 100, 150] },
    {
      type: "comparison", title: "Stylistic Sets",
      before: { features: "normal" },
      examples: [
        { text: "EF", label: "Crossbar serifs · ss01", after: { features: { ss01: 1 } } },
        { text: "g", label: "Roman · ss02", after: { features: { ss02: 1 } } },
        { text: "g", label: "Italic · ss03", before: { italic: true }, after: { italic: true, features: { ss03: 1 } } },
        { text: "f", label: "Heavy terminal · ss04", after: { features: { ss04: 1 } } },
        { text: "£", label: "Alternate sterling · ss05", after: { features: { ss05: 1 } } },
        { text: "a", label: "Alternate a · ss06", after: { features: { ss06: 1 } } }
      ]
    },
    {
      type: "comparison", title: "Standard Ligatures", code: "font-feature-settings: 'liga';",
      before: { features: { liga: 0 } }, after: { features: { liga: 1 } }, examples: ["fi", "fl", "ffi"]
    },
    {
      type: "figures", title: "Figures",
      examples: [
        { text: "0123456789", label: "Tabular lining (default)" },
        { text: "0123456789", label: "Proportional lining · pnum", options: { features: { pnum: 1 } } },
        { text: "0123456789", label: "Tabular oldstyle · onum", options: { features: { onum: 1 } } },
        { text: "1/2 3/4", label: "Fractions · frac", options: { features: { frac: 1 } } },
        { text: "0", label: "Slashed zero · zero", options: { features: { zero: 1 } } }
      ]
    }
  ]
};

export default typeface;
