import type { TypefaceData } from "@/lib/content/types";

const typeface: TypefaceData = {
  slug: "libre-caslon-text",
  name: "Libre Caslon Text",
  dateAdded: "2026-11-02T21:02:14+01:00",
  category: "Serif",
  styles: 3,
  glyphCount: 537,
  italic: true,
  weights: [
    { weight: 400, name: "Regular" },
    { weight: 700, name: "Bold", italic: false }
  ],
  latestRelease: { version: "v1.002", date: "25 Jul 2016" },
  projectUrl: "https://github.com/impallari/Libre-Caslon-Text",
  gFontsUrl: "https://fonts.google.com/specimen/Libre+Caslon+Text",
  creator: { name: "Impallari & Fuenzalida", url: "https://github.com/impallari/Libre-Caslon-Text" },
  summary: "Libre Caslon Text is an English Old Style revival by Impallari and Fuenzalida, with sturdy details and warm proportions for books, essays, and literary pages.",
  description: `Libre Caslon Text was conceived by Argentine type designer Pablo Impallari, alongside collaborator Rodrigo Fuenzalida, to translate the foundational eighteenth-century types of William Caslon I into a robust, digital-first reading face. The project set out to honor the English Old Style tradition that anchored centuries of British publishing and colonial American printing. Caslon’s types were notably used in the first broadside printings of the United States Declaration of Independence. Recognizing that the nuanced stroke modulation of metal type often breaks down when digitized as a single compromise, Impallari bifurcated the revival into distinct <em>Text</em> and <em>Display</em> cuts, engineering Libre Caslon Text specifically to deliver the dependable warmth of the classic adage: "When in doubt, use Caslon."

Anatomically, the face is rooted in the organic, humanist irregularities that characterized Caslon’s original hand-cut steel punches. It carries moderate stroke modulation governed by a gentle diagonal stress, steering well clear of the sharp vertical axes and brittle hairlines of the later transitional and modern periods. Serifs are firmly bracketed, cupped along the baseline, and slightly blunted at the extremities to ensure stable horizontal tracking across varying resolutions. The design faithfully incorporates quintessential Caslon hallmarks: the distinctive hollowed notch at the apex of the capital <em>A</em>, the sturdy spur of the <em>G</em>, and warm, teardrop terminals on lowercase glyphs such as <em>c</em>, <em>f</em>, and <em>r</em>. For this text-specific cut, the proportions were thoughtfully reinforced with an elevated x-height, wider character chambers, and open apertures, creating an even, warm-grey typographic texture that resists filling in under heavy digital rasterization or ink spread on paper.

This structural stability clearly defines its operational territory. Libre Caslon Text is fundamentally a literary and editorial instrument, ideally suited to continuous narrative prose, academic papers, literary magazines, and classical publishing layouts. Its organic cadence, historical associations, and gentle contrast make it an awkward fit for dense software interfaces, technical dashboards, or high-velocity micro-copy, where the austere neutrality of a neo-grotesque is called for. When allowed to inhabit long passages and generous margins, however, its moderate contrast and open proportions support an unhurried reading rhythm.`,
  familyFaces: ["Libre Caslon Condensed", "Libre Caslon Display"],
  fontFile: "/assets/fonts/libre-caslon-text/LibreCaslonText-Regular.woff2",
  features: [
    {
      type: "comparison", title: "Standard Ligatures", code: "font-feature-settings: 'liga';",
      before: { features: { liga: 0 } }, after: { features: { liga: 1 } }, examples: ["ff", "fi", "fl", "ffi", "ffl"]
    },
    {
      type: "comparison", title: "Discretionary Ligatures", code: "font-feature-settings: 'dlig';",
      before: { features: { dlig: 0 } }, after: { features: { dlig: 1 } }, examples: ["ct", "st"]
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
