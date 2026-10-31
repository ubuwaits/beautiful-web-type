"""Extract tester controls from the font files actually served by each stylesheet.

Requires fonttools and brotli. Run after updating font assets or @font-face rules.
"""

import json
import re
from pathlib import Path

from fontTools.ttLib import TTFont

ROOT = Path(__file__).resolve().parent.parent
AXIS_NAMES = {
    "wght": "Weight", "wdth": "Width", "opsz": "Optical size",
    "slnt": "Slant", "ital": "Italic",
}


def number(value):
    return int(value) if value == int(value) else round(value, 5)


def read_face(block, family):
    declarations = dict(re.findall(r"([\w-]+)\s*:\s*([^;]+);", block))
    if declarations.get("font-family", "").strip("\"'").casefold() != family.casefold():
        return None
    url = re.search(r"url\([\"']?([^\"')]+)", declarations["src"]).group(1)
    file_path = ROOT / "public" / url.split("?")[0].lstrip("/")
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
        weight = int(declarations.get("font-weight", "400").split()[0])
        return {
            "style": declarations.get("font-style", "normal"),
            "weight": weight,
            "axes": axes,
            "stylisticSets": [{"tag": tag, "name": name} for tag, name in sorted(sets.items())],
        }


def main():
    result = {}
    for bundle in sorted((ROOT / "content/typefaces").iterdir()):
        if not bundle.is_dir():
            continue
        css = (ROOT / "app/fonts" / f"{bundle.name}.css").read_text()
        family = re.search(r"font-family:\s*[\"']([^\"']+)", css).group(1)
        faces = [face for block in re.findall(r"@font-face\s*\{([^}]+)\}", css)
                 if (face := read_face(block, family))]
        if not faces:
            raise ValueError(f"No font faces found for {bundle.name}")
        result[bundle.name] = {"family": family, "faces": faces}
    output = ROOT / "content/font-tester.json"
    output.write_text(json.dumps(result, ensure_ascii=False, indent=2) + "\n")
    print(f"Updated font tester controls for {len(result)} typefaces")


if __name__ == "__main__":
    main()
