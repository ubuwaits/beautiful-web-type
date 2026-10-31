import type { TypefaceData } from "@/lib/content/types";

const typeface: TypefaceData = {
  slug: "zalando-sans",
  name: "Zalando Sans",
  dateAdded: "2026-10-31",
  category: "Sans-Serif",
  styles: "Variable",
  glyphCount: 606,
  italic: true,
  weights: [
    { weight: 200, name: "Extra Light" },
    { weight: 300, name: "Light" },
    { weight: 400, name: "Regular" },
    { weight: 500, name: "Medium" },
    { weight: 600, name: "Semi Bold" },
    { weight: 700, name: "Bold" },
    { weight: 800, name: "Extra Bold" },
    { weight: 900, name: "Black" }
  ],
  latestRelease: { version: "v1.800", date: "3 Mar 2026" },
  projectUrl: "https://github.com/zalando/sans",
  gFontsUrl: "https://fonts.google.com/specimen/Zalando+Sans",
  creator: { name: "Jakob Ekelund · KH Type", url: "https://khtype.com" },
  description: `Zalando Sans was conceived to negotiate the dual identity of a modern digital commerce platform, functioning simultaneously as an invisible interface utility and an expressive editorial masthead. Commissioned for Zalando’s brand refresh and drawn by Jakob Ekelund of KH Type (the type design division of Kurppa Hosk) in collaboration with the company’s internal design teams, the family was contributed to the open commons under the SIL Open Font License. The project approached retail typography not through decorative novelty, but through systematic flexibility, offering a multi-device system tailored for rapid online transactions, printed lookbooks, and cross-channel campaigns.

Anatomically, the face builds upon the rational skeleton of the European neo-grotesque, tempered by Scandinavian restraint and deliberate optical adjustments for screen rendering. It features an elevated x-height, compact ascenders and descenders, and wide apertures that prevent character chambers in <em>c</em>, <em>e</em>, and <em>s</em> from clogging within dense UI modules or checkout funnels. This clean framework is driven by a two-axis variable engine governing weight (ExtraLight to Black) and width (Condensed to Expanded). In its narrower cuts, it behaves as an efficient data carrier for pricing tables and technical specifications; dialed outward toward the Expanded grades, its lateral stride broadens into a relaxed, statuesque posture suited for prominent titling and packaging.

Because of its uniform weight distribution and contemporary commercial pacing, Zalando Sans is ill-suited to continuous literary reading or classical book typography, where the eye relies on the modulated stroke contrast and gentle bracketing of traditional book serifs. Instead, it thrives in complex digital applications, retail ecosystems, advertising layouts, and modern editorial spreads where hierarchy must shift smoothly between utilitarian data and bold display typography. Within the open catalog, it stands as an exceptionally adaptable neo-grotesque asset, demonstrating how corporate brand engineering can yield a disciplined, public-domain workhorse.`,
  fontFile: "/assets/fonts/zalando-sans/ZalandoSans.woff2",
  features: [
    { type: "axis", title: "Width", axis: "wdth", text: "Shape", values: [75, 100, 125] },
    { type: "axis", title: "Slant", axis: "slnt", text: "Motion", values: [0, -5, -10] },
    {
      type: "comparison",
      title: "Standard Ligatures",
      code: "font-feature-settings: 'liga';",
      before: { features: { liga: 0 } },
      after: { features: { liga: 1 } },
      examples: ["fi", "fl"]
    },
    {
      type: "figures",
      title: "Figures",
      examples: [
        { text: "1234567890", label: "Proportional Lining (default)", options: { features: "normal" } },
        { text: "1234567890", label: "Tabular Lining: 'tnum'", options: { features: { tnum: 1 } } },
        { text: "1/2 3/4", label: "Fractions: 'frac'", options: { features: { frac: 1 } } },
        { text: "123", reference: "H", label: "Numerators: 'numr'", options: { features: { numr: 1 } } },
        { text: "123", reference: "H", label: "Denominators: 'dnom'", options: { features: { dnom: 1 } } },
        { text: "123", reference: "H", label: "Subscripts: 'subs'", options: { features: { subs: 1 } } },
        { text: "123", reference: "H", label: "Scientific Inferiors: 'sinf'", options: { features: { sinf: 1 } } },
        { text: "123", reference: "H", label: "Superscripts: 'sups'", options: { features: { sups: 1 } } }
      ]
    },
    {
      type: "comparison",
      title: "Stylistic Sets",
      code: "font-feature-settings: 'ss--';",
      examples: [
        { text: "“”", label: "'ss01' · Editorial Quotation Marks", after: { features: { ss01: 1 } } },
        { text: "123.45", label: "'ss02' · Strikethrough Numbers", after: { features: { ss02: 1 } } },
        { text: "←→", label: "'ss03' · Cap-height Arrows", after: { features: { ss03: 1 } } }
      ]
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
