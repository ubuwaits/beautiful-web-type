# Content Authoring

The site's authored content now lives in `content/`.

## Add a typeface

Create `content/typefaces/<slug>/` with:

- `meta.yml`
- `detail.html`
- `sample.html`
- `glyphs.yml`

`meta.yml` holds the typeface metadata used by the app, including `name`, `dateAdded`, `category`, `styles`, `weights`, `latestRelease`, `projectUrl`, `creator`, `description`, and optional fields like `gFontsUrl`, `italic`, `smallcap`, `sampleShade`, `familyFaces`, and `comparisonFaces`.

`detail.html` is the trusted HTML fragment rendered on the typeface detail page.

`sample.html` is the trusted HTML fragment rendered in listing cards and on the detail page.

`glyphs.yml` must include:

```yml
fontFile: /assets/fonts/example/example.woff
```

## Add a pairing

Create `content/pairings/<slug>/` with:

- `meta.yml`
- `sample.html`

`meta.yml` must include `name`, `dateAdded`, `typefaces`, and optional `sampleShade`.

`sample.html` is the trusted HTML fragment rendered on pairing cards.

## Shared site text

`content/site/text.yml` holds the reusable `words`, `headlines`, and `paragraphs` arrays used across specimen pages.
