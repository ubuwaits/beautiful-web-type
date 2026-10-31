import type { TypefaceData } from "@/lib/content/types";

export default {
  slug: "inria-sans",
  name: "Inria Sans",
  dateAdded: "2018-12-03",
  category: "Sans-Serif",
  styles: 6,
  glyphCount: 591,
  italic: true,
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
      weight: 700,
      name: "Bold"
    }
  ],
  latestRelease: {
    version: "v1.200",
    date: "11 Jan 2018"
  },
  projectUrl: "https://github.com/BlackFoundry/InriaFonts",
  creator: {
    name: "BlackFoundry",
    url: "https://black-foundry.com/work/inria/"
  },
  description: `Inria Sans was forged to give articulate voice to the algorithmic age without reducing the written word to the cold circuitry of the machine. Commissioned in 2017 for the French National Institute for Research in Digital Science and Technology (Inria) and crafted by the Parisian atelier Black[Foundry]—led by Jérémie Hornus and Grégori Vincens—the typeface confronted a recurring institutional dilemma: how to convey mathematical rigor and advanced computational research without lapsing into the arid, sci-fi tropes of technocratic design. Conceived in tandem with Inria Serif as an interconnected typographic suite, Inria Sans was subsequently bestowed upon the open commons under the SIL Open Font License, translating a piece of elite civic patronage into a democratic instrument of public communication.

Anatomically, the face is governed by an unapologetically contemporary humanist ductus, where the rational posture of modern industrial design meets the living rhythm of the hand. While its vertical stems and proportions exhibit an upright, Cartesian discipline—anchored by an ample x-height and hospitable interior counters—its curves refuse mechanical sterility. Terminals shear off with crisp, decisive angles, and the shoulders of letters like <em>m</em>, <em>n</em>, and <em>r</em> spring from their stems with an elastic, organic vitality. The resulting texture along the line is lucid and open, preventing dense alphanumeric strings, code fragments, or continuous prose from coalescing into a congested wall of grey. Light circulates freely through each glyph, preserving clarity across both the coarse raster of the monitor and the quiet grain of the printed report.

Rather than surrendering to the perfunctory expedient of the mechanically slanted oblique, Inria Sans is dignified by a true cursive italic. Its forms introduce a lively, calligraphic friction against the upright roman, tilting forward with a dynamic stroke modulation and fluid exits that evoke the pen without slipping into historical ornament. Across its three deliberate weights—from the architectural lightness of the 300 to the solid, unyielding authority of the Bold—the design maintains an effortless European poise. It remains a rare and valuable citizen of the open commons: an unpretentious yet sophisticated workhorse that demonstrates how scientific precision and typographic humanity can dwell in harmonious balance.`,
  familyFaces: [
    "Inria Serif"
  ],
  fontFile: "/assets/fonts/inria-sans/InriaSans-Regular.woff2"
} satisfies TypefaceData;
