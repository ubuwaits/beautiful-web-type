import type { TypefaceData } from "@/lib/content/types";

const typeface: TypefaceData = {
  slug: "literata",
  name: "Literata",
  dateAdded: "2026-11-26T19:18:10+01:00",
  category: "Serif",
  styles: "Variable",
  glyphCount: 1789,
  italic: true,
  smallcap: true,
  weights: [
    { weight: 200, name: "Extra Light" },
    { weight: 300, name: "Light" },
    { weight: 400, name: "Regular" },
    { weight: 500, name: "Medium" },
    { weight: 600, name: "Semi Bold" },
    { weight: 700, name: "Bold" },
    { weight: 800, name: "Extra Bold" },
    { weight: 900, name: "Black" }
  ],
  latestRelease: { version: "3.103", date: "19 May 2023" },
  projectUrl: "https://github.com/googlefonts/literata",
  gFontsUrl: "https://fonts.google.com/specimen/Literata",
  creator: { name: "TypeTogether", url: "https://www.typetogether.com/" },
  summary: "TypeTogether drew Literata for Google Play Books. Its hallmark is a nearly upright italic, with cursive letters that stand out in a line of prose.",
  description: `When Google asked TypeTogether for a typeface for Play Books, the brief was to make a novel comfortable to read on screen. Veronika Burian and José Scaglione gave the Latin letters broad, open shapes and sturdy serifs. Their most unusual decision concerned the italic, which stands almost as straight as the roman.

The word <em>page</em> shows how much can change with barely a tilt. In the roman, the <em>a</em> has two storeys and the <em>g</em> closes in a loop below the line. In the italic, the <em>a</em> becomes a single bowl and the tail of the <em>g</em> curls back like a pen stroke. An italicized book title stands out in a sentence even though its letters lean only two degrees.

Optical sizing came with Literata’s third release. At footnote sizes, the fine strokes thicken and the spacing opens up. At the scale of a chapter title, the letters fit more closely and the serifs taper to a finer point. The same adjustments run through the roman and italic, from Extra Light to Black.`,
  fontFile: "/assets/fonts/literata/Literata.woff2",
  features: [
    { type: "axis", title: "Optical Size", axis: "opsz", text: "Page", values: [7, 12, 36, 72] },
    {
      type: "comparison", title: "Standard Ligatures", code: "font-feature-settings: 'liga';",
      before: { features: { liga: 0 } }, after: { features: { liga: 1 } }, examples: ["fi", "fl", "ffi"]
    },
    {
      type: "comparison", title: "Discretionary Ligatures", code: "font-feature-settings: 'dlig';",
      before: { features: "normal" }, after: { features: { dlig: 1 } }, examples: ["ct", "st"]
    },
    {
      type: "figures", title: "Figures",
      examples: [
        { text: "0123456789", label: "Proportional lining (default)" },
        { text: "0123456789", label: "Oldstyle · onum", options: { features: { onum: 1 } } },
        { text: "0123456789", label: "Tabular lining · tnum", options: { features: { tnum: 1 } } },
        { text: "1/2 3/4", label: "Fractions · frac", options: { features: { frac: 1 } } }
      ]
    },
    {
      type: "comparison", title: "Arrows", code: "font-feature-settings: 'ss02';",
      before: { features: "normal" }, after: { features: { ss02: 1 } }, examples: ["a", "b", "c", "d"]
    }
  ]
};

export default typeface;
