import type { CSSProperties } from "react";
import type { FeatureSettings, WebsiteTextStyle } from "@/lib/content/types";

function settings(value?: FeatureSettings): string | undefined {
  if (value === undefined || value === "normal") return value;
  return Object.entries(value).map(([tag, setting]) => `"${tag}" ${setting}`).join(", ") || "normal";
}

const size = (value?: number | string) => typeof value === "number" ? `${value}px` : value;

/** Apply only authored overrides; shared defaults live in the specimen's classes. */
export function websiteTextStyle(style: WebsiteTextStyle = {}): CSSProperties {
  return {
    "--website-size": size(style.size),
    "--website-desktop-size": size(style.desktopSize ?? style.size),
    fontWeight: style.weight,
    lineHeight: style.lineHeight,
    letterSpacing: style.letterSpacing,
    fontStyle: style.italic === undefined ? undefined : style.italic ? "italic" : "normal",
    fontFeatureSettings: settings(style.features),
    fontVariationSettings: settings(style.axes),
    fontOpticalSizing: style.opticalSizing,
    textTransform: style.textTransform
  } as CSSProperties;
}
