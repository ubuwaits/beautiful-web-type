import type { TypefaceData } from "@/lib/content/types";

const typeface: TypefaceData = {
  slug: "tiktok-sans",
  name: "TikTok Sans",
  dateAdded: "2026-10-31T21:29:01+01:00",
  category: "Sans-Serif",
  styles: "Variable",
  glyphCount: 1181,
  weights: [
    { weight: 300, name: "Light" },
    { weight: 400, name: "Regular" },
    { weight: 500, name: "Medium" },
    { weight: 600, name: "Semi Bold" },
    { weight: 700, name: "Bold" },
    { weight: 800, name: "Extra Bold" },
    { weight: 900, name: "Black" }
  ],
  websiteHero: {
    wordmark: { weight: 600, size: 24, lineHeight: "28px", letterSpacing: "-0.025em" },
    headline: { weight: 500, size: "clamp(2.25rem, 6.3cqw, 5.875rem)", lineHeight: 1.02, letterSpacing: "-0.045em" },
    description: { weight: 400, size: 16, desktopSize: 18, lineHeight: "28px" },
    action: { weight: 400, size: 14, lineHeight: "24px" },
    caseLocation: { weight: 400, size: 12, lineHeight: "20px", letterSpacing: "0.025em", textTransform: "uppercase" },
    caseTitle: { weight: 600, size: 24, lineHeight: 1.15, letterSpacing: "-0.025em" },
    caseBody: { weight: 400, size: 14, lineHeight: "24px" },
    tableLabel: { weight: 400, size: 14, lineHeight: "20px" },
    tableValue: { weight: 500, size: 14, lineHeight: "20px", features: { lnum: 1, tnum: 1 } },
  },
  latestRelease: { version: "v4.000", date: "9 Jul 2025" },
  projectUrl: "https://github.com/tiktok/TikTokSans",
  gFontsUrl: "https://fonts.google.com/specimen/TikTok+Sans",
  creator: { name: "Grilli Type, Contrast Foundry & Type Network", url: "https://github.com/tiktok/TikTokSans#credits--acknowledgements" },
  summary: "TikTok Sans is a variable sans serif developed for text over moving video, with open apertures and distinct characters for captions and compact interfaces.",
  description: `TikTok Sans was conceived to solve a demanding optical challenge: maintaining immediate legibility while superimposed over dynamic, high-contrast, and often chaotic full-bleed video. Commissioned in 2023 and developed by TikTok’s in-house design team in collaboration with Swiss foundry Grilli Type, the face was engineered to replace the system fallbacks—such as San Francisco and Roboto—that had previously handled the platform’s interface. Rather than serving as an abstract corporate branding exercise, it was drafted as an operational screen utility tailored to the high-velocity, mobile-first viewing habits of the contemporary web.

The anatomy of the letterform is built on the rational, low-contrast chassis of the digital neo-grotesque, heavily calibrated for low-density rendering and motion video overlays. Proportions are anchored by an elevated x-height and clipped ascenders and descenders, an architecture that maximizes character presence within compact UI bounds while allowing dense, multi-line captions to stack without vertical collisions. Apertures are deliberately widened, keeping the interior chambers of glyphs such as <em>c</em>, <em>e</em>, and <em>s</em> open and legible against turbulent, shifting backgrounds. Stroke transitions feature subtle optical thinning at the junctions, mitigating dark pixel clusters when rasterized across lower-tier mobile displays or subjected to heavy video compression algorithms. Special attention is directed toward alphanumeric disambiguation: the capital <em>I</em>, lowercase <em>l</em>, and numeral <em>1</em> possess distinct structural markers, and the zero is carefully isolated from the capital <em>O</em>, ensuring that usernames, numerical counters, and short-form subtitles remain distinguishable during rapid scanning.

TikTok Sans suits compact interface components, data-dense app chrome, live video captions, and broadcast graphics, where words need to remain distinct over moving images. Its pronounced x-height and compact proportions give short labels a substantial presence, while the weight range supports hierarchy in captions and navigation.`,
  fontFile: "/assets/fonts/tiktok-sans/TikTokSans.woff2",
  features: [
    { type: "axis", title: "Width", axis: "wdth", text: "Shape", values: [75, 100, 150] },
    { type: "axis", title: "Slant", axis: "slnt", text: "Motion", values: [0, -3, -6] },
    { type: "axis", title: "Optical Size", axis: "opsz", text: "Optical", values: [12, 24, 36] },
    {
      type: "figures",
      title: "Figures",
      examples: [
        { text: "1234567890", label: "Proportional Lining (default)", options: { features: "normal" } },
        { text: "1234567890", label: "Tabular Lining: 'tnum'", options: { features: { tnum: 1 } } },
        { text: "1/2 3/4", label: "Fractions: 'frac'", options: { features: { frac: 1 } } },
        { text: "0", label: "Slashed Zero: 'zero'", options: { features: { zero: 1 } } },
        { text: "123", reference: "H", label: "Numerators: 'numr'", options: { features: { numr: 1 } } },
        { text: "123", reference: "H", label: "Denominators: 'dnom'", options: { features: { dnom: 1 } } },
        { text: "123", reference: "H", label: "Subscripts: 'subs'", options: { features: { subs: 1 } } },
        { text: "123", reference: "H", label: "Scientific Inferiors: 'sinf'", options: { features: { sinf: 1 } } },
        { text: "123", reference: "H", label: "Superscripts: 'sups'", options: { features: { sups: 1 } } }
      ]
    },
    {
      type: "comparison",
      title: "Stylistic Sets",
      code: "font-feature-settings: 'ss--';",
      examples: [
        { text: "ДЛФвгд", label: "'ss01' · Bulgarian Forms", after: { features: { ss01: 1 } } },
        { text: "б", label: "'ss02' · Serbian/Macedonian Forms", after: { features: { ss02: 1 } } },
        { text: "Il0", label: "'ss06' · Disambiguation Forms", after: { features: { ss06: 1 } } }
      ]
    },
    {
      type: "comparison",
      title: "Character Variants",
      code: "font-feature-settings: 'cv--';",
      examples: [
        { text: "I", label: "'cv01'", after: { features: { cv01: 1 } } },
        { text: "l", label: "'cv02'", after: { features: { cv02: 1 } } },
        { text: "0", label: "'cv03'", after: { features: { cv03: 1 } } },
        { text: "RЯя", label: "'cv04'", after: { features: { cv04: 1 } } },
        { text: "3", label: "'cv05'", after: { features: { cv05: 1 } } }
      ]
    },
    {
      type: "comparison",
      title: "Case Sensitive Forms",
      code: "font-feature-settings: 'case';",
      before: { features: { case: 0 } },
      after: { features: { case: 1 } },
      examples: ["(H)", "¿¡@", "«A»"]
    }
  ]
};

export default typeface;
