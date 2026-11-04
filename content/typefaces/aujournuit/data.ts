import type { TypefaceData } from "@/lib/content/types";

const typeface: TypefaceData = {
  slug: "aujournuit",
  name: "Aujournuit",
  dateAdded: "2026-11-02T22:26:05+01:00",
  category: "Display",
  styles: "Variable",
  glyphCount: 418,
  weights: [{ weight: 400, name: "Regular" }],
  websiteHero: {
    wordmark: { weight: 400 },
    headline: { weight: 400 },
    caseTitle: { weight: 400 },
    tableValue: { weight: 400 },
  },
  latestRelease: { version: "v1.006", date: "11 Mar 2026" },
  projectUrl: "https://github.com/collletttivo/aujournuit",
  creator: { name: "Teo Gaudet", url: "https://www.collletttivo.it/typefaces/aujournuit" },
  summary: "Aujournuit is a calligraphic display face by Téo Gaudet, with a variable width axis that stretches its contrasting strokes from condensed to expansive forms.",
  description: `Aujournuit was designed by French type designer Téo Gaudet and released in 2024 through the open-source collective Collletttivo. The project drew its primary reference from the title lettering of "Chemins Perdus," a feature published in a 1956 issue of the French magazine Constellation. Rather than producing a historical facsimile, Gaudet used the fluid ductus of the mid-century hand-lettering to examine how organic, ink-laden strokes and irregular script behaviors translate into a contemporary parametric display face.

Anatomically, the design is defined by acute stroke modulation, elastic contours, and visible calligraphic gestures. Stems alternate between fine hairlines and heavy, swelling strokes that taper into rounded, droplet-like terminals. Rather than expanding across a conventional weight spectrum, the family is engineered entirely around an extreme horizontal Width axis. Distributed as a continuous variable font alongside five static instances—Condensed, Densed, Regular, Wide, and Airy—the glyphs transition from tightly packed vertical silhouettes into broad, low-density horizontal structures. As the measure expands, interior counters open up and the contrast sharpens, establishing an animated, syncopated cadence along the baseline.

Aujournuit’s calligraphic structure comes into focus in large-scale titling: editorial mastheads, book jackets, posters, cultural identities, and packaging. Its variable width lets a title shift from a compact vertical silhouette to a broad horizontal gesture, making the letterforms an active part of the composition.`,
  fontFile: "/assets/fonts/aujournuit/glyphs-regular.woff2",
  glyphSource: "/assets/fonts/aujournuit/Aujournuit.woff2",
  features: [
    { type: "axis", title: "Width", axis: "wdth", text: "Ink", values: [50, 75, 100, 175, 200] },
    {
      type: "comparison", title: "Standard Ligatures", code: "font-feature-settings: 'liga';",
      before: { features: { liga: 0 } }, after: { features: { liga: 1 } }, examples: ["ff", "fi", "fl", "ffi", "ffl"]
    },
    {
      type: "comparison", title: "Discretionary Ligatures", code: "font-feature-settings: 'dlig';",
      before: { features: { dlig: 0 } }, after: { features: { dlig: 1 } }, examples: ["ffk"]
    },
    {
      type: "comparison", title: "Zodiac Symbols", code: "font-feature-settings: 'clig';",
      before: { features: { clig: 0 } }, after: { features: { clig: 1 } }, examples: ["leo", "virgo", "aries", "venus"]
    },
    {
      type: "figures", title: "Figures",
      examples: [
        { text: "1234567890", label: "Proportional Lining (default)", options: { features: "normal" } },
        { text: "1/2 3/4", label: "Fractions: 'frac'", options: { features: { frac: 1 } } },
        { text: "123", reference: "H", label: "Superscripts: 'sups'", options: { features: { sups: 1 } } }
      ]
    },
    {
      type: "comparison", title: "Ordinals", code: "font-feature-settings: 'ordn';",
      before: { features: { ordn: 0 } }, after: { features: { ordn: 1 } }, examples: ["3a", "4o"]
    },
    {
      type: "comparison", title: "Stylistic Set 01", code: "font-feature-settings: 'ss01';",
      before: { features: { ss01: 0 } }, after: { features: { ss01: 1 } }, examples: ["A", "a", "j"]
    }
  ]
};

export default typeface;
