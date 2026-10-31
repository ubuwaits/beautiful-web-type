import type { TypefaceData } from "@/lib/content/types";

const typeface: TypefaceData = {
  slug: "strichpunkt-sans",
  name: "Strichpunkt Sans",
  dateAdded: "2026-10-31",
  category: "Sans-Serif",
  styles: "Variable",
  glyphCount: 545,
  weights: [
    { weight: 400, name: "Regular" },
    { weight: 500, name: "Medium" },
    { weight: 600, name: "Semi Bold" },
    { weight: 700, name: "Bold" },
    { weight: 800, name: "Extra Bold" },
    { weight: 900, name: "Black" }
  ],
  latestRelease: { version: "v1.0", date: "27 Mar 2026" },
  projectUrl: "https://github.com/strichpunkt-design/Strichpunkt_Sans",
  gFontsUrl: "https://fonts.google.com/specimen/Strichpunkt+Sans",
  creator: { name: "René Bieder", url: "https://www.renebieder.com" },
  description: `Strichpunkt Sans originated within the Berlin and Stuttgart studios of the German branding agency Strichpunkt, drafted initially as a core element of the agency’s visual identity before being released as an open-source typographic asset. Rooted in the disciplined tradition of German corporate typography, Strichpunkt Sans was conceived to navigate the boundary between systematic functionalism and contemporary editorial character, providing a sturdy, multi-channel voice across digital platforms, identity systems, and print collateral.

Anatomically, the design is built upon the rational chassis of the European neo-grotesque, yet it avoids the absolute neutrality that often flattens the genre. The proportions are balanced and upright, anchored by an ample x-height and compact ascenders and descenders that allow lines to sit cleanly within tightly packed interface modules or multi-line headlines. Its apertures remain open and light-filled, preventing character chambers in glyphs like <em>c</em>, <em>e</em>, and <em>s</em> from filling in at micro-scales. Terminals are sheared with crisp, horizontal precision, reinforcing an orderly, architectural silhouette. True to the agency’s namesake—<em>Strichpunkt</em> being the German term for semicolon—the punctuation marks and accents are drawn with deliberate graphic clarity, providing distinct, rhythmically sharp pauses throughout the line. In continuous text, it casts an even, neutral grey, maintaining legibility without calling undue attention to individual character quirks.

Across its weight spectrum, Strichpunkt Sans shifts smoothly between utilitarian text setting and structural display duties. In its lighter and regular weights, it behaves with the measured reserve required of body copy, technical presentations, and user interfaces; in its bolder iterations, the stroke mass expands outward while keeping the internal counters defined, lending headlines a firm, graphic presence. While its contemporary, low-contrast construction makes it less suited to classical book typography or immersive literary prose, it operates with dependable precision across branding systems, exhibition collateral, wayfinding, and responsive digital layouts. Within the open catalog, Strichpunkt Sans stands as a clean, capable instrument, demonstrating how agency-driven corporate design can yield adaptable, public-domain typography.`,
  fontFile: "/assets/fonts/strichpunkt-sans/StrichpunktSans.woff2",
  features: [
    { type: "axis", title: "Width", axis: "wdth", text: "Shape", values: [100, 150, 200] },
    {
      type: "comparison",
      title: "Contextual Arrows",
      code: "font-feature-settings: 'calt';",
      before: { features: { calt: 0 } },
      after: { features: { calt: 1 } },
      examples: ["->", "<-", "—>"]
    },
    {
      type: "comparison",
      title: "Discretionary Ligatures",
      code: "font-feature-settings: 'dlig';",
      before: { features: { dlig: 0 } },
      after: { features: { dlig: 1 } },
      examples: ["ff", "fi", "fl", "fj"]
    },
    {
      type: "figures",
      title: "Figures",
      options: { direction: "auto" },
      examples: [
        { text: "1234567890", label: "Lining (default)", options: { features: "normal" } },
        { text: "1/2 3/4", label: "Fractions: 'frac'", options: { features: { frac: 1 } } },
        { text: "123", reference: "H", label: "Numerators: 'numr'", options: { features: { numr: 1 } } },
        { text: "123", reference: "H", label: "Denominators: 'dnom'", options: { features: { dnom: 1 } } },
        { text: "123", reference: "H", label: "Subscripts: 'subs'", options: { features: { subs: 1 } } },
        { text: "123", reference: "H", label: "Scientific Inferiors: 'sinf'", options: { features: { sinf: 1 } } },
        { text: "123", reference: "H", label: "Superscripts: 'sups'", options: { features: { sups: 1 } } }
      ]
    },
    {
      type: "comparison",
      title: "Ordinals",
      code: "font-feature-settings: 'ordn';",
      before: { features: { ordn: 0 } },
      after: { features: { ordn: 1 } },
      examples: ["1a", "2o"]
    },
    {
      type: "comparison",
      title: "Case Sensitive Forms",
      code: "font-feature-settings: 'case';",
      before: { features: { case: 0 } },
      after: { features: { case: 1 } },
      examples: ["(A)", "[H]", "¿¡@"]
    }
  ]
};

export default typeface;
