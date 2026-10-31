import type { TypefaceData } from "@/lib/content/types";

const typeface: TypefaceData = {
  slug: "inter",
  name: "Inter",
  dateAdded: "2020-11-21",
  category: "Sans-Serif",
  styles: "Variable",
  glyphCount: 2937,
  italic: true,
  weights: [
    {
      weight: 100,
      name: "Thin"
    },
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
    version: "v4.1",
    date: "16 Nov 2024"
  },
  projectUrl: "https://rsms.me/inter/",
  gFontsUrl: "https://fonts.google.com/specimen/Inter",
  creator: {
    name: "Rasmus Andersson",
    url: "https://rsms.me/"
  },
  description: `Inter was designed by Swedish designer and technologist Rasmus Andersson to solve a specific, contemporary interface problem: crafting a digital neo-grotesque engineered from the pixel up for computer screens across varying display densities. Begun in 2016 under the initial working title <em>Interface</em>, the project grew directly out of Andersson’s work in software design, addressing the optical deficiencies that emerge when print-era grotesques are forced into complex application layouts. Released freely under the SIL Open Font License, Inter functions as a foundational utility of the modern web, approaching screen legibility not through decorative novelty, but through systematic optical engineering.

The anatomy of the face draws from the mid-century Swiss tradition—most visibly the measured, neutral lineage of Akzidenz-Grotesk and Helvetica—while incorporating pragmatic concessions for raster environments. It features a prominent x-height paired with short ascenders and descenders, proportions calibrated to maximize letter recognition within compact UI elements like buttons, tables, and navigation bars without triggering vertical clipping. Apertures remain wide and open, preventing interior chambers in letters such as <em>c</em>, <em>e</em>, and <em>s</em> from congealing at micro-sizes. At stroke junctions, Andersson introduced subtle optical tapers that function like digital ink traps, shedding excess weight where curves meet vertical stems to prevent dark pixel clumping. Along the line, Inter sets a balanced, neutral grey that preserves clear word silhouettes across both standard displays and high-density screens.

Beyond its default letterforms, Inter’s strength lies in its extensive programmatic architecture. Built as a variable font with continuous axes for weight and slant, it includes an expansive suite of OpenType features tailored to technical and UI demands: tabular numbers for financial ledgers, case-sensitive punctuation aligned to capital letters, and glyph disambiguation options that add crossbars to the capital <em>I</em> or curve the tail of the lowercase <em>l</em> to prevent confusion with the numeral <em>1</em>. To ensure the design scales beyond small interface text, dedicated cuts such as <em>Inter Display</em> subtly adjust proportions, tightening the tracking and refining stroke transitions so that the typeface can step up to headline duties without feeling coarse.

Inter’s domain is firmly anchored in functional digital spaces: user interfaces, mobile operating systems, data dashboards, and responsive web layouts. While its deliberate neutrality makes it less suited to expressive display tasks or literary book design, it performs its intended role with exceptional discipline. Within the open-source commons, it stands as a prime example of utilitarian craft: an alphabet re-engineering the sober clarity of the grotesque for the technical demands of the screen.`,
  fontFile: "/assets/fonts/inter/Inter-roman.var.woff2",
  features: [
    {
      type: "comparison",
      title: "Discretionary Ligatures",
      code: "font-feature-settings: 'dlig';",
      before: { features: { dlig: 0 } },
      after: { features: { dlig: 1 } },
      examples: ["df", "dt", "fi", "fft"]
    },
    {
      type: "comparison",
      title: "Contextual Alternates",
      code: "font-feature-settings: 'calt';",
      before: { features: { calt: 0 } },
      after: { features: { calt: 1 } },
      examples: ["12:56", { text: "(SEMI)", before: { size: "compact" }, after: { size: "compact" } }, "->", "<-", "=>", "!="]
    },
    {
      type: "figures",
      title: "Figures",
      options: { direction: "auto" },
      examples: [
        { text: "1234567890", label: "Proportional Lining (default)", options: { features: "normal" } },
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
        {
          text: "13469",
          label: "'ss01'",
          before: { features: { ss01: 0 }, size: "compact" },
          after: { features: { ss01: 1 }, size: "compact" }
        },
        { text: "0Ill", label: "'ss02'", before: { features: { ss02: 0 } }, after: { features: { ss02: 1 } } },
        { text: ",;", label: "'ss03'", before: { features: { ss03: 0 } }, after: { features: { ss03: 1 } } },
        { text: "!=", label: "'ss07'", before: { features: { ss07: 0 } }, after: { features: { ss07: 1 } } },
        { text: "ʼˮ‘‚", label: "'ss08'", before: { features: { ss08: 0 } }, after: { features: { ss08: 1 } } }
      ]
    },
    {
      type: "comparison",
      title: "Character Variants",
      code: "font-feature-settings: 'cv--';",
      examples: [
        { text: "1", label: "'cv01'", before: { features: { cv01: 0 } }, after: { features: { cv01: 1 } } },
        { text: "4", label: "'cv02'", before: { features: { cv02: 0 } }, after: { features: { cv02: 1 } } },
        { text: "u", label: "'cv06'", before: { features: { cv06: 0 } }, after: { features: { cv06: 1 } } },
        { text: "3", label: "'cv09'", before: { features: { cv09: 0 } }, after: { features: { cv09: 1 } } },
        { text: "G", label: "'cv10'", before: { features: { cv10: 0 } }, after: { features: { cv10: 1 } } },
        { text: "a", label: "'cv11'", before: { features: { cv11: 0 } }, after: { features: { cv11: 1 } } }
      ]
    },
    {
      type: "comparison",
      title: "Case Sensitive Forms",
      code: "font-feature-settings: 'case';",
      before: { features: { case: 0 } },
      after: { features: { case: 1 } },
      examples: ["-–—", "@()*", "+:<="]
    },
    {
      type: "comparison",
      title: "Capital Spacing",
      code: "font-feature-settings: 'cpsp';",
      before: { features: { cpsp: 0 }, size: "compact" },
      after: { features: { cpsp: 1 }, size: "compact" },
      examples: ["HAMBURG"]
    }
  ],
};

export default typeface;
