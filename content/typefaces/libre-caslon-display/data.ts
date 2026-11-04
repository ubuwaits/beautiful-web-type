import type { TypefaceData } from "@/lib/content/types";

const typeface: TypefaceData = {
  slug: "libre-caslon-display",
  name: "Libre Caslon Display",
  dateAdded: "2026-11-02T21:02:14+01:00",
  category: "Display",
  styles: 1,
  glyphCount: 551,
  weights: [{ weight: 400, name: "Regular" }],
  websiteHero: {
    wordmark: { weight: 400 },
    headline: { weight: 400 },
    caseTitle: { weight: 400 },
    tableValue: { weight: 400 },
  },
  latestRelease: { version: "v1.002", date: "25 Jul 2016" },
  projectUrl: "https://github.com/impallari/Libre-Caslon-Display",
  gFontsUrl: "https://fonts.google.com/specimen/Libre+Caslon+Display",
  creator: { name: "Impallari & Fuenzalida", url: "https://github.com/impallari/Libre-Caslon-Display" },
  summary: "Libre Caslon Display is a high-contrast interpretation of Caslon’s English Old Style, with fine hairlines and sharp serifs for large editorial titles.",
  description: `Libre Caslon Display was conceived by Argentine type designer Pablo Impallari and collaborator Rodrigo Fuenzalida as the high-contrast display counterpart to Libre Caslon Text. While early digital revivals of historical typefaces often compromised by striking a single middle ground between text and headline settings, Impallari and Fuenzalida adhered to the optical sizing principles of hot-metal punchcutting. Returning to William Caslon I’s definitive eighteenth-century English Old Style specimens, the designers recognized that larger titling punches were historically cut with dramatic stroke modulation, fine hairlines, and stately proportions tailored to large-scale composition. Libre Caslon Display was engineered specifically to recapture that high-contrast titling presence for contemporary headlines.

Anatomically, the design is defined by high stroke contrast and crisp, architectural transitions. Where its text sibling reinforces hairlines and broadens interior counters to survive micro-rasterization, Display embraces acute modulation, setting slender crossbars and taut hairlines against authoritative vertical stems. The quintessential Caslon hallmarks are articulated with sculptural clarity: the iconic hollowed notch at the apex of the capital A, the firm spur of the G, and the graceful, calligraphic swelling of teardrop terminals on lowercase glyphs such as c, f, and r. Serifs remain softly bracketed and cupped along the baseline, but terminate in refined, sharp points rather than the blunted feet of the text cut. Spaced tightly by default, the letterforms interlock into a dense, melodic cadence that highlights the tension between delicate strokes and rich ink density.

Libre Caslon Display suits book jackets, literary mastheads, packaging, exhibition graphics, and prominent pull quotes, where scale reveals the contrast between its fine hairlines and substantial stems. Paired with Libre Caslon Text, it provides a hierarchy of titling and reading sizes rooted in the optical distinctions of classical English press typography.`,
  familyFaces: ["Libre Caslon Text", "Libre Caslon Condensed"],
  fontFile: "/assets/fonts/libre-caslon-display/LibreCaslonDisplay-Regular.woff2",
  features: [
    {
      type: "comparison", title: "Standard Ligatures", code: "font-feature-settings: 'liga';",
      before: { features: { liga: 0 } }, after: { features: { liga: 1 } }, examples: ["ff", "fi", "fl", "ffi", "ffl"]
    },
    {
      type: "comparison", title: "Discretionary Ligatures", code: "font-feature-settings: 'dlig';",
      before: { features: { dlig: 0 } }, after: { features: { dlig: 1 } }, examples: ["cp", "ct", "et", "sp", "st"]
    },
    {
      type: "figures", title: "Figures",
      examples: [
        { text: "1234567890", label: "Proportional Lining (default)", options: { features: "normal" } },
        { text: "1234567890", label: "Proportional Oldstyle: 'onum'", options: { features: { onum: 1 } } },
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
      before: { features: { ss01: 0 } }, after: { features: { ss01: 1 } }, examples: ["A"]
    }
  ]
};

export default typeface;
