import type { TypefaceData } from "@/lib/content/types";

const typeface: TypefaceData = {
  slug: "fivo-sans-modern",
  name: "Fivo Sans Modern",
  dateAdded: "2019-01-03",
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

The family spans five weights ranging from Regular to Extra Black, paired with matching obliques. As the weight increases toward the dense mass of the Heavy and Extra Black cuts, the ink traps bite even deeper into the joints, lending the alphabet a chiseled, architectural presence on both the printed broadsheet and the backlit banner. It is an unapologetically specialized display instrument: deployed at text sizes, its large recesses can interrupt word silhouettes, but when given room to command the top of a page, it operates with immediate graphic authority.`,
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
