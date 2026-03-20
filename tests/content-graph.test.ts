import { describe, expect, it } from "vitest";

import { getContentGraph } from "@/lib/content/graph";

describe("content graph", () => {
  it("loads all collections and validates cross-links", () => {
    const graph = getContentGraph();

    expect(graph.typefaces).toHaveLength(41);
    expect(graph.glyphPages).toHaveLength(41);
    expect(graph.samples).toHaveLength(41);
    expect(graph.pairings).toHaveLength(6);
    expect(graph.typefaceBySlug.get("inter")?.name).toBe("Inter");
    expect(graph.sampleByTypefaceName.get("Inter")?.slug).toBe("inter");
    expect(graph.glyphPageBySlug.get("inter")?.typefaceName).toBe("Inter");
  });
});
