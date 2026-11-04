import type { TypefaceData } from "@/lib/content/types";

const typeface: TypefaceData = {
  slug: "schibsted-grotesk",
  name: "Schibsted Grotesk",
  dateAdded: "2026-10-31T21:47:33+01:00",
  category: "Sans-Serif",
  styles: "Variable",
  glyphCount: 583,
  italic: true,
  weights: [
    { weight: 400, name: "Regular" },
    { weight: 500, name: "Medium" },
    { weight: 600, name: "Semi Bold" },
    { weight: 700, name: "Bold" },
    { weight: 800, name: "Extra Bold" },
    { weight: 900, name: "Black" }
  ],
  latestRelease: { version: "v1.100", date: "3 Mar 2023" },
  projectUrl: "https://github.com/schibsted/schibsted-grotesk",
  gFontsUrl: "https://fonts.google.com/specimen/Schibsted+Grotesk",
  creator: { name: "Bakken & Bæck", url: "https://bakkenbaeck.com" },
  summary: "Schibsted Grotesk is Bakken & Bæck’s variable sans serif, moving from restrained interface text to muscular newspaper-inspired headings with companion italics.",
  description: `Schibsted Grotesk was conceived to reconcile the analog newsroom heritage of the Nordic media conglomerate Schibsted—publisher of venerable Scandinavian daily newspapers such as <em>Aftenposten</em> and <em>Aftonbladet</em>—with the operational demands of its expansive digital publishing and marketplace platforms. Designed by Henrik Kongsvoll at the digital design studio Bakken & Bæck in close partnership with Schibsted’s internal brand team, the face was introduced as a bespoke corporate identity before its public release in 2023. The project sought to avoid the generic corporate blandness of mid-century neo-grotesques, deliberately drawing inspiration from the idiosyncratic early twentieth-century newspaper grotesques that historically announced breaking news across Northern Europe.

Anatomically, the design is structured around a bifurcated optical philosophy that shifts character as it gains mass. In its lighter and regular weights, Schibsted Grotesk functions with quiet utilitarian discipline: it features an ample x-height, wide and hospitable apertures, and subtly thinned stroke intersections that prevent ink and pixel pooling, supporting legibility across small digital screens and dense news feeds. As the variable weight axis progresses toward its bold and black extremes, however, the typeface unlocks a distinct journalistic personality. Stems become broad and muscular, internal counters compress into sharp, wedge-like cavities, and terminals shear cleanly along strict axes, giving words the physical, ink-laden authority of vintage lead-type headlines. Supported by a true italic and covering the comprehensive Underware Latin Plus character set, the family maintains an even, commanding rhythm across both continuous and segmented settings.

Schibsted Grotesk suits digital journalism, responsive navigation, interface copy, data tables, and editorial mastheads. Its changing character across the weight range lets a publication move from quiet supporting information to emphatic headlines while retaining a common family. The companion italic adds another register for quotations, emphasis, and editorial hierarchy.`,
  fontFile: "/assets/fonts/schibsted-grotesk/SchibstedGrotesk.woff2",
  features: [
    {
      type: "comparison",
      title: "Standard Ligatures",
      code: "font-feature-settings: 'liga';",
      before: { features: { liga: 0 } },
      after: { features: { liga: 1 } },
      examples: ["ff", "fi", "fl", "ffi", "ffl"]
    },
    {
      type: "comparison",
      title: "Discretionary Ligatures",
      code: "font-feature-settings: 'dlig';",
      before: { features: { dlig: 0 } },
      after: { features: { dlig: 1 } },
      examples: ["fĳ", "ffĳ"]
    },
    {
      type: "figures",
      title: "Figures",
      examples: [
        { text: "1234567890", label: "Proportional Lining (default)", options: { features: "normal" } },
        { text: "1234567890", label: "Tabular Lining: 'tnum'", options: { features: { tnum: 1 } } },
        { text: "1/2 3/4", label: "Fractions: 'frac'", options: { features: { frac: 1 } } },
        { text: "0", label: "Slashed Zero: 'zero'", options: { features: { zero: 1 } } },
        { text: "123", reference: "H", label: "Numerators: 'numr'", options: { features: { numr: 1 } } },
        { text: "123", reference: "H", label: "Denominators: 'dnom'", options: { features: { dnom: 1 } } },
        { text: "123", reference: "H", label: "Superscripts: 'sups'", options: { features: { sups: 1 } } }
      ]
    },
    {
      type: "comparison",
      title: "Ordinals",
      code: "font-feature-settings: 'ordn';",
      before: { features: { ordn: 0 } },
      after: { features: { ordn: 1 } },
      examples: ["No."]
    },
    {
      type: "comparison",
      title: "Case Sensitive Forms",
      code: "font-feature-settings: 'case';",
      before: { features: { case: 0 } },
      after: { features: { case: 1 } },
      examples: ["(H)", "¿¡", "«A»"]
    }
  ]
};

export default typeface;
