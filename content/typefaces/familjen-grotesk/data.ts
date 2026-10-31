import type { TypefaceData } from "@/lib/content/types";

const typeface: TypefaceData = {
  slug: "familjen-grotesk",
  name: "Familjen Grotesk",
  dateAdded: "2026-10-31",
  category: "Sans-Serif",
  styles: "Variable",
  glyphCount: 698,
  italic: true,
  weights: [
    { weight: 400, name: "Regular" },
    { weight: 500, name: "Medium" },
    { weight: 600, name: "Semi Bold" },
    { weight: 700, name: "Bold" }
  ],
  latestRelease: { version: "v2.002", date: "17 Jun 2023" },
  projectUrl: "https://github.com/Familjen-Sthlm/Familjen-Grotesk",
  gFontsUrl: "https://fonts.google.com/specimen/Familjen+Grotesk",
  creator: { name: "Familjen STHLM", url: "https://familjen.se" },
  description: `Familjen Grotesk emerged from the collaborative workshops of Familjen STHLM, an independent design and branding agency based in Stockholm. Led by type designer Kristian Möller alongside Anders Wikström, Jonas Bäckman, Matilda Gysing, and Örjan Nordling, the family was initially developed to anchor the agency’s own visual identity before being contributed to the open commons under the SIL Open Font License. The design situates itself within the early twentieth-century grotesque tradition, yet it deliberately avoids the impassive neutrality common to modern corporate sans-serifs. Instead, it marries pragmatic Nordic functionalism with sharp graphic character, crafting an alphabet designed to operate with equal confidence in dense informational settings and outspoken headline environments.

Anatomically, the letterform is defined by the conspicuous presence of deep, chiseled ink traps carved into its stroke junctions. Historically deployed as an invisible mechanical safeguard to absorb pooled ink on high-speed press runs, these recesses are treated here as visible graphic motifs. In characters like <em>k</em>, <em>n</em>, and <em>r</em>, as well as the inner crotches of <em>M</em> and <em>W</em>, the triangular notches bite deep into the joints. At small caption sizes, these incisions perform their traditional optical duty, venting stroke intersections and preventing pixel clogging; at display scales, they register as rhythmic cuts of negative space that introduce friction into what would otherwise be a conventional grotesque cadence. The proportions reinforce this grounded posture: a generous x-height, sturdy uppercase letters, and relatively closed apertures give words a compact, cohesive silhouette along the baseline.

Spanning a variable weight spectrum from Regular to Bold—complemented by corresponding italics—Familjen Grotesk shifts easily across applications. In short-to-medium passages of interface text or technical captions, its open counters and optical notches preserve clarity. When scaled up to mastheads, packaging, and poster compositions, the face reveals its deliberate graphic tension, commanding the page without needing to resort to excessive stroke weight. While its prominent notches and tight apertures make it less suited for continuous, immersive literary reading, it finds a natural home in contemporary editorial design, brand identities, and responsive digital environments. Within the open catalog, Familjen Grotesk stands as a thoughtful study in Scandinavian graphic craft, demonstrating how the utilitarian mechanisms of print history can be repurposed as contemporary ornament.`,
  fontFile: "/assets/fonts/familjen-grotesk/FamiljenGrotesk.woff2",
  features: [
    {
      type: "comparison",
      title: "Standard Ligatures",
      code: "font-feature-settings: 'liga';",
      before: { features: { liga: 0 } },
      after: { features: { liga: 1 } },
      examples: ["ff", "fi", "fl", "ffi", "ffl"]
    },
    {
      type: "figures",
      title: "Figures",
      examples: [
        { text: "1234567890", label: "Tabular Lining (default)", options: { features: "normal" } },
        { text: "1234567890", label: "Proportional Lining: 'pnum'", options: { features: { pnum: 1 } } },
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
        { text: "•", label: "'ss02'", after: { features: { ss02: 1 } } },
        { text: "®", label: "'ss05'", after: { features: { ss05: 1 } } }
      ]
    },
    {
      type: "comparison",
      title: "Case Sensitive Forms",
      code: "font-feature-settings: 'case';",
      before: { features: { case: 0 } },
      after: { features: { case: 1 } },
      examples: ["(H)", "¿¡", "«A»"]
    }
  ]
};

export default typeface;
