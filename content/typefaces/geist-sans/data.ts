import type { TypefaceData } from "@/lib/content/types";

const typeface: TypefaceData = {
  slug: "geist-sans",
  name: "Geist Sans",
  dateAdded: "2026-11-03T19:50:13+01:00",
  category: "Sans-Serif",
  styles: "Variable",
  glyphCount: 975,
  italic: true,
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
  latestRelease: { version: "v1.9.0", date: "30 Oct 2026" },
  projectUrl: "https://github.com/vercel/geist-font",
  gFontsUrl: "https://fonts.google.com/specimen/Geist",
  creator: { name: "Vercel & Basement Studio", url: "https://vercel.com/font" },
  summary: "Geist Sans is Vercel and Basement Studio’s Swiss-inspired sans serif, with variable weights, italics, and stylistic alternatives for interfaces and headlines.",
  description: `Geist Sans was commissioned by Vercel in collaboration with Argentine design practice Basement Studio, with contributions from Andrés Briganti, Mateo Zaragoza, and Vercel’s design team, and introduced in late 2023. Developed for Vercel’s product ecosystem, the family draws on the structural discipline of Swiss modernist typography and mid-century grotesques such as <em>Univers</em>, alongside more recent references including <em>Inter</em>. Its restrained detailing and systematic construction connect that tradition to the requirements of software platforms, developer tools, and technical documentation.

Anatomically, the face combines a low-contrast skeleton with a generous x-height and relatively compact extenders, giving lowercase text a clear presence within buttons, cards, and data tables. Crisp terminals and controlled stroke junctions contribute to an even texture, while the proportions balance geometric forms with the varied widths of a proportional grotesque. Nine named weights run from Thin (100) to Black (900), with a continuous variable weight axis and companion italics. Eleven stylistic sets offer alternative constructions for letters such as <em>a</em>, <em>l</em>, <em>R</em>, <em>I</em>, and <em>G</em>, alongside changes to dots, arrows, numerals, and punctuation. Proportional and tabular figures support both running text and aligned numerical information.

Geist Sans is well suited to developer tooling, application interfaces, dashboards, and responsive digital products. Its regular rhythm and restrained character provide a consistent background for information, while the heavier weights and alternate forms can give headings a more distinct voice. For literary publishing or historically inflected identities, a face with greater stroke modulation or more pronounced calligraphic detail may offer a different texture. Paired with <em>Geist Mono</em>, it provides a related proportional and fixed-pitch system for application controls, documentation, and code.`,
  fontFile: "/assets/fonts/geist-sans/Geist.woff2",
  features: [
    {
      type: "comparison", title: "Standard Ligatures", code: "font-feature-settings: 'liga';",
      before: { features: { liga: 0 } }, after: { features: { liga: 1 } },
      examples: ["ff", "fi", "fl", "tt", "->", "<->"]
    },
    {
      type: "comparison", title: "Discretionary Ligatures", code: "font-feature-settings: 'dlig';",
      before: { features: { dlig: 0 } }, after: { features: { dlig: 1 } }, examples: ["AI", "UI"]
    },
    {
      type: "figures", title: "Figures",
      examples: [
        { text: "1234567890", label: "Proportional Lining (default)", options: { features: "normal" } },
        { text: "1234567890", label: "Tabular Lining: 'tnum'", options: { features: { tnum: 1 } } },
        { text: "1/2 3/4", label: "Fractions: 'frac'", options: { features: { frac: 1 } } },
        { text: "123", reference: "H", label: "Numerators: 'numr'", options: { features: { numr: 1 } } },
        { text: "123", reference: "H", label: "Denominators: 'dnom'", options: { features: { dnom: 1 } } },
        { text: "123", reference: "H", label: "Superscripts: 'sups'", options: { features: { sups: 1 } } },
        { text: "123", reference: "H", label: "Subscripts: 'subs'", options: { features: { subs: 1 } } }
      ]
    },
    {
      type: "comparison", title: "Ordinals", code: "font-feature-settings: 'ordn';",
      before: { features: { ordn: 0 } }, after: { features: { ordn: 1 } }, examples: ["3a", "4o", "No."]
    },
    {
      type: "comparison", title: "Stylistic Sets", code: "font-feature-settings: 'ss--';",
      before: { features: "normal" },
      examples: [
        { text: "a", label: "'ss01' · No tail a", after: { features: { ss01: 1 } } },
        { text: "a", label: "'ss02' · Alternate a", after: { features: { ss02: 1 } } },
        { text: "l", label: "'ss03'", after: { features: { ss03: 1 } } },
        { text: "R", label: "'ss04'", after: { features: { ss04: 1 } } },
        { text: "I", label: "'ss05'", after: { features: { ss05: 1 } } },
        { text: "G", label: "'ss06'", after: { features: { ss06: 1 } } },
        { text: "↑→↓", label: "'ss07'", after: { features: { ss07: 1 } } },
        { text: "ijÄ", label: "'ss08' · Rounded dots", after: { features: { ss08: 1 } } },
        { text: "01", label: "'ss09'", after: { features: { ss09: 1 } } },
        { text: "({[]})", label: "'ss10' · Enclosing shapes", after: { features: { ss10: 1 } } },
        { text: "AI v0", label: "'ss11' · Contextual brand styles", before: { features: { dlig: 0 } }, after: { features: { dlig: 0, ss11: 1 } } }
      ]
    }
  ]
};

export default typeface;
