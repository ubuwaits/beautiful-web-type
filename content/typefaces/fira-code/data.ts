import type { TypefaceData } from "@/lib/content/types";

const typeface: TypefaceData = {
  slug: "fira-code",
  name: "Fira Code",
  dateAdded: "2019-01-21",
  category: "Monospaced",
  styles: "Variable",
  glyphCount: 2030,
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
      weight: 700,
      name: "Bold"
    }
  ],
  latestRelease: {
    version: "v6.2",
    date: "6 Dec 2021"
  },
  projectUrl: "https://github.com/tonsky/FiraCode",
  creator: {
    name: "Nikita Prokopov",
    url: "https://twitter.com/nikitonsky"
  },
  description: `Fira Code originated not in a traditional type foundry, but in the software engineering environment, emerging from a specific friction between modern programming languages and the mechanical constraints of the terminal. Conceived in 2014 by Russian developer Nikita Prokopov, the face takes as its foundation <em>Fira Mono</em>—the open-source fixed-pitch design drawn by Ralph du Carrois and Erik Spiekermann for Mozilla’s Firefox OS. Prokopov observed an enduring typographic problem in source code: while programming languages frequently employ multi-character sequences (<code>!=</code>, <code>-&gt;</code>, <code>===</code>, <code>&lt;=</code>, <code>&lt;!--</code>) to signify singular logical operations, monospace fonts treated those sequences as disjointed, isolated glyphs. Released under the SIL Open Font License, Fira Code resolved this dilemma by applying OpenType ligature substitution to the fixed-pitch grid, rendering composite operators as unified symbols without altering the underlying plain text.

Underneath its programmatic machinery lies the solid, legible architecture of Spiekermann and du Carrois’s humanist gothic. Monospaced designs are inherently prone to awkward gaps around narrow letters like <em>i</em> and <em>l</em>, and cramped congestion inside wide forms like <em>m</em> and <em>w</em>. Fira Code inherits well-balanced optical compromises that keep counters open and strokes evenly distributed. Prokopov made targeted adjustments for technical scrutiny: the zero is clearly distinguished from the capital <em>O</em> via an interior dot or slash, the lowercase <em>l</em> curves away from the numeral <em>1</em> and uppercase <em>I</em>, and punctuation marks—brackets, parentheses, colons—are enlarged and optically centered to maintain clear hierarchy at the small point sizes typical of programming environments. Along the grid, it sets an orderly, dependable cadence that eases visual fatigue across dense files and terminal output.

The technical core of Fira Code is its extensive implementation of contextual alternates (<code>calt</code>). Sequences of two or more characters are visually merged into smooth arrows, aligned equality signs, and clean comparison brackets, transforming awkward ASCII approximations into cohesive, legible glyphs. Crucially, this behavior remains non-destructive: copying or compiling the text preserves the original character sequence intact. Over successive releases, Prokopov and the open-source community expanded the project into a continuous variable weight axis (spanning Light to Bold), accompanied by numerous OpenType stylistic sets that allow developers to tailor specific glyphs—such as alternate zeroes, ampersands, or script forms—to personal taste.

Fira Code’s domain is precise. Its rigid, monospaced pitch and specialized programming ligatures make it unsuitable for continuous literary prose or conventional display headlines. Instead, it thrives in code editors, command-line interfaces, technical documentation, and tabular data tables—environments where strict alignment and unambiguous character recognition are paramount. Within the open commons, it serves as an inventive application of OpenType technology, showing how typographic conventions can evolve to clarify the specialized language of software design.`,
  fontFile: "/assets/fonts/fira-code/glyphs-regular.woff2",
  glyphSource: "/assets/fonts/fira-code/FiraCode-VF.woff2",
  features: [
    {
      type: "comparison",
      title: "Contextual Alternates",
      code: "font-feature-settings: 'calt';",
      before: { features: { calt: 0 } },
      after: { features: { calt: 1 } },
      examples: ["->", "<-", "=>", "!=", "==", { text: "12:34", before: { size: "compact" }, after: { size: "compact" } }]
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
      examples: ["3a", "4o", "No."]
    },
    {
      type: "comparison",
      title: "Stylistic Sets",
      code: "font-feature-settings: 'ss--';",
      examples: [
        { text: "r", label: "'ss01'", before: { features: { ss01: 0 } }, after: { features: { ss01: 1 } } },
        { text: "<=", label: "'ss02'", before: { features: { ss02: 0 } }, after: { features: { ss02: 1 } } },
        { text: "&&", label: "'ss03'", before: { features: { ss03: 0 } }, after: { features: { ss03: 1 } } },
        { text: "$", label: "'ss04'", before: { features: { ss04: 0 } }, after: { features: { ss04: 1 } } },
        { text: "@", label: "'ss05'", before: { features: { ss05: 0 } }, after: { features: { ss05: 1 } } },
        { text: "\\\\", label: "'ss06'", before: { features: { ss06: 0 } }, after: { features: { ss06: 1 } } },
        { text: "!=", label: "'ss08'", before: { features: { ss08: 0 } }, after: { features: { ss08: 1 } } },
        { text: "fi", label: "'ss10'", before: { features: { ss10: 0 } }, after: { features: { ss10: 1 } } }
      ]
    },
    {
      type: "comparison",
      title: "Character Variants",
      code: "font-feature-settings: 'cv--';",
      examples: [
        { text: "a", label: "'cv01'", before: { features: { cv01: 0 } }, after: { features: { cv01: 1 } } },
        { text: "g", label: "'cv02'", before: { features: { cv02: 0 } }, after: { features: { cv02: 1 } } },
        { text: "i", label: "'cv03'", before: { features: { cv03: 0 } }, after: { features: { cv03: 1 } } },
        { text: "l", label: "'cv07'", before: { features: { cv07: 0 } }, after: { features: { cv07: 1 } } },
        { text: "0", label: "'cv11'", before: { features: { cv11: 0 } }, after: { features: { cv11: 1 } } },
        { text: "3", label: "'cv14'", before: { features: { cv14: 0 } }, after: { features: { cv14: 1 } } },
        { text: ">=", label: "'cv23'", before: { features: { cv23: 0 } }, after: { features: { cv23: 1 } } }
      ]
    },
    {
      type: "comparison",
      title: "Case Sensitive Forms",
      code: "font-feature-settings: 'case';",
      before: { features: { case: 0 } },
      after: { features: { case: 1 } },
      examples: ["()-[", "]`{}"]
    }
  ],
};

export default typeface;
