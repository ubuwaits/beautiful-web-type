import type { TypefaceData } from "@/lib/content/types";

const typeface: TypefaceData = {
  slug: "allo",
  name: "Allo",
  dateAdded: "2026-11-16T16:14:40+01:00",
  category: "Sans-Serif",
  styles: "Variable",
  glyphCount: 606,
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
  latestRelease: { version: "1.0", date: "15 Nov 2026" },
  projectUrl: "https://allo.joshpuckett.me/",
  creator: { name: "Josh Puckett", url: "https://joshpuckett.me/" },
  summary: "Allo is Josh Puckett’s rounded sans serif for screens, with adjustable roundness, optical sizing, and drawn obliques from Thin to Black.",
  description: `Allo takes the familiar proportions of <em>Inter</em> and gives them a softer edge. Designed by Josh Puckett and released in 2026 under the SIL Open Font License, the family began with Rasmus Andersson’s <em>Inter</em> 4.2. Puckett redrew every glyph and reworked the spacing and kerning, drawing on the rounded forms of Seb McLauchlan’s <em>Honk Sans</em>. The result has the steady rhythm of a screen sans with a more informal character that comes to the fore at display sizes.

The effect is clearest where straight strokes meet. At the sharp end of the roundness axis, the apex of <em>A</em> and the ends of <em>l</em> are cut square. As the setting rises, the apex softens and the upright stems take on nearly semicircular ends. The open mouths of <em>c</em> and <em>e</em> give the lowercase an airy texture even as these details become more pronounced. At its smallest optical size, Allo gives the text outlines additional room between letters. At display sizes it tightens the fit and adjusts the outlines for larger settings. The upright runs from Thin to Black, with a separately drawn oblique at each named weight.

Allo suits product interfaces and documentation that share a typographic voice with their display headlines. The text cuts give short labels and compact instructions an even rhythm, while a heavier weight and more rounded terminals give a heading a distinct profile. In numerical settings, tabular figures keep values aligned, and a stylistic set distinguishes <em>I</em>, <em>l</em>, <em>1</em>, and <em>0</em> with details such as a footed one and a slashed zero.`,
  fontFile: "/assets/fonts/allo/AlloVariable.woff2",
  features: [
    { type: "axis", title: "Optical Size", axis: "opsz", text: "Allo", values: [9, 14, 32] },
    { type: "axis", title: "Roundness", axis: "ROND", text: "Allo", values: [0, 50, 100] },
    {
      type: "figures", title: "Figures",
      examples: [
        { text: "1234567890", label: "Proportional (default)" },
        { text: "1234567890", label: "Tabular: 'tnum'", options: { features: { tnum: 1 } } },
        { text: "1/2 3/4", label: "Fractions: 'frac'", options: { features: { frac: 1 } } },
        { text: "0", label: "Slashed Zero: 'zero'", options: { features: { zero: 1 } } }
      ]
    },
    {
      type: "comparison", title: "Stylistic Sets", code: "font-feature-settings: 'ss--';",
      before: { features: "normal" },
      examples: [
        { text: "a", label: "'ss01'", after: { features: { ss01: 1 } } },
        { text: "Il10", label: "'ss02'", after: { features: { ss02: 1 } } },
        { text: "469", label: "'ss03'", after: { features: { ss03: 1 } } }
      ]
    },
    {
      type: "comparison", title: "Contextual Alternates", code: "font-feature-settings: 'calt';",
      before: { features: { calt: 0 } }, after: { features: { calt: 1 } },
      examples: ["->", "<-", "[ABC]"]
    },
    {
      type: "comparison", title: "Standard Ligatures", code: "font-feature-settings: 'liga';",
      before: { features: { liga: 0 } }, after: { features: { liga: 1 } },
      examples: ["tt", "ff", "tf", "ft"]
    }
  ]
};

export default typeface;
