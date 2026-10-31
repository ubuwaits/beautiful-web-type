import type { TypefaceData } from "@/lib/content/types";
import features from "./features";

export default {
  features,
  slug: "lora",
  name: "Lora",
  dateAdded: "2018-10-15",
  category: "Serif",
  styles: "Variable",
  glyphCount: 892,
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
    version: "v.3021",
    date: "22 Oct 2025"
  },
  projectUrl: "https://github.com/cyrealtype/Lora-Cyrillic",
  gFontsUrl: "https://fonts.google.com/specimen/Lora",
  creator: {
    name: "Cyreal",
    url: "http://www.cyreal.org"
  },
  description: `Lora was drawn to inhabit that quiet intersection where the fluid stroke of the brush meets the architectural discipline of the punchcutter. Conceived by Olga Karpushina and developed alongside Alexei Vanyashin through the Cyreal foundry, the face emerged neither as an archaeological replica of eighteenth-century transitional models nor as an exercise in cold screen engineering. Instead, it was crafted to serve the unhurried cadence of modern storytelling and reflective prose. Where many contemporary digital serifs risk appearing either frail and brittle under coarse rasterization or swollen and blunted by aggressive hinting, Lora preserves an innate calligraphic dignity—shepherding the reader through extended texts with the poise of an accomplished narrator.

The anatomy of the letterform is animated by a captivating counterpoint: the organic warmth of brushed curves balanced against the crisp, driving horizontal footing of its serifs. Karpushina endowed the strokes with a moderate, supple contrast, allowing stems to swell and taper with the living breath of the hand. Terminals on letters such as <em>c</em>, <em>r</em>, and <em>f</em> curve with a distinct, chirographic inflection, arriving like poised droplets of ink rather than mechanically sheared boundaries. Counters are broad and hospitable, welcoming ambient light deep into the interior of each character, while a generous x-height ensures that the word-silhouette remains intact across low-resolution displays. Along the running measure, Lora weaves a warm, harmonious grey that avoids the blinding dazzle of the Didones, settling instead into an unhurried, rhythmic cadence.

It is in the italic that Lora’s calligraphic lineage sings with unreserved joy. Refusing the perfunctory expedient of a slanted roman, the cursive hand rakes forward with brisk, dancing energy—its fluid loops, asymmetrical entries, and lively exits introducing an authentic polyphonic contrast alongside the upright text. Supported by native fluency across both Latin and Cyrillic scripts and matured into a responsive variable architecture, the family avoids the sterile uniformity of modern corporate types. Released under the SIL Open Font License, Lora endures as one of the true literary workhorses of the digital commons: an alphabet proving that the contemplative dignity of the printed page can thrive upon the luminous canvas of the screen.`,
  fontFile: "/assets/fonts/lora/Lora-VF.woff2"
} satisfies TypefaceData;
