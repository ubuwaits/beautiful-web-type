import type { TypefaceData } from "@/lib/content/types";

const typeface: TypefaceData = {
  slug: "libre-caslon-condensed",
  name: "Libre Caslon Condensed",
  dateAdded: "2026-11-02",
  category: "Serif",
  styles: "Variable",
  glyphCount: 561,
  italic: true,
  weights: [
    { weight: 400, name: "Regular" },
    { weight: 500, name: "Medium" },
    { weight: 600, name: "Semi Bold" },
    { weight: 700, name: "Bold" }
  ],
  latestRelease: { version: "v2.000", date: "31 Jul 2026" },
  projectUrl: "https://github.com/ertekinno/libre-caslon-condensed",
  gFontsUrl: "https://fonts.google.com/specimen/Libre+Caslon+Condensed",
  creator: { name: "Ertekin Erdin", url: "https://github.com/ertekinno" },
  summary: "Libre Caslon Condensed adapts Caslon’s Old Style forms to narrow proportions, with variable weight and true italics for headlines, pull quotes, and packaging.",
  description: `Developed by Turkish designer Ertekin Erdin and released through Google Fonts, Libre Caslon Condensed is a structural extension of Pablo Impallari and Rodrigo Fuenzalida’s <em>Libre Caslon Text</em>. The project brings condensed proportions to a serif family grounded in historical models. Recognizing this imbalance, Erdin revisited the eighteenth-century English Old Style lineage of William Caslon I, translating the warm, authoritative voice of the foundry punches into a laterally compressed format engineered for tight editorial layouts and expressive titling.

Anatomically, the design avoids the clumsy optical distortions of mechanical squeezing by redrawing character proportions, interior counters, and stroke modulation from the vector ground up. The horizontal footprint is drawn taut, yet the essential hallmarks of the Caslon skeleton remain intact: the characteristic hollow notch at the apex of the capital <em>A</em>, the firm spur of the <em>G</em>, and the organic teardrop terminals on lowercase glyphs such as <em>c</em>, <em>f</em>, and <em>r</em>. Stems retain their muscular presence, while horizontal serifs are subtly shortened to ensure clean separation within tighter letter tracking. Cupped, softly bracketed serifs anchor each character securely to the baseline, lending the slender letterforms a rooted, upright posture. Spanning weights from Regular to Bold alongside matching true italics, the family establishes a dense, ink-rich cadence along the line without causing internal chambers to clog.

This lateral economy clearly dictates its functional domain. Libre Caslon Condensed is ill-suited for continuous narrative reading across standard book measures, where its compact proportions and staccato rhythm can make long passages feel crowded. Instead, it finds its natural purpose where horizontal real estate is scarce but literary authority is required: narrow multi-column headlines, magazine subheads, pull quotes, packaging labels, and book cover typography. It provides an expressive alternative to the ubiquitous industrial grotesques that typically populate tight spaces, allowing designers to retain the historical weight and human warmth of an eighteenth-century roman under severe spatial constraints.`,
  familyFaces: ["Libre Caslon Text", "Libre Caslon Display"],
  fontFile: "/assets/fonts/libre-caslon-condensed/LibreCaslonCondensed.woff2",
  features: [
    {
      type: "comparison", title: "Standard Ligatures", code: "font-feature-settings: 'liga';",
      before: { features: { liga: 0 } }, after: { features: { liga: 1 } }, examples: ["ff", "fi", "fl", "ffi", "ffl"]
    },
    {
      type: "comparison", title: "Discretionary Ligatures", code: "font-feature-settings: 'dlig';",
      before: { features: { dlig: 0 } }, after: { features: { dlig: 1 } }, examples: ["ct", "st", "fb", "ft"]
    },
    {
      type: "figures", title: "Figures",
      examples: [
        { text: "1234567890", label: "Proportional Lining (default)", options: { features: "normal" } },
        { text: "1234567890", label: "Tabular Lining: 'tnum'", options: { features: { tnum: 1 } } },
        { text: "1234567890", label: "Proportional Oldstyle: 'onum'", options: { features: { onum: 1 } } },
        { text: "1234567890", label: "Tabular Oldstyle: 'onum', 'tnum'", options: { features: { onum: 1, tnum: 1 } } },
        { text: "1/2 3/4", label: "Fractions: 'frac'", options: { features: { frac: 1 } } },
        { text: "0", label: "Slashed Zero: 'zero'", options: { features: { zero: 1 } } },
        { text: "123", reference: "H", label: "Subscripts: 'subs'", options: { features: { subs: 1 } } },
        { text: "123", reference: "H", label: "Scientific Inferiors: 'sinf'", options: { features: { sinf: 1 } } },
        { text: "123", reference: "H", label: "Superscripts: 'sups'", options: { features: { sups: 1 } } }
      ]
    },
    {
      type: "comparison", title: "Ordinals", code: "font-feature-settings: 'ordn';",
      before: { features: { ordn: 0 } }, after: { features: { ordn: 1 } }, examples: ["3a", "4o"]
    },
    {
      type: "comparison", title: "Stylistic Set 01", code: "font-feature-settings: 'ss01';",
      before: { italic: true, features: { ss01: 0 } }, after: { italic: true, features: { ss01: 1 } },
      examples: [{ text: "&", label: "'ss01' · Italic ampersand" }]
    }
  ]
};

export default typeface;
