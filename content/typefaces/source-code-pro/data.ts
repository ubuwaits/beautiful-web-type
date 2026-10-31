import type { TypefaceData } from "@/lib/content/types";
import features from "./features";

export default {
  features,
  slug: "source-code-pro",
  name: "Source Code Pro",
  dateAdded: "2018-12-18",
  category: "Monospaced",
  styles: "Variable",
  glyphCount: 1568,
  italic: true,
  weights: [
    {
      weight: 200,
      name: "ExtraLight"
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
      name: "SemiBold"
    },
    {
      weight: 700,
      name: "Bold"
    },
    {
      weight: 900,
      name: "Black"
    }
  ],
  latestRelease: {
    version: "v1.026",
    date: "12 Apr 2023"
  },
  projectUrl: "https://github.com/adobe-fonts/source-code-pro",
  gFontsUrl: "https://fonts.google.com/specimen/Source+Code+Pro",
  creator: {
    name: "Paul D. Hunt",
    url: "https://github.com/pauldhunt"
  },
  description: `Source Code Pro was drafted by Paul D. Hunt at Adobe to resolve an exacting ergonomic problem: adapting the clear, humanist skeleton of <em>Source Sans Pro</em> to the unyielding coordinates of the terminal grid. Released in 2012 under the SIL Open Font License, the face emerged during a period when software developers were spending long working days before high-density displays, navigating increasingly intricate syntax and nested code structures. Rather than reviving an analog typewriter face or imposing an austere, monolinear geometry, Hunt sought to build a dedicated programming instrument whose humanist origins would reduce cognitive strain across hours of technical scrutiny.

The anatomy of the face is shaped by careful optical concessions made to fit a fixed-pitch frame. In a monospaced alphabet, where narrow characters like <em>i</em> and broad characters like <em>m</em> must occupy identical bounding boxes, awkward voids and congested joints easily threaten the rhythm of the line. Hunt addressed this by slightly widening the overall proportions, allowing ample white space to circulate through hospitable counters. Critical glyph distinctions are handled with sober precision: the zero is pierced with a central dot to prevent confusion with the capital <em>O</em>, the numeral <em>1</em> carries a distinct top hook and foot, the uppercase <em>I</em> retains stabilizing serifs, and the lowercase <em>l</em> curves out into a definite terminal foot. Equally deliberate is the treatment of punctuation: mathematical operators, colons, brackets, and braces are drawn slightly larger and bolder than standard text punctuation, ensuring they remain immediately legible within complex code syntax.

Typographically, Source Code Pro matured well beyond the utilitarian confines of an everyday terminal font. Originally launched in upright styles spanning six weights, the family was subsequently expanded to include true cursive italics—where letters like <em>a</em> transition to a single-storey hand—alongside a continuous variable font axis that runs from ExtraLight to Black. Its linguistic coverage is similarly comprehensive, providing stable support for extended Latin, Cyrillic, and Greek character sets. Along the measure, it sets a steady, open cadence that resists optical crowding even at punishingly small point sizes.

The family’s domain is well-defined. Its rigid spacing and enlarged punctuation disqualify it from sustained literary reading, where its fixed gait disrupts the natural flow of prose. Instead, it thrives in code editors, command-line interfaces, data tables, and technical manuals. In contemporary editorial design, it also serves as an articulate accent for captions, indices, and financial sidebars. Within the open catalog, Source Code Pro stands as an unpretentious, highly disciplined workhorse—a design demonstrating how the principles of humanist type design can bring clarity and quiet endurance to the specialized language of modern computing.`,
  familyFaces: [
    "Source Sans Pro",
    "Source Serif Pro"
  ],
  fontFile: "/assets/fonts/source-code-pro/glyphs-regular.woff2",
  glyphSource: "/assets/fonts/source-code-pro/SourceCodeVF-Upright.ttf.woff2"
} satisfies TypefaceData;
