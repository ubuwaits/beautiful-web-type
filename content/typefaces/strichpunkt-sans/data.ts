import type { TypefaceData } from "@/lib/content/types";

const typeface: TypefaceData = {
  slug: "strichpunkt-sans",
  name: "Strichpunkt Sans",
  dateAdded: "2026-10-31T21:06:28+01:00",
  category: "Sans-Serif",
  styles: "Variable",
  glyphCount: 545,
  weights: [
    { weight: 400, name: "Regular" },
    { weight: 500, name: "Medium" },
    { weight: 600, name: "Semi Bold" },
    { weight: 700, name: "Bold" },
    { weight: 800, name: "Extra Bold" },
    { weight: 900, name: "Black" }
  ],
  websiteHero: {
    wordmark: { weight: 600, size: 24, lineHeight: "28px", letterSpacing: "-0.025em" },
    headline: { weight: 500, size: "clamp(2.25rem, 6.3cqw, 5.875rem)", lineHeight: 1.02, letterSpacing: "-0.045em" },
    description: { weight: 400, size: 16, desktopSize: 18, lineHeight: "28px" },
    action: { weight: 400, size: 14, lineHeight: "24px" },
    caseLocation: { weight: 400, size: 12, lineHeight: "20px", letterSpacing: "0.025em", textTransform: "uppercase" },
    caseTitle: { weight: 600, size: 24, lineHeight: 1.15, letterSpacing: "-0.025em" },
    caseBody: { weight: 400, size: 14, lineHeight: "24px" },
    tableLabel: { weight: 400, size: 14, lineHeight: "20px" },
    tableValue: { weight: 500, size: 14, lineHeight: "20px", features: { lnum: 1, tnum: 1 } },
  },
  latestRelease: { version: "v1.0", date: "27 Mar 2026" },
  projectUrl: "https://github.com/strichpunkt-design/Strichpunkt_Sans",
  gFontsUrl: "https://fonts.google.com/specimen/Strichpunkt+Sans",
  creator: { name: "René Bieder", url: "https://www.renebieder.com" },
  summary: "Strichpunkt Sans is René Bieder’s corporate sans serif, with balanced proportions and variable weight for branding, interfaces, exhibition graphics, and print.",
  description: `Strichpunkt Sans originated within the Berlin and Stuttgart studios of the German branding agency Strichpunkt, drafted initially as a core element of the agency’s visual identity before being released as an open-source typographic asset. Rooted in the disciplined tradition of German corporate typography, Strichpunkt Sans was conceived to navigate the boundary between systematic functionalism and contemporary editorial character, providing a sturdy, multi-channel voice across digital platforms, identity systems, and print collateral.

Anatomically, the design is built upon the rational chassis of the European neo-grotesque, yet it avoids the absolute neutrality that often flattens the genre. The proportions are balanced and upright, anchored by an ample x-height and compact ascenders and descenders that allow lines to sit cleanly within tightly packed interface modules or multi-line headlines. Its apertures remain open and light-filled, preventing character chambers in glyphs like c, e, and s from filling in at micro-scales. Terminals are sheared with crisp, horizontal precision, reinforcing an orderly, architectural silhouette. True to the agency’s namesake—Strichpunkt being the German term for semicolon—the punctuation marks and accents are drawn with deliberate graphic clarity, providing distinct, rhythmically sharp pauses throughout the line. In continuous text, it casts an even, neutral grey, maintaining legibility without calling undue attention to individual character quirks.

Across its weight spectrum, Strichpunkt Sans shifts between text setting and display duties. Its lighter and regular weights lend themselves to body copy, technical presentations, and interfaces; in its bolder iterations, the stroke mass expands while the internal counters stay defined, giving headlines a firm graphic presence. The family can provide a consistent voice across branding, exhibition collateral, wayfinding, and responsive digital layouts.`,
  fontFile: "/assets/fonts/strichpunkt-sans/StrichpunktSans.woff2",
  features: [
    { type: "axis", title: "Width", axis: "wdth", text: "Shape", values: [100, 150, 200] },
    {
      type: "comparison",
      title: "Contextual Arrows",
      code: "font-feature-settings: 'calt';",
      before: { features: { calt: 0 } },
      after: { features: { calt: 1 } },
      examples: ["->", "<-", "—>"]
    },
    {
      type: "comparison",
      title: "Discretionary Ligatures",
      code: "font-feature-settings: 'dlig';",
      before: { features: { dlig: 0 } },
      after: { features: { dlig: 1 } },
      examples: ["ff", "fi", "fl", "fj"]
    },
    {
      type: "figures",
      title: "Figures",
      options: { direction: "auto" },
      examples: [
        { text: "1234567890", label: "Lining (default)", options: { features: "normal" } },
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
      title: "Ordinals",
      code: "font-feature-settings: 'ordn';",
      before: { features: { ordn: 0 } },
      after: { features: { ordn: 1 } },
      examples: ["1a", "2o"]
    },
    {
      type: "comparison",
      title: "Case Sensitive Forms",
      code: "font-feature-settings: 'case';",
      before: { features: { case: 0 } },
      after: { features: { case: 1 } },
      examples: ["(A)", "[H]", "¿¡@"]
    }
  ]
};

export default typeface;
