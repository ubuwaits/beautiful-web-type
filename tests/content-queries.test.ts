import { describe, expect, it } from "vitest";

import {
  getAllTypefaceSlugs,
  getPairingsForTypeface,
  getSampleForTypeface,
  getTextData,
  getTypefaceBySlug,
  getTypefacesByCategory,
  resolveTypefaceSlugByName
} from "@/lib/content";

describe("content queries", () => {
  it("returns narrow query results without exposing the full graph", () => {
    expect(getAllTypefaceSlugs()).toContain("inter");
    expect(getTypefacesByCategory("sans-serif").some((typeface) => typeface.slug === "inter")).toBe(
      true
    );
    expect(getTypefaceBySlug("inter")?.name).toBe("Inter");
    expect(getSampleForTypeface("Inter")?.slug).toBe("inter");
    expect(getPairingsForTypeface("Inter").length).toBeGreaterThan(0);
    expect(resolveTypefaceSlugByName("Inter")).toBe("inter");
    expect(getTextData().words.length).toBeGreaterThan(0);
  });
});
