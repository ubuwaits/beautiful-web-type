import type { TypefaceData } from "@/lib/content/types";

const typeface: TypefaceData = {
  slug: "instrument-serif",
  name: "Instrument Serif",
  dateAdded: "2025-06-05",
  category: "Serif",
  styles: 1,
  glyphCount: 377,
  italic: true,
  weights: [
    {
      weight: 400,
      name: "Regular"
    }
  ],
  latestRelease: {
    version: "v1.000",
    date: "20 Mar 2023"
  },
  projectUrl: "https://github.com/Instrument/instrument-serif",
  gFontsUrl: "https://fonts.google.com/specimen/Instrument+Serif",
  creator: {
    name: "Rodrigo Fuenzalida",
    url: "https://www.instagram.com/erre.efe"
  },
  description: `Instrument Serif was conceived not to murmur in the quiet margins of continuous prose, but to command the visual field from the summit of the page. Shaped by Chilean type designer Rodrigo Fuenzalida under the creative direction of Jordan Egstad for the design agency Instrument, the face was drafted as the theatrical display counterpoint to its unserifed sibling, <em>Instrument Sans</em>. Where modern screen typography has often surrendered to an unbroken sea of low-contrast, monolinear grotesques, Instrument Serif recovers the lithe, condensed grace that electrified late-twentieth-century editorial headlines and advertising—summoning fond echoes of Apple’s customized Garamonds and the sharp, high-fashion mastheads of the glossy print era. Bestowed upon the open commons under the SIL Open Font License, it brings an unapologetic sense of occasion and graphic drama to digital space.

The anatomy of the face is governed by the exhilarating tension between slender horizontal compression and acute stroke contrast. Rather than subjecting a classical book face to mechanical distortion, Fuenzalida sculpted the forms from the inside out, crafting characters that relish their narrow measure. Stems rise like slender architectural columns, finely bracketed serifs taper into razor-sharp terminations, and drop terminals blossom with sudden, chirographic wit. The counters are tall and vaulted, allowing glyphs to lock together into tightly kerned, musical assemblies where deep downstrokes and delicate hairline incisions balance on a knife's edge. Along the display line, Instrument Serif casts an aristocratic, syncopated rhythm—taut, luminous, and brimming with graphic poise.

In its cursive italic, the design casts off all remaining reserve. Raking forward with a steep, kinetic incline, the italic sings with the rapid, dancing flourish of a pointed pen, providing an exuberant foil to the upright architecture of the roman. Though its gossamer hairlines and compact geometry rightfully recuse it from the quiet marathon of running body text, Instrument Serif understands its station with unflinching clarity: it exists to herald, to punctuate, and to enchant. Within an open commons populated largely by utilitarian workhorses, it endures as a rare, essential luxury—an alphabet proving that the lyric drama of the broadsheet and the private press can thrive within the modern digital landscape.`,
  familyFaces: [
    "Instrument Sans"
  ],
  fontFile: "/assets/fonts/instrument-serif/InstrumentSerif-Regular.woff2",
  features: [
    {
      type: "comparison",
      title: "Standard Ligatures",
      code: "font-feature-settings: 'liga';",
      before: { features: { liga: 0 } },
      after: { features: { liga: 1, clig: 1 } },
      examples: ["ffi", "ffl", "fi", "fl"]
    },
    {
      type: "comparison",
      title: "Discretionary Ligatures",
      code: "font-feature-settings: 'dlig';",
      before: { features: { dlig: 0 } },
      after: { features: { dlig: 1 } },
      examples: ["fb", "fh", "qj"]
    },
    {
      type: "figures",
      title: "Figures",
      options: { direction: "auto", features: "normal" },
      examples: [{ text: "1234567890", label: "Proportional Lining (default)" }]
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
      examples: [{ text: "agcd", label: "'ss01'" }]
    }
  ],
};

export default typeface;
