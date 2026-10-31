import type { TypefaceData } from "@/lib/content/types";

const typeface: TypefaceData = {
  slug: "zilla-slab",
  name: "Zilla Slab",
  dateAdded: "2018-10-15",
  category: "Serif",
  styles: 10,
  glyphCount: 1056,
  italic: true,
  smallcap: true,
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
      name: "Semi-Bold"
    },
    {
      weight: 700,
      name: "Bold"
    }
  ],
  latestRelease: {
    version: "v1.002",
    date: "23 Aug 2017"
  },
  projectUrl: "https://github.com/mozilla/zilla-slab",
  gFontsUrl: "https://fonts.google.com/specimen/Zilla+Slab",
  creator: {
    name: "Typotheque",
    url: "https://www.typotheque.com"
  },
  description: `Zilla Slab was summoned into existence through an unprecedented public ritual: Mozilla’s radical "Open Design" rebrand of 2017, orchestrated alongside the design studio Johnson Banks and entrusted to the adept hands of Peter Biľak and Nikola Djurek at Typotheque. Emerging from the refined structural chassis of Typotheque’s earlier <em>Tesla</em>, the typeface was drafted to personify the foundational spirit of the open web—a territory suspended between the austere logic of network protocols and the unruly democracy of human communication. In an institutional identity whose very wordmark was famously fused with the punctuation of a URL scheme (<code>moz://a</code>), Zilla Slab arrived not as proprietary corporate armor, but as an open-source civic utility: an honest, contemporary slab serif gifted to the digital commons under the SIL Open Font License.

Anatomically, the design reinterprets the nineteenth-century Egyptian vernacular through the lens of modern digital ergonomics. Where early industrial slabs often marched with the deafening, unyielding rigidity of the steam-driven press, Zilla Slab tempers structural force with approachable human warmth. Its serifs are resolute, unbracketed horizontal blocks that anchor characters firmly against the baseline like dressing stones in an aqueduct; yet within this tectonic framework, the inner arches and junctions curve with a supple, organic elasticity. The x-height is generously scaled, and the apertures remain wide and hospitable, inviting ambient light into the interior chambers of each glyph to ensure that dense alphanumeric strings, code snippets, and headlines remain transparent across coarse raster displays. On the screen, it casts a crisp, industrious color—authoritative without turning brutalist, and candid without lapsing into colloquial slop.

Typographically, the family refuses the mechanical shortcuts so frequently inflicted upon utilitarian display faces. In place of a perfunctory slanted oblique, Biľak and Djurek furnished the family with true cursive italics, whose dynamic entry strokes and chirographic exits introduce a spirited, conversational counterpoint alongside the upright roman. Expanding across five finely calibrated weights—and enriched by the theatrical verve of <em>Zilla Slab Highlight</em>, which captures the blunt friction of an editorial highlighter across printed proof-sheets—the family operates with remarkable adaptability. In the open commons, Zilla Slab stands as an enduring monument to Mozilla’s founding ethos: an alphabet proving that the raw, engineered machinery of the internet can dwell in seamless harmony with the ancient, hospitable dignity of the book arts.`,
  fontFile: "/assets/fonts/zilla-slab/ZillaSlab-Regular.woff2",
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
      type: "figures",
      title: "Figures",
      options: { direction: "auto" },
      examples: [
        {
          text: "1234567890",
          label: "Proportional Oldstyle (default)",
          reference: "H",
          options: { features: "normal" }
        },
        {
          text: "1234567890",
          label: "Proportional Lining: 'lnum'",
          reference: "H",
          options: { features: { lnum: 1 } }
        },
        {
          text: "1234567890",
          label: "Tabular Lining: 'lnum', 'tnum'",
          reference: "H",
          options: { features: { lnum: 1, tnum: 1 } }
        },
        {
          text: "1234567890",
          label: "Tabular Oldstyle: 'onum', 'tnum'",
          reference: "H",
          options: { features: { onum: 1, tnum: 1 } }
        },
        { text: "1/2 3/4", label: "Fractions: 'frac'", options: { features: { frac: 1 } } },
        { text: "0", label: "Slashed Zero: 'zero'", reference: "H", options: { features: { zero: 1 } } },
        { text: "123", label: "Numerators: 'numr'", reference: "H", options: { features: { numr: 1 } } },
        { text: "123", label: "Denominators: 'dnom'", reference: "H", options: { features: { dnom: 1 } } },
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
      title: "Case Sensitive Forms",
      code: "font-feature-settings: 'case';",
      before: { features: { case: 0 } },
      after: { features: { case: 1 } },
      examples: ["h‰‹›€h"]
    }
  ],
};

export default typeface;
