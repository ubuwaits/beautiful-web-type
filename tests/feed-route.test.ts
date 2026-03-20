import { describe, expect, it } from "vitest";

import { GET } from "@/app/feed.xml/route";

describe("feed route", () => {
  it("returns atom xml with the expected content type", async () => {
    const response = GET();
    const feedXml = await response.text();

    expect(response.headers.get("content-type")).toBe("application/atom+xml; charset=utf-8");
    expect(feedXml).toContain("<feed");
    expect(feedXml).toContain("https://www.beautifulwebtype.com/inter/");
  });
});
