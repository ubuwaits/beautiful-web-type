import type { TypefaceData } from "@/lib/content/types";

const typeface: TypefaceData = {
  slug: "inria-serif",
  name: "Inria Serif",
  dateAdded: "2018-12-03",
  category: "Serif",
  styles: 6,
  glyphCount: 597,
  italic: true,
  weights: [
    {
      weight: 300,
      name: "Light"
    },
    {
      weight: 400,
      name: "Regular"
    },
    {
      weight: 700,
      name: "Bold"
    }
  ],
  latestRelease: {
    version: "v1.200",
    date: "11 Jan 2018"
  },
  projectUrl: "https://github.com/BlackFoundry/InriaFonts",
  creator: {
    name: "BlackFoundry",
    url: "https://black-foundry.com/work/inria/"
  },
  description: `Inria Serif was born of the same enlightened civic impulse that shaped its unserifed counterpart: to furnish the French National Institute for Research in Digital Science and Technology with a voice equal to the nuances of scientific inquiry. Commissioned in 2017 and drawn by the Parisian atelier Black[Foundry]—under the direction of Jérémie Hornus and Grégori Vincens—the face confronts a delicate typographic paradox: how to articulate the exacting discipline of mathematics and algorithmic thought without freezing into technocratic sterility or retreating into nostalgic antiquarianism. Conceived in direct counterpoint with <em>Inria Sans</em> and subsequently released into the open commons under the SIL Open Font License, it transforms an act of state patronage into a universal instrument for scholarly and literary discourse.

The architecture of the letterform balances the rational clarity of the Enlightenment with the supple, living pulse of the hand. Its proportions are spacious and grounded, defined by a generous x-height and hospitable interior chambers that remain flooded with light, preserving legibility across dense technical reports, footnotes, and digital screens alike. The serifs are crisp and wedge-like—possessing a clean, chiseled footing along the baseline that guides the eye forward without accumulating excess visual weight at the joints. Stroke modulation is handled with temperate restraint: contrast is present and graceful, yet kept sufficiently robust to withstand the harsh glare of back-lit displays. Along the measure, Inria Serif weaves a calm, luminous grey, conducting dense academic treatises and continuous prose with effortless composure.

In its italic, the family reveals an agile calligraphic vitality. Refusing the perfunctory shortcut of a tilted roman, the cursive hand tilts forward with brisk momentum, its angular ductus and fluid exits introducing genuine vocal friction and polyphonic contrast alongside the upright text. Across its three carefully calibrated weights—from the architectural transparency of the Light to the resonant authority of the Bold—Inria Serif operates in seamless polyphony with its sans-serif sibling, sharing identical vertical metrics and structural DNA. In the open commons, it stands as an enduring testament to institutional generosity: an alphabet proving that the rigorous language of digital science can inhabit the page with the quiet warmth, poise, and dignity of the book arts.`,
  familyFaces: [
    "Inria Sans"
  ],
  fontFile: "/assets/fonts/inria-serif/InriaSerif-Regular.woff2",
  features: [
    {
      type: "comparison",
      title: "Standard Ligatures",
      code: "font-feature-settings: 'liga';",
      before: { features: { liga: 0 } },
      after: { features: { liga: 1, clig: 1 } },
      examples: ["ff", "ffi", "ffl", "fi", "fl"]
    },
    {
      type: "figures",
      title: "Figures",
      options: { direction: "auto" },
      examples: [
        { text: "1234567890", label: "Proportional Lining (default)", options: { features: "normal" } },
        { text: "1234567890", label: "Tabular Lining: 'lnum', 'tnum'", options: { features: { lnum: 1, tnum: 1 } } },
        { text: "1234567890", label: "Proportional Oldstyle: 'onum'", options: { features: { onum: 1 } } },
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
      examples: ["3a", "4o"]
    },
    {
      type: "comparison",
      title: "Stylistic Sets",
      code: "font-feature-settings: 'ss--';",
      before: { features: { ss01: 0 } },
      after: { features: { ss01: 1 } },
      examples: [{ text: "HJKL", label: "'ss01'" }]
    },
    {
      type: "comparison",
      title: "Case Sensitive Forms",
      code: "font-feature-settings: 'case';",
      before: { features: { case: 0 } },
      after: { features: { case: 1 } },
      examples: ["-–—", "[]{|", "(A)"]
    }
  ],
};

export default typeface;
