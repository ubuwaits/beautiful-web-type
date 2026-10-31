import type { TypefaceData } from "@/lib/content/types";

const typeface: TypefaceData = {
  slug: "firago",
  name: "FiraGO",
  dateAdded: "2018-10-23",
  category: "Sans-Serif",
  styles: 22,
  glyphCount: 4577,
  italic: true,
  smallcap: true,
  weights: [
    {
      weight: 100,
      name: "Thin"
    },
    {
      weight: 200,
      name: "UltraLight"
    },
    {
      weight: 250,
      name: "ExtraLight"
    },
    {
      weight: 300,
      name: "Light"
    },
    {
      weight: 350,
      name: "Book"
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
      name: "Heavy"
    }
  ],
  latestRelease: {
    version: "v1.001",
    date: "20 Mar 2018"
  },
  projectUrl: "https://github.com/bBoxType/FiraGO",
  creator: {
    name: "bBox Type",
    url: "https://bboxtype.com"
  },
  description: `FiraGO represents the global maturation of a lineage that began with Erik Spiekermann’s quest to rescue the utilitarian sans-serif from mechanical numbness. Descended directly from <em>Fira Sans</em>—itself forged for Mozilla from the foundational skeleton of <em>FF Meta</em>—FiraGO was summoned into existence through a commission by the navigation firm HERE Technologies. Designed by Ralph du Carrois, Anja Meiners, and the studio at bBox Type, the family was engineered not merely for comfortable literary reading or quiet captioning, but to solve the merciless, high-stakes dilemmas of wayfinding, digital cartography, and vehicular telematics. Under circumstances where an instant’s glance at a low-resolution display must convey an exit or a street name, letterforms cannot afford ambiguity.

Inheriting the energetic, humanist anatomy of its forebears, FiraGO shuns the rigid, enclosed geometries of the neo-grotesque in favor of an active, directional ductus. Its apertures remain hospitably wide, flooding the counters with ambient light and preventing glyphs from choking into indistinct blurs at minute scales or under harsh backlighting. The strokes exhibit subtle, rhythmic modulation, with terminals sheared at dynamic angles that conduct the eye briskly across fragmented strings of technical data and coordinates. Yet, despite its clinical optimization for micro-typographic clarity, the face avoids the sterile chill of the laboratory; it retains the vital pulse of the pen, balancing civic order with an approachable, conversational warmth.

Where FiraGO achieves its most profound typographic triumph, however, is in its pan-scriptural citizenship. Conceived to navigate a multilingual world, the system harmonizes Latin, Cyrillic, Greek, Georgian, Arabic, Devanagari, Hebrew, and Thai into a unified acoustic space. Rather than forcing these varied writing traditions into the procrustean bed of Western metrics, the designers honored the native stroke dynamics and optical weights of each respective hand, yielding an even, cohesive texture across script boundaries. Released into the open commons under the SIL Open Font License, FiraGO stands as an astonishingly generous piece of typographic infrastructure—a globe-spanning workhorse proving that the rigorous demands of modern wayfinding can coexist with deep cultural respect.`,
  fontFile: "/assets/fonts/firago/FiraGO-Regular.woff2",
  features: [
    {
      type: "comparison",
      title: "Standard Ligatures",
      code: "font-feature-settings: 'liga';",
      before: { features: { liga: 0 } },
      after: { features: { liga: 1, clig: 1 } },
      examples: ["ff", "ffi", "ffl", "fi", "fl"]
    },
    {
      type: "comparison",
      title: "Discretionary Ligatures",
      code: "font-feature-settings: 'dlig';",
      before: { direction: "auto", features: { dlig: 0 } },
      after: { features: { dlig: 1 }, direction: "auto" },
      examples: ["וו", "יו"]
    },
    {
      type: "comparison",
      title: "Contextual Alternates",
      code: "font-feature-settings: 'calt';",
      before: { features: { calt: 0 } },
      after: { features: { calt: 1 } },
      examples: ["#&", "fb", "ΆΆ"]
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
        { text: "ჯⱤ", label: "'ss01'", before: { features: { ss01: 0 } }, after: { features: { ss01: 1 } } },
        { text: "ƁꞍ", label: "'ss02'", before: { features: { ss02: 0 } }, after: { features: { ss02: 1 } } },
        { text: "&", label: "'ss03'", before: { features: { ss03: 0 } }, after: { features: { ss03: 1 } } },
        { text: "a", label: "'ss04'", before: { features: { ss04: 0 } }, after: { features: { ss04: 1 } } },
        { text: "g", label: "'ss05'", before: { features: { ss05: 0 } }, after: { features: { ss05: 1 } } },
        { text: "4", label: "'ss06'", before: { features: { ss06: 0 } }, after: { features: { ss06: 1 } } }
      ]
    },
    {
      type: "comparison",
      title: "Case Sensitive Forms",
      code: "font-feature-settings: 'case';",
      before: { features: { case: 0 } },
      after: { features: { case: 1 } },
      examples: ["()-[", "]`{}"]
    },
    {
      type: "comparison",
      title: "Capital Spacing",
      code: "font-feature-settings: 'cpsp';",
      before: { features: { cpsp: 0 }, size: "compact" },
      after: { features: { cpsp: 1 }, size: "compact" },
      examples: ["HAMBURG"]
    }
  ],
};

export default typeface;
