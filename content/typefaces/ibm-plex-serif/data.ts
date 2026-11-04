import type { TypefaceData } from "@/lib/content/types";

const typeface: TypefaceData = {
  slug: "ibm-plex-serif",
  name: "IBM Plex Serif",
  dateAdded: "2018-10-30T16:54:09+01:00",
  category: "Serif",
  styles: 16,
  glyphCount: 1054,
  italic: true,
  weights: [
    {
      weight: 100,
      name: "Thin"
    },
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
      weight: 450,
      name: "Text"
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
    version: "v2.0.0",
    date: "2 Feb 2026"
  },
  projectUrl: "https://github.com/IBM/plex",
  gFontsUrl: "https://fonts.google.com/specimen/IBM+Plex+Serif",
  creator: {
    name: "Mike Abbink & Bold Monday",
    url: "https://boldmonday.com"
  },
  summary: "IBM Plex Serif brings the Plex family’s engineered details to a transitional serif, with true italics and small capitals for editorial and technical publishing.",
  description: `IBM Plex Serif extends the Plex family’s industrial character into a serif design for editorial and technical publishing. Conceived under the creative direction of Mike Abbink alongside the Dutch foundry Bold Monday, the face was designed not merely to accompany its unserifed sibling, but to provide IBM with an authentic voice for long-form editorial scholarship, technical white papers, and historical reflection. In drafting its outlines, the designers turned their gaze toward the transitional and Scotch Roman types of the nineteenth century—and, closer to home, the proud mechanical ancestry of the IBM Selectric typewriter elements that once set the typographic tone of corporate America.

The anatomy of the face is shaped by a deliberate tension between geometric precision and organic gesture. Unlike traditional book serifs that conceal their construction beneath seamless, calligraphic bracketing, Plex Serif celebrates its seams. Serifs are drawn with flat, architectural footings and crisp triangular brackets, while inner corners reveal the family’s signature chamfers—subtle 45-degree cuts that evoke the disciplined punch of a steel type-slug and the polygonal grid of digital coordinates. Yet Abbink and Bold Monday prevented the design from turning into a brutalist exercise: the drop terminals on the <em>a</em>, <em>c</em>, and <em>r</em> are round and generous, apertures remain open to invite light into the line, and the stroke modulation provides a warm, rhythmic cadence. Along the running measure, it casts a crisp, authoritative grey that holds its structure with unwavering discipline against both high-resolution offset printing and the back-lit glare of mobile screens.

Typographically, the family refuses to treat the serif as a decorative flourish pasted onto an unserifed skeleton; it is a fully realized, scholarly workhorse. Its true cursive italic departs boldly from the upright roman, tilting forward with a dynamic, calligraphic ductus and fluid exits that lend genuine vocal counterpoint to citations and internal dialogue. Equipped with eight carefully graded weights, true small capitals, fractions, and lining, oldstyle, and tabular figures, Plex Serif possesses a broad set of features for modern publishing.`,
  familyFaces: [
    "IBM Plex Mono",
    "IBM Plex Sans",
    "IBM Plex Sans Condensed"
  ],
  fontFile: "/assets/fonts/ibm-plex-serif/IBMPlexSerif-Regular.woff2",
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
        { text: "1234567890", label: "Tabular Lining (default)", options: { features: "normal" } },
        { text: "1234567890", label: "Tabular Oldstyle: 'onum'", options: { features: { onum: 1 } } },
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
      examples: ["3a", "4o"]
    },
    {
      type: "comparison",
      title: "Stylistic Sets",
      code: "font-feature-settings: 'ss--';",
      examples: [
        { text: "a", label: "'ss01'", before: { features: { ss01: 0 } }, after: { features: { ss01: 1 } } },
        { text: "g", label: "'ss02'", before: { features: { ss02: 0 } }, after: { features: { ss02: 1 } } },
        { text: "0", label: "'ss03'", before: { features: { ss03: 0 } }, after: { features: { ss03: 1 } } },
        { text: "0", label: "'ss04'", before: { features: { ss04: 0 } }, after: { features: { ss04: 1 } } },
        { text: "ß", label: "'ss05'", before: { features: { ss05: 0 } }, after: { features: { ss05: 1 } } },
        { text: "ѝ", label: "'ss06'", before: { features: { ss06: 0 } }, after: { features: { ss06: 1 } } }
      ]
    }
  ],
};

export default typeface;
