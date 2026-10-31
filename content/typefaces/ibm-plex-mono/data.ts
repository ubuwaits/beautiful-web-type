import type { TypefaceData } from "@/lib/content/types";
import features from "./features";

export default {
  features,
  slug: "ibm-plex-mono",
  name: "IBM Plex Mono",
  dateAdded: "2018-11-02",
  category: "Monospaced",
  styles: 16,
  glyphCount: 1207,
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
    version: "v2.5.0",
    date: "11 Jun 2026"
  },
  projectUrl: "https://github.com/IBM/plex",
  gFontsUrl: "https://fonts.google.com/specimen/IBM+Plex+Mono",
  creator: {
    name: "Mike Abbink & Bold Monday",
    url: "https://boldmonday.com"
  },
  description: `IBM Plex Mono draws its lineage directly from the mechanical heartbeat of twentieth-century computing, recalling an era when IBM’s Selectric typewriters and terminal mainframes shaped the tactile landscape of written communication. Commissioned as the monospaced component of the comprehensive Plex suite, the face was directed by Mike Abbink alongside the Dutch foundry Bold Monday (led by Paul van der Laan and Pieter van Rosmalen). Bestowed upon the public under the SIL Open Font License, it was conceived not merely as a routine terminal font, but as a deliberate homage to IBM’s mid-century design heritage—bridging the austere demands of electrical engineering with the clean rationality of industrial modernism.

The anatomy of the letterform is governed by the unrelenting constraint of the fixed-pitch grid, where narrow letters like <em>i</em> and broad characters like <em>m</em> must occupy identical horizontal compartments. Rather than letting these spatial compromises distort the reading cadence, Abbink and Bold Monday leaned into the architectural vocabulary of the broader Plex system. Inner joints feature the family’s signature 45-degree chamfers—crisp, angled cuts that suggest both the physical geometry of punched tape and the deliberate precision of cut metal. Counters are carved out generously to invite light into the characters, staving off optical congestion at small point sizes on low-density displays. Character disambiguation is handled with rigorous care: the zero is clearly punctuated with an interior dot, the capital <em>I</em> sports stabilizing crossbars, and the lowercase <em>l</em> terminates in an upward curve, keeping alphanumeric code legible under rapid scanning.

A notable feature of the family is its italic. Where many monospaced faces settle for a mechanical slant, Bold Monday drafted a true cursive hand. It leans forward with an authentic calligraphic ductus—visible in the single-storey <em>a</em>, the curved stem of the <em>f</em>, and fluid terminal exits—providing genuine structural contrast against the upright roman while remaining strictly locked to the monospaced pitch. Spanning eight deliberate weights from Thin to Bold, and later adapted into an agile variable format, Plex Mono carries broad linguistic support across extended Latin and Cyrillic, complemented by specialized mathematical and technical symbols.

Plex Mono finds its natural home in environments where spatial predictability and rapid scanning are paramount: software terminals, code editors, financial ledgers, and technical manuals. While its rigid cadence makes it unsuitable for sustained literary prose, it excels in editorial and branding roles as an articulate accent—lending structure to captions, footnotes, and tabular data. Within the open catalog, it serves as a steady, dependable instrument, proving that the utilitarian constraints of the machine can produce an alphabet of clarity, discipline, and quiet character.`,
  familyFaces: [
    "IBM Plex Sans",
    "IBM Plex Sans Condensed",
    "IBM Plex Serif"
  ],
  fontFile: "/assets/fonts/ibm-plex-mono/IBMPlexMono-Regular.woff2"
} satisfies TypefaceData;
