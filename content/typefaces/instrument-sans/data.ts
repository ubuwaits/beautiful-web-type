import type { TypefaceData } from "@/lib/content/types";

export default {
  slug: "instrument-sans",
  name: "Instrument Sans",
  dateAdded: "2025-06-05",
  category: "Sans-Serif",
  styles: "Variable",
  glyphCount: 501,
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
      weight: 600,
      name: "Semi-Bold"
    },
    {
      weight: 700,
      name: "Bold"
    }
  ],
  latestRelease: {
    version: "v1.000",
    date: "20 Mar 2023"
  },
  projectUrl: "https://github.com/Instrument/instrument-sans",
  gFontsUrl: "https://fonts.google.com/specimen/Instrument+Sans",
  creator: {
    name: "Rodrigo Fuenzalida",
    url: "https://www.instagram.com/erre.efe"
  },
  description: `Conceived for the design agency Instrument by Chilean type designer Rodrigo Fuenzalida under the creative direction of Jordan Egstad, Instrument Sans addresses a familiar contemporary exhaustion: the creeping monotony of the antiseptic neo-grotesque. Where the twentieth-century corporate canon—descended from the cool, calculated geometry of Zurich and Basel—frequently threatened to reduce the alphabet to an interchangeable, sterile neutral, Instrument Sans seeks an elusive equilibrium between clinical digital precision and approachable warmth. Released freely into the open commons under the SIL Open Font License, the family does not present itself as an imperious corporate uniform, but rather as an adaptable, public-spirited instrument calibrated for modern interfaces and editorial spaces alike.

Underneath its disciplined grotesque exterior beats an agile, subtly playful heart. The letterforms are drafted with generous, hospitable proportions and wide apertures that welcome ambient light into the line, preventing the dense, claustrophobic pooling of pixels that so often handicaps utilitarian screen types. Terminals are cut with deliberate, razor-sharp certainty, yet the curves evade dogmatic geometry; they swell and resolve with an organic elasticity that catches the eye without disrupting the reading cadence. Along the running measure, Instrument Sans produces a porous, even-textured grey—orderly and confident enough to govern dense software hierarchies and technical captions, yet endowed with sufficient internal grace to support continuous prose without fatiguing the reader.

Where the family truly distinguishes itself within the open commons is in its structural elasticity and typographic civility. Conceived as a modern variable continuum spanning axes of weight, width, and slant, the design transitions seamlessly from the space-saving discipline of its condensed proportions to the expansive authority of its wide cuts. Crucially, it is enriched by an extensive apparatus of OpenType features—including twelve distinct stylistic sets that allow the typographer to exchange strict grotesque standards for single-story constructions, rounded descenders, and idiosyncratic majuscules. Through these thoughtful permutations, Instrument Sans refuses ideological rigidity, enduring as a refined, self-aware creature of the digital age: an alphabet that honors the rational virtues of industrial design while leaving ample room for human gesture.`,
  familyFaces: [
    "Instrument Serif"
  ],
  fontFile: "/assets/fonts/instrument-sans/InstrumentSans.woff2"
} satisfies TypefaceData;
