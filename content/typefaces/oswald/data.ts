import type { TypefaceData } from "@/lib/content/types";

export default {
  slug: "oswald",
  name: "Oswald",
  dateAdded: "2018-10-15",
  category: "Display",
  styles: 6,
  glyphCount: 771,
  weights: [
    {
      weight: 200,
      name: "Extra-Light"
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
      name: "Semi-Bold"
    },
    {
      weight: 700,
      name: "Bold"
    }
  ],
  latestRelease: {
    version: "v4.103",
    date: "20 Jul 2023"
  },
  projectUrl: "https://github.com/googlefonts/OswaldFont",
  gFontsUrl: "https://fonts.google.com/specimen/Oswald",
  creator: {
    name: "Vernon Adams",
    url: "https://fonts.google.com/?query=Vernon+Adams"
  },
  description: `Oswald was drafted during the early years of the modern web font movement, addressing an immediate, practical deficit in digital typography: the lack of a reliable, condensed gothic built to survive the pixel grid. Conceived in 2011 by the late Vernon Adams and released under the SIL Open Font License, the face looks back to the commercial printing rooms of early-twentieth-century America—specifically Morris Fuller Benton’s <em>Alternate Gothic</em> designs cut for the American Type Founders in 1903. Adams reinterpreted those narrow, space-saving foundry metal forms for desktop and mobile displays, crafting a face intended to deliver headline impact where horizontal real estate was strictly limited.

Anatomically, the design is governed by compact proportions, flat-sided stems, and a prominent x-height. Curves resolve with brisk discipline rather than sweeping geometry, and the interior counters remain tight yet defined. Adams adjusted the classic American gothic framework to modern rendering engines by opening the apertures slightly and softening interior junctions, preventing the letterforms from congealing into solid blocks of black at smaller headline sizes. Set along the line, Oswald establishes a firm, vertical cadence. It moves with a clipped, efficient stride, producing a dense texture that commands attention without sprawling laterally across the measure.

That same compact geometry naturally delineates its proper domain. Oswald is unsuited for sustained narrative text; its condensed proportions and narrow counters crowd the reading eye across extended measures, quickly inducing fatigue. Instead, it thrives in headlines, section headers, navigation bars, and poster settings where short bursts of language need to land with immediate clarity. Over subsequent years, designers Kalapi Gajjar and Alexei Vanyashin expanded Adams’s foundational work, broadening the family into a continuous variable weight axis (from Extra Light to Bold) alongside extensive Cyrillic and Vietnamese language support. Within the open catalog, Oswald remains an enduring utility—a practical, well-tempered display face that brings the sturdy economy of the American newsroom to the modern screen.`,
  fontFile: "/assets/fonts/oswald/Oswald-Regular.woff2"
} satisfies TypefaceData;
