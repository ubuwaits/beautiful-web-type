import type { TypefaceData } from "@/lib/content/types";

export default {
  slug: "archivo",
  name: "Archivo",
  dateAdded: "2018-10-15",
  category: "Sans-Serif",
  styles: 8,
  glyphCount: 834,
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
    version: "v2.001",
    date: "1 Feb 2021"
  },
  projectUrl: "https://github.com/Omnibus-Type/Archivo",
  gFontsUrl: "https://fonts.google.com/specimen/Archivo",
  creator: {
    name: "Omnibus-Type",
    url: "https://www.omnibus-type.com"
  },
  description: `Archivo speaks with the candid, muscular voice of the late nineteenth-century commercial vernacular. Conceived by Héctor Gatti and shaped alongside the Omnibus-Type collective in Buenos Aires, the typeface looks not to the cool, antiseptic neutrality of mid-century Swiss modernism, but back to the hearty American gothics that once anchored broadsides, trade catalogs, and the front pages of the industrial press. Originally cast to command attention across headlines and technical captions, it has since grown into a formidable typographic system—recognized at the Tipos Latinos biennial and matured into an expansive variable continuum bridging gossamer weights with monolithic display forms.

Its anatomy is defined by compact discipline and a robust horizontal drive. Gatti preserves the blunt, physical candor of the historic grotesque: horizontal strokes shear off cleanly, the curves carry subtle optical adjustments rather than rigid geometry, and the apertures close down into a determined, slightly rectangular silhouette. Yet Archivo avoids the claustrophobia that often handicaps display types at smaller scales. At reading sizes, its generous x-height, hospitable interior counters, and steady baseline rhythm assemble into a legible, even-textured grey that carries dense text without dissolving into static or fatigue.

Across its breadth—from the dense, block-like force of Archivo Black to the tightly packed columns of its Narrow and Condensed cuts—the design maintains an unpretentious, workmanlike integrity. It does not whisper like the Renaissance humanist book face, nor does it pursue the austere geometric idealism of the twentieth-century avant-garde; it simply declares, categorizes, and organizes with steady authority. As an open-source instrument, Archivo demonstrates that the enduring utility of late-Victorian commercial print can find a supple, high-performance home within the digital commons.`,
  familyFaces: [
    "Archivo Black"
  ],
  fontFile: "/assets/fonts/archivo/Archivo-Regular.woff2"
} satisfies TypefaceData;
