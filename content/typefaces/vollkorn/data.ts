import type { TypefaceData } from "@/lib/content/types";

const typeface: TypefaceData = {
  slug: "vollkorn",
  name: "Vollkorn",
  dateAdded: "2018-10-15",
  category: "Serif",
  styles: 12,
  glyphCount: 2303,
  italic: true,
  smallcap: true,
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
    version: "v5.001",
    date: "1 Dec 2021"
  },
  projectUrl: "http://vollkorn-typeface.com/#download",
  gFontsUrl: "https://fonts.google.com/specimen/Vollkorn",
  creator: {
    name: "Friedrich Althausen",
    url: "https://friedrichalthausen.de/"
  },
  summary: "Vollkorn is Friedrich Althausen’s sturdy text serif, with dark strokes, broad counters, small capitals, and cursive italics for literary and editorial reading.",
  description: `Vollkorn was conceived as a sturdy text face for daily reading. First released in 2005 by German designer Friedrich Althausen—initially drafted during his studies at the Bauhaus-Universität Weimar and shared freely with the reading public under an open license—the typeface takes its name from the German term for whole wheat (<em>Vollkorn</em>). Althausen aimed to support continuous prose on ordinary paper and the lower-resolution displays of the early web.

The anatomy of the letterform is distinguished by its grounded, physical constitution. Where historical book types often risk appearing brittle or frail when subjected to the harsh backlighting of digital monitors, Vollkorn plants its feet with resolute certainty. Its serifs are heavy, wedge-like, and generously bracketed, carving out a decisive, rhythmic footing along the baseline that gathers words into a stable, forward-moving cadence. The stroke modulation reflects the firm pressure of a broad-edged pen rather than the clinical geometry of the compass, casting an unusually rich, dark color across the page while retaining open counters. Wide, hospitable counters and candid apertures welcome light deep into each character, ensuring that dense paragraphs and footnoted passages retain their clarity at smaller sizes.

Over years of quiet, devoted stewardship, Althausen nurtured Vollkorn from a modest two-style experiment into a broad typographic system. Its companion italic refuses the passive compromise of a tilted roman; it rolls forward as a spirited cursive hand, punctuated by lively ball terminals and dynamic transitions that lend genuine vocal friction and polyphonic contrast to citations and dialogue. Furnished with true small capitals, proportional oldstyle figures, a complete suite of weights, and native fluency across Latin, Cyrillic, and Greek, it supports a range of literary and editorial settings.`,
  fontFile: "/assets/fonts/vollkorn/Vollkorn-Regular.woff2",
  features: [
    {
      type: "comparison",
      title: "Standard Ligatures",
      code: "font-feature-settings: 'liga';",
      before: { features: { liga: 0 } },
      after: { features: { liga: 1, clig: 1 } },
      examples: ["ff", "ffi", "ffl", "fi", "fl"]
    },
    {
      type: "comparison",
      title: "Discretionary Ligatures",
      code: "font-feature-settings: 'dlig';",
      before: { features: { dlig: 0 } },
      after: { features: { dlig: 1 } },
      examples: ["ch", "ct", "st", "Th"]
    },
    {
      type: "comparison",
      title: "Contextual Alternates",
      code: "font-feature-settings: 'calt';",
      before: { features: { calt: 0 } },
      after: { features: { calt: 1 } },
      examples: ["fä", "RT", "ff!", "AAß"]
    },
    {
      type: "figures",
      title: "Figures",
      options: { direction: "auto" },
      examples: [
        { text: "1234567890", label: "Proportional Oldstyle (default)", options: { features: "normal" } },
        { text: "1234567890", label: "Proportional Lining: 'lnum'", options: { features: { lnum: 1 } } },
        { text: "1234567890", label: "Tabular Lining: 'lnum', 'tnum'", options: { features: { lnum: 1, tnum: 1 } } },
        { text: "1234567890", label: "Tabular Oldstyle: 'onum', 'tnum'", options: { features: { onum: 1, tnum: 1 } } },
        { text: "1/2 3/4", label: "Fractions: 'frac'", options: { features: { frac: 1 } } },
        { text: "0", label: "Slashed Zero: 'zero'", options: { features: { zero: 1 } } },
        { text: "123", label: "Numerators: 'numr'", reference: "H", options: { features: { numr: 1 } } },
        { text: "123", label: "Denominators: 'dnom'", reference: "H", options: { features: { dnom: 1 } } },
        { text: "123", label: "Subscripts: 'subs'", reference: "H", options: { features: { subs: 1 } } },
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
        { text: "agjM", label: "'ss01'", before: { features: { ss01: 0 } }, after: { features: { ss01: 1 } } },
        { text: "юѝ", label: "'ss04'", before: { features: { ss04: 0 } }, after: { features: { ss04: 1 } } },
        { text: "б", label: "'ss05'", before: { features: { ss05: 0 } }, after: { features: { ss05: 1 } } },
        { text: "1", label: "'ss11'", before: { features: { ss11: 0 } }, after: { features: { ss11: 1 } } },
        { text: "3", label: "'ss13'", before: { features: { ss13: 0 } }, after: { features: { ss13: 1 } } },
        { text: "4", label: "'ss14'", before: { features: { ss14: 0 } }, after: { features: { ss14: 1 } } },
        { text: "7", label: "'ss17'", before: { features: { ss17: 0 } }, after: { features: { ss17: 1 } } }
      ]
    },
    {
      type: "comparison",
      title: "Stylistic Alternates",
      code: "font-feature-settings: 'salt';",
      before: { features: { salt: 0 } },
      after: { features: { salt: 1 } },
      examples: [{ text: "agQ", label: "'salt'" }]
    },
    {
      type: "comparison",
      title: "Case Sensitive Forms",
      code: "font-feature-settings: 'case';",
      before: { features: { case: 0 } },
      after: { features: { case: 1 } },
      examples: ["0123", "89()", "+-:<"]
    },
    {
      type: "comparison",
      title: "Capital Spacing",
      code: "font-feature-settings: 'cpsp';",
      before: { features: { cpsp: 0 }, size: "compact" },
      after: { features: { cpsp: 1 }, size: "compact" },
      examples: ["HAMBURG"]
    },
    {
      type: "comparison",
      title: "Titling Alternates",
      code: "font-feature-settings: 'titl';",
      before: { features: { titl: 0 } },
      after: { features: { titl: 1 } },
      examples: ["ÅÄÖ", "ÜJQĴ", "ŁŊҔ"]
    }
  ],
};

export default typeface;
