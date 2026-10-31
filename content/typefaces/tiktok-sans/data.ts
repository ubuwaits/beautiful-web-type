import type { TypefaceData } from "@/lib/content/types";

const typeface: TypefaceData = {
  slug: "tiktok-sans",
  name: "TikTok Sans",
  dateAdded: "2026-10-31",
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
  latestRelease: { version: "v4.000", date: "9 Jul 2025" },
  projectUrl: "https://github.com/tiktok/TikTokSans",
  gFontsUrl: "https://fonts.google.com/specimen/TikTok+Sans",
  creator: { name: "Grilli Type, Contrast Foundry & Type Network", url: "https://github.com/tiktok/TikTokSans#credits--acknowledgements" },
  description: `TikTok Sans was conceived to solve an aggressive optical challenge: maintaining immediate legibility while superimposed over dynamic, high-contrast, and often chaotic full-bleed video. Commissioned in 2023 and developed by TikTok’s in-house design team in collaboration with Swiss foundry Grilli Type, the face was engineered to replace the system fallbacks—such as San Francisco and Roboto—that had previously handled the platform’s interface. Rather than serving as an abstract corporate branding exercise, it was drafted as an operational screen utility tailored to the high-velocity, mobile-first viewing habits of the contemporary web.

The anatomy of the letterform is built on the rational, low-contrast chassis of the digital neo-grotesque, heavily calibrated for low-density rendering and motion video overlays. Proportions are anchored by an elevated x-height and clipped ascenders and descenders, an architecture that maximizes character presence within compact UI bounds while allowing dense, multi-line captions to stack without vertical collisions. Apertures are deliberately widened, keeping the interior chambers of glyphs such as <em>c</em>, <em>e</em>, and <em>s</em> open and legible against turbulent, shifting backgrounds. Stroke transitions feature subtle optical thinning at the junctions, mitigating dark pixel clusters when rasterized across lower-tier mobile displays or subjected to heavy video compression algorithms. Special attention is directed toward alphanumeric disambiguation: the capital <em>I</em>, lowercase <em>l</em>, and numeral <em>1</em> possess distinct structural markers, and the zero is carefully isolated from the capital <em>O</em>, ensuring that usernames, numerical counters, and short-form subtitles can be decoded at an instantaneous glance.

In functional practice, the family operates across a focused range of weights designed to survive rapid scanning. While its monolinear construction, pronounced x-height, and rigid verticality make it unsuited for continuous long-form literary reading—where its lack of modulated cadence and compact proportions would quickly tire the eye—it performs with surgical precision within its native environment. It excels in micro-UI components, data-dense app chrome, live video captions, and rapid-fire broadcast graphics. Within the broader landscape of modern screen grotesques, TikTok Sans functions as an instructive case study in platform-specific typography: an alphabet stripped of decorative pretense and engineered specifically to navigate the visual turbulence of the vertical screen.`,
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
