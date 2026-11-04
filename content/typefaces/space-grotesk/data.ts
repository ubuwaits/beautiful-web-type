import type { TypefaceData } from "@/lib/content/types";

const typeface: TypefaceData = {
  slug: "space-grotesk",
  name: "Space Grotesk",
  dateAdded: "2019-02-01T16:14:15+01:00",
  category: "Sans-Serif",
  styles: "Variable",
  glyphCount: 1001,
  weights: [
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
    }
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
  latestRelease: {
    version: "v2.0.0",
    date: "29 Oct 2020"
  },
  projectUrl: "https://github.com/floriankarsten/space-grotesk",
  creator: {
    name: "Florian Karsten",
    url: "https://fonts.floriankarsten.com/space-grotesk"
  },
  summary: "Space Grotesk is Florian Karsten’s proportional adaptation of Space Mono, retaining mechanical quirks in a variable sans serif for web headings and identities.",
  description: `Space Grotesk was born from a curious act of typographic reverse-engineering: the liberation of a monospaced letterform into the fluid realm of proportional measure. Drawn by Czech type designer Florian Karsten in 2018, the face takes as its foundation Space Mono, an eccentric mechanical design drafted by Colophon Foundry for Google. Karsten adapted the fixed-width design to proportional spacing. By stripping away the unyielding pitch while lovingly preserving the structural oddities engineered to survive it, he conjured a grotesque that hums with an uncanny, retro-futuristic wit.

The anatomy of Space Grotesk is governed by this persistent mechanical memory. Though its characters are liberated to claim widths natural to their breath—permitting the m to stretch its limbs and the i to narrow—they proudly carry the vestigial DNA of the terminal and the cathode-ray tube. Curves resist pure circularity, adopting slightly flattened, rectangular contours; terminals shear off with blunt, unapologetic decisiveness; and junctions preserve peculiar, chiseled notches that evoke both ink traps and the brutalist geometry of mid-century hardware. Set in running text, it casts an invigorating, syncopated texture—clean and disciplined enough to sustain readable paragraphs, yet spiked with enough graphic friction to refuse the soothing, interchangeable anonymity of the neo-grotesque canon.

Spanning five calibrated weights and expanded into a supple variable continuum, the family achieves a delicate balance between utilitarian clarity and editorial swagger. Furnished with broad Latin and Cyrillic support, tabular figures, and stylistic alternates that let the designer dial its idiosyncratic voice up or down, Space Grotesk is suited to web typography, technology identities, and independent publishing.`,
  familyFaces: [
    "Space Mono"
  ],
  fontFile: "/assets/fonts/space-grotesk/glyphs-regular.woff2",
  glyphSource: "/assets/fonts/space-grotesk/SpaceGroteskVariable.woff2",
  features: [
    {
      type: "comparison",
      title: "Standard Ligatures",
      code: "font-feature-settings: 'liga';",
      before: { features: { liga: 0 } },
      after: { features: { liga: 1, clig: 1 } },
      examples: ["ff", "ffi", "fi", "fl", "ffl"]
    },
    {
      type: "figures",
      title: "Figures",
      options: { direction: "auto" },
      examples: [
        { text: "1234567890", label: "Proportional Lining (default)", options: { features: "normal" } },
        { text: "1234567890", label: "Tabular Lining: 'lnum', 'tnum'", options: { features: { lnum: 1, tnum: 1 } } },
        { text: "1234567890", label: "Proportional Oldstyle: 'onum'", options: { features: { onum: 1 } } },
        { text: "1/2 3/4", label: "Fractions: 'frac'", options: { features: { frac: 1 } } },
        { text: "0", label: "Slashed Zero: 'zero'", options: { features: { zero: 1 } } },
        { text: "123", label: "Numerators: 'numr'", reference: "H", options: { features: { numr: 1 } } },
        { text: "123", label: "Denominators: 'dnom'", reference: "H", options: { features: { dnom: 1 } } },
        { text: "123", label: "Subscripts: 'subs'", reference: "H", options: { features: { subs: 1 } } },
        { text: "123", label: "Scientific Inferiors: 'sinf'", reference: "H", options: { features: { sinf: 1 } } },
        { text: "123", label: "Superscripts: 'sups'", reference: "H", options: { features: { sups: 1 } } }
      ]
    },
    {
      type: "comparison",
      title: "Ordinals",
      code: "font-feature-settings: 'ordn';",
      before: { features: { ordn: 0 } },
      after: { features: { ordn: 1 } },
      examples: ["3a", "4o", "No."]
    },
    {
      type: "comparison",
      title: "Stylistic Sets",
      code: "font-feature-settings: 'ss--';",
      examples: [
        { text: "a", label: "'ss01'", before: { features: { ss01: 0 } }, after: { features: { ss01: 1 } } },
        { text: "g", label: "'ss02'", before: { features: { ss02: 0 } }, after: { features: { ss02: 1 } } },
        { text: "y", label: "'ss03'", before: { features: { ss03: 0 } }, after: { features: { ss03: 1 } } },
        { text: "JBD", label: "'ss04'", before: { features: { ss04: 0 } }, after: { features: { ss04: 1 } } },
        { text: "I", label: "'ss05'", before: { features: { ss05: 0 } }, after: { features: { ss05: 1 } } }
      ]
    },
    {
      type: "comparison",
      title: "Case Sensitive Forms",
      code: "font-feature-settings: 'case';",
      before: { features: { case: 0 } },
      after: { features: { case: 1 } },
      examples: ["¦/\\@", "¿()[", "(A)"]
    }
  ],
};

export default typeface;
