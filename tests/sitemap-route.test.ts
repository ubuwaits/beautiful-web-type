import { describe, expect, it } from "vitest";

import sitemap from "@/app/sitemap";
import { getAllTypefaces } from "@/lib/content";
import { toAbsoluteUrl } from "@/lib/routes";

describe("sitemap route", () => {
  it("returns the static and dynamic routes for export", () => {
    const entries = sitemap();
    const urls = entries.map((entry) => entry.url);

    expect(urls).toEqual(
      expect.arrayContaining([
        toAbsoluteUrl("/"),
        toAbsoluteUrl("/display/"),
        toAbsoluteUrl("/monospaced/"),
        toAbsoluteUrl("/sans-serif/"),
        toAbsoluteUrl("/serif/"),
        toAbsoluteUrl("/pairings/"),
        toAbsoluteUrl("/inter/"),
        toAbsoluteUrl("/inter/glyphs/")
      ])
    );
    expect(urls).toHaveLength(6 + getAllTypefaces().length * 2);
  });
});
