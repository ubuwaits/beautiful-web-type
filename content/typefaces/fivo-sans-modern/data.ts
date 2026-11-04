import type { TypefaceData } from "@/lib/content/types";

const typeface: TypefaceData = {
  slug: "fivo-sans-modern",
  name: "Fivo Sans Modern",
  dateAdded: "2019-01-03T18:38:04+01:00",
  category: "Display",
  styles: 10,
  glyphCount: 361,
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
      weight: 700,
      name: "Bold"
    },
    {
      weight: 800,
      name: "Heavy"
    },
    {
      weight: 900,
      name: "Extra Black"
    }
  ],
  websiteHero: {
    wordmark: { weight: 500, size: 24, lineHeight: "28px", letterSpacing: "-0.025em" },
    headline: { weight: 500, size: "clamp(2.25rem, 6.3cqw, 5.875rem)", lineHeight: 1.02, letterSpacing: "-0.045em" },
    description: { weight: 400, size: 16, desktopSize: 18, lineHeight: "28px" },
    action: { weight: 400, size: 14, lineHeight: "24px" },
    caseLocation: { weight: 400, size: 12, lineHeight: "20px", letterSpacing: "0.025em", textTransform: "uppercase" },
    caseTitle: { weight: 500, size: 24, lineHeight: 1.15, letterSpacing: "-0.025em" },
    caseBody: { weight: 400, size: 14, lineHeight: "24px" },
    tableLabel: { weight: 400, size: 14, lineHeight: "20px" },
    tableValue: { weight: 500, size: 14, lineHeight: "20px", features: { lnum: 1, tnum: 1 } },
  },
  latestRelease: {
    version: "v1.0",
    date: "5 Jul 2017"
  },
  projectUrl: "https://www.behance.net/gallery/54442585/FIvo-Sans-Modern-Typeface",
  creator: {
    name: "Alex Slobzheninov",
    url: "https://www.behance.net/slobzheninov"
  },
  summary: "Fivo Sans Modern turns deep ink traps into graphic details, with five weights and matching obliques for posters, mastheads, and expressive display typography.",
  description: `Fivo Sans Modern emerged from a deliberate subversion of typographic utility: turning a hidden optical defense mechanism into an overt graphic statement. Released in 2017 by designer Alexander Slobzheninov, the face was drawn as the display counterpart to his Swiss-inspired neo-grotesque, <em>Fivo Sans</em>. Where the primary family aimed for the tidy, neutral discipline of the International Typographic Style, Fivo Sans Modern strips away that polite reserve. It takes the rational bones of the mid-century grotesque and recalibrates them for the high-contrast demands of contemporary posters, mastheads, and screen headlines.

Anatomically, the design is governed by deep, deeply cut ink traps. Historically engineered for extreme conditions—most famously in telephone directories and high-speed newsprint, where punchcutters and phototype designers carved voids into stroke junctions to swallow capillary ink bleed—such notches were never intended to be seen. Slobzheninov reverses that logic entirely. At display scales, these empty wedges do not disappear into pooled ink; instead, they function as stark incisions of negative space. In letters like <em>M</em>, <em>W</em>, <em>A</em>, and the shoulders of <em>n</em> and <em>r</em>, these angular bites carve into the heavy stems, catching ambient light and injecting rhythmic friction into what would otherwise be monolithic walls of black.

The family spans five weights ranging from Regular to Extra Black, paired with matching obliques. As the weight increases toward the dense mass of the Heavy and Extra Black cuts, the ink traps bite even deeper into the joints, lending the alphabet a chiseled, architectural presence. Posters, editorial banners, packaging, and prominent web headings give these details room to become part of the graphic composition.`,
  familyFaces: [
    "Fivo Sans"
  ],
  fontFile: "/assets/fonts/fivo-sans-modern/fivosansmodern-regular.woff2",
  features: [
    {
      type: "figures",
      title: "Figures",
      options: { direction: "auto", features: "normal" },
      examples: [{ text: "1234567890", label: "Proportional Lining (default)" }]
    },
    {
      type: "comparison",
      title: "Stylistic Alternates",
      code: "font-feature-settings: 'salt';",
      before: { features: { salt: 0 } },
      after: { features: { salt: 1 } },
      examples: [{ text: "a", label: "'salt'" }]
    }
  ],
};

export default typeface;
