import type { TypefaceData } from "@/lib/content/types";

const typeface: TypefaceData = {
  slug: "intel-one-mono",
  name: "Intel One Mono",
  dateAdded: "2026-11-26T18:48:25+01:00",
  category: "Monospaced",
  styles: 8,
  glyphCount: 1385,
  italic: true,
  weights: [
    { weight: 300, name: "Light" },
    { weight: 400, name: "Regular" },
    { weight: 500, name: "Medium" },
    { weight: 700, name: "Bold" }
  ],
  latestRelease: { version: "V1.5.0", date: "4 Nov 2026" },
  projectUrl: "https://github.com/intel/intel-one-mono",
  gFontsUrl: "https://fonts.google.com/specimen/Intel+One+Mono",
  creator: { name: "Frere-Jones Type", url: "https://frerejones.com/" },
  summary: "Intel One Mono is a coding typeface shaped by feedback from low-vision developers. Deeply curled braces and tall ascenders give its fixed-width characters distinctive silhouettes.",
  description: `Intel One Mono grew out of a request from Intel’s developers for a typeface of their own. Frere-Jones Type designed the family in collaboration with Intel’s brand team and VMLY&R, with particular attention to programmers with low vision. A panel of low-vision and legally blind developers used successive drawings in their code editors. Their feedback shaped the proportions of the alphabet and the treatment of punctuation, where a single misread character can change the meaning of a line.

The face has a relatively low x-height for a programming monospace. The shoulder of the lowercase <em>h</em> sits well below the top of its stem, while the descenders of <em>p</em> and <em>g</em> reach deep below the baseline. These changes in height give words a distinct outline within the fixed-width grid. The most recognizable detail is the curly brace. Its ends curl sharply inward, giving it a more intricate profile than the smooth arc of a parenthesis or the square corners of a bracket.

The family spans four weights from Light to Bold, each with a matching italic. All eight styles include the full set of 256 Unicode Braille patterns. Its punctuation is especially effective in code samples and technical documentation, where several kinds of delimiter often occur on the same line. Optional programming ligatures join operators such as <code>!=</code> and <code>-&gt;</code> across two character cells, preserving the alignment of the surrounding code. A separate stylistic set raises the colon between figures to center it against the digits in a timestamp.`,
  fontFile: "/assets/fonts/intel-one-mono/IntelOneMono-Regular.woff2",
  features: [
    {
      type: "comparison", title: "Programming Ligatures", code: "font-feature-settings: 'ss01';",
      before: { features: { ss01: 0 } }, after: { features: { ss01: 1 } },
      examples: [
        "!=", "!==", "==", "===", "<=", ">=",
        "<-", "->", "=>", "<->",
        "&&", "||", "|>", ":="
      ]
    },
    {
      type: "comparison", title: "Arrow Forms", code: "font-feature-settings: 'ss01', 'ss02';",
      before: { features: { ss01: 1 } }, after: { features: { ss01: 1, ss02: 1 } },
      examples: ["<=", ">="]
    },
    {
      type: "comparison", title: "www Ligature", code: "font-feature-settings: 'ss03';",
      before: { features: "normal" }, after: { features: { ss03: 1 } }, examples: ["www"]
    },
    {
      type: "comparison", title: "Round-Top Three", code: "font-feature-settings: 'ss04';",
      before: { features: "normal" }, after: { features: { ss04: 1 } }, examples: ["3"]
    },
    {
      type: "comparison", title: "Raised Colon Between Digits", code: "font-feature-settings: 'ss11';",
      before: { features: "normal", size: "compact" }, after: { features: { ss11: 1 }, size: "compact" },
      examples: ["12:30"]
    }
  ]
};

export default typeface;
