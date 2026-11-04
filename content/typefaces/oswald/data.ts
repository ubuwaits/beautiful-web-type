import type { TypefaceData } from "@/lib/content/types";

const typeface: TypefaceData = {
  slug: "oswald",
  name: "Oswald",
  dateAdded: "2018-10-15",
  category: "Display",
  styles: 6,
  glyphCount: 771,
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
    version: "v4.103",
    date: "20 Jul 2023"
  },
  projectUrl: "https://github.com/googlefonts/OswaldFont",
  gFontsUrl: "https://fonts.google.com/specimen/Oswald",
  creator: {
    name: "Vernon Adams",
    url: "https://fonts.google.com/?query=Vernon+Adams"
  },
  summary: "Oswald reworks early American condensed gothics for screens, offering narrow proportions and variable weight for headlines, navigation, and poster typography.",
  description: `Oswald was drafted during the early years of the modern web font movement, addressing an immediate, practical deficit in digital typography: the lack of a reliable, condensed gothic built to survive the pixel grid. Conceived in 2011 by the late Vernon Adams, the face looks back to the commercial printing rooms of early-twentieth-century America—specifically Morris Fuller Benton’s Alternate Gothic designs cut for the American Type Founders in 1903. Adams reinterpreted those narrow, space-saving foundry metal forms for desktop and mobile displays, crafting a face intended to deliver headline impact where horizontal real estate was strictly limited.

Anatomically, the design is governed by compact proportions, flat-sided stems, and a prominent x-height. Curves resolve with brisk discipline rather than sweeping geometry, and the interior counters remain tight yet defined. Adams adjusted the classic American gothic framework to modern rendering engines by opening the apertures slightly and softening interior junctions, preventing the letterforms from congealing into solid blocks of black at smaller headline sizes. Set along the line, Oswald establishes a firm, vertical cadence. It moves with a clipped, efficient stride, producing a dense texture that commands attention without sprawling laterally across the measure.

Oswald’s compact geometry suits headlines, section headers, navigation bars, and posters, where its narrow proportions give short phrases a strong vertical presence. Over subsequent years, designers Kalapi Gajjar and Alexei Vanyashin expanded Adams’s foundational work, broadening the family into a continuous variable weight axis from Extra Light to Bold alongside extensive Cyrillic and Vietnamese language support.`,
  fontFile: "/assets/fonts/oswald/Oswald-Regular.woff2",
  features: [
    {
      type: "comparison",
      title: "Standard Ligatures",
      code: "font-feature-settings: 'liga';",
      before: { features: { liga: 0 } },
      after: { features: { liga: 1, clig: 1 } },
      examples: ["ffi", "ffl", "fi", "fl", "ff"]
    },
    {
      type: "comparison",
      title: "Discretionary Ligatures",
      code: "font-feature-settings: 'dlig';",
      before: { features: { dlig: 0 } },
      after: { features: { dlig: 1 } },
      examples: ["fĳ", "ffĳ"]
    },
    {
      type: "figures",
      title: "Figures",
      options: { direction: "auto" },
      examples: [
        { text: "1234567890", label: "Proportional Lining (default)", options: { features: "normal" } },
        { text: "1/2 3/4", label: "Fractions: 'frac'", options: { features: { frac: 1 } } },
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
    }
  ],
};

export default typeface;
