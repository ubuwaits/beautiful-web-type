"""Extract tester controls from the font files actually served by each stylesheet.

Requires fonttools and brotli. Run after updating font assets or @font-face rules.
"""

import json
import re
from pathlib import Path

from fontTools.ttLib import TTFont

from font_faces import FontFace, read_font_faces

ROOT = Path(__file__).resolve().parent.parent
AXIS_NAMES = {
    "wght": "Weight", "wdth": "Width", "opsz": "Optical size", "WONK": "Wonk",
    "slnt": "Slant", "ital": "Italic",
}


def number(value):
    return int(value) if value == int(value) else round(value, 5)


def tester_controls(face: FontFace):
    file_path = ROOT / "public" / face.url.lstrip("/")
    with TTFont(file_path, recalcTimestamp=False) as font:
        axes = []
        if "fvar" in font:
            for axis in font["fvar"].axes:
                if axis.minValue == axis.maxValue:
                    continue
                axes.append({
                    "tag": axis.axisTag,
                    "name": AXIS_NAMES.get(axis.axisTag) or font["name"].getDebugName(axis.axisNameID) or axis.axisTag,
                    "min": number(axis.minValue),
                    "max": number(axis.maxValue),
                    "default": number(axis.defaultValue),
                })
        sets = {}
        if "GSUB" in font and font["GSUB"].table.FeatureList:
            for record in font["GSUB"].table.FeatureList.FeatureRecord:
                if not re.fullmatch(r"ss(0[1-9]|1\d|20)", record.FeatureTag):
                    continue
                params = record.Feature.FeatureParams
                name_id = getattr(params, "UINameID", None)
                name = font["name"].getDebugName(name_id) if name_id else None
                sets[record.FeatureTag] = name or f"Stylistic set {record.FeatureTag[2:]}"
        return {
            "style": face.style,
            "weight": face.weight_range[0],
            "axes": axes,
            "stylisticSets": [{"tag": tag, "name": name} for tag, name in sorted(sets.items())],
        }


def main():
    result = {}
    for bundle in sorted((ROOT / "content/typefaces").iterdir()):
        if not bundle.is_dir():
            continue
        family, faces = read_font_faces(ROOT / "app/fonts" / f"{bundle.name}.css")
        result[bundle.name] = {"family": family, "faces": [tester_controls(face) for face in faces]}
    output = ROOT / "content/font-tester.json"
    output.write_text(json.dumps(result, ensure_ascii=False, indent=2) + "\n")
    print(f"Updated font tester controls for {len(result)} typefaces")


if __name__ == "__main__":
    main()
