import type { TypefaceData } from "@/lib/content/types";

const typeface: TypefaceData = {
  slug: "google-sans-flex",
  name: "Google Sans Flex",
  dateAdded: "2026-11-26T19:08:35+01:00",
  category: "Sans-Serif",
  styles: "Variable",
  italic: true,
  glyphCount: 686,
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
  latestRelease: { version: "v5.000", date: "9 Oct 2026" },
  projectUrl: "https://github.com/googlefonts/googlesans-flex",
  gFontsUrl: "https://fonts.google.com/specimen/Google+Sans+Flex",
  creator: { name: "Google", url: "https://design.google/library/google-sans-flex-font" },
  summary: "Google Sans Flex extends Google’s geometric brand typeface with variable width, optical size, and rounded terminals for interface text and display headings.",
  description: `Google Sans Flex traces its origins to <em>Product Sans</em>, the geometric lettering Google introduced with its 2015 identity. Google Sans carried those forms into the company’s interfaces. For Flex, Google worked with Font Bureau and Pathfinders to adapt the family to a wider range of settings, from small labels on a watch face to large titles on a phone. Google released the family as open source in 2025.

The round bowl of the lowercase <em>g</em> recurs in <em>o</em> and <em>e</em>, giving the upright a distinctly geometric rhythm. The default <em>a</em> has two storeys and the <em>g</em> has one. Separate stylistic sets reverse those choices independently. The roundness axis changes a different detail entirely. As its value rises, the flat ends of strokes on letters such as <em>l</em> soften into rounded caps. The effect is especially clear in a heavy headline.

Width and optical size give the family two ways to adapt to a layout. A narrow width can fit a long heading into a fixed measure, while optical sizing adjusts the drawing to the scale of the text. The slant axis runs continuously from upright to the family’s ten-degree italic. For interfaces that mix words and changing values, optional tabular figures keep the digits of a clock or counter aligned.`,
  fontFile: "/assets/fonts/google-sans-flex/GoogleSansFlex.woff2",
  features: [
    { type: "axis", title: "Roundness", axis: "ROND", text: "Flat", values: [0, 50, 100] },
    { type: "axis", title: "Width", axis: "wdth", text: "Wide", values: [25, 100, 151] },
    { type: "axis", title: "Optical Size", axis: "opsz", text: "Type", values: [1, 18, 144] },
    { type: "axis", title: "Slant", axis: "slnt", text: "Tilt", values: [0, -5, -10] },
    {
      type: "comparison", title: "Stylistic Sets",
      before: { features: "normal" },
      examples: [
        { text: "a", label: "Single-storey a · ss01", after: { features: { ss01: 1 } } },
        { text: "g", label: "Double-storey g · ss02", after: { features: { ss02: 1 } } },
        { text: "©", label: "Alternate copyright · ss09", after: { features: { ss09: 1 } } }
      ]
    },
    {
      type: "comparison", title: "Standard Ligatures", code: "font-feature-settings: 'liga';",
      before: { features: { liga: 0 } }, after: { features: { liga: 1 } }, examples: ["fi", "fl", "ffi"]
    },
    {
      type: "figures", title: "Figures",
      examples: [
        { text: "0123456789", label: "Proportional lining (default)" },
        { text: "0123456789", label: "Tabular lining · tnum", options: { features: { tnum: 1 } } },
        { text: "1/2 3/4", label: "Fractions · frac", options: { features: { frac: 1 } } },
        { text: "0", label: "Slashed zero · zero", options: { features: { zero: 1 } } }
      ]
    }
  ]
};

export default typeface;
