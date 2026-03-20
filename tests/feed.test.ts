import { describe, expect, it } from "vitest";

import { getLatestTypefaces } from "@/lib/content";
import { buildAtomFeedXml } from "@/lib/feed";

describe("feed xml", () => {
  it("builds atom xml from the latest typefaces in order", () => {
    const latestTypefaces = getLatestTypefaces();
    const feedXml = buildAtomFeedXml(latestTypefaces, "2026-03-18T10:00:00.000Z");
    const firstEntryTitle = `${latestTypefaces[0].name} by ${latestTypefaces[0].creator.name}`;
    const secondEntryTitle = `${latestTypefaces[1].name} by ${latestTypefaces[1].creator.name}`;

    expect(feedXml).toContain("<feed");
    expect(feedXml).toContain("<updated>2026-03-18T10:00:00.000Z</updated>");
    expect(feedXml).toContain("Inter by Rasmus Andersson");
    expect(feedXml).toContain("https://www.beautifulwebtype.com/assets/images/inter.png");
    expect(feedXml.indexOf(firstEntryTitle)).toBeLessThan(feedXml.indexOf(secondEntryTitle));
  });
});
