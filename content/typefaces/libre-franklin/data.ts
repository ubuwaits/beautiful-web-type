import type { TypefaceData } from "@/lib/content/types";

const typeface: TypefaceData = {
  slug: "libre-franklin",
  name: "Libre Franklin",
  dateAdded: "2018-10-15",
  category: "Sans-Serif",
  styles: 18,
  glyphCount: 1007,
  italic: true,
  weights: [
    {
      weight: 100,
      name: "Thin"
    },
    {
      weight: 200,
      name: "Extra-Light"
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
      name: "Semi-Bold"
    },
    {
      weight: 700,
      name: "Bold"
    },
    {
      weight: 800,
      name: "Extra-Bold"
    },
    {
      weight: 900,
      name: "Black"
    }
  ],
  websiteHero: {
    wordmark: { weight: 600, size: 24, lineHeight: "28px", letterSpacing: "-0.025em" },
    headline: { weight: 500, size: "clamp(2.25rem, 6.3cqw, 5.875rem)", lineHeight: 1.02, letterSpacing: "-0.045em" },
    description: { weight: 400, size: 16, desktopSize: 18, lineHeight: "28px" },
    action: { weight: 400, size: 14, lineHeight: "24px" },
    caseLocation: { weight: 400, size: 12, lineHeight: "20px", letterSpacing: "0.025em", textTransform: "uppercase" },
    caseTitle: { weight: 600, size: 24, lineHeight: 1.15, letterSpacing: "-0.025em" },
    caseBody: { weight: 400, size: 14, lineHeight: "24px" },
    tableLabel: { weight: 400, size: 14, lineHeight: "20px" },
    tableValue: { weight: 500, size: 14, lineHeight: "20px", features: { lnum: 1, tnum: 1 } },
  },
  latestRelease: {
    version: "v3.000",
    date: "27 Aug 2025"
  },
  projectUrl: "https://github.com/impallari/Libre-Franklin",
  gFontsUrl: "https://fonts.google.com/specimen/Libre+Franklin",
  creator: {
    name: "Impallari Type",
    url: "https://github.com/impallari"
  },
  summary: "Libre Franklin expands Morris Fuller Benton’s American gothic into a broad family, with nine weights and a sturdy rhythm for interfaces and editorial text.",
  description: `Libre Franklin resurrects the frank, broad-shouldered voice of the American industrial press, adapting Morris Fuller Benton’s designs for contemporary use. Conceived and directed by Pablo Impallari of the Argentine foundry Impallari Type—with contributions from Rodrigo Fuenzalida and Nhung Nguyen—the family represents a comprehensive expansion of Benton’s 1902–1912 <em>Franklin Gothic</em> for the American Type Founders. Named in reverence to Benjamin Franklin, printer and founding statesman, the original was never intended to whisper with philosophical detachment; it was forged to shout from broadsheet headlines, mercantile trade cards, and railway timetables. Libre Franklin honors this candid ancestry, refusing the cool, antiseptic geometry of mid-century Swiss modernism in favor of an earthy, physical candor rooted in ink, metal, and honest labor.

Where the historical foundry metal was cast predominantly in authoritative, heavyweight display cuts, Libre Franklin undertakes the meticulous optical task of distributing Benton’s DNA across a nine-weight spectrum, descending from a dense, thunderous Black to an ethereal, draughtsman-like Thin. Its anatomy retains the vital quirks of the classical nineteenth-century American gothic: the double-storey <em>a</em> and loop-and-tail <em>g</em> lend running prose a recognizable, bookish cadence, while subtle modulations in stroke weight keep junctions from clogging into unsightly ink-traps. The apertures remain hospitable and open, allowing white space to circulate freely through the interior counters. Along the measure, the typeface settles into a sturdy, resolute stride—neither brisk nor nervous—casting an even, warm-grey color that anchors the eye without imposing decorative distractions.

Typographically, Libre Franklin’s character set extends beyond the Latin alphabet, incorporating a resonant Cyrillic script designed by Alexei Vanyashin alongside a full complement of tabular and proportional figures. The United States Web Design System used it as the basis for <em>Public Sans</em>, adapting its outlines for federal websites and services.`,
  fontFile: "/assets/fonts/libre-franklin/LibreFranklin-Regular.woff2",
  features: [
    {
      type: "comparison",
      title: "Standard Ligatures",
      code: "font-feature-settings: 'liga';",
      before: { features: { liga: 0 } },
      after: { features: { liga: 1, clig: 1 } },
      examples: ["ff", "fi", "fl", "ffi", "ffl"]
    },
    {
      type: "figures",
      title: "Figures",
      options: { direction: "auto" },
      examples: [
        { text: "1234567890", label: "Proportional Lining (default)", options: { features: "normal" } },
        { text: "1/2 3/4", label: "Fractions: 'frac'", options: { features: { frac: 1 } } },
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
      examples: ["3a", "4o", "No."]
    }
  ],
};

export default typeface;
