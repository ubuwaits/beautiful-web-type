import type { TypefaceData } from "@/lib/content/types";
import features from "./features";

export default {
  features,
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
  description: `Libre Franklin resurrects the frank, broad-shouldered voice of the American industrial press, transporting the monumental legacy of Morris Fuller Benton into the fluid architecture of the digital commons. Conceived and directed by Pablo Impallari of the Argentine foundry Impallari Type—with contributions from Rodrigo Fuenzalida and Nhung Nguyen—the family represents a comprehensive expansion of Benton’s 1902–1912 <em>Franklin Gothic</em> for the American Type Founders. Named in reverence to Benjamin Franklin, printer and founding statesman, the original was never intended to whisper with philosophical detachment; it was forged to shout from broadsheet headlines, mercantile trade cards, and railway timetables. Libre Franklin honors this candid ancestry, refusing the cool, antiseptic geometry of mid-century Swiss modernism in favor of an earthy, physical candor rooted in ink, metal, and honest labor.

Where the historical foundry metal was cast predominantly in authoritative, heavyweight display cuts, Libre Franklin undertakes the meticulous optical task of distributing Benton’s DNA across a nine-weight spectrum, descending from a dense, thunderous Black to an ethereal, draughtsman-like Thin. Its anatomy retains the vital quirks of the classical nineteenth-century American gothic: the double-storey <em>a</em> and loop-and-tail <em>g</em> lend running prose a recognizable, bookish cadence, while subtle modulations in stroke weight keep junctions from clogging into unsightly ink-traps. The apertures remain hospitable and open, allowing white space to circulate freely through the interior counters. Along the measure, the typeface settles into a sturdy, resolute stride—neither brisk nor nervous—casting an even, warm-grey color that anchors the eye without imposing decorative distractions.

Typographically, Libre Franklin’s democratic virtues extend far beyond the Latin alphabet, incorporating a resonant Cyrillic script designed by Alexei Vanyashin alongside a full complement of tabular and proportional figures. It has proved so structurally sound and civic-minded that the United States Web Design System chose its outlines as the foundational bedrock for <em>Public Sans</em>, the digital face of American federal governance. Released freely under the SIL Open Font License, Libre Franklin stands as an indispensable civic utility—a design proving that the unvarnished vernacular of the early-twentieth-century composing room can find a purposeful, dignified home across the infinite margins of the modern screen.`,
  fontFile: "/assets/fonts/libre-franklin/LibreFranklin-Regular.woff2"
} satisfies TypefaceData;
