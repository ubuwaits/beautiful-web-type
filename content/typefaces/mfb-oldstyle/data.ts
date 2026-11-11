import type { TypefaceData } from "@/lib/content/types";

const typeface: TypefaceData = {
  slug: "mfb-oldstyle",
  name: "MFB Oldstyle",
  dateAdded: "2026-11-11T08:35:01+01:00",
  category: "Serif",
  styles: 4,
  glyphCount: 2615,
  italic: true,
  smallcap: true,
  weights: [
    { weight: 400, name: "Regular" },
    { weight: 700, name: "Bold" }
  ],
  latestRelease: { version: "v2.2", date: "3 Nov 2026" },
  projectUrl: "https://github.com/dbenjaminmiller/mfb-oldstyle",
  creator: { name: "Daniel Benjamin Miller", url: "https://github.com/dbenjaminmiller" },
  summary: "MFB Oldstyle is Daniel Benjamin Miller’s revival of Century Oldstyle, a serif for book and editorial text with small capitals and polytonic Greek.",
  description: `Daniel Benjamin Miller’s MFB Oldstyle revives <em>Century Oldstyle</em>, which Morris Fuller Benton designed for American Type Founders and the foundry released in 1909. The design brings the inclined stress and bracketed serifs of old-style printing types to the Century family, whose earlier romans have a more vertical axis. Miller first released the digital revival in 2024 and expanded the family in 2026 with bold italic, polytonic Greek, and refinements to drawing and spacing. The fonts are also available for TeX and LaTeX.

The upright combines open counters and a generous x-height with moderate stroke contrast. Firm, bracketed serifs give the line a steady footing, and rounded terminals on letters such as <em>c</em> and <em>r</em> soften the texture. Regular and bold each have a drawn italic. All four styles include small capitals, lining and old-style figures in proportional and tabular widths, and superior and inferior numerals. A broad set of <em>f</em>-ligatures is joined by discretionary <em>ct</em> and <em>st</em> forms.

MFB Oldstyle suits books, essays, and scholarly editions. Its small capitals can distinguish abbreviations and running heads, and its old-style figures follow the rhythm of lowercase text. Tabular lining figures align numbers in columns, while polytonic Greek supports editions that set classical passages alongside commentary.`,
  fontFile: "/assets/fonts/mfb-oldstyle/MFBOldstyle-Regular.woff2",
  features: [
    {
      type: "comparison", title: "Standard Ligatures", code: "font-feature-settings: 'liga';",
      before: { features: { liga: 0 } }, after: { features: { liga: 1 } }, examples: ["ff", "ffi", "ffl", "fft"]
    },
    {
      type: "comparison", title: "Discretionary Ligatures", code: "font-feature-settings: 'dlig';",
      before: { features: { dlig: 0 } }, after: { features: { dlig: 1 } }, examples: ["ct", "st"]
    },
    {
      type: "comparison", title: "Small Capitals", code: "font-feature-settings: 'smcp';",
      before: { features: { smcp: 0 } }, after: { features: { smcp: 1 } }, examples: ["Oldstyle", "Chapter"]
    },
    {
      type: "figures", title: "Figures",
      examples: [
        { text: "1234567890", label: "Tabular Lining (default)", options: { features: "normal" } },
        { text: "1234567890", label: "Tabular Oldstyle: 'onum'", options: { features: { onum: 1 } } },
        { text: "1234567890", label: "Proportional Lining: 'pnum'", options: { features: { pnum: 1 } } },
        { text: "1/2 3/4", label: "Fractions: 'frac'", options: { features: { frac: 1 } } },
        { text: "123", reference: "H", label: "Superscripts: 'sups'", options: { features: { sups: 1 } } },
        { text: "123", reference: "H", label: "Scientific Inferiors: 'sinf'", options: { features: { sinf: 1 } } }
      ]
    },
    {
      type: "comparison", title: "Greek Capitals Without Accents", code: "font-feature-settings: 'ss01';",
      before: { language: "el", features: { ss01: 0 } }, after: { language: "el", features: { ss01: 1 } }, examples: ["ἌΝΘΡΩΠΟΣ"]
    }
  ]
};

export default typeface;
