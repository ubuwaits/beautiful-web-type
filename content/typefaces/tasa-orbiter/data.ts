import type { TypefaceData } from "@/lib/content/types";

const typeface: TypefaceData = {
  slug: "tasa-orbiter",
  name: "TASA Orbiter",
  dateAdded: "2023-10-22",
  category: "Sans-Serif",
  styles: "Variable",
  glyphCount: 698,
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
      weight: 600,
      name: "SemiBold"
    },
    {
      weight: 700,
      name: "Bold"
    },
    {
      weight: 800,
      name: "Extra-Bold"
    }
  ],
  latestRelease: {
    version: "v2.012",
    date: "16 Oct 2025"
  },
  projectUrl: "https://github.com/localremotetw/TASA-Typeface-Collection",
  creator: {
    name: "Local Remote",
    url: "https://localremote.co"
  },
  description: `TASA Orbiter was drawn to articulate the quiet, resolute ambition of a modern nation casting its gaze upward into the celestial dark. Commissioned as the central typographic voice for the comprehensive rebranding of the Taiwan Space Agency (TASA) and shepherded into form by the design studio Five Metal Shop, the typeface enters the storied lineage of state-sponsored space-age lettering. Yet unlike the buoyant, occasionally eccentric aerodynamic whimsy of the mid-twentieth-century space race, Orbiter approaches the cosmos through the lens of contemporary discipline and quiet technological sovereignty. In a gesture singularly aligned with the egalitarian ethos of modern science, the agency released the family freely into the open commons under the SIL Open Font License, transforming an emblem of aerospace governance into an unrestricted instrument of civic communication.

Anatomically, the design is governed by the calm geometries of orbital mechanics and the unyielding precision of telemetry instrumentation. Orbiter occupies a poised space between the rational structure of the industrial neo-grotesque and the aerodynamic grace of modern industrial design. Its curves sweep through subtle, elliptical paths—evoking planetary trajectories and parabolic curves rather than the unyielding circularity of the compass—while its terminals are cut with sharp, orthogonal certainty. Apertures remain wide and hospitable, inviting ambient light deep into the counters to ensure that glyphs do not choke into illegible clots when rendered at micro-scales on dense mission interfaces or against the luminous glare of digital monitors. The strokes exhibit a lean, tensile strength, shedding decorative surplus to survive the unforgiving economy of the screen.

While conceived to operate alongside its display-oriented counterpart, <em>TASA Explorer</em>, Orbiter serves as the foundational workhorse of the dual system. Across its range of weights—from an airy, draughtsman-like lightness to an assertive, tectonic bold—it casts an exceptionally even, luminous grey along the line, shepherding technical specifications, coordinates, and continuous prose with unblinking composure. It avoids the clinical, dystopian chill that so frequently disfigures technocratic typography; beneath its Cartesian exterior beats an authentic, forward-looking optimism. In the open commons, TASA Orbiter stands as an eloquent testament to the civic imagination, demonstrating that an alphabet forged for the cold silence of space can navigate the intimate landscape of human reading with warmth, clarity, and grace.`,
  fontFile: "/assets/fonts/tasa-orbiter/TASAOrbiter[wght].woff2",
  features: [
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
      examples: ["3a", "4o"]
    },
    {
      type: "comparison",
      title: "Stylistic Sets",
      code: "font-feature-settings: 'ss--';",
      before: { features: { ss01: 0 } },
      after: { features: { ss01: 1 } },
      examples: [{ text: "il0I", label: "'ss01'" }]
    },
    {
      type: "comparison",
      title: "Case Sensitive Forms",
      code: "font-feature-settings: 'case';",
      before: { features: { case: 0 } },
      after: { features: { case: 1 } },
      examples: ["@()[", "]{}", "(A)"]
    }
  ],
};

export default typeface;
