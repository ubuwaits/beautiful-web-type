import type { TypefaceData } from "@/lib/content/types";

const typeface: TypefaceData = {
  slug: "luperca",
  name: "Luperca",
  dateAdded: "2026-11-02T21:22:39+01:00",
  category: "Display",
  styles: "Variable",
  glyphCount: 337,
  weights: [{ weight: 400, name: "Regular" }],
  latestRelease: { version: "v1.000", date: "17 Dec 2025" },
  projectUrl: "https://www.tunera.xyz/fonts/luperca/",
  creator: { name: "Ariel Martín Pérez", url: "https://tainome.com/" },
  summary: "Luperca is Ariel Martín Pérez’s all-caps display face, mixing Roman inscriptional proportions with calligraphic details and optical sizes for large titles.",
  description: `Luperca was conceived by Paris-based designer and art director Ariel Martín Pérez—founder of the Tainome studio and co-founder of Tunera Type Foundry. It was initially drafted in 2023 for the eleventh issue of the French publication Cercle magazine, which was dedicated to the theme of "Mythology". Published by Tunera, the face takes its name from the mythical Capitoline she-wolf that nursed Romulus and Remus. Rather than offering another dutiful, museum-grade replica of the imperial capitalis monumentalis found on the Column of Trajan, Pérez envisioned a speculative evolution of the monumental Roman capital, cross-pollinating the rigid epigraphy of antiquity with the physical ductus of calligraphy and the sharp mannerisms of modern editorial design.

Anatomically, the design is structured as an all-caps titling face defined by the ongoing friction between the chiseled incised letter and the fluid gesture of a flat pen. While it honors classical Roman proportions—contrasting expansive circular characters like O, C, and D against slender, compact forms like E, B, and S—it consistently subverts historical orthodoxy through unexpected ductal choices. Most notably, the crossbar of the E is formed through the physical rotation of a broad-nib pen, introducing an organic, swelling curve into what is traditionally a static horizontal beam. Terminals taper into acute, razor-sharp wedges that evoke inscriptional stonecutting, while internal joints pinch tightly to admit crisp light into character counters. Distributed across five dedicated optical display grades, the family varies its stroke contrast and weight distribution so that its architectural spurs and calligraphic contours retain graphic tension whether locked into compact lines or scaled across massive display formats.

Luperca’s all-caps, inscriptional character suits cultural publishing, exhibition identities, book covers, packaging, and cinematic titling. In these settings, its Roman proportions and calligraphic gestures can establish a distinct historical tone. The five optical display grades offer different expressions of that character across titling scales.`,
  fontFile: "/assets/fonts/luperca/Luperca.woff2",
  features: [
    { type: "axis", title: "Optical Size", axis: "opsz", text: "ROMAN", values: [12, 30, 42, 60, 90] },
    {
      type: "comparison", title: "Discretionary Ligatures", code: "font-feature-settings: 'dlig';",
      before: { features: { dlig: 0 } }, after: { features: { dlig: 1 } }, examples: ["AA", "CAS", "CO", "LAS", "QU", "ST"]
    },
    {
      type: "comparison", title: "Contextual Alternates", code: "font-feature-settings: 'calt';",
      before: { features: { calt: 0 } }, after: { features: { calt: 1 } }, examples: ["RA", "AR", "KAR"]
    },
    {
      type: "comparison", title: "Stylistic Sets", code: "font-feature-settings: 'ss--';",
      examples: [
        { text: "A", label: "'ss01'", before: { features: { ss01: 0 } }, after: { features: { ss01: 1 } } },
        { text: "AJN", label: "'ss02'", before: { features: { ss02: 0 } }, after: { features: { ss02: 1 } } },
        { text: "FLT", label: "'ss03'", before: { features: { ss03: 0 } }, after: { features: { ss03: 1 } } },
        { text: "Q", label: "'ss04'", before: { features: { ss04: 0 } }, after: { features: { ss04: 1 } } },
        { text: "L", label: "'ss05'", before: { features: { ss05: 0 } }, after: { features: { ss05: 1 } } },
        { text: "Y", label: "'ss06'", before: { features: { ss06: 0 } }, after: { features: { ss06: 1 } } }
      ]
    }
  ]
};

export default typeface;
