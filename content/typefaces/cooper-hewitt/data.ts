import type { TypefaceData } from "@/lib/content/types";

const typeface: TypefaceData = {
  slug: "cooper-hewitt",
  name: "Cooper Hewitt",
  dateAdded: "2018-10-15",
  category: "Sans-Serif",
  styles: 14,
  glyphCount: 561,
  italic: true,
  weights: [
    {
      weight: 200,
      name: "Thin"
    },
    {
      weight: 300,
      name: "Light"
    },
    {
      weight: 400,
      name: "Book"
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
      weight: 900,
      name: "Heavy"
    }
  ],
  latestRelease: {
    version: "v1.0",
    date: "16 Jun 2014"
  },
  projectUrl: "https://www.cooperhewitt.org/open-source-at-cooper-hewitt/cooper-hewitt-the-typeface-by-chester-jenkins/",
  creator: {
    name: "Chester Jenkins",
    url: "https://vllg.com/constellation"
  },
  description: `Commissioned in 2014 by Pentagram for the comprehensive reinvention of the Cooper Hewitt, Smithsonian Design Museum, this contemporary sans-serif was drawn by Chester Jenkins. Invited initially to adapt his earlier design, <em>Galaxie Polaris Condensed</em>, Jenkins chose instead to discard the old outlines and draft the entire family afresh, using the existing structural logic merely as a scaffold for letter widths and stem weights. The museum made both the fonts and their design sources publicly available.

Anatomically, Cooper Hewitt occupies a thoughtful middle ground between the absolute geometry of the compass and the pragmatic demands of architectural signage. Its letterforms are shaped by modified-geometric curves—arches and shoulders that resist mechanical circularity to adopt a subtly flattened, muscular contour, lending the forms an upright, tectonic stability. Apertures remain wide and hospitable, welcoming ambient light into the interior of the glyphs, while terminals are sheared with clean horizontal and vertical decisiveness that locks characters into an orderly, legible stride. At display sizes across museum vitrines and exterior façades, it commands space with quiet, architectural self-assurance; set in running text, its generous proportions and even stroke distribution yield a clean, unhurried texture that informs without hectoring.

Across its seven weights and accompanying obliques—from the gossamer draughtsmanship of the Thin to the solid, block-like presence of the Heavy—the family maintains an unwavering institutional poise. It does not chase the calligraphic idiosyncrasies of a humanist book hand, nor does it collapse into the antiseptic anonymity that so often haunts twentieth-century corporate grotesques. Instead, it offers a distilled, contemporary clarity rooted in the American industrial vernacular yet calibrated for the digital screen.`,
  fontFile: "/assets/fonts/cooper-hewitt/CooperHewitt-Book.woff2",
  features: [
    {
      type: "comparison",
      title: "Standard Ligatures",
      code: "font-feature-settings: 'liga';",
      before: { features: { liga: 0 } },
      after: { features: { liga: 1, clig: 1 } },
      examples: ["fi", "fl"]
    },
    {
      type: "figures",
      title: "Figures",
      options: { direction: "auto" },
      examples: [
        { text: "1234567890", label: "Tabular Lining (default)", options: { features: "normal" } },
        { text: "1/2 3/4", label: "Fractions: 'frac'", options: { features: { frac: 1 } } }
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
      title: "Capital Spacing",
      code: "font-feature-settings: 'cpsp';",
      before: { features: { cpsp: 0 }, size: "compact" },
      after: { features: { cpsp: 1 }, size: "compact" },
      examples: ["HAMBURG"]
    }
  ],
};

export default typeface;
