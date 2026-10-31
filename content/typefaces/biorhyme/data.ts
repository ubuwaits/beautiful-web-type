import type { TypefaceData } from "@/lib/content/types";

const typeface: TypefaceData = {
  slug: "biorhyme",
  name: "BioRhyme",
  dateAdded: "2018-10-15",
  category: "Display",
  styles: 5,
  glyphCount: 494,
  weights: [
    {
      weight: 200,
      name: "Extra-Light"
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
      weight: 700,
      name: "Bold"
    },
    {
      weight: 800,
      name: "Extra-Bold"
    }
  ],
  latestRelease: {
    version: "v1.600",
    date: "30 Aug 2023"
  },
  projectUrl: "https://github.com/aoifemooney/makingbiorhyme",
  gFontsUrl: "https://fonts.google.com/specimen/BioRhyme",
  creator: {
    name: "Aoife Mooney",
    url: "http://www.aoifemooney.org"
  },
  description: `BioRhyme is a study in horizontal rhythm and structural warmth, drawn by Irish type designer Aoife Mooney and published through Google Fonts under the SIL Open Font License. Drawing distant inspiration from nineteenth-century American wood types and commercial specimens—including Boston Breton and an idiosyncratic capital <em>R</em> from the Conner foundry—Mooney approached the slab serif not as an instrument of blunt force, but as an exercise in cadence. Rather than treating the Egyptian model as a rigid mechanical cage, she softened its joints and broadened its gait, crafting a face designed to bring personality and weight to display settings and short passages of text.

The anatomy of the letterform is defined by its low, broad center of gravity and generous internal chambers. Its serifs are firm, unbracketed horizontal blocks, yet Mooney introduces unexpected, supple curves that temper their rigidity—most notably in the fluid, drawn-out stroke of the uppercase <em>R</em> and the relaxed shoulders of the lowercase. Ascenders and descenders are kept deliberately short, paired with an ample x-height that anchors the letters firmly to the baseline. Along the line, BioRhyme sets an unhurried, syncopated pace. Its wide proportions invite light deep into the counters, resisting the dense, clotted texture common to heavy slab serifs, though that same breadth makes it less suited to the close quarters of extended narrative text.

Spanning a variable spectrum across weight and width—progressing from a skeletal Extra Light to an assertive Extra Bold, and out to an expansive, wide-bodied footprint—BioRhyme demonstrates that nineteenth-century commercial display forms can retain their physical vigor without losing their good humor. It works best where it is allowed room to breathe: on covers, editorial headings, and packaging where its wide stance can organize space without crowding it. Within the open-source commons, it stands as a dependable, characterful voice, offering a thoughtful counterpoint to the prevailing sea of neutral grotesques.`,
  familyFaces: [
    "BioRhyme Expanded"
  ],
  fontFile: "/assets/fonts/biorhyme/BioRhyme-Regular.woff2",
  features: [
    {
      type: "comparison",
      title: "Standard Ligatures",
      code: "font-feature-settings: 'liga';",
      before: { features: { liga: 0 } },
      after: { features: { liga: 1, clig: 1 } },
      examples: ["fi", "fl"]
    },
    {
      type: "figures",
      title: "Figures",
      options: { direction: "auto" },
      examples: [
        { text: "1234567890", label: "Proportional Lining (default)", options: { features: "normal" } },
        { text: "1/2 3/4", label: "Fractions: 'frac'", options: { features: { frac: 1 } } },
        { text: "0", label: "Slashed Zero: 'zero'", options: { features: { zero: 1 } } },
        { text: "13", label: "Numerators: 'numr'", reference: "H", options: { features: { numr: 1 } } },
        { text: "2", label: "Denominators: 'dnom'", reference: "H", options: { features: { dnom: 1 } } },
        { text: "123", label: "Superscripts: 'sups'", reference: "H", options: { features: { sups: 1 } } }
      ]
    },
    {
      type: "comparison",
      title: "Ordinals",
      code: "font-feature-settings: 'ordn';",
      before: { features: { ordn: 0 } },
      after: { features: { ordn: 1 } },
      examples: ["3a", "4o"]
    },
    {
      type: "comparison",
      title: "Stylistic Sets",
      code: "font-feature-settings: 'ss--';",
      examples: [
        { text: "ft", label: "'ss01'", before: { features: { ss01: 0 } }, after: { features: { ss01: 1 } } },
        { text: "ag", label: "'ss02'", before: { features: { ss02: 0 } }, after: { features: { ss02: 1 } } },
        { text: "kx2", label: "'ss03'", before: { features: { ss03: 0 } }, after: { features: { ss03: 1 } } },
        { text: "Gz", label: "'ss04'", before: { features: { ss04: 0 } }, after: { features: { ss04: 1 } } },
        { text: "A", label: "'ss07'", before: { features: { ss07: 0 } }, after: { features: { ss07: 1 } } },
        { text: "dua", label: "'ss08'", before: { features: { ss08: 0 } }, after: { features: { ss08: 1 } } }
      ]
    },
    {
      type: "comparison",
      title: "Swashes",
      code: "font-feature-settings: 'swsh';",
      before: { features: { swsh: 0 } },
      after: { features: { swsh: 1 } },
      examples: ["QR&", "ŔŖŘ"]
    },
    {
      type: "comparison",
      title: "Case Sensitive Forms",
      code: "font-feature-settings: 'case';",
      before: { language: "ca", features: { case: 0 } },
      after: { features: { case: 1 }, language: "ca" },
      examples: [{ text: "l·l", label: "Catalan · 'case'" }]
    }
  ],
};

export default typeface;
