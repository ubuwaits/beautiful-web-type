import type { TypefaceData } from "@/lib/content/types";

const typeface: TypefaceData = {
  slug: "source-serif-pro",
  name: "Source Serif Pro",
  dateAdded: "2018-10-15",
  category: "Serif",
  styles: "Variable",
  glyphCount: 1464,
  italic: true,
  smallcap: true,
  weights: [
    {
      weight: 200,
      name: "Extra Light"
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
      name: "Semi Bold"
    },
    {
      weight: 700,
      name: "Bold"
    },
    {
      weight: 800,
      name: "Extra Bold"
    },
    {
      weight: 900,
      name: "Black"
    }
  ],
  latestRelease: {
    version: "v4.005R",
    date: "20 Jan 2023"
  },
  projectUrl: "https://github.com/adobe-fonts/source-serif-pro",
  gFontsUrl: "https://fonts.google.com/specimen/Source+Serif+4",
  creator: {
    name: "Frank Grießhammer",
    url: "http://www.frgr.de"
  },
  description: `Source Serif Pro was summoned into the digital commons to answer a classical imperative: to furnish Adobe’s groundbreaking <em>Source Sans Pro</em> with an authentic, literary peer. Conceived and sculpted by German type designer Frank Grießhammer, the family bypasses the well-trodden paths of Aldine Venice and Dutch baroque punchcutting, looking instead to the elegant, rational vitality of eighteenth-century France—specifically the work of Pierre-Simon Fournier. In Fournier le Jeune, Grießhammer found a spirit poised between the warmth of the humanist hand and the measured discipline of the Enlightenment. Released freely under the SIL Open Font License, Source Serif Pro arrived not as a museum facsimile of historical metal, but as a robust, contemporary text face calibrated to shepherd the reader across the boundless expanses of digital publishing.

The anatomy of the letterform is distinguished by a sturdy, architectural composure. Departing from the delicate, razor-sharp contrasts of later Didone types, Grießhammer endowed the strokes with a firm, moderate modulation that holds its ground across backlit screens and uneven paper stocks alike. The serifs are flat, bracketed, and resolute, providing an unyielding footing along the baseline that gathers letters into an orderly, forward-moving cadence. Counters are wide and hospitable, apertures remain open to prevent character interiors from choking under coarse rasterization, and the x-height is generously proportioned without suffocating the ascenders and descenders. Along the running measure, Source Serif Pro casts an even, warm-grey color—neither brittle nor leaden—allowing the eye to travel through long narrative tracts with serene endurance.

Typographically, the family honors the courteous traditions of classical book design. Its italic departs boldly from the upright roman with a lively, dancing cursive ductus, infusing citations, dialogue, and gentle emphasis with authentic calligraphic energy and Fournier-esque wit. Later blossoming into <em>Source Serif 4</em>—a comprehensive variable continuum furnished with dedicated optical sizes and expanded linguistic reach—the design proves that historical erudition need not be locked away in proprietary archives. In the open commons, Source Serif Pro endures as a workhorse of quiet nobility: an alphabet proving that the lucid elegance of the French Enlightenment can find a natural, untiring home upon the modern screen.`,
  familyFaces: [
    "Source Code Pro",
    "Source Sans Pro"
  ],
  fontFile: "/assets/fonts/source-serif-pro/SourceSerifVariable-Roman.ttf.woff2",
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
        { text: "1234567890", label: "Tabular Lining (default)", options: { features: "normal" } },
        {
          text: "1234567890",
          label: "Proportional Lining: 'lnum', 'pnum'",
          options: { features: { lnum: 1, pnum: 1 } }
        },
        { text: "1234567890", label: "Tabular Oldstyle: 'onum'", options: { features: { onum: 1 } } },
        {
          text: "1234567890",
          label: "Proportional Oldstyle: 'onum', 'pnum'",
          options: { features: { onum: 1, pnum: 1 } }
        },
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
      examples: ["1st", "3a"]
    },
    {
      type: "comparison",
      title: "Stylistic Sets",
      code: "font-feature-settings: 'ss--';",
      examples: [
        { text: "юѝ", label: "'ss01'", before: { features: { ss01: 0 } }, after: { features: { ss01: 1 } } },
        { text: "б", label: "'ss02'", before: { features: { ss02: 0 } }, after: { features: { ss02: 1 } } },
        {
          text: "&",
          label: "'ss03' · Italic",
          before: { italic: true, features: { ss03: 0 } },
          after: { features: { ss03: 1 }, italic: true }
        }
      ]
    },
    {
      type: "comparison",
      title: "Case Sensitive Forms",
      code: "font-feature-settings: 'case';",
      before: { features: { case: 0 } },
      after: { features: { case: 1 } },
      examples: ["0123", "89()", "-@[]"]
    }
  ],
};

export default typeface;
