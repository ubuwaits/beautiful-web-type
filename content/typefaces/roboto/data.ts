import type { TypefaceData } from "@/lib/content/types";

const typeface: TypefaceData = {
  slug: "roboto",
  name: "Roboto",
  dateAdded: "2026-11-03T09:44:01+01:00",
  category: "Sans-Serif",
  styles: "Variable",
  glyphCount: 3409,
  italic: true,
  smallcap: true,
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
  latestRelease: { version: "v3.016", date: "17 Jun 2026" },
  projectUrl: "https://github.com/googlefonts/roboto-3-classic",
  gFontsUrl: "https://fonts.google.com/specimen/Roboto",
  creator: { name: "Christian Robertson", url: "https://github.com/googlefonts/roboto-3-classic" },
  summary: "Roboto 3 Classic brings Christian Robertson’s Android typeface into a variable family, with weight and width controls for interfaces, dashboards, and web text.",
  description: `Roboto 3 Classic brings Christian Robertson’s Android system typeface into a variable format while preserving its established design. The core family dates to Robertson’s 2011 release and his substantial 2014 revision for Material Design. Developed with Type Network, the variable project began with a conservative objective: match the metrics and appearance of the static v2.136 fonts. Unlike the broader parametric exploration of <em>Roboto Flex</em>, Classic concentrates on continuity, allowing existing layouts to retain their proportions while gaining continuous control over weight and width.

The face retains Robertson’s combination of mechanical structure and rounded forms. Flattened outer curves give letters a firm vertical posture, while relatively open apertures and varied character widths keep the rhythm from becoming strictly geometric. The Thin, Regular, and Bold masters were adjusted for compatible interpolation, supporting a continuous weight range from 100 to 900 and widths from Condensed to Normal, with companion italic styles. Screen rendering was also a central concern: Mike Duggan developed TrueType hinting in Microsoft VTT, and the project supplies variants with hinting and vertical metrics adapted for Windows, Android, ChromeOS, and web use.

Roboto’s principal territory remains interfaces: software menus, mobile navigation, dashboards, technical documentation, and responsive layouts that need a broad hierarchy within a consistent family. Its width range helps accommodate compact headings and constrained columns, while the familiar letterforms give everyday controls a relatively unobtrusive presence. In literary publishing, its low stroke contrast and regular texture offer a different reading character from a traditional book serif. For expressive identities or editorial titling, its widespread association with Android may be a limitation or a deliberate reference. Classic is most useful where continuity with the established Roboto design matters as much as the flexibility of a variable font.`,
  fontFile: "/assets/fonts/roboto/Roboto.woff2",
  features: [
    { type: "axis", title: "Width", axis: "wdth", text: "Width", values: [75, 87.5, 100] },
    {
      type: "comparison", title: "Standard Ligatures", code: "font-feature-settings: 'liga';",
      before: { features: { liga: 0 } }, after: { features: { liga: 1 } }, examples: ["fi", "fl", "ffi", "ffl"]
    },
    {
      type: "comparison", title: "Discretionary Ligatures", code: "font-feature-settings: 'dlig';",
      before: { features: { dlig: 0 } }, after: { features: { dlig: 1 } }, examples: ["ff", "st", "ſt"]
    },
    {
      type: "comparison", title: "Small Capitals", code: "font-feature-settings: 'smcp', 'c2sc';",
      before: { features: { smcp: 0, c2sc: 0 } }, after: { features: { smcp: 1, c2sc: 1 } }, examples: ["Abcde"]
    },
    {
      type: "figures", title: "Figures",
      examples: [
        { text: "1234567890", label: "Tabular Lining (default)", options: { features: "normal" } },
        { text: "1234567890", label: "Proportional Lining: 'pnum'", options: { features: { pnum: 1 } } },
        { text: "1234567890", label: "Tabular Oldstyle: 'onum', 'tnum'", options: { features: { onum: 1, tnum: 1 } } },
        { text: "1234567890", label: "Proportional Oldstyle: 'onum', 'pnum'", options: { features: { onum: 1, pnum: 1 } } },
        { text: "1/2 3/4", label: "Fractions: 'frac'", options: { features: { frac: 1 } } },
        { text: "123", reference: "H", label: "Numerators: 'numr'", options: { features: { numr: 1 } } },
        { text: "123", reference: "H", label: "Denominators: 'dnom'", options: { features: { dnom: 1 } } },
        { text: "123", reference: "H", label: "Subscripts: 'subs'", options: { features: { subs: 1 } } },
        { text: "123", reference: "H", label: "Superscripts: 'sups'", options: { features: { sups: 1 } } }
      ]
    },
    {
      type: "comparison", title: "Stylistic Sets", code: "font-feature-settings: 'ss--';",
      before: { features: "normal" },
      examples: [
        { text: "g", label: "'ss01'", after: { features: { ss01: 1 } } },
        { text: "α", label: "'ss02'", after: { features: { ss02: 1 } } },
        { text: "R", label: "'ss03'", after: { features: { ss03: 1 } } },
        { text: "Kk", label: "'ss04'", after: { features: { ss04: 1 } } },
        { text: "Kk", label: "'ss05'", after: { features: { ss05: 1 } } },
        { text: "Oo", label: "'ss06'", after: { features: { ss06: 1 } } },
        { text: "eg", label: "'ss07'", after: { features: { ss07: 1 } } }
      ]
    }
  ]
};

export default typeface;
