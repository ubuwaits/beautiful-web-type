import type { TypefaceData } from "@/lib/content/types";

const typeface: TypefaceData = {
  slug: "instrument-sans",
  name: "Instrument Sans",
  dateAdded: "2025-06-05T20:19:58+02:00",
  category: "Sans-Serif",
  styles: "Variable",
  glyphCount: 501,
  italic: true,
  weights: [
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
      name: "Semi-Bold"
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
    version: "v1.000",
    date: "20 Mar 2023"
  },
  projectUrl: "https://github.com/Instrument/instrument-sans",
  gFontsUrl: "https://fonts.google.com/specimen/Instrument+Sans",
  creator: {
    name: "Rodrigo Fuenzalida",
    url: "https://www.instagram.com/erre.efe"
  },
  summary: "Instrument Sans is a variable grotesque by Rodrigo Fuenzalida, balancing restrained forms with stylistic alternatives for interfaces and editorial layouts.",
  description: `Conceived for the design agency Instrument by Chilean type designer Rodrigo Fuenzalida under the creative direction of Jordan Egstad, Instrument Sans combines a restrained grotesque structure with more informal details. The family was designed for both modern interfaces and editorial spaces.

Underneath its disciplined grotesque exterior beats an agile, subtly playful heart. The letterforms are drafted with generous, hospitable proportions and wide apertures that welcome ambient light into the line, preventing the dense, claustrophobic pooling of pixels that so often handicaps utilitarian screen types. Terminals are cut with deliberate, razor-sharp certainty, yet the curves evade dogmatic geometry; they swell and resolve with an organic elasticity that catches the eye without disrupting the reading cadence. Along the running measure, Instrument Sans produces a porous, even-textured grey—orderly and confident enough to govern dense software hierarchies and technical captions, while retaining enough variation for continuous prose.

The variable design allows its proportions and posture to change within a common structure. Conceived as a modern variable continuum spanning axes of weight, width, and slant, the design transitions seamlessly from the space-saving discipline of its condensed proportions to the expansive authority of its wide cuts. Crucially, it is enriched by an extensive apparatus of OpenType features—including twelve distinct stylistic sets that allow the typographer to exchange strict grotesque standards for single-story constructions, rounded descenders, and idiosyncratic majuscules. Through these thoughtful permutations, Instrument Sans refuses ideological rigidity, allowing designers to adjust its character without leaving the family.`,
  familyFaces: [
    "Instrument Serif"
  ],
  fontFile: "/assets/fonts/instrument-sans/InstrumentSans.woff2",
  features: [
    {
      type: "comparison",
      title: "Standard Ligatures",
      code: "font-feature-settings: 'liga', 'clig';",
      before: { features: { liga: 0 } },
      after: { features: { liga: 1, clig: 1 } },
      examples: ["ffi", "ffl", "fi", "fl", "->"]
    },
    {
      type: "figures",
      title: "Figures",
      responsive: false,
      examples: [
        {
          text: "1234567890",
          label: "Proportional Lining (default): 'pnum'",
          options: { features: { lnum: 1, pnum: 1 } }
        },
        { text: "1234567890", label: "Tabular Lining: 'tnum'", options: { features: { lnum: 1, tnum: 1 } } },
        { text: "+−×÷=", label: "Proportional Symbols: 'pnum'", options: { features: { lnum: 1, pnum: 1 } } },
        { text: "+−×÷=", label: "Tabular Symbols: 'tnum'", options: { features: { lnum: 1, tnum: 1 } } }
      ]
    },
    {
      type: "comparison",
      title: "Ordinals",
      code: "font-feature-settings: 'ordn';",
      after: { features: { ordn: 1 } },
      examples: ["3a", "4o"]
    },
    {
      type: "comparison",
      title: "Alternate Glyph Forms",
      code: "font-feature-settings: 'ss--';",
      examples: [
        { text: "ffi", label: "'ss01'", after: { features: { ss01: 1 } } },
        { text: "a", label: "'ss02'", after: { features: { ss02: 1 } } },
        { text: "y", label: "'ss03'", after: { features: { ss03: 1 } } },
        { text: "Kk", label: "'ss04'", after: { features: { ss04: 1 } } },
        { text: "M", label: "'ss06'", after: { features: { ss06: 1 } } },
        { text: "J", label: "'ss08'", after: { features: { ss08: 1 } } },
        { text: "Q", label: "'ss09'", after: { features: { ss09: 1 } } },
        { text: "2", label: "'ss10'", after: { features: { ss10: 1 } } }
      ]
    },
    {
      type: "comparison",
      title: "Case Sensitive Forms",
      code: "font-feature-settings: 'case';",
      after: { features: { case: 1 } },
      examples: ["(A)", "{A}", "[A]"]
    }
  ],
};

export default typeface;
