import type { TypefaceData } from "@/lib/content/types";

const typeface: TypefaceData = {
  slug: "eb-garamond",
  name: "EB Garamond",
  dateAdded: "2026-11-02T19:22:41+01:00",
  category: "Serif",
  styles: "Variable",
  glyphCount: 3247,
  italic: true,
  smallcap: true,
  weights: [
    { weight: 400, name: "Regular" },
    { weight: 500, name: "Medium" },
    { weight: 600, name: "Semi Bold" },
    { weight: 700, name: "Bold" },
    { weight: 800, name: "Extra Bold" }
  ],
  websiteHero: {
    wordmark: { weight: 600, size: 24, lineHeight: "28px", letterSpacing: "-0.025em" },
    headline: { weight: 500, size: "clamp(2.25rem, 6.3cqw, 5.875rem)", lineHeight: 1.02, letterSpacing: "-0.045em" },
    description: { weight: 400, size: 16, desktopSize: 18, lineHeight: "28px" },
    action: { weight: 400, size: 14, lineHeight: "24px" },
    caseLocation: { weight: 400, size: 12, lineHeight: "20px", letterSpacing: "0.025em", textTransform: "uppercase" },
    caseTitle: { weight: 600, size: 24, lineHeight: 1.15, letterSpacing: "-0.025em" },
    caseBody: { weight: 400, size: 14, lineHeight: "24px" },
    tableLabel: { weight: 400, size: 14, lineHeight: "20px" },
    tableValue: { weight: 500, size: 14, lineHeight: "20px", features: { lnum: 1, tnum: 1 } },
  },
  latestRelease: { version: "v1.002", date: "21 Feb 2026" },
  projectUrl: "https://github.com/octaviopardo/EBGaramond12",
  gFontsUrl: "https://fonts.google.com/specimen/EB+Garamond",
  creator: { name: "Georg Duffner & Octavio Pardo", url: "https://github.com/octaviopardo/EBGaramond12" },
  summary: "EB Garamond revives Garamont’s Renaissance types, with Granjon-inspired italics, small capitals, and variable weights for literary and academic publishing.",
  description: `EB Garamond was initiated by German designer Georg Duffner as a scholarly revival of Claude Garamont’s sixteenth-century types. Duffner returned to the 1592 specimen sheet issued by the Egenolff-Berner foundry in Frankfurt, which showcased Garamont’s roman types alongside companion italics cut by Robert Granjon. Octavio Pardo later expanded the family with variable weights and broader linguistic coverage, extending its use as a historically grounded Garalde text face.

Anatomically, the design preserves the organic, calligraphic cadence of the broad-nib pen, resisting the mechanical standardization common to commercial revivals. Proportions are governed by a historically restrained x-height paired with tall, graceful ascenders and deep descenders, establishing an airy, unhurried rhythm along the measure. The strokes follow a gentle diagonal stress, supported by softly cupped, bracketed serifs that give the baseline a rooted, steady foot. Terminals on letters like <em>c</em>, <em>f</em>, and <em>r</em> swell into delicate teardrops, while the lowercase <em>e</em> features a high, slender crossbar that bounds a compact eye. In its Granjon-derived italic, the face shifts into an authentic, flowing cursive hand characterized by varying angles of inclination and long, sweeping descenders. Furnished with true small capitals, historical ligatures, and proportional oldstyle figures, the family weaves a warm, textured page that allows ambient light to circulate freely through the line.

EB Garamond’s sixteenth-century proportions suit sustained literary and academic typography: books, scholarly monographs, poetry collections, and long-form digital essays. Generous leading and margins give its tall extenders and delicate details room to unfold, while its small capitals, figures, and ligatures support the finer hierarchies of book composition.`,
  fontFile: "/assets/fonts/eb-garamond/EBGaramond.woff2",
  features: [
    {
      type: "comparison", title: "Small Capitals", code: "font-feature-settings: 'smcp';",
      before: { features: { smcp: 0 } }, after: { features: { smcp: 1 } }, examples: ["Abcde"]
    },
    {
      type: "comparison", title: "Petite Capitals", code: "font-feature-settings: 'pcap';",
      before: { features: { pcap: 0 } }, after: { features: { pcap: 1 } }, examples: ["Abcde"]
    },
    {
      type: "comparison", title: "Standard Ligatures", code: "font-feature-settings: 'liga';",
      before: { features: { liga: 0 } }, after: { features: { liga: 1 } }, examples: ["ff", "fi", "fl", "ffi", "ffl"]
    },
    {
      type: "comparison", title: "Discretionary Ligatures", code: "font-feature-settings: 'dlig';",
      before: { features: { dlig: 0 } }, after: { features: { dlig: 1 } }, examples: ["Th", "ct", "st", "Qy"]
    },
    {
      type: "comparison", title: "Historical Ligatures", code: "font-feature-settings: 'hlig';",
      before: { features: { hlig: 0 } }, after: { features: { hlig: 1 } }, examples: ["ſt", "ſi", "ſſi"]
    },
    {
      type: "figures", title: "Figures",
      examples: [
        { text: "1234567890", label: "Tabular Lining (default)", options: { features: "normal" } },
        { text: "1234567890", label: "Proportional Lining: 'pnum'", options: { features: { pnum: 1 } } },
        { text: "1234567890", label: "Proportional Oldstyle: 'onum', 'pnum'", options: { features: { onum: 1, pnum: 1 } } },
        { text: "1234567890", label: "Tabular Oldstyle: 'onum', 'tnum'", options: { features: { onum: 1, tnum: 1 } } },
        { text: "1/2 3/4", label: "Fractions: 'frac'", options: { features: { frac: 1 } } },
        { text: "123", reference: "H", label: "Numerators: 'numr'", options: { features: { numr: 1 } } },
        { text: "123", reference: "H", label: "Denominators: 'dnom'", options: { features: { dnom: 1 } } },
        { text: "123", reference: "H", label: "Subscripts: 'subs'", options: { features: { subs: 1 } } },
        { text: "123", reference: "H", label: "Scientific Inferiors: 'sinf'", options: { features: { sinf: 1 } } },
        { text: "123", reference: "H", label: "Superscripts: 'sups'", options: { features: { sups: 1 } } }
      ]
    },
    {
      type: "comparison", title: "Ordinals", code: "font-feature-settings: 'ordn';",
      before: { features: { ordn: 0 } }, after: { features: { ordn: 1 } }, examples: ["1st", "3a"]
    },
    {
      type: "comparison", title: "Swashes", code: "font-feature-settings: 'swsh';",
      before: { italic: true, features: { swsh: 0 } }, after: { italic: true, features: { swsh: 1 } }, examples: ["ABC", "QRS"]
    },
    {
      type: "comparison", title: "Stylistic Sets", code: "font-feature-settings: 'ss--';",
      examples: [
        { text: "abc", label: "'ss01' · Petite capitals", after: { features: { ss01: 1 } } },
        { text: "ok", label: "'ss02' · Symbols", after: { features: { ss02: 1 } } },
        { text: "arrowright", label: "'ss03' · Arrows", after: { features: { ss03: 1 } } },
        { text: "*()", label: "'ss04' · Ornaments", after: { features: { ss04: 1 } } },
        { text: "ß", label: "'ss05' · Alternate eszett", after: { features: { ss05: 1 } } },
        { text: "Q", label: "'ss06' · Long-tailed Q", after: { features: { ss06: 1 } } },
        { text: "Jjs", label: "'ss07' · Historical forms", after: { features: { ss07: 1 } } }
      ]
    }
  ]
};

export default typeface;
