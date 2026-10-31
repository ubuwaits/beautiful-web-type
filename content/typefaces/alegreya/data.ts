import type { TypefaceData } from "@/lib/content/types";

const typeface: TypefaceData = {
  slug: "alegreya",
  name: "Alegreya",
  dateAdded: "2018-10-15",
  category: "Serif",
  styles: 10,
  glyphCount: 2172,
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
      weight: 700,
      name: "Bold"
    },
    {
      weight: 800,
      name: "Extra-Bold"
    },
    {
      weight: 900,
      name: "Black"
    }
  ],
  latestRelease: {
    version: "v2.009",
    date: "8 Jan 2021"
  },
  projectUrl: "https://github.com/huertatipografica/Alegreya",
  gFontsUrl: "https://fonts.google.com/specimen/Alegreya",
  creator: {
    name: "Huerta Tipográfica",
    url: "https://huertatipografica.com/en"
  },
  description: `Alegreya is an act of deep literary devotion, cast in the conviction that continuous reading is not a passive reception of symbols, but an intimate, musical journey. Designed by Juan Pablo del Peral of the Argentine foundry Huerta Tipográfica—and celebrated at ATypI’s <em>Letter.2</em> competition as one of the defining text designs of its era—the typeface turns its back on the antiseptic, mechanical regularity that so frequently numbs the digital page. Del Peral sought instead to recover the living cadence of the human voice. Rooted in the humanist lineage that reaches back through the master printers of Renaissance Venice and sixteenth-century France, Alegreya refuses the cold embalming of antiquarian pastiche; it takes the structural wisdom of historical punchcutting and animates it with the agile, contemporary spirit of South American design.

The anatomy of the face is propelled by the dynamic, asymmetrical memory of the broad-edged pen. Rather than forcing letterforms into an unyielding geometric mold, del Peral allows stems and arches to modulate with subtle optical elasticity. Counters are generous and hospitable, keeping the interior chambers flooded with light, while the serifs—crisp, angled, and lightly faceted—provide a decisive footing along the baseline without anchoring the eye too heavily into the paper. On the page, Alegreya produces a warm, luminous color and a supple horizontal momentum. It does not march in uniform, industrial lockstep; it moves with an unhurried, natural stride, gathering characters into harmonious words and carrying the reader across lengthy narrative landscapes without friction or eye strain.

Where many digital romans treat their italic as an obedient, tilted concession, Alegreya’s cursive is an exuberant counterpoint—a dancing script of remarkable calligraphic vigor. Steeply inclined, rhythmic, and bristling with angled joins, it weaves through the text like a second vocal register, offering true dramatic friction and polyphonic contrast alongside the roman. Supported by an exhaustive classical apparatus—including true small capitals, delicate ligatures, and proportional oldstyle figures—Alegreya functions as a fully enfranchised citizen of book typography. In the open commons, it stands as an enduring monument to typographic craft: a workhorse of quiet nobility, demonstrating that the digital screen can sustain the ancient, contemplative dignity of literature.`,
  familyFaces: [
    "Alegreya Sans"
  ],
  fontFile: "/assets/fonts/alegreya/Alegreya-Regular.woff2",
  features: [
    {
      type: "comparison",
      title: "Standard Ligatures",
      code: "font-feature-settings: 'liga';",
      before: { features: { liga: 0 } },
      after: { features: { liga: 1, clig: 1 } },
      examples: ["ff", "ffi", "ffl", "fi", "Th"]
    },
    {
      type: "comparison",
      title: "Discretionary Ligatures",
      code: "font-feature-settings: 'dlig';",
      before: { features: { dlig: 0 } },
      after: { features: { dlig: 1 } },
      examples: ["ch", "ct", "st"]
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
      examples: ["1st", "3a"]
    },
    {
      type: "comparison",
      title: "Stylistic Sets",
      code: "font-feature-settings: 'ss--';",
      examples: [
        {
          text: "XVLIII",
          label: "'ss01'",
          before: { features: { ss01: 0 }, size: "compact" },
          after: { features: { ss01: 1 }, size: "compact" }
        },
        { text: "agil", label: "'ss02'", before: { features: { ss02: 0 } }, after: { features: { ss02: 1 } } },
        { text: "ht", label: "'ss03'", before: { features: { ss03: 0 } }, after: { features: { ss03: 1 } } }
      ]
    },
    {
      type: "comparison",
      title: "Case Sensitive Forms",
      code: "font-feature-settings: 'case';",
      before: { features: { case: 0 } },
      after: { features: { case: 1 } },
      examples: ["0123", "89()", "-/@["]
    },
    {
      type: "comparison",
      title: "Capital Spacing",
      code: "font-feature-settings: 'cpsp';",
      before: { features: { cpsp: 0 }, size: "compact" },
      after: { features: { cpsp: 1 }, size: "compact" },
      examples: ["HAMBURG"]
    }
  ],
};

export default typeface;
