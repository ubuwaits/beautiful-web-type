import type { TypefaceData } from "@/lib/content/types";

const typeface: TypefaceData = {
  slug: "schibsted-grotesk",
  name: "Schibsted Grotesk",
  dateAdded: "2026-10-31",
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
  description: `Schibsted Grotesk was conceived to reconcile the analog newsroom heritage of the Nordic media conglomerate Schibsted—publisher of venerable Scandinavian daily newspapers such as <em>Aftenposten</em> and <em>Aftonbladet</em>—with the operational demands of its expansive digital publishing and marketplace platforms. Designed by Henrik Kongsvoll at the digital design studio Bakken & Bæck in close partnership with Schibsted’s internal brand team, the face was introduced as a bespoke corporate identity before being contributed to the open commons under the SIL Open Font License in 2023. The project sought to avoid the generic corporate blandness of mid-century neo-grotesques, deliberately drawing inspiration from the idiosyncratic early twentieth-century newspaper grotesques that historically announced breaking news across Northern Europe.

Anatomically, the design is structured around a bifurcated optical philosophy that shifts character as it gains mass. In its lighter and regular weights, Schibsted Grotesk functions with quiet utilitarian discipline: it features an ample x-height, wide and hospitable apertures, and subtly thinned stroke intersections that prevent ink and pixel pooling, ensuring uncompromised legibility across small digital screens and dense news feeds. As the variable weight axis progresses toward its bold and black extremes, however, the typeface unlocks a distinct journalistic personality. Stems become broad and muscular, internal counters compress into sharp, wedge-like cavities, and terminals shear cleanly along strict axes, giving words the physical, ink-laden authority of vintage lead-type headlines. Supported by a true italic and covering the comprehensive Underware Latin Plus character set, the family maintains an even, commanding rhythm across both continuous and segmented settings.

This structural versatility firmly defines its functional territory. While its uniform stroke distribution and modern cadence make it an unnatural fit for long-form literary prose or classical book composition, it excels in contemporary editorial and product ecosystems. It thrives in digital journalism, responsive UI navigation, micro-copy, data tables, and high-impact editorial mastheads where hierarchy must pivot instantaneously from quiet information delivery to bold declaration. Within the open catalog, Schibsted Grotesk stands as an exemplary civic and corporate contribution, showing how a media conglomerate can honor its historical printing roots while engineering a sharp, public-domain instrument for the screen.`,
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
