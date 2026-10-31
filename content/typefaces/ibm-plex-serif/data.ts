import type { TypefaceData } from "@/lib/content/types";
import features from "./features";

export default {
  features,
  slug: "ibm-plex-serif",
  name: "IBM Plex Serif",
  dateAdded: "2018-10-30",
  category: "Serif",
  styles: 16,
  glyphCount: 1054,
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
      weight: 450,
      name: "Text"
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
    }
  ],
  latestRelease: {
    version: "v2.0.0",
    date: "2 Feb 2026"
  },
  projectUrl: "https://github.com/IBM/plex",
  gFontsUrl: "https://fonts.google.com/specimen/IBM+Plex+Serif",
  creator: {
    name: "Mike Abbink & Bold Monday",
    url: "https://boldmonday.com"
  },
  description: `IBM Plex Serif was born to complete a philosophical equation: to prove that the engineered spirit of the machine could honor the ancient, literary lineage of the serif without retreating into antiquarian nostalgia. Conceived under the creative direction of Mike Abbink alongside the Dutch foundry Bold Monday, the face was designed not merely to accompany its unserifed sibling, but to provide IBM with an authentic voice for long-form editorial scholarship, technical white papers, and historical reflection. In drafting its outlines, the designers turned their gaze toward the transitional and Scotch Roman types of the nineteenth century—and, closer to home, the proud mechanical ancestry of the IBM Selectric typewriter elements that once set the typographic tone of corporate America. Released freely under the SIL Open Font License, it transforms what could have been an insular corporate asset into a generous civic utility for the digital commons.

The anatomy of the face is shaped by a deliberate tension between geometric precision and organic gesture. Unlike traditional book serifs that conceal their construction beneath seamless, calligraphic bracketing, Plex Serif celebrates its seams. Serifs are drawn with flat, architectural footings and crisp triangular brackets, while inner corners reveal the family’s signature chamfers—subtle 45-degree cuts that evoke the disciplined punch of a steel type-slug and the polygonal grid of digital coordinates. Yet Abbink and Bold Monday prevented the design from turning into a brutalist exercise: the drop terminals on the <em>a</em>, <em>c</em>, and <em>r</em> are round and generous, apertures remain open to invite light into the line, and the stroke modulation provides a warm, rhythmic cadence. Along the running measure, it casts a crisp, authoritative grey that holds its structure with unwavering discipline against both high-resolution offset printing and the back-lit glare of mobile screens.

Typographically, the family refuses to treat the serif as a decorative flourish pasted onto an unserifed skeleton; it is a fully realized, scholarly workhorse. Its true cursive italic departs boldly from the upright roman, tilting forward with a dynamic, calligraphic ductus and fluid exits that lend genuine vocal counterpoint to citations and internal dialogue. Equipped with eight carefully graded weights, true small capitals, fractions, and lining, oldstyle, and tabular figures, Plex Serif possesses the complete, courteous apparatus required of modern publishing. It stands within the open commons as a triumph of industrial humanism: an alphabet that acknowledges the punch card, the mainframe, and the typewriter ball, while steadfastly serving the quiet, timeless act of reading.`,
  familyFaces: [
    "IBM Plex Mono",
    "IBM Plex Sans",
    "IBM Plex Sans Condensed"
  ],
  fontFile: "/assets/fonts/ibm-plex-serif/IBMPlexSerif-Regular.woff2"
} satisfies TypefaceData;
