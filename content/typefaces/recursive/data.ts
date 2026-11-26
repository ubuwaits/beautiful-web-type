import type { TypefaceData } from "@/lib/content/types";

const typeface: TypefaceData = {
  slug: "recursive",
  name: "Recursive",
  dateAdded: "2026-11-26T20:29:15+01:00",
  category: "Sans-Serif",
  styles: "Variable",
  italic: true,
  glyphCount: 1304,
  weights: [
    { weight: 300, name: "Light" },
    { weight: 400, name: "Regular" },
    { weight: 500, name: "Medium" },
    { weight: 600, name: "Semi Bold" },
    { weight: 700, name: "Bold" },
    { weight: 800, name: "Extra Bold" },
    { weight: 900, name: "Black" },
    { weight: 1000, name: "Extra Black" }
  ],
  latestRelease: { version: "v1.085", date: "30 Jun 2022" },
  projectUrl: "https://github.com/arrowtype/recursive",
  gFontsUrl: "https://fonts.google.com/specimen/Recursive",
  creator: { name: "Stephen Nixon", url: "https://www.arrowtype.com/custom/recursive" },
  summary: "Recursive combines five variable axes in one font. Its brush-drawn Casual and square-ended Linear forms span the full range from proportional text to fixed-width code.",
  description: `Recursive spans a fixed-width face for code and a proportional sans for text. Two of its five axes, Monospace and Casual, let the designer choose the spacing and how closely the letters resemble brush lettering. Weight, Slant, and Cursive work across that whole range, so even a fixed-width setting can have the heavy strokes and sloping forms of a painted sign.

Stephen Nixon began Recursive as his 2018 thesis at the Royal Academy of Art in The Hague. He admired the single-stroke casual lettering on New York storefronts and wanted to see how its curves would fit the fixed width of a programming face. The monospace came first, followed by a proportional sans drawn from it. In 2019, Google Fonts commissioned Nixon to finish the family for open-source release.

Nixon drew each letter twice. He based the Casual drawing on his flat-brush sketches and gave the Linear drawing straighter sides and square ends. The two outlines have matching points, so the same stroke can change shape gradually. In Linear, the lowercase <em>h</em> has a broad shoulder and a straight right leg. Toward Casual, the shoulder rises more steeply and the foot curves outward.`,
  fontFile: "/assets/fonts/recursive/Recursive.woff2",
  features: [
    { type: "axis", title: "Linear to Casual", axis: "CASL", axes: { wght: 650 }, text: "Brush", values: [0, 0.5, 1] },
    { type: "axis", title: "Proportional to Monospaced", axis: "MONO", text: "mill", values: [0, 0.5, 1] },
    { type: "axis", title: "Cursive Forms", axis: "CRSV", text: "again", values: [0, 1] },
    {
      type: "comparison", title: "Programming Ligatures", code: "font-feature-settings: 'dlig';",
      before: { axes: { MONO: 1 }, features: { dlig: 0 } },
      after: { axes: { MONO: 1 }, features: { dlig: 1 } },
      examples: ["!=", "<=", "->", "=>", "==="]
    },
    {
      type: "figures", title: "Zero",
      examples: [
        { text: "0O", label: "Default" },
        { text: "0O", label: "Dotted zero · ss10", options: { features: { ss10: 1 } } },
        { text: "0O", label: "Slashed zero · ss20", options: { features: { ss20: 1 } } }
      ]
    }
  ]
};

export default typeface;
