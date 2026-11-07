"use client";

import { preload } from "react-dom";

export function FontPreviewPreloads({ slugs }: { slugs: string[] }) {
  for (const slug of slugs) {
    preload(`/assets/font-previews/${slug}.woff2`, {
      as: "font",
      type: "font/woff2",
      crossOrigin: "anonymous"
    });
  }
  return null;
}

export function FontPreloads() {
  preload("/assets/fonts/alegreya-sans/AlegreyaSans-BlackItalic.woff2", {
    as: "font",
    type: "font/woff2",
    crossOrigin: "anonymous"
  });
  preload("/assets/fonts/alegreya-sans/AlegreyaSans-Italic.woff2", {
    as: "font",
    type: "font/woff2",
    crossOrigin: "anonymous"
  });
  preload("/assets/fonts/source-sans-pro/SourceSansVariable-Roman.ttf.woff2", {
    as: "font",
    type: "font/woff2",
    crossOrigin: "anonymous"
  });
  return null;
}
