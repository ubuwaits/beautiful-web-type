import type { TypefaceData } from "@/lib/content/types";

const typeface: TypefaceData = {
  slug: "hubot-sans",
  name: "Hubot Sans",
  dateAdded: "2026-11-02",
  category: "Display",
  styles: "Variable",
  glyphCount: 736,
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
    version: "v2.000",
    date: "11 Sep 2024"
  },
  projectUrl: "https://github.com/github/hubot-sans",
  gFontsUrl: "https://fonts.google.com/specimen/Hubot+Sans",
  creator: {
    name: "GitHub & Degarism",
    url: "https://degarism.com/"
  },
  familyFaces: [
    "Mona Sans"
  ],
  description: `Hubot Sans was commissioned by GitHub alongside its sister family <em>Mona Sans</em>. Designed by the creative studio Degarism, it was released in late 2022. Conceived as the robotic, technocratic counterpart to Mona Sans’s industrial chassis, the face was engineered to lend GitHub’s developer ecosystem an overtly digital, futuristic persona. Rather than adhering to the clinical neutrality of standard screen grotesques, Hubot Sans draws inspiration from the synthetic geometry of early science-fiction cinema, 1980s arcade titling, and cathode-ray terminal graphics, translating computational nostalgia into a contemporary variable system.

Anatomically, the design pushes the super-elliptical curves of Mona Sans toward an aggressive, modular geometry. Rounded strokes are disciplined into flattened perimeters and chamfered, angular corners that suggest cut sheet metal or pixel-grid constraints. Its counters are boxy and open, admitting clean light into the glyph interiors, while terminals shear along rigid horizontal and vertical planes to reinforce an unyielding architectural posture. The family is powered by the same three-axis variable architecture as its companion, modulating seamlessly across Weight (UltraLight to Black), Width (Condensed to Expanded), and Slant. In its condensed configurations, it mimics the high-density readouts of radar displays and hardware manifests; dialed outward to its widest cuts, its squared, broad-shouldered stance turns characters like <em>O</em>, <em>C</em>, and <em>G</em> into cinematic, high-impact display forms.

This assertive geometry clearly dictates its operational territory. Hubot Sans is deliberately ill-suited to continuous narrative prose or classical literature, where its mechanical corners, low stroke contrast, and boxy gait can become distracting over long passages. Instead, it thrives in developer platforms, gaming interfaces, technical dashboards, micro-badges, and high-impact digital branding. When deployed across short bursts of language, section headers, and promotional graphics, it communicates technological precision and graphic authority with immediate clarity.`,
  fontFile: "/assets/fonts/hubot-sans/glyphs-regular.woff2",
  glyphSource: "/assets/fonts/hubot-sans/HubotSans.woff2",
  features: [
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
        "ffl"
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
          label: "'ss01' · Alternate accents",
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
          text: "l",
          label: "'ss02' · Alternate l",
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
          text: "r",
          label: "'ss03' · Alternate r",
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
          text: "I",
          label: "'ss04' · Alternate I",
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
        }
      ]
    }
  ]
};

export default typeface;
