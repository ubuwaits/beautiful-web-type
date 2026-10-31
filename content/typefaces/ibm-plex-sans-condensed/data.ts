import type { TypefaceData } from "@/lib/content/types";

const typeface: TypefaceData = {
  slug: "ibm-plex-sans-condensed",
  name: "IBM Plex Sans Condensed",
  dateAdded: "2018-11-01",
  category: "Sans-Serif",
  styles: 16,
  glyphCount: 1024,
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
    version: "v2.0.0",
    date: "4 Dec 2025"
  },
  projectUrl: "https://github.com/IBM/plex",
  gFontsUrl: "https://fonts.google.com/specimen/IBM+Plex+Sans+Condensed",
  creator: {
    name: "Mike Abbink & Bold Monday",
    url: "https://boldmonday.com"
  },
  description: `Where the standard proportional letter requires room to stretch its limbs along the measure, IBM Plex Sans Condensed steps forward to govern the severe, tight territories of the modern interface. Conceived under the creative direction of Mike Abbink alongside the Dutch foundry Bold Monday, this narrower sibling of the IBM Plex system was forged for high-density environments: data tables, complex technical documentation, software sidebars, and the unforgiving margins of mobile screens. Rather than treating condensation as an afterthought—the careless product of a software slider that distorts stroke weights and starves characters of air—the designers redrew the forms from the inside out, adapting the family’s signature dialogue between machine engineering and human gesture to an uncompromising economy of horizontal space.

Compacting a letterform without sacrificing its legibility demands rigorous optical surgery. In Plex Sans Condensed, the characteristic chamfered turns and engineered junctions are refined with surgical discipline, ensuring that interior counters remain open and hospitable to ambient light. Vertical stems maintain their architectural posture while horizontal curves flatten slightly into sturdy, rounded rectangles, allowing adjacent characters to nestle into an orderly, masonry-like cadence. The x-height remains generous, preventing the letters from pinching into illegible vertical slits at minute sizes. On the screen, it casts a taut, evenly disciplined grey—resolving the dense thickets of numbers and technical jargon into clear, rhythmic strings rather than an impenetrable thicket of black strokes.

Typographically, the condensed family refuses the cheap expedience so often forced upon compressed gothics. In place of a mechanically skewed oblique, Abbink and Bold Monday provide a true cursive italic, whose dynamic posture, distinct terminals, and fluid transitions offer genuine vocal contrast within the narrow column. Spanning eight meticulously calibrated weights—from the fragile scaffolding of Thin to the resolute punch of Bold—and equipped with tabular figures designed to align perfectly across financial ledgers, IBM Plex Sans Condensed brings civilizing order to spatial austerity. Within the open commons, it stands as proof that a typeface can hoard horizontal measure without surrendering its warmth, its clarity, or its dignity.`,
  familyFaces: [
    "IBM Plex Mono",
    "IBM Plex Sans",
    "IBM Plex Serif"
  ],
  fontFile: "/assets/fonts/ibm-plex-sans-condensed/IBMPlexSansCondensed-Regular.woff2",
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
