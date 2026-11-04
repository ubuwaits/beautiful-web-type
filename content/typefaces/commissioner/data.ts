import type { TypefaceData } from "@/lib/content/types";

const typeface: TypefaceData = {
  slug: "commissioner",
  name: "Commissioner",
  dateAdded: "2025-06-06T10:15:37+02:00",
  category: "Sans-Serif",
  styles: "Variable",
  glyphCount: 1172,
  italic: true,
  weights: [
    {
      weight: 100,
      name: "Thin"
    },
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
    },
    {
      weight: 800,
      name: "Extra-Bold"
    },
    {
      weight: 900,
      name: "Black"
    }
  ],
  latestRelease: {
    version: "v1.012",
    date: "18 Nov 2025"
  },
  projectUrl: "https://github.com/kosbarts/Commissioner",
  gFontsUrl: "https://fonts.google.com/specimen/Commissioner",
  creator: {
    name: "Kostas Bartsokas",
    url: "https://kostasbartsokas.com/"
  },
  summary: "Commissioner is Kostas Bartsokas’s variable sans serif, with flare and volume axes that shift its terminals from restrained text forms to inscriptional display.",
  description: `Conceived by Greek type designer Kostas Bartsokas, Commissioner is a variable design that explores the boundary between sans-serif letters and carved inscriptions. In its classical proportions and low-contrast stroke architecture, it recalls aspects of Hermann Zapf’s <em>Optima</em>, while its variable axes allow a wider range of terminal shapes. Designed to span Latin, Cyrillic, and Bartsokas’s native Greek within a shared design, it treats distinct scripts not as mechanical transliterations, but as living traditions united by a shared harmonic discipline. The family moves between text-oriented and more inscriptional forms without requiring separate designs.

Commissioner’s versatility comes from its <em>Flare</em> and <em>Volume</em> axes alongside conventional weight and slant. In its default state, the face speaks in a calm, straight-stemmed grotesque voice, disciplined and transparent enough for the quietest technical captions or extended passages of running text. Yet as one introduces the flare, the terminals begin to swell with the memory of the lapidary chisel, blossoming into delicate glyphic serifs while the joints grow more idiosyncratic. Advance the volume axis, and those glyphic swellings broaden into assertive, wedge-like terminations. It is typographic metamorphosis made tangible: a single structural skeleton capable of modulating from the cool reserve of an industrial grotesque to the expressive warmth of an incised display face.

On the page or screen, Commissioner derives its poise from its classical cadence. The majuscules do not yield to twentieth-century geometric uniformity; they honor the varied widths of classical stone-cut inscriptions, establishing a stately, open architecture that anchors the brisk movement of the lowercase. Generous counters and hospitable apertures invite light into the interior of each character, preserving clarity across dense compositions while granting larger display settings an exuberant, sculptural presence.`,
  fontFile: "/assets/fonts/commissioner/glyphs-regular.woff2",
  glyphSource: "/assets/fonts/commissioner/Commissioner[FLAR,VOLM,wght].woff2",
  features: [
    {
      type: "comparison",
      title: "Standard Ligatures",
      code: "font-feature-settings: 'liga';",
      before: { features: { liga: 0 } },
      after: { features: { liga: 1, clig: 1 } },
      examples: ["ff", "fi", "fl", "ffi", "ffl"]
    },
    {
      type: "comparison",
      title: "Contextual Alternates",
      code: "font-feature-settings: 'calt';",
      before: { features: { calt: 0 } },
      after: { features: { calt: 1 } },
      examples: ["fb", "ßA", "ΆΆ"]
    },
    {
      type: "figures",
      title: "Figures",
      options: { direction: "auto" },
      examples: [
        { text: "1234567890", label: "Proportional Lining (default)", options: { features: "normal" } },
        { text: "1/2 3/4", label: "Fractions: 'frac'", options: { features: { frac: 1 } } },
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
        { text: "G", label: "'ss01'", before: { features: { ss01: 0 } }, after: { features: { ss01: 1 } } },
        { text: "б", label: "'ss02'", before: { features: { ss02: 0 } }, after: { features: { ss02: 1 } } }
      ]
    },
    {
      type: "comparison",
      title: "Case Sensitive Forms",
      code: "font-feature-settings: 'case';",
      before: { features: { case: 0 } },
      after: { features: { case: 1 } },
      examples: ["()-@", "[]{}", "«·»΄"]
    }
  ],
};

export default typeface;
