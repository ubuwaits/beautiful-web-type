import type { TypefaceData } from "@/lib/content/types";

const typeface: TypefaceData = {
  slug: "libre-caslon-display",
  name: "Libre Caslon Display",
  dateAdded: "2026-11-02",
  category: "Display",
  styles: 1,
  glyphCount: 551,
  weights: [{ weight: 400, name: "Regular" }],
  latestRelease: { version: "v1.002", date: "25 Jul 2016" },
  projectUrl: "https://github.com/impallari/Libre-Caslon-Display",
  gFontsUrl: "https://fonts.google.com/specimen/Libre+Caslon+Display",
  creator: { name: "Impallari & Fuenzalida", url: "https://github.com/impallari/Libre-Caslon-Display" },
  description: `Libre Caslon Display was conceived by Argentine type designer Pablo Impallari and collaborator Rodrigo Fuenzalida as the high-contrast display counterpart to <em>Libre Caslon Text</em>, released under the SIL Open Font License. While early digital revivals of historical typefaces often compromised by striking a single middle ground between text and headline settings, Impallari and Fuenzalida adhered to the optical sizing principles of hot-metal punchcutting. Returning to William Caslon I’s definitive eighteenth-century English Old Style specimens, the designers recognized that larger titling punches were historically cut with dramatic stroke modulation, razor-thin hairlines, and stately proportions that would instantly fail at small reading sizes. Libre Caslon Display was engineered specifically to recapture that aristocratic, monumental presence for contemporary headlines.

Anatomically, the design is defined by high stroke contrast and crisp, architectural transitions. Where its text sibling reinforces hairlines and broadens interior counters to survive micro-rasterization, Display embraces acute modulation, setting slender crossbars and taut hairlines against authoritative vertical stems. The quintessential Caslon hallmarks are articulated with sculptural clarity: the iconic hollowed notch at the apex of the capital <em>A</em>, the firm spur of the <em>G</em>, and the graceful, calligraphic swelling of teardrop terminals on lowercase glyphs such as <em>c</em>, <em>f</em>, and <em>r</em>. Serifs remain softly bracketed and cupped along the baseline, but terminate in refined, sharp points rather than the blunted feet of the text cut. Spaced tightly by default, the letterforms interlock into a dense, melodic cadence that highlights the tension between delicate strokes and rich ink density.

This dramatic modulation strictly dictates its functional domain. Deployed within running body copy or compact digital interfaces, its hairline strokes quickly degrade and flutter, producing severe visual fatigue and broken letterforms. Libre Caslon Display belongs entirely to large-scale editorial environments: book jackets, literary mastheads, luxury packaging, exhibition graphics, and commanding pull quotes where its eighteenth-century gravitas and calligraphic finesse can unfold without spatial restriction. Paired alongside Libre Caslon Text, it establishes an authentic, multi-tier optical hierarchy rooted in classical English press tradition. Within the open catalog, Libre Caslon Display stands as an indispensable titling instrument, proving that the nuanced optical grading of historical metal type can be faithfully realized within the libre digital commons.`,
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
