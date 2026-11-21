"""Refresh glyph counts and create regular explorer faces for variable fonts.

Requires fonttools and brotli. Run again after updating the source font assets.
"""

from pathlib import Path
import argparse
import re
import json
import subprocess

from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont

ROOT = Path(__file__).resolve().parent.parent
regular_weights = json.loads(subprocess.check_output([
    "node", "--import", "tsx", "-e",
    'const {typefaceData} = require("./content/typefaces");'
    'const {getRegularWeight} = require("./lib/font-weights");'
    'console.log(JSON.stringify(Object.fromEntries(typefaceData.map(f => [f.slug, getRegularWeight(f.weights)]))));',
], cwd=ROOT, text=True))


def read_string_field(text, field):
    match = re.search(rf'^  {field}: ("(?:[^"\\]|\\.)*")', text, re.M)
    return json.loads(match.group(1)) if match else None


def update_field(text, field, value):
    replacement = f"  {field}: {json.dumps(value, ensure_ascii=False)},"
    pattern = rf"^  {field}:.*$"
    if re.search(pattern, text, re.M):
        return re.sub(pattern, lambda _: replacement, text, flags=re.M)
    # fontFile is required and may follow fields without a trailing comma.
    return text.replace("\n  fontFile:", f"\n{replacement}\n  fontFile:", 1)


parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument("slug", nargs="?", choices=sorted(regular_weights))
args = parser.parse_args()
for slug in [args.slug] if args.slug else sorted(regular_weights):
    config = ROOT / "content/typefaces" / slug / "data.ts"
    regular_weight = regular_weights[slug]
    regular_axes = {"wght": regular_weight, "ital": 0, "slnt": 0}
    original = config.read_text()
    text = original
    current_url = read_string_field(text, "fontFile")
    if not current_url:
        raise ValueError(f"Missing fontFile in {config}")
    provenance = read_string_field(text, "glyphSource")
    source_url = provenance or current_url
    with TTFont(ROOT / "public" / source_url.lstrip("/"), recalcTimestamp=False) as font:
        text = update_field(text, "glyphCount", len(font.getGlyphOrder()))
        if text != original:
            config.write_text(text)
        if "fvar" not in font:
            continue
        axes = {axis.axisTag: axis.defaultValue for axis in font["fvar"].axes}
        if not provenance and all(axes.get(tag, value) == value for tag, value in regular_axes.items()):
            continue
        location = {tag: regular_axes.get(tag, default) for tag, default in axes.items()}
        regular = instantiateVariableFont(font, location, updateFontNames=True)
        assert "fvar" not in regular
        assert regular["OS/2"].usWeightClass == regular_weight
        assert regular.getGlyphOrder() == font.getGlyphOrder()
        output_url = str(Path(source_url).parent / "glyphs-regular.woff2")
        regular.flavor = "woff2"
        regular.save(ROOT / "public" / output_url.lstrip("/"))
        text = update_field(text, "fontFile", output_url)
        text = update_field(text, "glyphSource", source_url)
        config.write_text(text)
        print(f"{config.parent.name}: regular upright, {len(regular.getGlyphOrder())} glyphs")
