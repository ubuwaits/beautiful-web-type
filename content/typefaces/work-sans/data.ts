import type { TypefaceData } from "@/lib/content/types";

const typeface: TypefaceData = {
  slug: "work-sans",
  name: "Work Sans",
  dateAdded: "2018-11-26",
  category: "Sans-Serif",
  styles: "Variable",
  glyphCount: 1349,
  italic: true,
  smallcap: true,
  weights: [
    {
      weight: 100,
      name: "Thin"
    },
    {
      weight: 200,
      name: "ExtraLight"
    },
    {
      weight: 300,
      name: "Light"
    },
    {
      weight: 400,
      name: "Regular"
    },
    {
      weight: 500,
      name: "Medium"
    },
    {
      weight: 600,
      name: "SemiBold"
    },
    {
      weight: 700,
      name: "Bold"
    },
    {
      weight: 800,
      name: "ExtraBold"
    },
    {
      weight: 900,
      name: "Black"
    }
  ],
  latestRelease: {
    version: "v2.012",
    date: "20 Oct 2021"
  },
  projectUrl: "https://github.com/weiweihuanghuang/Work-Sans",
  gFontsUrl: "https://fonts.google.com/specimen/Work+Sans",
  creator: {
    name: "Wei Huang",
    url: "https://twitter.com/w__h_"
  },
  description: `Work Sans emerged from a conscious yearning to recover the idiosyncratic vitality of the early industrial letter before mid-century modernism scrubbed it clean of human eccentricity. Commissioned by Google Fonts and drawn by Australian type designer Wei Huang, the family bypasses the cool, clinical neutrality of postwar Zurich and the compass-and-ruler dogma of the Bauhaus. Instead, it reaches back to the raw, unvarnished vigor of late nineteenth- and early twentieth-century British and American grotesques—the stubborn, physical foundry types once cast by Stephenson Blake and Miller & Richard. Released under the SIL Open Font License, it arrives not as a nostalgic reproduction of Victorian trade print, but as an energetic, contemporary vernacular forged for the flickering luminescence of the modern screen.

Its anatomy is governed by an earthy, workmanlike directness. Where mid-century neo-grotesques impose a strict, mechanical uniformity of curve and stroke, Work Sans embraces the candid asymmetries and optical adjustments native to early metal casting. Its apertures remain open and hospitable, inviting ambient light to circulate freely through the interior chambers of the glyphs, while horizontal strokes shear off with crisp, decisive geometry. Across the core text weights—tuned meticulously for reading scales on digital devices—the face casts an even, durable grey along the line, neither nervous nor aloof. The cadence is steady and conversational, anchoring running paragraphs with an unpretentious stability that refuses to editorialize or impose upon the author’s text.

Yet the brilliance of Huang’s design lies in how its personality expands across its nine-weight variable spectrum. Rather than enforcing a rigid, unyielding skeleton from hairline to heavy, Work Sans breathes with optical purpose: at its gossamer extremities, the forms adopt an airy, architectural delicacy, while at the heavier terminus—culminating in an exuberant, monolithic Black—the letters pack together with the punchy, broadsheet swagger of early poster display. Furnished with thoughtful ligatures, tabular figures, and an agile variable architecture, the family has become an indispensable staple of modern interface and editorial design. In the open commons, Work Sans endures as a masterwork of democratic craft: a versatile, hard-working instrument that honors the historic grit of the printshop while serving the digital reader with warmth, clarity, and unvarnished honesty.`,
  fontFile: "/assets/fonts/work-sans/WorkSans-Variable.woff2",
  features: [
    {
      type: "comparison",
      title: "Standard Ligatures",
      code: "font-feature-settings: 'liga';",
      before: { features: { liga: 0 } },
      after: { features: { liga: 1, clig: 1 } },
      examples: ["ff", "fi", "fl", "ffi", "ffl"]
    },
    {
      type: "comparison",
      title: "Discretionary Ligatures",
      code: "font-feature-settings: 'dlig';",
      before: { features: { dlig: 0 } },
      after: { features: { dlig: 1 } },
      examples: ["ct", "st", "Th", "ch"]
    },
    {
      type: "comparison",
      title: "Contextual Alternates",
      code: "font-feature-settings: 'calt';",
      before: { features: { calt: 0 } },
      after: { features: { calt: 1 } },
      examples: ["Qj"]
    },
    {
      type: "figures",
      title: "Figures",
      options: { direction: "auto" },
      examples: [
        { text: "1234567890", label: "Proportional Lining (default)", options: { features: "normal" } },
        { text: "1234567890", label: "Tabular Lining: 'lnum', 'tnum'", options: { features: { lnum: 1, tnum: 1 } } },
        { text: "1234567890", label: "Proportional Oldstyle: 'onum'", options: { features: { onum: 1 } } },
        { text: "1234567890", label: "Tabular Oldstyle: 'onum', 'tnum'", options: { features: { onum: 1, tnum: 1 } } },
        { text: "1/2 3/4", label: "Fractions: 'frac'", options: { features: { frac: 1 } } },
        { text: "0", label: "Slashed Zero: 'zero'", options: { features: { zero: 1 } } },
        { text: "123", label: "Numerators: 'numr'", reference: "H", options: { features: { numr: 1 } } },
        { text: "123", label: "Denominators: 'dnom'", reference: "H", options: { features: { dnom: 1 } } },
        { text: "123", label: "Subscripts: 'subs'", reference: "H", options: { features: { subs: 1 } } },
        { text: "123", label: "Scientific Inferiors: 'sinf'", reference: "H", options: { features: { sinf: 1 } } },
        { text: "123", label: "Superscripts: 'sups'", reference: "H", options: { features: { sups: 1 } } }
      ]
    },
    {
      type: "comparison",
      title: "Ordinals",
      code: "font-feature-settings: 'ordn';",
      before: { features: { ordn: 0 } },
      after: { features: { ordn: 1 } },
      examples: ["3a", "4o", "No."]
    },
    {
      type: "comparison",
      title: "Stylistic Sets",
      code: "font-feature-settings: 'ss--';",
      examples: [
        { text: "g", label: "'ss01'", before: { features: { ss01: 0 } }, after: { features: { ss01: 1 } } },
        { text: "ffl", label: "'ss02'", before: { features: { ss02: 0 } }, after: { features: { ss02: 1 } } },
        { text: "R", label: "'ss03'", before: { features: { ss03: 0 } }, after: { features: { ss03: 1 } } },
        { text: "G", label: "'ss04'", before: { features: { ss04: 0 } }, after: { features: { ss04: 1 } } },
        { text: "Ĳ", label: "'ss05'", before: { features: { ss05: 0 } }, after: { features: { ss05: 1 } } },
        { text: "a", label: "'ss06'", before: { features: { ss06: 0 } }, after: { features: { ss06: 1 } } }
      ]
    },
    {
      type: "comparison",
      title: "Stylistic Alternates",
      code: "font-feature-settings: 'salt';",
      before: { features: { salt: 0 } },
      after: { features: { salt: 1 } },
      examples: [{ text: "ffl", label: "'salt'" }]
    },
    {
      type: "comparison",
      title: "Case Sensitive Forms",
      code: "font-feature-settings: 'case';",
      before: { features: { case: 0 } },
      after: { features: { case: 1 } },
      examples: ["-–—", "[]{|", "(A)"]
    },
    {
      type: "comparison",
      title: "Swashes",
      code: "font-feature-settings: 'swsh';",
      before: { features: { swsh: 0 } },
      after: { features: { swsh: 1 } },
      examples: ["RAE", "FLM", "NST", "Wnr"]
    },
    {
      type: "comparison",
      title: "Contextual Swashes",
      code: "font-feature-settings: 'cswh';",
      before: { features: { cswh: 0 } },
      after: { features: { cswh: 1 } },
      examples: ["STW", "nrty", "RAE", "FLM"]
    },
    {
      type: "comparison",
      title: "Titling Alternates",
      code: "font-feature-settings: 'titl';",
      before: { features: { titl: 0 } },
      after: { features: { titl: 1 } },
      examples: ["ÄÖÜ"]
    },
    {
      type: "comparison",
      title: "Annotation Forms",
      code: "font-feature-settings: 'nalt';",
      before: { features: { nalt: 0 } },
      after: { features: { nalt: 1 } },
      examples: ["123", "456", "789"]
    }
  ],
};

export default typeface;
