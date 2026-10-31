import type { TypefaceData } from "@/lib/content/types";

const typeface: TypefaceData = {
  slug: "ibm-plex-sans",
  name: "IBM Plex Sans",
  dateAdded: "2018-10-31",
  category: "Sans-Serif",
  styles: 16,
  glyphCount: 1025,
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
  latestRelease: {
    version: "v3.201",
    date: "10 Jan 2025"
  },
  projectUrl: "https://github.com/IBM/plex",
  gFontsUrl: "https://fonts.google.com/specimen/IBM+Plex+Sans",
  creator: {
    name: "Mike Abbink & Bold Monday",
    url: "https://boldmonday.com"
  },
  description: `IBM Plex Sans was conceived to solve an existential design dilemma: how to liberate a global computing titan from the borrowed, ubiquitous neutrality of mid-century <em>Helvetica</em> and replace it with an authentic acoustic signature. Directed by Mike Abbink in partnership with the Dutch foundry Bold Monday, the family was forged around an explicit philosophical dialectic—the dialogue between human craftsmanship and the disciplined precision of the machine. Released freely into the open commons under the SIL Open Font License, Plex was not sequestered as proprietary corporate armor, but offered to the public as foundational infrastructure for modern communication, honoring the longstanding ethos of open-source computing.

The architecture of Plex Sans navigates this tension between the organic and the engineered with remarkable optical poise. While its proportions pay homage to the frank, nineteenth-century grotesque, its skeleton is animated by calligraphic memory and industrial wit. The junctures where curves meet stems do not dissolve into seamless, homogenized arcs; instead, they acknowledge the seam through subtle, chiseled transitions and engineered chamfers, quietly evoking the mechanical ancestry of the typewriter ball and punch card. Apertures remain wide and hospitable, inviting light into the interior chambers of the glyphs, while the x-height is generously scaled to withstand the low-resolution rasterization of code editors and embedded displays. On the page, it yields an orderly, legible fabric—temperate enough for corporate ledgers and technical documentation, yet sustained by a brisk, rhythmic friction.

Typographically, Plex Sans refuses the perfunctory compromises that so often disfigure utilitarian sans-serifs. In place of an unexamined, mechanically skewed oblique, the family possesses a true cursive italic—drawn with distinct terminals, dynamic posture, and an angled energy that sings in clear counterpoint against the upright roman. Backed by eight finely graduated weights, true companion tabular and oldstyle figures, and a global apparatus embracing Arabic, Devanagari, Greek, and Cyrillic with equal dignity, the typeface stands as a monumental civic achievement. In an open landscape often crowded with interchangeable neo-grotesques, IBM Plex Sans endures as a rigorous synthesis: a letterform that confesses its digital, industrial nature without ever surrendering its human warmth.`,
  familyFaces: [
    "IBM Plex Mono",
    "IBM Plex Sans Condensed",
    "IBM Plex Serif"
  ],
  fontFile: "/assets/fonts/ibm-plex-sans/IBMPlexSans-Regular.woff2",
  features: [
    {
      type: "comparison",
      title: "Standard Ligatures",
      code: "font-feature-settings: 'liga';",
      before: { features: { liga: 0 } },
      after: { features: { liga: 1, clig: 1 } },
      examples: ["fi"]
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
        { text: "ДЖК", label: "'ss06'", before: { features: { ss06: 0 } }, after: { features: { ss06: 1 } } }
      ]
    }
  ],
};

export default typeface;
