import type { TypefaceData } from "@/lib/content/types";

const typeface: TypefaceData = {
  slug: "google-sans-code",
  name: "Google Sans Code",
  dateAdded: "2026-11-26T20:15:25+01:00",
  category: "Monospaced",
  styles: "Variable",
  italic: true,
  glyphCount: 691,
  weights: [
    { weight: 300, name: "Light" },
    { weight: 400, name: "Regular" },
    { weight: 500, name: "Medium" },
    { weight: 600, name: "Semi Bold" },
    { weight: 700, name: "Bold" },
    { weight: 800, name: "Extra Bold" }
  ],
  latestRelease: { version: "v7.001", date: "9 Jun 2026" },
  projectUrl: "https://github.com/googlefonts/googlesans-code",
  gFontsUrl: "https://fonts.google.com/specimen/Google+Sans+Code",
  creator: { name: "Google and Universal Thirst", url: "https://github.com/googlefonts/googlesans-code" },
  familyFaces: ["Google Sans Flex"],
  summary: "Google Sans Code brings the rounded forms of Google Sans to a fixed-width alphabet. Its spacing axis lets the same letters take on the narrower and wider proportions of a text face.",
  description: `Google Sans Code is the monospaced typeface Google and Universal Thirst designed for programming. Its predecessor, Google Sans Mono, was an editorial face drawn for larger sizes. When Google began using it for code in Chat, programmers found the lowercase <em>a</em> and <em>o</em> hard to tell apart at small sizes. Google studied twenty programming languages, and Universal Thirst redrew letters, numbers, and operators so readers could distinguish them in a line of code. The family appeared in 2025 and is used for code snippets in Gemini.

The new <em>a</em> has two storeys, with a small bowl tucked beneath a broad arch. In the italic it returns to a single storey, but the straight stroke down its right side still sets it apart from the oval <em>o</em>. The designers exaggerated the difference between parentheses and braces, too. A parenthesis follows a single smooth curve. The curly brace bends back on itself above and below a blunt, almost square point.

A second set of proportions is built into the family. At the monospaced end of the width range, the <em>W</em> in <em>Will</em> occupies exactly as much space as either <em>l</em>. As the setting moves toward proportional spacing, the diagonals of the <em>W</em> spread apart, the foot of the <em>i</em> draws in, and the two <em>l</em>s sit closer together.`,
  fontFile: "/assets/fonts/google-sans-code/GoogleSansCode.woff2",
  features: [
    { type: "axis", title: "Proportional to Monospaced", axis: "MONO", text: "Will", values: [0, 0.5, 1] },
    {
      type: "comparison", title: "Single-storey g", code: "font-feature-settings: 'ss01';",
      before: { features: { ss01: 0 } }, after: { features: { ss01: 1 } },
      examples: ["g", { text: "g", label: "Italic", before: { italic: true }, after: { italic: true } }]
    },
    {
      type: "figures", title: "Figures",
      examples: [
        { text: "0123456789", label: "Tabular lining (default)" },
        { text: "1/2 3/4", label: "Fractions · frac", options: { features: { frac: 1 } } },
        { text: "123", reference: "x", label: "Superscripts · sups", options: { features: { sups: 1 } } },
        { text: "1a 2o", label: "Ordinals · ordn", options: { features: { ordn: 1 } } }
      ]
    }
  ]
};

export default typeface;
