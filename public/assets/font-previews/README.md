# Index font previews

These generated WOFF2 files contain only the glyphs needed for each font’s name
and creator on index cards. They use separate `BWT Preview <slug>` family names.
Cards retain their regular upright setting. Variable-font data is preserved to
keep the original outlines and automatic optical sizing. They are not general-purpose webfonts.

Full font files, licenses, detail-page specimens, tester settings, and glyph
explorer sources remain in `public/assets/fonts/`. The preview fonts preserve
the source fonts’ copyright and license metadata.

Regenerate after changing fonts, their names/creators, or their CSS declarations:

```sh
# Requires Python with fonttools and brotli, plus the site's Node dependencies.
pnpm prepare:font-previews
```

The generator updates `app/fonts/previews.css` and the preview
manifest, reusing files whose inputs have not changed. Commit these generated
assets together; the normal site build does not require Python.
