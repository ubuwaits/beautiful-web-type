import type { TypefaceData } from "@/lib/content/types";

const typeface: TypefaceData = {
  slug: "le-murmure",
  name: "Le Murmure",
  dateAdded: "2018-11-25T14:44:44+01:00",
  category: "Display",
  styles: 1,
  glyphCount: 655,
  weights: [
    {
      weight: 400,
      name: "Regular"
    }
  ],
  latestRelease: {
    version: "v1.2",
    date: "23 Mar 2021"
  },
  projectUrl: "https://velvetyne.fr/fonts/le-murmure/",
  creator: {
    name: "Jérémy Landes",
    url: "http://studiotriple.fr"
  },
  summary: "Le Murmure is Jérémy Landes’s condensed display face, with unusual proportions and alternate glyphs for exhibition identities, posters, and editorial titles.",
  description: `Le Murmure was conceived as an outspoken graphic signature. Commissioned in 2018 for the rebranding of the French design agency Murmure and drafted by Jérémy Landes of Studio Triple, the face was subsequently published by Velvetyne Type Foundry. Le Murmure treats words as graphic forms, using unusual proportions and alternates to give short titles a distinct character.

Anatomically, the design takes its initial cue from the tightly compressed proportions of twentieth-century magazine titling and condensed poster grotesques, yet it promptly subverts their mechanical regularity. Landes introduces calculated friction into the line through structural mismatches and idiosyncratic details. Stems rise tall and narrow, but the expected cadence is disrupted by unexpected graphic flourishes: doubled strokes in glyphs like M and N, asymmetrical junctions, and calligraphic gestures embedded directly into the rigid sans-serif skeleton. To further resist industrial uniformity, the typeface incorporates an extensive set of alternate glyphs governed by an OpenType randomization feature, ensuring that adjacent or recurring letters shift subtly in posture rather than locking into a predictable pattern.

Le Murmure’s unusual proportions suit exhibition identities, editorial mastheads, book jackets, and posters, where words can be staged as graphic events. Its alternates offer ways to vary the silhouette of a short title. Supported by expanded Latin, Cyrillic, and Greek character sets, the family provides expressive forms for contemporary titling.`,
  fontFile: "/assets/fonts/le-murmure/Le_Murmure-Regular.woff2",
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
      examples: ["ИЙ", "ий"]
    },
    {
      type: "figures",
      title: "Figures",
      options: { direction: "auto" },
      examples: [
        { text: "1234567890", label: "Proportional Lining (default)", options: { features: "normal" } },
        { text: "1234567890", label: "Proportional Oldstyle: 'onum'", options: { features: { onum: 1 } } },
        { text: "0", label: "Slashed Zero: 'zero'", options: { features: { zero: 1 } } }
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
        { text: "fjMm", label: "'ss01'", before: { features: { ss01: 0 } }, after: { features: { ss01: 1 } } },
        { text: "MmNn", label: "'ss02'", before: { features: { ss02: 0 } }, after: { features: { ss02: 1 } } },
        { text: "A", label: "'ss03'", before: { features: { ss03: 0 } }, after: { features: { ss03: 1 } } },
        { text: "r", label: "'ss04'", before: { features: { ss04: 0 } }, after: { features: { ss04: 1 } } },
        { text: "MW", label: "'ss05'", before: { features: { ss05: 0 } }, after: { features: { ss05: 1 } } },
        { text: "QR", label: "'ss07'", before: { features: { ss07: 0 } }, after: { features: { ss07: 1 } } },
        { text: "KM", label: "'ss08'", before: { features: { ss08: 0 } }, after: { features: { ss08: 1 } } }
      ]
    },
    {
      type: "comparison",
      title: "Stylistic Alternates",
      code: "font-feature-settings: 'salt';",
      before: { features: { salt: 0 } },
      after: { features: { salt: 1 } },
      examples: [{ text: "MNSZ", label: "'salt'" }]
    },
    {
      type: "comparison",
      title: "Titling Alternates",
      code: "font-feature-settings: 'titl';",
      before: { features: { titl: 0 } },
      after: { features: { titl: 1 } },
      examples: ["fjmn", "szŹź", "ŻżŽž", "ИЙМШ", "шщ"]
    }
  ],
};

export default typeface;
