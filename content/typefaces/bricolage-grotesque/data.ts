import type { TypefaceData } from "@/lib/content/types";

const typeface: TypefaceData = {
  slug: "bricolage-grotesque",
  name: "Bricolage Grotesque",
  dateAdded: "2026-11-02",
  category: "Display",
  styles: "Variable",
  glyphCount: 597,
  weights: [
    { weight: 200, name: "Extra Light" },
    { weight: 300, name: "Light" },
    { weight: 400, name: "Regular" },
    { weight: 500, name: "Medium" },
    { weight: 600, name: "Semi Bold" },
    { weight: 700, name: "Bold" },
    { weight: 800, name: "Extra Bold" }
  ],
  latestRelease: { version: "v1.001", date: "19 Jul 2023" },
  projectUrl: "https://github.com/ateliertriay/bricolage",
  gFontsUrl: "https://fonts.google.com/specimen/Bricolage+Grotesque",
  creator: { name: "Mathieu Triay", url: "https://www.mathieutriay.com/" },
  description: `Bricolage Grotesque emerged from a deliberate confrontation between the unvarnished grit of nineteenth-century British foundry types and the audacious, top-heavy posture of mid-century French display lettering. Released in 2023 through Google Fonts under the SIL Open Font License, the face was developed by London-based French designer Mathieu Triay. Rather than sanding down historical anomalies into a seamless, interchangeable neo-grotesque, Triay leaned into the mechanical frictions of the past, synthesizing the dense, muscular punch of Stephenson Blake’s <em>Grotesque No. 9</em> with the off-kilter, humanist dynamism of Roger Excoffon’s <em>Antique Olive</em>.

Anatomically, the design is defined by an assertive, top-heavy distribution of weight that actively resists the polite uniformity of the Swiss modernists. Volume swells upward into the heads and shoulders of lowercase glyphs, pulling the visual center of gravity north and giving words a restless, forward momentum. Deep, triangular ink traps bite into junctions—carving dramatic notches out of characters like <em>k</em>, <em>n</em>, and <em>r</em>—while stroke ends terminate in abrupt, diagonal shears that keep negative space churning through the line. Driven by a parametric variable engine that controls weight, width, and optical size, the letterforms recalibrate their behavior across scales: at caption grades, the sharp incisions function as optical light-wells that stave off pixel clogging; dialed up to headline scale, those same recesses transform into sculptural graphic gouges.

Because of this kinetic cadence and pronounced detailing, Bricolage Grotesque quickly fatigues the eye when forced into dense, sustained narrative text or conservative corporate interfaces. Its rhythm is inherently vocal and syncopated, demanding layouts that benefit from visual friction and structural swagger. It finds its natural domain in poster design, editorial mastheads, cultural identity systems, and packaging—environments where its idiosyncratic geometry can operate as a primary graphic element rather than an invisible text container. Within the open catalog, it stands as a spirited counterweight to corporate minimalism, proving that historical vernaculars can be recombined into a potent, contemporary display instrument.`,
  fontFile: "/assets/fonts/bricolage-grotesque/glyphs-regular.woff2",
  glyphSource: "/assets/fonts/bricolage-grotesque/BricolageGrotesque.woff2",
  features: [
    { type: "axis", title: "Optical Size", axis: "opsz", text: "Optical", values: [12, 48, 96] },
    { type: "axis", title: "Width", axis: "wdth", text: "Grotesque", values: [75, 87.5, 100] },
    {
      type: "figures",
      title: "Figures",
      examples: [
        { text: "1234567890", label: "Proportional Lining (default)", options: { features: "normal" } },
        { text: "1234567890", label: "Tabular Lining: 'tnum'", options: { features: { tnum: 1 } } },
        { text: "1234567890", label: "Proportional Oldstyle: 'onum'", options: { features: { onum: 1 } } },
        { text: "1234567890", label: "Tabular Oldstyle: 'onum', 'tnum'", options: { features: { onum: 1, tnum: 1 } } },
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
      examples: ["No."]
    },
    {
      type: "comparison",
      title: "Case Sensitive Forms",
      code: "font-feature-settings: 'case';",
      before: { features: { case: 0 } },
      after: { features: { case: 1 } },
      examples: ["H–H", "H—H"]
    }
  ]
};

export default typeface;
