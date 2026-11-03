import type { TypefaceData } from "@/lib/content/types";

const typeface: TypefaceData = {
  slug: "piazzolla",
  name: "Piazzolla",
  dateAdded: "2026-11-02",
  category: "Serif",
  styles: "Variable",
  glyphCount: 2328,
  italic: true,
  smallcap: true,
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
  latestRelease: { version: "v2.005", date: "13 Jan 2022" },
  projectUrl: "https://github.com/huertatipografica/piazzolla",
  gFontsUrl: "https://fonts.google.com/specimen/Piazzolla",
  creator: { name: "Juan Pablo del Peral", url: "https://www.huertatipografica.com/" },
  description: `Piazzolla was designed by Argentine type designer Juan Pablo del Peral through Huerta Tipográfica and released in 2020 through Google Fonts. Named after composer Ástor Piazzolla, the project was conceived as an extensive editorial serif family capable of managing complex document hierarchies across print and screen. Rather than replicating a specific historical metal type, del Peral synthesized characteristics of English transitional serifs with the visible ductus of the broad-nib pen, producing an adaptable system tailored for both sustained reading and display titling.

Anatomically, the typeface balances the structured skeleton of transitional letterforms with fluid calligraphic details. Stems are anchored by sturdy, bracketed serifs with slightly concave baselines, while terminals on characters like <em>c</em>, <em>f</em>, and <em>r</em> resolve into compact teardrop shapes. Piazzolla’s primary technical asset is its variable architecture, which operates along continuous axes for Weight (Thin to Black) and Optical Size (8pt to 30pt). At smaller text settings, stroke contrast softens, hairlines gain structural thickness, and apertures open to preserve counter space under micro-rasterization. At headline scales, the contrast sharpens, joints taper into crisp intersections, and stroke modulation becomes pronounced. The companion italic functions as a true cursive hand, rolling forward with dynamic entry strokes and single-storey lowercase constructions that provide clear vocal contrast in running text.

This optical elasticity clearly delineates its utility. Piazzolla is ill-suited to dense software interfaces, tabular dashboards, or neutral product chrome, where its stroke modulation and calligraphic gestures can compete with compact information. Instead, it belongs in long-form editorial publishing—literary journals, monographs, printed volumes, and digital essay formats. At small optical values, its text cuts maintain an even, readable cadence across extended passages; scaled up to display weights, its crisp contrast and calligraphic terminals handle covers, section dividers, and mastheads with clarity.`,
  fontFile: "/assets/fonts/piazzolla/glyphs-regular.woff2",
  glyphSource: "/assets/fonts/piazzolla/Piazzolla.woff2",
  features: [
    { type: "axis", title: "Optical Size", axis: "opsz", text: "Optical", values: [8, 18, 30] },
    {
      type: "comparison", title: "Small Capitals", code: "font-feature-settings: 'smcp';",
      before: { features: { smcp: 0 } }, after: { features: { smcp: 1 } }, examples: ["Abcde"]
    },
    {
      type: "comparison", title: "Standard Ligatures", code: "font-feature-settings: 'liga';",
      before: { features: { liga: 0 } }, after: { features: { liga: 1 } }, examples: ["fi", "fl", "λλ"]
    },
    {
      type: "figures", title: "Figures",
      examples: [
        { text: "1234567890", label: "Proportional Lining (default)", options: { features: "normal" } },
        { text: "1234567890", label: "Tabular Lining: 'tnum'", options: { features: { tnum: 1 } } },
        { text: "1234567890", label: "Proportional Oldstyle: 'onum'", options: { features: { onum: 1 } } },
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
      type: "comparison", title: "Stylistic Sets", code: "font-feature-settings: 'ss--';",
      examples: [
        { text: "XIV", label: "'ss01' · Roman numerals", before: { features: { ss01: 0 } }, after: { features: { ss01: 1 } } },
        { text: "->", label: "'ss02' · Arrows", before: { features: { ss02: 0 } }, after: { features: { ss02: 1 } } },
        { text: "ᾼ", label: "'ss03'", before: { features: { ss03: 0 } }, after: { features: { ss03: 1 } } },
        { text: "ᾳ", label: "'ss04' · Small caps", before: { features: { smcp: 1, ss04: 0 } }, after: { features: { smcp: 1, ss04: 1 } } }
      ]
    }
  ]
};

export default typeface;
