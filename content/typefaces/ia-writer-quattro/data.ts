import type { TypefaceData } from "@/lib/content/types";

const typeface: TypefaceData = {
  slug: "ia-writer-quattro",
  name: "iA Writer Quattro",
  dateAdded: "2019-01-30",
  category: "Sans-Serif",
  styles: "Variable",
  glyphCount: 1182,
  italic: true,
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
      name: "Semi Bold"
    },
    {
      weight: 700,
      name: "Bold"
    }
  ],
  latestRelease: {
    version: "v2.0",
    date: "25 Dec 2018"
  },
  projectUrl: "https://github.com/iaolo/iA-Fonts",
  creator: {
    name: "iA",
    url: "https://ia.net"
  },
  description: `iA Writer Quattro emerged from Information Architects’ ongoing inquiry into the ergonomics of writing interfaces. Led by Oliver Reichenstein, the studio had long advocated for the discipline of fixed-pitch typography during composition—initially commissioning Bold Monday’s <em>Nitti</em>, then deploying <em>iA Writer Mono</em> (derived from Mike Abbink’s <em>IBM Plex</em> chassis), and later experimenting with the dual-width <em>iA Writer Duo</em>. With Quattro, released into the open commons under the SIL Open Font License, iA sought a middle path between the unyielding mechanical cage of the monospace grid and the fluid, variable spacing of traditional proportional type. The result is a four-width design engineered to reconcile the writer's need for structural focus with the reader’s need for optical ease.

The anatomy of the face is governed by this four-tier horizontal system. In a standard monospaced setting, narrow glyphs like <em>i</em>, <em>j</em>, and <em>l</em> swim in awkward pools of negative space, while expansive letters like <em>m</em> and <em>w</em> are compressed into dense, clotted chambers. Quattro solves this by allocating the alphabet across four distinct width compartments: slender characters are slotted into a compact measure, standard letters share a balanced median width, broad forms take an expanded berth, and wide characters like <em>m</em> and <em>w</em> occupy the widest track. Retaining the clean, industrial bones of its Plex ancestry, the letterforms feature crisp, candid apertures, open counters, and subtle chamfers at inner junctions. Along the line, this quantized pacing creates a remarkably stable cadence—far more natural and cohesive than a strict monospace, yet anchored by an orderly, structural pulse.

Typographically, Quattro is furnished with static weights ranging from Light to Bold alongside matching true italics, where cursive exits and single-storey constructions introduce genuine vocal contrast. Its domain is precise: it was built to inhabit the space between drafting and final reading. In distraction-free Markdown editors, digital writing apps, and long-form revision environments, it softens the visual fatigue associated with pure fixed-width text without surrendering the clean cursor movement and spatial predictability that writers rely on. While its stepped horizontal increments prevent it from matching the seamless optical flow of classical text faces in formal book publishing, and its varying widths rule it out for rigid terminal coding, Quattro fulfills its hybrid mandate with quiet efficiency. Within the open catalog, it stands as an inventive structural study, demonstrating that type design can redefine the mechanics of spacing to serve the working writer.`,
  fontFile: "/assets/fonts/ia-writer-quattro/iAWriterQuattroV.woff2",
  features: [
    {
      type: "figures",
      title: "Figures",
      options: { direction: "auto" },
      examples: [
        { text: "1234567890", label: "Tabular Lining (default)", options: { features: "normal" } },
        { text: "1/2 3/4", label: "Fractions: 'frac'", options: { features: { frac: 1 } } },
        { text: "0", label: "Slashed Zero: 'zero'", options: { features: { zero: 1 } } },
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
        { text: "ß", label: "'ss05'", before: { features: { ss05: 0 } }, after: { features: { ss05: 1 } } }
      ]
    }
  ],
};

export default typeface;
