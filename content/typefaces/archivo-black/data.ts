import type { TypefaceData } from "@/lib/content/types";

const typeface: TypefaceData = {
  slug: "archivo-black",
  name: "Archivo Black",
  dateAdded: "2018-10-19",
  category: "Sans-Serif",
  styles: 2,
  glyphCount: 796,
  italic: true,
  weights: [
    {
      weight: 400,
      name: "Regular"
    }
  ],
  websiteHero: {
    wordmark: { weight: 400, size: 24, lineHeight: "28px", letterSpacing: "-0.025em" },
    headline: { weight: 400, size: "clamp(2.25rem, 6.3cqw, 5.875rem)", lineHeight: 1.02, letterSpacing: "-0.045em" },
    description: { weight: 400, size: 16, desktopSize: 18, lineHeight: "28px" },
    action: { weight: 400, size: 14, lineHeight: "24px" },
    caseLocation: { weight: 400, size: 12, lineHeight: "20px", letterSpacing: "0.025em", textTransform: "uppercase" },
    caseTitle: { weight: 400, size: 24, lineHeight: 1.15, letterSpacing: "-0.025em" },
    caseBody: { weight: 400, size: 14, lineHeight: "24px" },
    tableLabel: { weight: 400, size: 14, lineHeight: "20px" },
    tableValue: { weight: 400, size: 14, lineHeight: "20px", features: { lnum: 1, tnum: 1 } },
  },
  latestRelease: {
    version: "v1.101",
    date: "17 Sep 2018"
  },
  projectUrl: "https://github.com/Omnibus-Type/ArchivoBlack",
  gFontsUrl: "https://fonts.google.com/specimen/Archivo+Black",
  creator: {
    name: "Omnibus-Type",
    url: "https://www.omnibus-type.com"
  },
  summary: "Archivo Black is a heavy display sans serif by Omnibus-Type, with dense strokes and compact counters for posters, packaging, and prominent web headings.",
  description: `Where text types are drawn to breathe and shepherd the eye across long tracts of thought, Archivo Black arrives to arrest the gaze with sudden, physical gravity. Drawn by Héctor Gatti for the Omnibus-Type foundry, this singular heavyweight was cast as the heaviest voice of the Archivo family—a display face descended from the blunt, unadorned wood and lead types that once shouted from nineteenth-century industrial broadsides and packaging labels. It makes no pretense to quiet persuasion or aristocratic finesse; it stakes an immediate claim upon the visual field, declaring its message with the plainspoken authority of cast iron.

When a letterform is driven to such extreme density, typography ceases to be merely a matter of black strokes and becomes an art of carving white space. The design balances this density with carefully sized counters. The interior counters—the enclosed chambers of the <em>a</em>, <em>e</em>, and <em>o</em>—are reduced to taut, jewel-like apertures, chiseled just broadly enough to keep the forms from choking on their own ink. Terminals are sheared flush and horizontal, squared against the baseline and x-height, allowing adjacent characters to lock together like masonry blocks. The result is not an amorphous mass, but a disciplined, architectural cadence where the white voids pulse with surprising internal pressure against the overwhelming tide of black.

In contemporary practice, Archivo Black suits roles where typographic mass anchors a composition: editorial banners, poster heads, and short graphic callouts. Its heavy strokes and compact counters establish hierarchy with relatively few words.`,
  familyFaces: [
    "Archivo"
  ],
  fontFile: "/assets/fonts/archivo-black/ArchivoBlack-Regular.woff2",
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
      type: "figures",
      title: "Figures",
      options: { direction: "auto" },
      examples: [
        { text: "1234567890", label: "Tabular Lining (default)", reference: "H", options: { features: "normal" } },
        { text: "1234567890", label: "Tabular Oldstyle: 'onum'", reference: "H", options: { features: { onum: 1 } } },
        { text: "1/2 3/4", label: "Fractions: 'frac'", options: { features: { frac: 1 } } },
        { text: "0", label: "Slashed Zero: 'zero'", reference: "H", options: { features: { zero: 1 } } },
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
      title: "Stylistic Alternates",
      code: "font-feature-settings: 'salt';",
      before: { features: { salt: 0 } },
      after: { features: { salt: 1 } },
      examples: [{ text: "&", label: "'salt'" }]
    },
    {
      type: "comparison",
      title: "Case Sensitive Forms",
      code: "font-feature-settings: 'case';",
      before: { features: { case: 0 } },
      after: { features: { case: 1 } },
      examples: ["9-¡­", "¿‑–—"]
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
