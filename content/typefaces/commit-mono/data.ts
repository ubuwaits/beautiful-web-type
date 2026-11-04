import type { TypefaceData } from "@/lib/content/types";

const typeface: TypefaceData = {
  slug: "commit-mono",
  name: "Commit Mono",
  dateAdded: "2026-11-04T09:47:24+01:00",
  category: "Monospaced",
  styles: "Variable",
  glyphCount: 1932,
  italic: true,
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
    }
  ],
  latestRelease: {
    version: "v1.143",
    date: "28 Dec 2023"
  },
  projectUrl: "https://github.com/eigilnikolajsen/commit-mono",
  creator: {
    name: "Eigil Nikolajsen",
    url: "https://commitmono.com/"
  },
  summary: "Commit Mono is Eigil Nikolajsen’s restrained coding typeface, with variable weights, italics, character alternatives, and optional spacing features for fixed-width text.",
  description: `Commit Mono was designed by Danish creative developer and designer Eigil Nikolajsen and released in 2023. Informed by the “Super Normal” design philosophy associated with Jasper Morrison and Naoto Fukasawa, the project approaches neutrality as a practical goal: a programming typeface should support reading without continually drawing attention to its own construction. Nikolajsen’s references include the letterforms of <em>Franklin Gothic</em>, particularly its double-storey <em>g</em>, the simple monospaced shapes of <em>Letter Gothic</em>, and the treatment of symbols in <em>Fira Mono</em>. The restrained character of Klim Type Foundry’s <em>Untitled Sans</em> provided another point of reference.

The design combines low stroke contrast, open apertures, and clearly differentiated characters within a fixed-width grid. Letters and figures that can be confused in code—such as zero and capital <em>O</em>, or the numeral one, lowercase <em>l</em>, and capital <em>I</em>—receive distinct constructions. Its central spacing feature, Smart Kerning, addresses the uneven gaps that arise when narrow and wide forms share identical advance widths. Contextual OpenType substitutions select alternate glyphs whose outlines sit farther left or right within their cells, moving them toward narrower neighboring characters while preserving the character grid. The variable family runs from Extra Light to Bold with companion slanted styles. Optional features include more cursive italic forms, character alternatives, connected arrows, code ligatures, and adjustments to punctuation and symbol spacing.

Commit Mono is primarily suited to code editors, integrated development environments, terminals, diffs, and technical documentation. Its subdued forms let syntax and layout carry the hierarchy, while the optional spacing features offer a more adjusted texture without disrupting column alignment. The same qualities can serve tables, captions, and editorial settings that call for a quiet monospaced voice. For continuous literary text, its fixed-pitch rhythm is more conspicuous than that of a proportional reading face; for expressive titling, its restraint is a deliberate aesthetic choice rather than a source of graphic emphasis. Its particular contribution lies in refining the optical behavior of the monospaced grid while retaining its practical structure.`,
  fontFile: "/assets/fonts/commit-mono/CommitMono.woff2",
  features: [
    {
      type: "figures", title: "Figures",
      examples: [{ text: "1234567890", label: "Tabular Lining (default)", options: { features: "normal" } }]
    },
    {
      type: "comparison", title: "Code Ligatures", code: "font-feature-settings: 'ss01';",
      before: { features: { ss01: 0 }, size: "compact" }, after: { features: { ss01: 1 }, size: "compact" },
      examples: ["i <= j", "i != j", "i === j"]
    },
    {
      type: "comparison", title: "Arrows", code: "font-feature-settings: 'ss02';",
      before: { features: { ss02: 0 } }, after: { features: { ss02: 1 } }, examples: ["->", "=>", "<->"]
    },
    {
      type: "comparison", title: "Smart Case", code: "font-feature-settings: 'ss03';",
      before: { features: { ss03: 0 } }, after: { features: { ss03: 1 } }, examples: ["H:H", "H+H"]
    },
    {
      type: "comparison", title: "Symbol Spacing", code: "font-feature-settings: 'ss04';",
      before: { features: { ss04: 0 } }, after: { features: { ss04: 1 } }, examples: ["...", "//", "<<<"]
    },
    {
      type: "comparison", title: "Smart Kerning", code: "font-feature-settings: 'ss05';",
      before: { features: { ss05: 0 } }, after: { features: { ss05: 1 } }, examples: ["moi", "imo"]
    },
    {
      type: "comparison", title: "Character Variants", code: "font-feature-settings: 'cv--';",
      before: { features: "normal" },
      examples: [
        { text: "a", label: "'cv01'", after: { features: { cv01: 1 } } },
        { text: "g", label: "'cv02'", after: { features: { cv02: 1 } } },
        { text: "iä", label: "'cv03'", after: { features: { cv03: 1 } } },
        { text: "i", label: "'cv04'", after: { features: { cv04: 1 } } },
        { text: "@", label: "'cv05'", after: { features: { cv05: 1 } } },
        { text: "69", label: "'cv06'", after: { features: { cv06: 1 } } },
        { text: "0", label: "'cv07'", after: { features: { cv07: 1 } } },
        { text: "aefgy", label: "'cv08' · Italic", before: { italic: true, size: "compact" }, after: { features: { cv08: 1 }, italic: true, size: "compact" } },
        { text: "2*2", label: "'cv09'", after: { features: { cv09: 1 } } },
        { text: "l", label: "'cv10'", after: { features: { cv10: 1 } } },
        { text: "1", label: "'cv11'", after: { features: { cv11: 1 } } }
      ]
    }
  ]
};

export default typeface;
