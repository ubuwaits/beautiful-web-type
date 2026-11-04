import type { TypefaceData } from "@/lib/content/types";

const typeface: TypefaceData = {
  slug: "biorhyme-expanded",
  name: "BioRhyme Expanded",
  dateAdded: "2018-10-28T11:24:10+01:00",
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
  websiteHero: {
    wordmark: { weight: 700, size: 24, lineHeight: "28px", letterSpacing: "-0.025em" },
    headline: { weight: 400, size: "clamp(1.5rem, 3.6cqw, 3.75rem)", lineHeight: 1.02, letterSpacing: "-0.045em" },
    description: { weight: 400, size: 16, desktopSize: 18, lineHeight: "28px" },
    action: { weight: 400, size: 14, lineHeight: "24px" },
    caseLocation: { weight: 400, size: 12, lineHeight: "20px", letterSpacing: "0.025em", textTransform: "uppercase" },
    caseTitle: { weight: 700, size: 24, lineHeight: 1.15, letterSpacing: "-0.025em" },
    caseBody: { weight: 400, size: 14, lineHeight: "24px" },
    tableLabel: { weight: 400, size: 14, lineHeight: "20px" },
    tableValue: { weight: 400, size: 14, lineHeight: "20px", features: { lnum: 1, tnum: 1 } },
  },
  latestRelease: {
    version: "v1.600",
    date: "30 Aug 2023"
  },
  projectUrl: "https://github.com/aoifemooney/makingbiorhyme",
  gFontsUrl: "https://fonts.google.com/specimen/BioRhyme+Expanded",
  creator: {
    name: "Aoife Mooney",
    url: "http://www.aoifemooney.org"
  },
  summary: "BioRhyme Expanded is a wide slab serif by Aoife Mooney, with open counters and a low, broad stance for posters, book covers, packaging, and short titles.",
  description: `BioRhyme Expanded pushes Aoife Mooney’s slab-serif design to its logical horizontal boundary, trading the compact cadence of text setting for the deliberate sprawl of nineteenth-century broadsides. Where the standard width maintains just enough discipline to handle short paragraphs and captions, the Expanded cut leans entirely into its spatial footprint. Its expansive proportions reshape the white space around words, giving short titles a broad horizontal presence.

The anatomy of the face exaggerates the low-slung, grounded qualities of the Egyptian genre. Counters open into broad, light-filled chambers, while the truncated ascenders and descenders further emphasize the horizontal pull of the line. The unbracketed, rectilinear slabs that cap the vertical stems act like masonry footings, anchoring each character firmly to the baseline. Mooney’s signature gestures—most notably the sweeping, calligraphic leg of the capital R and the broad bowls of the lowercase—gain considerable breathing room at this scale. In composition, generous leading complements the horizontal reach of its wide-set slabs and deliberate spacing. It casts a distinct, rhythmically punctuated texture that establishes clear hierarchy in titles and short editorial phrases without needing to resort to heavy ink weights.

Across its spectrum from Extra Light to Extra Bold, BioRhyme Expanded brings a broad, grounded presence to book jackets, posters, packaging, and interface headers. Generous horizontal space gives its sweeping curves and slab serifs room to register, while changes in weight offer different degrees of emphasis within the same expansive silhouette.`,
  familyFaces: [
    "BioRhyme"
  ],
  fontFile: "/assets/fonts/biorhyme-expanded/BioRhymeExpanded-Regular.woff2",
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
        { text: "kx", label: "'ss03'", before: { features: { ss03: 0 } }, after: { features: { ss03: 1 } } },
        { text: "Gz", label: "'ss04'", before: { features: { ss04: 0 } }, after: { features: { ss04: 1 } } },
        { text: "A", label: "'ss07'", before: { features: { ss07: 0 } }, after: { features: { ss07: 1 } } },
        { text: "du", label: "'ss08'", before: { features: { ss08: 0 } }, after: { features: { ss08: 1 } } }
      ]
    },
    {
      type: "comparison",
      title: "Swashes",
      code: "font-feature-settings: 'swsh';",
      before: { features: { swsh: 0 } },
      after: { features: { swsh: 1 } },
      examples: ["Q&"]
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
