# [Beautiful Web Type](https://beautifulwebtype.com)

A curated guide to high-quality open-source typefaces. Explore each family’s history and design, available weights and styles, character and text specimens, OpenType features, and complete glyph set. The site includes responsive layouts and light and dark themes.

The original version of the site is archived here: https://beautifulwebtype.com/v1/

## Changelog

### 31 Oct 2026

* **Refreshed the design:** improved font cards, specimen layouts, mobile navigation, and light and dark themes.
* **Expanded typeface descriptions** with background, design details, and suggested uses.
* **Improved the glyph viewer** with a complete inline grid and a persistent selected-glyph preview.
* **Simplified font pages:** clearer metadata and OpenType examples; removed pairings and comparisons.

### 30 Oct 2026

* **Refreshed font files and glyph sets for 20 typefaces:** Alegreya, Archivo, BioRhyme, BioRhyme Expanded, Crimson Pro, IBM Plex Mono, IBM Plex Sans, IBM Plex Sans Condensed, IBM Plex Serif, Inria Sans, Le Murmure, Libre Franklin, Messapia, Oswald, Poppins, Rakkas, Space Mono, TASA Orbiter, Vollkorn, and Work Sans. Updated release metadata and retired unsupported examples.
* **Expanded Instrument Sans OpenType examples:** arrow ligatures (`->`, `<-`), proportional figures and symbols, uppercase ordinal inputs (`3A`, `4O`), case-sensitive punctuation, and additional accented/stylistic alternates; corrected `ss09`–`ss12` feature rules.

### 20 Mar 2026
* **Removed Jost**, as the creator now charges for the variable font.

### 06 Jun 2025
* **Added [Commissioner](https://beautifulwebtype.com/commissioner/)**.

### 05 Jun 2025
* **Added [Instrument Sans](https://beautifulwebtype.com/instrument-sans/)**.
* **Added [Instrument Serif](https://beautifulwebtype.com/instrument-serif/)**.

### 23 Oct 2023
* **Added [TASA Orbiter](https://beautifulwebtype.com/tasa-orbiter/)**.

### 8 Apr 2023
 * **Updated [Source Code Pro](https://beautifulwebtype.com/source-code-pro/)** to version 1.024.

### 22 Nov 2020
* **Added [Fraunces](https://beautifulwebtype.com/fraunces/)**.

**[Read full Changelog](./CHANGELOG.md)**

## Featured typefaces
All typefaces are licensed under the [SIL Open Font License](https://scripts.sil.org/OFL).

* [Alegreya](https://beautifulwebtype.com/alegreya/)
* [Alegreya Sans](https://beautifulwebtype.com/alegreya-sans/)
* [Archivo](https://beautifulwebtype.com/archivo/)
* [Archivo Black](https://beautifulwebtype.com/archivo-black/)
* [BioRhyme](https://beautifulwebtype.com/biorhyme/)
* [BioRhyme Expanded](https://beautifulwebtype.com/biorhyme-expanded/)
* [Commissioner](https://beautifulwebtype.com/commissioner/)
* [Cooper Hewitt](https://beautifulwebtype.com/cooper-hewitt/)
* [Crimson Pro](https://beautifulwebtype.com/crimson-pro/)
* [Fira Code](https://beautifulwebtype.com/fira-code/)
* [FiraGo](https://beautifulwebtype.com/firago/)
* [Fivo Sans](https://beautifulwebtype.com/fivo-sans/)
* [Fivo Sans Modern](https://beautifulwebtype.com/fivo-sans-modern/)
* [Fraunces](https://beautifulwebtype.com/fraunces/)
* [iA Writer Quattro](https://beautifulwebtype.com/ia-writer-quattro/)
* [IBM Plex Mono](https://beautifulwebtype.com/ibm-plex-mono/)
* [IBM Plex Sans](https://beautifulwebtype.com/ibm-plex-sans/)
* [IBM Plex Sans Condensed](https://beautifulwebtype.com/ibm-plex-sans-condensed/)
* [IBM Plex Serif](https://beautifulwebtype.com/ibm-plex-serif/)
* [Inria Sans](https://beautifulwebtype.com/inria-sans/)
* [Inria Serif](https://beautifulwebtype.com/inria-serif/)
* [Instrument Sans](https://beautifulwebtype.com/instrument-sans/)
* [Instrument Serif](https://beautifulwebtype.com/instrument-serif/)
* [Inter](https://beautifulwebtype.com/inter/)
* [Le Murmure](https://beautifulwebtype.com/le-murmure/)
* [Libre Franklin](https://beautifulwebtype.com/libre-franklin/)
* [Lora](https://beautifulwebtype.com/lora/)
* [Messapia](https://beautifulwebtype.com/messapia/)
* [Oswald](https://beautifulwebtype.com/oswald/)
* [Playfair Display](https://beautifulwebtype.com/playfair-display/)
* [Poppins](https://beautifulwebtype.com/poppins/)
* [Rakkas](https://beautifulwebtype.com/rakkas/)
* [Source Code Pro](https://beautifulwebtype.com/source-code-pro/)
* [Source Sans Pro](https://beautifulwebtype.com/source-sans-pro/)
* [Source Serif Pro](https://beautifulwebtype.com/source-serif-pro/)
* [Space Grotesk](https://beautifulwebtype.com/space-grotesk/)
* [Space Mono](https://beautifulwebtype.com/space-mono/)
* [TASA Orbiter](https://beautifulwebtype.com/tasa-orbiter/)
* [Vollkorn](https://beautifulwebtype.com/vollkorn/)
* [Work Sans](https://beautifulwebtype.com/work-sans/)
* [Zilla Slab](https://beautifulwebtype.com/zilla-slab/)

## Suggesting Typefaces

I'm happy to receive suggestions for typefaces via [a GitHub issue](https://github.com/ubuwaits/beautiful-web-type/issues). When sending suggestions please include an example or two of the typeface in use. This helps me to make an initial evaluation of the typeface.

## Local development

Install dependencies and start the Next.js dev server:

    pnpm install
    pnpm dev

Useful commands:

    pnpm build
    pnpm test

### Add a typeface

Create `content/typefaces/<slug>/` with:

- `data.ts`: metadata, description, weights, and glyph font configuration, checked with `satisfies TypefaceData`.
- `detail.html`: the trusted HTML fragment for OpenType feature examples.

Import the new data module in `content/typefaces/index.ts`. Use an existing font as a template.

The `fontFile` field selects the glyph explorer font. `glyphSource`, when present, preserves the original variable font used to generate its regular instance. Run `python3 scripts/prepare-glyph-fonts.py` after changing font assets to refresh glyph counts and regular instances (requires `fonttools` and `brotli`).

For OpenType features, use Tailwind arbitrary properties such as `[font-feature-settings:'smcp']`.

### Shared site text

`content/site/text.ts` exports the typed reusable words, headlines, and paragraphs.
