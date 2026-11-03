import type { TypefaceData } from "@/lib/content/types";

const typeface: TypefaceData = {
  slug: "mona-sans",
  name: "Mona Sans",
  dateAdded: "2026-11-02",
  category: "Sans-Serif",
  styles: "Variable",
  glyphCount: 797,
  italic: true,
  weights: [
    {
      weight: 200,
      name: "Extra Light"
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
      name: "Semi Bold"
    },
    {
      weight: 700,
      name: "Bold"
    },
    {
      weight: 800,
      name: "Extra Bold"
    },
    {
      weight: 900,
      name: "Black"
    }
  ],
  latestRelease: {
    version: "v2.027",
    date: "19 May 2026"
  },
  projectUrl: "https://github.com/github/mona-sans",
  gFontsUrl: "https://fonts.google.com/specimen/Mona+Sans",
  creator: {
    name: "GitHub & Degarism",
    url: "https://degarism.com/"
  },
  familyFaces: [
    "Hubot Sans"
  ],
  description: `Mona Sans was commissioned by GitHub and drafted by the creative studio Degarism in close collaboration with GitHub’s brand team. It launched in late 2022 alongside its robotic, technocratic companion <em>Hubot Sans</em>. Developed to anchor the visual identity of the global software platform, the face deliberately departs from the sterile, interchangeable neo-grotesques that have long dominated Silicon Valley tech branding. Instead, it looks backward to the industrial display types of the mid-twentieth century—recalling the muscular, flat-sided American gothics and European commercial grotesques—and translates their mechanical presence into a forward-looking, open-source variable instrument.

Anatomically, the design builds upon a sturdy, subtly squarish skeleton, where rounded strokes flatten along their vertical perimeters into distinct super-elliptical curves. It features an ample x-height, sturdy stems, and crisp terminals sheared cleanly along horizontal and vertical axes, giving words a compact, architectural silhouette. The design’s structural flexibility is driven by a fluid, multidimensional variable engine that operates across three simultaneous axes: Weight (from UltraLight to Black), Width (spanning Condensed to Expanded), and Slant. In its narrow registers, the letterforms compress into tight, efficient columns that conserve horizontal space; when dialed outward toward the Expanded grades, the counters open broadly, turning characters like <em>O</em>, <em>C</em>, and <em>G</em> into authoritative, cinematic display forms that carry heavy headline mass without losing their crisp internal definition.

This parametric elasticity firmly defines its operational domain. Mona Sans’s low stroke modulation and industrial geometry give it a different texture from the serifs traditionally used for literary publishing. It thrives instead in modern digital interfaces, developer tooling, marketing landing pages, technical documentation, and dynamic screen collateral. Its ability to pivot instantaneously from compact, utilitarian UI labels to wide, impactful branding mastheads makes it a flexible option for screen-first design systems.`,
  fontFile: "/assets/fonts/mona-sans/glyphs-regular.woff2",
  glyphSource: "/assets/fonts/mona-sans/MonaSans.woff2",
  features: [
    {
      type: "axis",
      title: "Optical Size",
      axis: "opsz",
      text: "Optical",
      values: [
        0,
        50,
        100
      ]
    },
    {
      type: "axis",
      title: "Width",
      axis: "wdth",
      text: "Flexible",
      values: [
        75,
        100,
        125
      ]
    },
    {
      type: "comparison",
      title: "Standard Ligatures",
      code: "font-feature-settings: 'liga';",
      before: {
        features: {
          liga: 0
        }
      },
      after: {
        features: {
          liga: 1
        }
      },
      examples: [
        "ff",
        "fi",
        "fl",
        "ffi",
        "fy",
        "ti",
        "tt"
      ]
    },
    {
      type: "figures",
      title: "Figures",
      examples: [
        {
          text: "1234567890",
          label: "Proportional Lining (default)",
          options: {
            features: "normal"
          }
        },
        {
          text: "1234567890",
          label: "Tabular Lining: 'tnum'",
          options: {
            features: {
              tnum: 1
            }
          }
        },
        {
          text: "1/2 3/4",
          label: "Fractions: 'frac'",
          options: {
            features: {
              frac: 1
            }
          }
        },
        {
          text: "123",
          reference: "H",
          label: "Numerators: 'numr'",
          options: {
            features: {
              numr: 1
            }
          }
        },
        {
          text: "123",
          reference: "H",
          label: "Denominators: 'dnom'",
          options: {
            features: {
              dnom: 1
            }
          }
        },
        {
          text: "123",
          reference: "H",
          label: "Subscripts: 'subs'",
          options: {
            features: {
              subs: 1
            }
          }
        },
        {
          text: "123",
          reference: "H",
          label: "Scientific Inferiors: 'sinf'",
          options: {
            features: {
              sinf: 1
            }
          }
        },
        {
          text: "123",
          reference: "H",
          label: "Superscripts: 'sups'",
          options: {
            features: {
              sups: 1
            }
          }
        }
      ]
    },
    {
      type: "comparison",
      title: "Ordinals",
      code: "font-feature-settings: 'ordn';",
      before: {
        features: {
          ordn: 0
        }
      },
      after: {
        features: {
          ordn: 1
        }
      },
      examples: [
        "1st",
        "3a"
      ]
    },
    {
      type: "comparison",
      title: "Case Sensitive Forms",
      code: "font-feature-settings: 'case';",
      before: {
        features: {
          case: 0
        }
      },
      after: {
        features: {
          case: 1
        }
      },
      examples: [
        "¿¡",
        "H–H"
      ]
    },
    {
      type: "comparison",
      title: "Stylistic Sets",
      code: "font-feature-settings: 'ss--';",
      examples: [
        {
          text: "Äé",
          label: "'ss01' · Square accents",
          before: {
            features: {
              ss01: 0
            }
          },
          after: {
            features: {
              ss01: 1
            }
          }
        },
        {
          text: "I",
          label: "'ss02' · Wide uppercase I",
          before: {
            features: {
              ss02: 0
            }
          },
          after: {
            features: {
              ss02: 1
            }
          }
        },
        {
          text: "l",
          label: "'ss03' · Lowercase l with tail",
          before: {
            features: {
              ss03: 0
            }
          },
          after: {
            features: {
              ss03: 1
            }
          }
        },
        {
          text: "l",
          label: "'ss04' · Lowercase l with top serif",
          before: {
            features: {
              ss04: 0
            }
          },
          after: {
            features: {
              ss04: 1
            }
          }
        },
        {
          text: "a",
          label: "'ss05' · Double-storey a",
          before: {
            features: {
              ss05: 0
            }
          },
          after: {
            features: {
              ss05: 1
            }
          }
        },
        {
          text: "g",
          label: "'ss06' · Double-storey g",
          before: {
            features: {
              ss06: 0
            }
          },
          after: {
            features: {
              ss06: 1
            }
          }
        },
        {
          text: "G",
          label: "'ss07' · Square G",
          before: {
            features: {
              ss07: 0
            }
          },
          after: {
            features: {
              ss07: 1
            }
          }
        },
        {
          text: "0",
          label: "'ss08' · Tabular zero",
          before: {
            features: {
              ss08: 0,
              tnum: 1
            }
          },
          after: {
            features: {
              ss08: 1,
              tnum: 1
            }
          }
        },
        {
          text: "Q",
          label: "'ss09' · Alternate Q",
          before: {
            features: {
              ss09: 0
            }
          },
          after: {
            features: {
              ss09: 1
            }
          }
        },
        {
          text: "J",
          label: "'ss10' · Alternate J",
          before: {
            features: {
              ss10: 0
            }
          },
          after: {
            features: {
              ss10: 1
            }
          }
        }
      ]
    }
  ]
};

export default typeface;
