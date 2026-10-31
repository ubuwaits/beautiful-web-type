import type { TypefaceData } from "@/lib/content/types";

export default {
  slug: "crimson-pro",
  name: "Crimson Pro",
  dateAdded: "2020-05-23",
  category: "Serif",
  styles: "Variable",
  glyphCount: 833,
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
      weight: 700,
      name: "Bold"
    },
    {
      weight: 800,
      name: "Extra Bold"
    },
    {
      weight: 900,
      name: "Black"
    }
  ],
  latestRelease: {
    version: "v1.004",
    date: "8 Oct 2026"
  },
  projectUrl: "https://github.com/Fonthausen/CrimsonPro",
  gFontsUrl: "https://fonts.google.com/specimen/Crimson+Pro",
  creator: {
    name: "Jacques Le Bailly",
    url: "http://baronvonfonthausen.com"
  },
  description: `Crimson Pro began as an effort to thoroughly overhaul one of the early fixtures of libre book typography: Sebastian Kosch's <em>Crimson Text</em>, a design inspired by the Renaissance lineage of Claude Garamond, Robert Granjon, and Jan Tschichold’s twentieth-century interpretation, <em>Sabon</em>. While Kosch’s original captured the humane warmth of classical book faces, its vector geometry and spatial rhythm required structural refinement to meet modern publishing standards. Entrusted to Dutch type designer Jacques Le Bailly (Baron von Fonthausen) and released under the SIL Open Font License, Crimson Pro was completely redrawn from the ground up, emerging not as a minor update, but as a fully realized, scholarly reading instrument.

The anatomy of the letterform is rooted firmly in the Garalde tradition, guided by the organic cadence of the broad-nib pen rather than the geometric precision of the compass. Its strokes exhibit a gentle diagonal stress and moderate modulation, avoiding the optical vibration common to sharper, high-contrast transitional and Didone models. Serifs are subtly cupped along the baseline and softly bracketed, providing a steady footing that carries the reader’s gaze smoothly along the line. Apertures remain hospitably open, interior counters welcome ambient light into dense paragraphs, and terminals on letters like <em>c</em>, <em>f</em>, and <em>r</em> resolve into graceful, teardrop forms. In running text, Crimson Pro weaves an even, warm-grey texture that sits comfortably on both uncoated paper and illuminated screens.

Technically, Le Bailly re-engineered the family into an adaptable variable system with continuous axes for weight and optical size. The optical size axis is particularly vital to its literary utility: at smaller text grades, hairlines are reinforced, spacing is relaxed, and proportions widen to preserve legibility at micro-sizes; at larger display settings, the stroke contrast sharpens and details tighten into a more formal editorial voice. Its true cursive italic departs briskly from the upright roman, rolling forward with fluid entry and exit strokes that provide genuine vocal contrast for citations and dialogue. Furnished with true small capitals, fractions, oldstyle and lining figures, and comprehensive linguistic coverage across extended Latin, Crimson Pro operates as a dependable workhorse for academic monographs, literary journals, and long-form digital essays. Within the open catalog, it stands as a faithful and disciplined continuation of the humanist printing tradition.`,
  fontFile: "/assets/fonts/crimson-pro/CrimsonPro-Roman-VF.woff2"
} satisfies TypefaceData;
