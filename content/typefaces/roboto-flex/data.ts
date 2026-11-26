import type { TypefaceData } from "@/lib/content/types";

const typeface: TypefaceData = {
  slug: "roboto-flex",
  name: "Roboto Flex",
  dateAdded: "2026-11-26T19:49:49+01:00",
  category: "Sans-Serif",
  styles: "Variable",
  glyphCount: 948,
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
    { weight: 900, name: "Black" },
    { weight: 1000, name: "Extra Black" }
  ],
  latestRelease: { version: "v3.200", date: "30 Jun 2023" },
  projectUrl: "https://github.com/googlefonts/roboto-flex",
  gFontsUrl: "https://fonts.google.com/specimen/Roboto+Flex",
  creator: { name: "Font Bureau", url: "https://fontbureau.com/" },
  familyFaces: ["Roboto", "Roboto Serif"],
  summary: "Font Bureau’s variable interpretation of Roboto gives designers independent control over the thickness of the strokes, the space inside the letters, and the proportions of capitals, lowercase, and figures.",
  description: `Roboto Flex began with Christian Robertson’s sans serif for Android and an idea Font Bureau had explored in <em>Amstelvar</em>, an early variable serif. A designer could change the weight of an entire face or make a much finer adjustment, such as deepening the descenders or narrowing the space inside a bowl. Google commissioned Font Bureau to bring that approach to Roboto, and released the family in 2022.

Optical sizing shows how several of those proportions work together. In the word <em>Hope</em>, the capital keeps its height across the optical sizes. At caption sizes the lowercase stands tall beside it, with broad bowls and room between the letters. At headline sizes the bowls narrow and the lowercase sits visibly lower against the <em>H</em>. The same word takes up less space even when the two settings are shown at the same point size.

Flex also lets the typographer adjust those details individually. The lowercase height control raises the bowl of the <em>p</em>, while the descender control governs how far its stem reaches below the line. Figures have their own height control, so the numerals in a date can sit closer to the height of the surrounding lowercase. For tables, the default digits all occupy the same width. Switching to proportional figures gives a narrow digit like <em>1</em> a closer fit in running text.`,
  fontFile: "/assets/fonts/roboto-flex/RobotoFlex.woff2",
  features: [
    { type: "axis", title: "Optical Size", axis: "opsz", text: "Hope", values: [8, 14, 144] },
    { type: "axis", title: "Lowercase Height", axis: "YTLC", axes: { opsz: 48 }, text: "Hope", values: [416, 514, 570] },
    { type: "axis", title: "Descender Depth", axis: "YTDE", axes: { opsz: 48 }, text: "dipping", values: [-98, -203, -305] },
    { type: "axis", title: "Figure Height", axis: "YTFI", axes: { opsz: 48 }, text: "May 24", values: [560, 738, 788] },
    { type: "axis", title: "Grade", axis: "GRAD", axes: { opsz: 48 }, text: "Grade", values: [-200, 0, 150] },
    {
      type: "comparison", title: "Standard Ligatures", code: "font-feature-settings: 'liga';",
      before: { features: { liga: 0 } }, after: { features: { liga: 1 } }, examples: ["fi", "fl", "ffi", "ffl"]
    },
    {
      type: "figures", title: "Figures",
      examples: [
        { text: "0123456789", label: "Tabular lining (default)" },
        { text: "0123456789", label: "Proportional lining · pnum", options: { features: { pnum: 1 } } }
      ]
    }
  ]
};

export default typeface;
