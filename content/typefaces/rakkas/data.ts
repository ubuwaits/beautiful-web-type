import type { TypefaceData } from "@/lib/content/types";

const typeface: TypefaceData = {
  slug: "rakkas",
  name: "Rakkas",
  dateAdded: "2018-10-22",
  category: "Display",
  styles: 1,
  glyphCount: 926,
  weights: [
    {
      weight: 400,
      name: "Regular"
    }
  ],
  latestRelease: {
    version: "v2.000",
    date: "31 Oct 2017"
  },
  projectUrl: "https://github.com/zeynepakay/Rakkas",
  gFontsUrl: "https://fonts.google.com/specimen/Rakkas",
  creator: {
    name: "Zeynep Akay",
    url: "http://theruqahproject.com"
  },
  description: `Rakkas was drawn by Turkish type designer Zeynep Akay as an expressive display face bridging the Arabic and Latin alphabets. Released through Google Fonts under the SIL Open Font License, the design takes its name from the Turkish word for "dancer"—an allusion reflected directly in the undulating, rhythmic posture of its strokes. Rather than forcing one script to mimic the structural habits of the other, Akay drafted both writing systems in tandem, seeking a common ground rooted in the physical momentum of the brush and the calligraphic reed.

The anatomy of the letterform is governed by high stroke contrast and fluid, asymmetrical energy. Broad vertical stems taper abruptly into delicate, curved joins, while terminals swell into fleshy teardrops and sharp, beak-like wedges. In the Latin, characters such as the lowercase <em>a</em>, <em>f</em>, and <em>r</em> carry pronounced, sweeping flourishes that mirror the fluid ligatures and descending strokes of the Arabic script. The baseline is not treated as a rigid track, but rather as an active plane where characters step and sway with a lively, syncopated cadence. Light enters the forms through deep, curved incisions, giving headlines a textured, chiseled interplay of black and white.

Because of its dramatic contrast and eccentric detailing, Rakkas is strictly a display instrument. Set at text sizes, its tight internal counters and sweeping terminals quickly choke together, disrupting the reading measure. It belongs on posters, book covers, mastheads, and packaging—environments where short passages or isolated titles can afford to announce themselves with theatrical force. Available in a single, robust display weight supporting both the Arabic and extended Latin repertoires, Rakkas serves as an engaging bilingual study: an alphabet demonstrating that cross-cultural type design can honor the calligraphic vitality of two distinct traditions without flattening either into bland geometric uniformity.`,
  fontFile: "/assets/fonts/rakkas/Rakkas-Regular.woff2",
  features: [
    {
      type: "comparison",
      title: "Standard Ligatures",
      code: "font-feature-settings: 'liga';",
      before: { features: { liga: 0 } },
      after: { features: { liga: 1, clig: 1 } },
      examples: ["fl", "fi", "ffi", "ffl"]
    },
    {
      type: "comparison",
      title: "Discretionary Ligatures",
      code: "font-feature-settings: 'dlig';",
      before: { features: { dlig: 0 } },
      after: { features: { dlig: 1 } },
      examples: ["fj", "fm", "fn", "fr"]
    },
    {
      type: "comparison",
      title: "Contextual Alternates",
      code: "font-feature-settings: 'calt';",
      before: { direction: "auto", features: { calt: 0 } },
      after: { features: { calt: 1 }, direction: "auto" },
      examples: ["بح", "بم", "بئب"]
    },
    {
      type: "figures",
      title: "Figures",
      options: { direction: "auto" },
      examples: [
        { text: "1234567890", label: "Proportional Lining (default)", options: { features: "normal" } },
        { text: "1234567890", label: "Proportional Oldstyle: 'onum'", options: { features: { onum: 1 } } },
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
      examples: ["3a", "4o"]
    },
    {
      type: "comparison",
      title: "Stylistic Sets",
      code: "font-feature-settings: 'ss--';",
      examples: [
        {
          text: "ت",
          label: "'ss02'",
          before: { direction: "auto", features: { ss02: 0 } },
          after: { features: { ss02: 1 }, direction: "auto" }
        },
        {
          text: "كل",
          label: "'ss03'",
          before: { direction: "auto", features: { ss03: 0 } },
          after: { features: { ss03: 1 }, direction: "auto" }
        },
        {
          text: "ش",
          label: "'ss04'",
          before: { direction: "auto", features: { ss04: 0 } },
          after: { features: { ss04: 1 }, direction: "auto" }
        },
        {
          text: "ض",
          label: "'ss06'",
          before: { direction: "auto", features: { ss06: 0 } },
          after: { features: { ss06: 1 }, direction: "auto" }
        },
        {
          text: "شجرة",
          label: "'ss08'",
          before: { direction: "auto", features: { ss08: 0 } },
          after: { features: { ss08: 1 }, direction: "auto" }
        },
        { text: "{}", label: "'ss09'", before: { features: { ss09: 0 } }, after: { features: { ss09: 1 } } }
      ]
    }
  ],
};

export default typeface;
