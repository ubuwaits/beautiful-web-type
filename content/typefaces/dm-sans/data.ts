import type { TypefaceData } from "@/lib/content/types";

const typeface: TypefaceData = {
  slug: "dm-sans",
  name: "DM Sans",
  dateAdded: "2026-11-03T10:03:53+01:00",
  category: "Sans-Serif",
  styles: "Variable",
  glyphCount: 486,
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
    { weight: 900, name: "Black" },
    { weight: 1000, name: "Extra Black" }
  ],
  latestRelease: { version: "v4.004", date: "14 Jun 2023" },
  projectUrl: "https://github.com/googlefonts/dm-fonts",
  gFontsUrl: "https://fonts.google.com/specimen/DM+Sans",
  creator: { name: "Colophon Foundry", url: "https://github.com/googlefonts/dm-fonts" },
  summary: "DM Sans is Colophon Foundry’s geometric sans serif for interfaces and smaller text, with variable weight, optical size, italics, and eight stylistic sets.",
  description: `DM Sans was commissioned for DeepMind under the creative direction of design consultancy MultiAdaptor, developed by the British studio Colophon Foundry, and released through Google Fonts in 2019. The project began with the Latin glyph set of Jonny Pinhorn’s <em>Poppins</em> for Indian Type Foundry, adjusting its geometric forms for smaller text and digital interfaces. Colophon relaxed the reliance on compass-drawn shapes to create a reading face suited to software controls and technical copy. A 2023 update expanded the variable weight range to 100–1000 and introduced a dedicated optical-size axis.

The face retains the circular bowls and even strokes associated with the geometric sans-serif tradition, balanced by optical adjustments for screen use. A pronounced x-height gives lowercase letters a clear presence within buttons, cards, and data tables. Curves and stroke junctions are adjusted to distribute weight more evenly, while the apertures of letters such as <em>c</em> and <em>e</em> remain relatively open. The optical-size axis changes outlines and spacing across the size range: smaller settings allow more room between forms, while larger settings produce a tighter texture. Its stylistic sets offer further choices in letter construction, punctuation, figures, and arrows without changing the family’s underlying character.

DM Sans works well in product design systems, application interfaces, dashboards, responsive navigation, and supporting text. Its low contrast and geometric rhythm give long passages a more regular texture than a traditional book serif, making line length and spacing particularly relevant to reading comfort. Within the DeepMind suite, it can handle functional information alongside the more expressive DM Serif families or the fixed-pitch <em>DM Mono</em>. The broad weight range and companion italics support a varied hierarchy while keeping the overall voice consistent.`,
  familyFaces: ["DM Serif Display", "DM Serif Text"],
  fontFile: "/assets/fonts/dm-sans/DMSans.woff2",
  features: [
    { type: "axis", title: "Optical Size", axis: "opsz", text: "Optical", values: [9, 24, 40] },
    {
      type: "comparison", title: "Standard Ligatures", code: "font-feature-settings: 'liga';",
      before: { features: { liga: 0 } }, after: { features: { liga: 1 } }, examples: ["fi", "fl"]
    },
    {
      type: "figures", title: "Figures",
      examples: [
        { text: "1234567890", label: "Proportional Lining (default)", options: { features: "normal" } },
        { text: "1/2 3/4", label: "Fractions: 'frac'", options: { features: { frac: 1 } } },
        { text: "123", reference: "H", label: "Numerators: 'numr'", options: { features: { numr: 1 } } },
        { text: "123", reference: "H", label: "Denominators: 'dnom'", options: { features: { dnom: 1 } } },
        { text: "123", reference: "H", label: "Superscripts: 'sups'", options: { features: { sups: 1 } } }
      ]
    },
    {
      type: "comparison", title: "Ordinals", code: "font-feature-settings: 'ordn';",
      before: { features: { ordn: 0 } }, after: { features: { ordn: 1 } }, examples: ["3a", "4o"]
    },
    {
      type: "comparison", title: "Stylistic Sets", code: "font-feature-settings: 'ss--';",
      before: { features: "normal" },
      examples: [
        { text: "‘¿?’", label: "'ss01'", after: { features: { ss01: 1 } } },
        { text: "a", label: "'ss02'", after: { features: { ss02: 1 } } },
        { text: "g", label: "'ss03'", after: { features: { ss03: 1 } } },
        { text: "u", label: "'ss04'", after: { features: { ss04: 1 } } },
        { text: "y", label: "'ss05'", after: { features: { ss05: 1 } } },
        { text: "Q", label: "'ss06'", after: { features: { ss06: 1 } } },
        { text: "13469", label: "'ss07'", after: { features: { ss07: 1 } } },
        { text: "↑→↓", label: "'ss08'", after: { features: { ss08: 1 } } }
      ]
    },
    {
      type: "comparison", title: "Case Sensitive Forms", code: "font-feature-settings: 'case';",
      before: { features: { case: 0 } }, after: { features: { case: 1 } }, examples: ["(H)", "¿¡"]
    }
  ]
};

export default typeface;
