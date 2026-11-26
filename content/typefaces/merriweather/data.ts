import type { TypefaceData } from "@/lib/content/types";

const typeface: TypefaceData = {
  slug: "merriweather",
  name: "Merriweather",
  dateAdded: "2026-11-26T21:13:15+01:00",
  category: "Serif",
  styles: "Variable",
  glyphCount: 2384,
  italic: true,
  smallcap: true,
  weights: [
    { weight: 300, name: "Light" },
    { weight: 400, name: "Regular" },
    { weight: 500, name: "Medium" },
    { weight: 600, name: "Semi Bold" },
    { weight: 700, name: "Bold" },
    { weight: 800, name: "Extra Bold" },
    { weight: 900, name: "Black" }
  ],
  latestRelease: { version: "2.100", date: "29 Jan 2025" },
  projectUrl: "https://github.com/SorkinType/Merriweather",
  gFontsUrl: "https://fonts.google.com/specimen/Merriweather",
  creator: { name: "Eben Sorkin", url: "https://github.com/EbenSorkin" },
  summary: "Eben Sorkin drew Merriweather for reading on screen. Its tall lowercase and compact proportions give a narrow column of text the presence of larger type.",
  description: `Eben Sorkin drew Merriweather for reading on screen. When it appeared on Google Fonts in 2011, it was an upright serif with an unusually tall lowercase. The proportions work particularly well in a narrow column. The letters are compact from side to side, but the generous height leaves plenty of white inside them, even at small sizes.

There’s a trace of the broad pen in the roman. The sides of the round letters swell on a slight diagonal, and the serifs slope across the tops of the upright strokes. Sorkin added an italic in 2013. It has a quicker, more cursive hand, especially clear in a word like <em>reading</em>, where the <em>a</em> takes a single-storey form and the tail of the <em>g</em> sweeps back under the line.

The variable edition extends the family from text to display. At the scale of a headline, the serifs taper, the fine strokes grow finer, and the lowercase sits a little lower beside the capitals. The letters fit more closely, too. Width can be adjusted independently, so a designer can open up a short title or fit a longer one in the same space.`,
  fontFile: "/assets/fonts/merriweather/Merriweather.woff2",
  features: [
    { type: "axis", title: "Optical Size", axis: "opsz", text: "Page", values: [18, 48, 144] },
    { type: "axis", title: "Width", axis: "wdth", text: "Press", values: [87, 100, 112] },
    {
      type: "comparison", title: "Alternate Punctuation",
      before: { features: "normal" },
      examples: [
        { text: "“”", label: "Quotation marks · ss01", after: { features: { ss01: 1 } } },
        { text: "$", label: "Dollar sign · ss02", after: { features: { ss02: 1 } } },
        { text: "¿?", label: "Question marks · ss03", after: { features: { ss03: 1 } } }
      ]
    },
    {
      type: "figures", title: "Figures",
      examples: [
        { text: "0123456789", label: "Proportional lining (default)" },
        { text: "0123456789", label: "Oldstyle · onum", options: { features: { onum: 1 } } },
        { text: "0123456789", label: "Tabular lining · tnum", options: { features: { tnum: 1 } } },
        { text: "1/2 3/4", label: "Fractions · frac", options: { features: { frac: 1 } } }
      ]
    }
  ]
};

export default typeface;
