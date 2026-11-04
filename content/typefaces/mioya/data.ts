import type { TypefaceData } from "@/lib/content/types";

const typeface: TypefaceData = {
  slug: "mioya",
  name: "Mioya",
  dateAdded: "2026-11-02T22:37:53+01:00",
  category: "Display",
  styles: "Variable",
  glyphCount: 451,
  weights: [
    { weight: 300, name: "Light" },
    { weight: 400, name: "Regular" },
    { weight: 700, name: "Bold" },
    { weight: 900, name: "Black" }
  ],
  websiteHero: {
    wordmark: { weight: 700 },
    headline: { weight: 400 },
    caseTitle: { weight: 700 },
    tableValue: { weight: 400 },
  },
  latestRelease: { version: "v1.000", date: "23 May 2026" },
  projectUrl: "https://dotcolon.net/fonts/mioya/",
  creator: { name: "Sora Sagano", url: "https://dotcolon.net/" },
  summary: "Mioya is Sora Sagano’s display serif, balancing rounded contours with sharp wedge serifs across four named weights and a variable font for editorial headings.",
  description: `Mioya was designed by Japanese type designer Sora Sagano, founder of the independent foundry dot colon. The project emerged as a progressive consolidation of Sagano’s earlier serif explorations, integrating elements of his earlier single-weight designs—Medio and Seshat—into a unified typographic system. Rather than producing a strict historical facsimile, Sagano drew on early twentieth-century editorial romans to cultivate a subtle vintage warmth, modernizing the forms through contemporary vector geometry and variable font mechanics.

Anatomically, the typeface is built on the deliberate tension between soft, rounded contours and sharp terminals. The letterforms carry an elevated x-height and generous interior counters, giving lowercase characters an approachable, slightly buoyant presence on the baseline. To counter this softness and maintain structural discipline, Sagano anchored the strokes with crisp, wedge-like serifs that preserve visual focus. Stroke modulation is calibrated dynamically across the family: in the Light cut, contrast remains low and restrained to protect delicate stems, whereas the Black weight accentuates contrast into a punchy, high-modulation display face. Distributed across four core weights—Light, Regular, Bold, and Black—alongside a continuous variable weight font, Mioya is equipped with OpenType features including standard ligatures, proportional figures, and case-sensitive forms.

Mioya suits book jackets, packaging, cultural posters, and editorial headings that call for a blend of vintage warmth and crisp terminal definition. The Light and Regular weights also lend themselves to short-to-medium editorial excerpts, callouts, and subheads, while the heavier cuts bring stronger contrast and emphasis to titles.`,
  fontFile: "/assets/fonts/mioya/Mioya-Regular.woff2",
  features: [
    {
      type: "comparison", title: "Standard Ligatures", code: "font-feature-settings: 'liga';",
      before: { features: { liga: 0 } }, after: { features: { liga: 1 } }, examples: ["fi", "fl"]
    },
    {
      type: "figures", title: "Figures",
      examples: [
        { text: "1234567890", label: "Tabular Lining (default)", options: { features: "normal" } },
        { text: "1234567890", label: "Proportional Lining: 'pnum'", options: { features: { pnum: 1 } } },
        { text: "1/2 3/4", label: "Fractions: 'frac'", options: { features: { frac: 1 } } },
        { text: "123", reference: "H", label: "Numerators: 'numr'", options: { features: { numr: 1 } } },
        { text: "123", reference: "H", label: "Denominators: 'dnom'", options: { features: { dnom: 1 } } },
        { text: "123", reference: "H", label: "Subscripts: 'subs'", options: { features: { subs: 1 } } },
        { text: "123", reference: "H", label: "Scientific Inferiors: 'sinf'", options: { features: { sinf: 1 } } },
        { text: "123", reference: "H", label: "Superscripts: 'sups'", options: { features: { sups: 1 } } }
      ]
    },
    {
      type: "comparison", title: "Case Sensitive Forms", code: "font-feature-settings: 'case';",
      before: { features: { case: 0 } }, after: { features: { case: 1 } }, examples: ["(H)", "H–H", "«A»"]
    }
  ]
};

export default typeface;
