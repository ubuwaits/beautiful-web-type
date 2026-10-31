"""Refresh glyph counts and create regular explorer faces for variable fonts.

Requires fonttools and brotli. Run again after updating the source font assets.
"""

from pathlib import Path
import re

from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont

ROOT = Path(__file__).resolve().parent.parent
REGULAR_AXES = {"wght": 400, "ital": 0, "slnt": 0}


def update_glyph_count(config, count):
    metadata_path = config.parent / "meta.yml"
    metadata = metadata_path.read_text()
    field = f"glyphCount: {count}"
    if re.search(r"^glyphCount:", metadata, re.M):
        updated = re.sub(r"^glyphCount:.*$", field, metadata, flags=re.M)
    else:
        updated, replacements = re.subn(
            r"(^styles:.*$)",
            lambda match: match.group(1) + "\n" + field,
            metadata,
            count=1,
            flags=re.M,
        )
        if replacements != 1:
            raise ValueError(f"Missing styles field in {metadata_path}")
    if updated != metadata:
        metadata_path.write_text(updated)


for config in sorted((ROOT / "content/typefaces").glob("*/glyphs.yml")):
    text = config.read_text()
    current_url = re.search(r"^fontFile:\s*(\S+)", text, re.M).group(1)
    provenance = re.search(r"^# Variable source:\s*(\S+)", text, re.M)
    source_url = provenance.group(1) if provenance else current_url
    with TTFont(ROOT / "public" / source_url.lstrip("/"), recalcTimestamp=False) as font:
        update_glyph_count(config, len(font.getGlyphOrder()))
        if "fvar" not in font:
            continue
        axes = {axis.axisTag: axis.defaultValue for axis in font["fvar"].axes}
        if not provenance and all(axes.get(tag, value) == value for tag, value in REGULAR_AXES.items()):
            continue
        location = {tag: REGULAR_AXES.get(tag, default) for tag, default in axes.items()}
        regular = instantiateVariableFont(font, location, updateFontNames=True)
        assert "fvar" not in regular
        assert regular["OS/2"].usWeightClass == 400
        assert regular.getGlyphOrder() == font.getGlyphOrder()
        output_url = str(Path(source_url).parent / "glyphs-regular.woff2")
        regular.flavor = "woff2"
        regular.save(ROOT / "public" / output_url.lstrip("/"))
        config.write_text(f"# Variable source: {source_url}\nfontFile: {output_url}\n")
        print(f"{config.parent.name}: regular upright, {len(regular.getGlyphOrder())} glyphs")
