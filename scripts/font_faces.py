"""Read the specimen family and its local @font-face rules from a catalog stylesheet."""

from __future__ import annotations

import re
from dataclasses import dataclass
from pathlib import Path
from urllib.parse import urlsplit


@dataclass(frozen=True)
class FontFace:
    url: str
    style: str
    weight: str
    stretch: str | None

    @property
    def weight_range(self):
        weights = [int(value) for value in self.weight.split()]
        return weights[0], weights[-1]


def read_font_faces(css_path: Path) -> tuple[str, list[FontFace]]:
    css = re.sub(r"/\*.*?\*/", "", css_path.read_text(), flags=re.S)
    family_match = re.search(rf"""--{re.escape(css_path.stem)}\s*:\s*["']([^"']+)["']""", css)
    if not family_match:
        raise ValueError(f"Missing specimen family --{css_path.stem} in {css_path}")
    family = family_match.group(1)
    faces = []
    for block in re.findall(r"@font-face\s*\{([^}]+)\}", css):
        props = dict(re.findall(r"([\w-]+)\s*:\s*([^;]+?)(?:\s*;|\s*$)", block))
        if props.get("font-family", "").strip("\"'").casefold() != family.casefold():
            continue
        source = re.search(r"""url\(\s*["']?([^"')]+?)["']?\s*\)""", props.get("src", ""))
        if not source:
            raise ValueError(f"Missing font URL for {family} in {css_path}")
        faces.append(FontFace(
            url=urlsplit(source.group(1)).path,
            style=props.get("font-style", "normal"),
            weight=props.get("font-weight", "400"),
            stretch=props.get("font-stretch"),
        ))
    if not faces:
        raise ValueError(f"No font faces for {family} in {css_path}")
    return family, faces
