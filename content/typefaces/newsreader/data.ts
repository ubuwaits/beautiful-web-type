import type { TypefaceData } from "@/lib/content/types";

const typeface: TypefaceData = {
  slug: "newsreader",
  name: "Newsreader",
  dateAdded: "2026-10-31T22:00:54+01:00",
  category: "Serif",
  styles: "Variable",
  glyphCount: 658,
  italic: true,
  weights: [
    { weight: 200, name: "Extra Light" },
    { weight: 300, name: "Light" },
    { weight: 400, name: "Regular" },
    { weight: 500, name: "Medium" },
    { weight: 600, name: "Semi Bold" },
    { weight: 700, name: "Bold" },
    { weight: 800, name: "Extra Bold" }
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
  latestRelease: { version: "v1.003", date: "26 Nov 2020" },
  projectUrl: "https://github.com/productiontype/Newsreader",
  gFontsUrl: "https://fonts.google.com/specimen/Newsreader",
  creator: { name: "Production Type", url: "https://productiontype.com" },
  summary: "Newsreader is Production Type’s variable serif for screen reading, with optical sizes, true italics, and a broad weight range for articles and editorial titles.",
  description: `Newsreader was conceived to tackle an enduring challenge of digital typography: designing a serif typeface engineered from the ground up for continuous, immersive reading on screens. Commissioned by Google Fonts and crafted by the Parisian foundry Production Type—under the creative direction of Jean-Baptiste Levée, with design contributions from Hugues Gentile, Yoann Minet, and Quentin Schmerber—the face was released in 2020. Rather than producing a facsimile of early hot-metal types, the designers interrogated the mid-twentieth-century editorial tradition, drawing conceptual lineage from the Linotype “Legibility Group” and British press stalwarts like <em>Times New Roman</em> and <em>Plantin</em>. Newsreader strips away the quaint historical quirks of those pulp-and-rotary precedents, delivering an adaptable reading engine purpose-built for the illumination and variable densities of contemporary displays.

Anatomically, the design is governed by sturdy bracketed serifs, hospitable counters, and an ample x-height that establishes a solid baseline cadence. The stroke modulation remains moderate and relaxed, deliberately avoiding the razor-thin hairlines of Didones to prevent the optical vibration and dropouts that plague rasterized text. Newsreader’s architectural strength lies in its fluid variable engine, which couples a continuous weight spectrum with an extensive Optical Size (<code>opsz</code>) axis spanning from caption grades to display scales. At small reading sizes, hairlines thicken, counters expand, and the overall spacing loosens to preserve clear word silhouettes at micro-resolutions; as the axis ascends toward display values, the stroke contrast sharpens, serifs taper, and proportions tighten into an authoritative editorial titling face. Its companion italic functions as a true cursive, rolling forward with a rhythmic ductus and single-storey lowercase constructions that provide clear vocal contrast in running text without disrupting the measure.

Newsreader suits continuous prose, long-form digital essays, e-readers, scholarly journals, and news platforms. Its optical-size axis lets designers adjust the drawing for different reading scales, using sturdier details for text and finer contrast for larger settings. At display sizes, it can carry mastheads and section headings while retaining a relationship to the running prose.`,
  fontFile: "/assets/fonts/newsreader/Newsreader.woff2",
  features: [
    { type: "axis", title: "Optical Size", axis: "opsz", text: "Optical", values: [6, 18, 72] },
    {
      type: "comparison",
      title: "Standard Ligatures",
      code: "font-feature-settings: 'liga';",
      before: { features: { liga: 0 } },
      after: { features: { liga: 1 } },
      examples: ["ff", "fi", "fl", "ffi", "ffl"]
    },
    {
      type: "figures",
      title: "Figures",
      examples: [
        { text: "1234567890", label: "Tabular Lining (default)", options: { features: "normal" } },
        { text: "1234567890", label: "Proportional Lining: 'pnum'", options: { features: { pnum: 1 } } },
        { text: "123", reference: "H", label: "Superscripts: 'sups'", options: { features: { sups: 1 } } }
      ]
    },
    {
      type: "comparison",
      title: "Ordinals",
      code: "font-feature-settings: 'ordn';",
      before: { features: { ordn: 0 } },
      after: { features: { ordn: 1 } },
      examples: ["No", "no"]
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
