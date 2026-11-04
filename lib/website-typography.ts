import type { CSSProperties } from "react";
import type { FeatureSettings, WebsiteTextStyle } from "@/lib/content/types";

export const WEBSITE_TEXT_CLASS = "text-[length:var(--website-size)] min-[1105px]:text-[length:var(--website-desktop-size)]";

function settings(value?: FeatureSettings): string {
  if (value === undefined || value === "normal") return "normal";
  return Object.entries(value).map(([tag, setting]) => `"${tag}" ${setting}`).join(", ") || "normal";
}

const size = (value: number | string) => typeof value === "number" ? `${value}px` : value;

/** Render authored text roles without inferring typography in the component. */
export function websiteTextStyle(style: WebsiteTextStyle): CSSProperties {
  return {
    "--website-size": size(style.size),
    "--website-desktop-size": size(style.desktopSize ?? style.size),
    fontWeight: style.weight,
    lineHeight: style.lineHeight,
    letterSpacing: style.letterSpacing ?? "normal",
    fontStyle: style.italic ? "italic" : "normal",
    fontFeatureSettings: settings(style.features),
    fontVariationSettings: settings(style.axes),
    fontOpticalSizing: style.opticalSizing ?? "auto",
    textTransform: style.textTransform ?? "none"
  } as CSSProperties;
}
