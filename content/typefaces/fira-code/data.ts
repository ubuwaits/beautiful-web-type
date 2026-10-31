import type { TypefaceData } from "@/lib/content/types";

export default {
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
  glyphSource: "/assets/fonts/fira-code/FiraCode-VF.woff2"
} satisfies TypefaceData;
