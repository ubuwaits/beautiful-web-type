import type { TypefaceData } from "@/lib/content/types";

const typeface: TypefaceData = {
  slug: "poppins",
  name: "Poppins",
  dateAdded: "2018-11-19",
  category: "Sans-Serif",
  styles: 18,
  glyphCount: 1060,
  italic: true,
  weights: [
    {
      weight: 100,
      name: "Thin"
    },
    {
      weight: 200,
      name: "ExtraLight"
    },
    {
      weight: 300,
      name: "Light"
    },
    {
      weight: 400,
      name: "Regular"
    },
    {
      weight: 500,
      name: "Medium"
    },
    {
      weight: 600,
      name: "SemiBold"
    },
    {
      weight: 700,
      name: "Bold"
    },
    {
      weight: 800,
      name: "ExtraBold"
    },
    {
      weight: 900,
      name: "Black"
    }
  ],
  latestRelease: {
    version: "v4.004",
    date: "23 Jun 2020"
  },
  projectUrl: "https://github.com/itfoundry/Poppins",
  gFontsUrl: "https://fonts.google.com/specimen/Poppins",
  creator: {
    name: "Indian Type Foundry",
    url: "https://www.indiantypefoundry.com"
  },
  summary: "Poppins is Indian Type Foundry’s geometric sans serif for Latin and Devanagari, with circular forms and a broad weight range for interfaces and branding.",
  description: `Poppins was conceived to resolve a longstanding imbalance in the geometric sans-serif tradition: the historic scarcity of non-Latin scripts designed with the same structural care afforded to the Western alphabet. Published by the Indian Type Foundry (ITF) in 2015, the family was developed as a tandem project, with Jonny Pinhorn drafting the Latin and Ninad Kale shaping the Devanagari. Rather than treating the Devanagari script as a secondary adaptation grafted onto a European skeleton, the designers conceived both writing systems simultaneously, translating the rational geometry of the early twentieth century into a unified, cross-cultural tool for modern screens and print.

The anatomy of the face is grounded in the pure geometric shapes that defined mid-century modernism—most recognizably Paul Renner’s <em>Futura</em> and Herbert Bayer’s Bauhaus experiments—yet it handles those forms with contemporary digital restraint. The strokes are largely monolinear, with only subtle optical adjustments at the joints to prevent excess weight from accumulating where curves meet straight stems. Characters such as <em>o</em>, <em>e</em>, and <em>c</em> are constructed from near-perfect circular arcs, giving the line an open, hospitable cadence. Terminals are sheared cleanly along strict horizontal and vertical axes, imparting a crisp, architectural silhouette. In the Devanagari, Kale mirrored these circular geometries within the loops and knots of the glyphs, aligning the script's continuous top line (<em>shirorekha</em>) with the Latin cap-height and x-height to maintain an even optical baseline across bilingual settings.

Because of its geometric foundations, Poppins carries a wide horizontal footprint. Characters like <em>m</em>, <em>w</em>, <em>c</em>, and <em>d</em> demand generous lateral breathing room, which establishes an unhurried, rhythmic pace along the line. Spanning nine deliberate weights—from a skeletal Thin to a dense, impactful Black, complete with matching oblique cuts—the family shifts character smoothly across scales. In its lighter iterations, it casts an airy, minimalist tone; in its heavier weights, it adopts the punchy, block-like presence of mid-century advertising display faces.

Poppins suits digital interfaces, navigation, short editorial headings, wayfinding, and bilingual branding. Its circular forms give layouts a consistent geometric character, while the broad weight range supports changes of emphasis from supporting text to prominent titles. The coordinated Latin and Devanagari designs offer a shared visual framework for multilingual compositions.`,
  fontFile: "/assets/fonts/poppins/Poppins-Regular.woff2",
  features: [
    {
      type: "figures",
      title: "Figures",
      options: { direction: "auto", features: "normal" },
      examples: [{ text: "1234567890", label: "Proportional Lining (default)" }]
    },
    {
      type: "comparison",
      title: "Stylistic Sets",
      code: "font-feature-settings: 'ss--';",
      examples: [
        { text: "!?,.", label: "'ss01'", before: { features: { ss01: 0 } }, after: { features: { ss01: 1 } } },
        { text: "a", label: "'ss02'", before: { features: { ss02: 0 } }, after: { features: { ss02: 1 } } },
        { text: "&", label: "'ss03'", before: { features: { ss03: 0 } }, after: { features: { ss03: 1 } } },
        { text: "3692", label: "'ss04'", before: { features: { ss04: 0 } }, after: { features: { ss04: 1 } } }
      ]
    }
  ],
};

export default typeface;
