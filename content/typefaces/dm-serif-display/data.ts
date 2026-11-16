import type { TypefaceData } from "@/lib/content/types";

const typeface: TypefaceData = {
  slug: "dm-serif-display",
  name: "DM Serif Display",
  dateAdded: "2026-11-03T10:03:53+01:00",
  category: "Display",
  styles: 2,
  glyphCount: 355,
  italic: true,
  weights: [{ weight: 400, name: "Regular" }],
  latestRelease: { version: "v5.200", date: "16 Oct 2019" },
  projectUrl: "https://github.com/googlefonts/dm-fonts",
  gFontsUrl: "https://fonts.google.com/specimen/DM+Serif+Display",
  creator: { name: "Colophon Foundry", url: "https://github.com/googlefonts/dm-fonts" },
  summary: "DM Serif Display is a high-contrast serif by Colophon Foundry, with fine hairlines and flowing italics for editorial mastheads, posters, and web headings.",
  description: `DM Serif Display was developed by Colophon Foundry for DeepMind under the creative direction of MultiAdaptor and released through Google Fonts in 2019. While <em>DM Sans</em> began with Jonny Pinhorn’s <em>Poppins</em>, the serif families drew on the Latin portion of Frank Grießhammer’s <em>Source Serif Pro</em> for Adobe. Colophon reworked that design’s transitional structure, rooted in the eighteenth-century types of Pierre-Simon Fournier, into a higher-contrast face for large headlines and poster typography.

Pronounced stroke modulation sets heavy vertical stems against fine crossbars and hairlines. Bracketed serifs establish a firm horizontal baseline, while rounded terminals on letters such as <em>c</em>, <em>f</em>, and <em>r</em> soften the otherwise upright structure. Close spacing gives short titles a dense rhythm, with the contrast between thick strokes and delicate joins becoming more visible as the size increases. The companion italic introduces cursive forms, single-storey constructions, and flowing strokes that provide a distinct second voice within the same display setting.

DM Serif Display suits editorial mastheads, prominent web headings, book jackets, packaging, and exhibition graphics, where scale gives its fine details a clear presence. Within the DM suite, it can provide the display tier, with subheadings and shorter passages set in <em>DM Serif Text</em> and functional information in <em>DM Sans</em>. Its regular weight and companion italic offer contrast through size and posture.`,
  familyFaces: ["DM Sans", "DM Serif Text"],
  fontFile: "/assets/fonts/dm-serif-display/DMSerifDisplay-Regular.woff2",
  features: [
    {
      type: "comparison", title: "Standard Ligatures", code: "font-feature-settings: 'liga';",
      before: { features: { liga: 0 } }, after: { features: { liga: 1 } }, examples: ["ff", "fi", "fl"]
    },
    {
      type: "comparison", title: "Discretionary Ligatures", code: "font-feature-settings: 'dlig';",
      before: { features: { dlig: 0 } }, after: { features: { dlig: 1 } }, examples: ["fb", "fh", "fj", "fk"]
    },
    {
      type: "figures", title: "Figures",
      examples: [
        { text: "1234567890", label: "Proportional Lining (default)", options: { features: "normal" } },
        { text: "1/2 3/4", label: "Fractions: 'frac'", options: { features: { frac: 1 } } },
        { text: "1234", reference: "H", label: "Superscripts: 'sups'", options: { features: { sups: 1 } } }
      ]
    },
    {
      type: "comparison", title: "Ordinals", code: "font-feature-settings: 'ordn';",
      before: { features: { ordn: 0 } }, after: { features: { ordn: 1 } }, examples: ["3a", "4o"]
    }
  ]
};

export default typeface;
