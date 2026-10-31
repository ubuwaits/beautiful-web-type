import type { TypefaceData } from "@/lib/content/types";

const typeface: TypefaceData = {
  slug: "source-sans-pro",
  name: "Source Sans Pro",
  dateAdded: "2018-11-27",
  category: "Sans-Serif",
  styles: "Variable",
  glyphCount: 2478,
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
    version: "v3.052R",
    date: "4 Apr 2023"
  },
  projectUrl: "https://github.com/adobe-fonts/source-sans-pro",
  gFontsUrl: "https://fonts.google.com/specimen/Source+Sans+3",
  creator: {
    name: "Paul D. Hunt",
    url: "https://github.com/pauldhunt"
  },
  description: `When Adobe published Source Sans Pro in 2012, it marked a quiet watershed in modern type history: the digital era’s preeminent foundry casting its very first open-source gift into the commons. Drawn by Paul D. Hunt, the family was drafted not as an avant-garde manifesto or an eccentric display piece, but as a transparent, untiring conduit for user interfaces and continuous prose. Hunt looked neither to the clinical geometry of the German Bauhaus nor to the severe neutrality of the mid-century Swiss neo-grotesque. Instead, he grounded his sketches in the honest, early-twentieth-century American gothic tradition of Morris Fuller Benton—most notably <em>News Gothic</em> and <em>Franklin Gothic</em>—infusing that plainspoken commercial stock with an agile, humanist warmth.

The anatomy of Source Sans Pro reveals a quiet devotion to optical clarity and the physical realities of the screen. Its x-height is generously scaled without turning clumsy, while its apertures remain wide and hospitable, inviting light into the interior chambers of the glyphs to stave off the clotted darkness that plagues narrower gothics. Hunt preserved the classical cadence of the double-storey <em>a</em> and <em>g</em>, while subtly curving the foot of the lowercase <em>l</em> to disentangle it from the capital <em>I</em>—a civilizing courtesy essential across dense technical captions, code fragments, and digital interfaces. Along the measure, the typeface assembles into an uncommonly serene, even-textured grey, resisting the nervous jitter of over-designed details to let the author’s voice carry the page.

Typographically, the family is furnished with true, lively italics whose cursive ductus and angled terminations offer genuine dialogic contrast against the upright roman, refusing the lazy shortcut of a mechanically skewed oblique. Expanding across six deliberate weights—and later blossoming into a responsive variable architecture alongside sister cuts in serif and monospace—Source Sans Pro established a benchmark for what an open-source corporate release could achieve. In a digital landscape often tempted by passing aesthetic novelties, it endures as a paragon of typographic reticence: an alphabet whose highest virtue is its willingness to step aside and shepherd the reader through thought with invisible grace.`,
  familyFaces: [
    "Source Code Pro",
    "Source Serif Pro"
  ],
  fontFile: "/assets/fonts/source-sans-pro/glyphs-regular.woff2",
  glyphSource: "/assets/fonts/source-sans-pro/SourceSansVariable-Roman.ttf.woff2",
  features: [
    {
      type: "comparison",
      title: "Standard Ligatures",
      code: "font-feature-settings: 'liga';",
      before: { features: { liga: 0 } },
      after: { features: { liga: 1, clig: 1 } },
      examples: ["ff", "fft", "ft"]
    },
    {
      type: "figures",
      title: "Figures",
      options: { direction: "auto" },
      examples: [
        { text: "1234567890", label: "Tabular Lining (default)", options: { features: "normal" } },
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
        { text: "I", label: "'ss01'", before: { features: { ss01: 0 } }, after: { features: { ss01: 1 } } },
        { text: "agl", label: "'ss02'", before: { features: { ss02: 0 } }, after: { features: { ss02: 1 } } },
        { text: "l·l", label: "'ss05'", before: { features: { ss05: 0 } }, after: { features: { ss05: 1 } } },
        { text: "a", label: "'ss06'", before: { features: { ss06: 0 } }, after: { features: { ss06: 1 } } },
        { text: "0123", label: "'ss09'", before: { features: { ss09: 0 } }, after: { features: { ss09: 1 } } },
        { text: "0", label: "'ss10'", before: { features: { ss10: 0 } }, after: { features: { ss10: 1 } } }
      ]
    },
    {
      type: "comparison",
      title: "Case Sensitive Forms",
      code: "font-feature-settings: 'case';",
      before: { features: { case: 0 } },
      after: { features: { case: 1 } },
      examples: ["89@¡"]
    }
  ],
};

export default typeface;
