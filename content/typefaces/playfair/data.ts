import type { TypefaceData } from "@/lib/content/types";

const typeface: TypefaceData = {
  slug: "playfair",
  name: "Playfair",
  dateAdded: "2018-10-15",
  updatedAt: "2026-11-21",
  category: "Display",
  styles: "Variable",
  glyphCount: 2304,
  italic: true,
  smallcap: true,
  weights: [
    { weight: 360, name: "Semi Light" },
    { weight: 400, name: "Regular" },
    { weight: 500, name: "Medium" },
    { weight: 600, name: "Semi Bold" },
    { weight: 700, name: "Bold" },
    { weight: 800, name: "Extra Bold" },
    { weight: 900, name: "Black" }
  ],
  latestRelease: {
    version: "v2.203",
    date: "12 Nov 2024"
  },
  projectUrl: "https://github.com/clauseggers/Playfair",
  gFontsUrl: "https://fonts.google.com/specimen/Playfair",
  creator: {
    name: "Claus Eggers Sørensen",
    url: "https://forthehearts.net/"
  },
  summary: "Playfair is a transitional serif with variable weight, width, and optical size for body text and display typography.",
  description: `Claus Eggers Sørensen first published Playfair Display in 2011. In 2023 he released Playfair, expanding the design to body text through an optical-size axis. The original display face was drafted to evoke that transitional moment in the late eighteenth century when European printing pivoted from the mellow, humanist cadence of the Old Style toward the stark, geometric drama of the Modern. Designed by Danish type designer Claus Eggers Sørensen and released through Google Fonts, the face draws inspiration from the innovations of John Baskerville—whose smooth wove papers and dense inks sharpened the printed impression—alongside the emergence of the pointed steel pen. Sørensen sought to capture this pivotal aesthetic shift, creating a libre face tailored specifically for the formal, high-contrast demands of contemporary titling.

The anatomy of the design is governed by acute stroke contrast and strict vertical stress. Its heavy vertical stems stand in sharp opposition to gossamer-thin horizontal strokes and hairline serifs, while terminals on letters like <em>a</em>, <em>c</em>, <em>f</em>, and <em>r</em> resolve into distinct, circular ball forms. These rounded drops introduce an organic, calligraphic punctuation to an otherwise architectural framework. The proportions are stately and upright, featuring an ample x-height and compact descenders that allow lines of display type to sit comfortably close without colliding. Along a headline, Playfair sets a crisp, formal rhythm that immediately organizes the upper register of a layout.

At display sizes, the contrast between fine hairlines and substantial stems becomes a central part of Playfair’s character. Generous scale lets these details register clearly in titles and short phrases. Its companion italic leans into its pointed-pen ancestry, raking forward with flowing, cursive ligatures and generous swashes that offer a lively, expressive foil to the sober posture of the roman.

Playfair’s optical-size axis runs from 5 to 1200. Its weight and width can be adjusted independently in both Roman and Italic. Small capitals, tabular and oldstyle figures, and broad support for Latin, Cyrillic, and Vietnamese make the family useful across editorial layouts.`,
  glyphSource: "/assets/fonts/playfair/PlayfairRomanVF.woff2",
  fontFile: "/assets/fonts/playfair/glyphs-regular.woff2",
  features: [
    {
      type: "comparison",
      title: "Standard Ligatures",
      code: "font-feature-settings: 'liga';",
      before: { features: { liga: 0 } },
      after: { features: { liga: 1, clig: 1 } },
      examples: ["ff", "ffi", "fi", "fl", "ffl"]
    },
    {
      type: "comparison",
      title: "Discretionary Ligatures",
      code: "font-feature-settings: 'dlig';",
      before: { features: { dlig: 0 } },
      after: { features: { dlig: 1 } },
      examples: ["ct", "st", "sp"]
    },
    {
      type: "comparison",
      title: "Contextual Alternates",
      code: "font-feature-settings: 'calt';",
      before: { features: { calt: 0 } },
      after: { features: { calt: 1 } },
      examples: ["->", "<-", "12:34", "-^", "-~", "/^"]
    },
    {
      type: "figures",
      title: "Figures",
      options: { direction: "auto" },
      examples: [
        { text: "1234567890", label: "Proportional Oldstyle (default)", options: { features: "normal" } },
        { text: "1234567890", label: "Proportional Lining: 'lnum'", options: { features: { lnum: 1 } } },
        { text: "1234567890", label: "Tabular Lining: 'lnum', 'tnum'", options: { features: { lnum: 1, tnum: 1 } } },
        { text: "1234567890", label: "Tabular Oldstyle: 'onum', 'tnum'", options: { features: { onum: 1, tnum: 1 } } },
        { text: "1/2 3/4", label: "Fractions: 'frac'", options: { features: { frac: 1 } } },
        { text: "1/2 3/4", label: "Stacked Fractions: 'afrc'", options: { features: { afrc: 1 } } },
        { text: "0", label: "Slashed Zero: 'zero'", options: { features: { zero: 1 } } },
        { text: "123", label: "Numerators: 'numr'", reference: "H", options: { features: { numr: 1 } } },
        { text: "123", label: "Denominators: 'dnom'", reference: "H", options: { features: { dnom: 1 } } },
        { text: "123", label: "Subscripts: 'subs'", reference: "H", options: { features: { subs: 1 } } },
        { text: "123", label: "Scientific Inferiors: 'sinf'", reference: "H", options: { features: { sinf: 1 } } },
        { text: "123", label: "Superscripts: 'sups'", reference: "H", options: { features: { sups: 1 } } }
      ]
    },
    {
      type: "comparison",
      title: "Ordinals",
      code: "font-feature-settings: 'ordn';",
      before: { features: { ordn: 0 } },
      after: { features: { ordn: 1 } },
      examples: ["3a", "4o", "No."]
    },
    {
      type: "comparison",
      title: "Stylistic Sets",
      code: "font-feature-settings: 'ss--';",
      before: { italic: true },
      after: { italic: true },
      examples: [
        { text: "p", label: "'ss01' · Italic", before: { features: { ss01: 0 } }, after: { features: { ss01: 1 } } },
        { text: "E", label: "'ss02' · Italic", before: { features: { ss02: 0 } }, after: { features: { ss02: 1 } } },
        { text: "Ti", label: "'ss07' · Italic", before: { features: { ss07: 0 } }, after: { features: { ss07: 1 } } },
        { text: "Th", label: "'ss08' · Italic", before: { features: { ss08: 0 } }, after: { features: { ss08: 1 } } },
        { text: "Zz", label: "'ss12' · Italic", before: { features: { ss12: 0 } }, after: { features: { ss12: 1 } } },
        { text: "Xx", label: "'ss13' · Italic", before: { features: { ss13: 0 } }, after: { features: { ss13: 1 } } }
      ]
    },
    {
      type: "comparison",
      title: "Character Variants",
      code: "font-feature-settings: 'cv--';",
      before: { features: { cv01: 0 } },
      after: { features: { cv01: 1 } },
      examples: [{ text: "fj", label: "'cv01'" }]
    },
    {
      type: "comparison",
      title: "Case Sensitive Forms",
      code: "font-feature-settings: 'case';",
      before: { features: { case: 0 } },
      after: { features: { case: 1 } },
      examples: ["0123", "89&!", "%()-"]
    },
    {
      type: "comparison",
      title: "Capital Spacing",
      code: "font-feature-settings: 'cpsp';",
      before: { features: { cpsp: 0 }, size: "compact" },
      after: { features: { cpsp: 1 }, size: "compact" },
      examples: ["HAMBURG"]
    }
  ],
};

export default typeface;
