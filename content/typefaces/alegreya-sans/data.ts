import type { TypefaceData } from "@/lib/content/types";

const typeface: TypefaceData = {
  slug: "alegreya-sans",
  name: "Alegreya Sans",
  dateAdded: "2018-10-15",
  category: "Sans-Serif",
  styles: 14,
  glyphCount: 2136,
  italic: true,
  smallcap: true,
  weights: [
    {
      weight: 100,
      name: "Thin"
    },
    {
      weight: 300,
      name: "Light"
    },
    {
      weight: 400,
      name: "Regular"
    },
    {
      weight: 500,
      name: "Medium"
    },
    {
      weight: 700,
      name: "Bold"
    },
    {
      weight: 800,
      name: "Extra-Bold"
    },
    {
      weight: 900,
      name: "Black"
    }
  ],
  latestRelease: {
    version: "v2.008",
    date: "13 Mar 2018"
  },
  projectUrl: "https://github.com/huertatipografica/Alegreya-Sans",
  gFontsUrl: "https://fonts.google.com/specimen/Alegreya+Sans",
  creator: {
    name: "Huerta Tipográfica",
    url: "https://huertatipografica.com/en"
  },
  description: `Alegreya Sans was born not from an impulse to reduce letterforms to industrial geometry, but from a distinctly literary ambition. Conceived by Argentine designer Juan Pablo del Peral for Huerta Tipográfica as a counterpart to his celebrated serif workhorse—itself recognized at ATypI’s Letter.2 competition—Alegreya Sans carries the vital breath and cadence of the broad pen into the realm of the unserifed letter. Where the prevailing twentieth-century grotesques often summon the cool, detached efficiency of municipal architecture or modernist neutrality, Alegreya Sans remembers the printed page and the human voice. It is an open-source text face conceived first and foremost for literature, constructed to shepherd the reader across extended narratives without the creeping fatigue of uniform geometry.

Its anatomy is governed by an unhurried, chirographic ductus. Del Peral has endowed the forms with an organic asymmetry: counters are generous and hospitable, terminals taper with the delicate flick of a nib, and the vertical stems subtly modulate rather than surrender to an unyielding caliper. The resulting rhythm along the line is dynamic and varied—a gentle, musical cadence that gathers letters into natural words rather than a metronomic staccato. On the page, its color is luminous and porous, avoiding the dense, leaden wall cast by less sympathetic sans-serifs. Across its span of weights, from the gossamer strokes of the Thin to the exuberant, almost sculptural tensions of the Black, the family preserves its fundamental warmth, demonstrating that structural discipline need not sacrifice vitality.

Typographically, Alegreya Sans is furnished with the civilizing refinements seldom granted to unserifed designs. In place of mechanically slanted obliques, del Peral provides a true cursive italic—a vibrant, dancing script whose steep incline and calligraphic joins offer genuine emphasis and dialogic texture alongside the roman. Complemented by a dedicated family of small capitals, proportional figures, and broad linguistic coverage, the design approaches the page not as a decorative interloper, but as a fully enfranchised citizen of book typography. It stands as a rare achievement within the open commons: a workhorse that satisfies the practical rigors of the screen while preserving the ancient, quiet dignity of the book.`,
  familyFaces: [
    "Alegreya"
  ],
  fontFile: "/assets/fonts/alegreya-sans/AlegreyaSans-Regular.woff2",
  features: [
    {
      type: "comparison",
      title: "Standard Ligatures",
      code: "font-feature-settings: 'liga';",
      before: { features: { liga: 0 } },
      after: { features: { liga: 1, clig: 1 } },
      examples: ["ff", "ffi", "ffj", "ffl", "fi"]
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
      examples: ["1st", "3a"]
    },
    {
      type: "comparison",
      title: "Stylistic Sets",
      code: "font-feature-settings: 'ss--';",
      examples: [
        { text: "XVLIII", label: "'ss01'", before: { features: { ss01: 0 } }, after: { features: { ss01: 1 } } },
        { text: "agil", label: "'ss02'", before: { features: { ss02: 0 } }, after: { features: { ss02: 1 } } },
        { text: "ht", label: "'ss03'", before: { features: { ss03: 0 } }, after: { features: { ss03: 1 } } }
      ]
    },
    {
      type: "comparison",
      title: "Case Sensitive Forms",
      code: "font-feature-settings: 'case';",
      before: { features: { case: 0 } },
      after: { features: { case: 1 } },
      examples: ["0123", "89()", "-/@["]
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
