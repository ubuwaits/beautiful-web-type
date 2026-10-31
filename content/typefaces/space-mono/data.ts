import type { TypefaceData } from "@/lib/content/types";

export default {
  slug: "space-mono",
  name: "Space Mono",
  dateAdded: "2019-01-08",
  category: "Monospaced",
  styles: 4,
  glyphCount: 765,
  italic: true,
  weights: [
    {
      weight: 400,
      name: "Regular"
    },
    {
      weight: 700,
      name: "Bold"
    }
  ],
  latestRelease: {
    version: "v1.003",
    date: "22 Jan 2025"
  },
  projectUrl: "https://github.com/googlefonts/spacemono",
  gFontsUrl: "https://fonts.google.com/specimen/Space+Mono",
  creator: {
    name: "Colophon Foundry",
    url: "https://www.colophon-foundry.org"
  },
  description: `Space Mono was conceived in 2016 by the London and Los Angeles-based studio Colophon Foundry, commissioned by Google Fonts to explore the graphic territory between mid-century mechanical typesetting and late-twentieth-century technological optimism. While many contemporary monospace faces are designed strictly to disappear behind the syntax of programming languages, Space Mono looks backward to the phototypesetting era of the 1960s and 1970s—recalling the cold-war aesthetic of mission control terminals, early computer manuals, and pulp science-fiction cover designs. Released under the SIL Open Font License, it approaches the monospaced constraint not as a purely utilitarian obstacle, but as a deliberate stylistic framework.

The anatomy of the letterform balances geometric rigidity against idiosyncratic, retro-futuristic details. Set within an unyielding fixed-pitch compartment, its characters eschew the soft, organic compromises of humanist type in favor of blunt, flat-sided contours and mechanical transitions. The apertures are wide and candid, while the terminals on glyphs like <em>c</em>, <em>e</em>, and <em>s</em> end in clean, horizontal sheared strokes. Colophon introduced distinct eccentricities across the character set: an unconventional lowercase <em>g</em> with a prominent open ear, a wide-stanced <em>m</em> and <em>w</em> engineered to avoid clumping, and an angular, utilitarian ampersand. These features catch ambient light across the line, producing a staccato cadence that refuses to blend into an invisible grey wash.

Available in two weights—Regular and Bold—each accompanied by a matching italic, the family’s cursive cuts are particularly distinctive. Rather than relying on a passive mechanical slant, the italic styles introduce dynamic, angled terminals and cursive entries that evoke early typewriter ball heads and specialized technical plotters. Because of its deliberate graphic friction and pronounced personality, Space Mono is ill-suited for dense, long-form literary text, nor does it offer the neutral ergonomic clarity required for prolonged code editing. Instead, it operates most effectively in display settings, editorial section headers, identity systems, and poster design, where its nostalgic references to early aerospace and industrial computation can lend structure and visual bite to isolated lines of text.`,
  familyFaces: [
    "Space Grotesk"
  ],
  fontFile: "/assets/fonts/space-mono/spacemono-regular.woff2"
} satisfies TypefaceData;
