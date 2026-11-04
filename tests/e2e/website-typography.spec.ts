import { expect, test } from "@playwright/test";

// Cover default typography, partial overrides, custom sizing, and limited weights.
test("combines shared typography defaults with per-font overrides", async ({ page }) => {
  for (const width of [1440, 390]) {
    await page.setViewportSize({ width, height: 1000 });
    for (const slug of ["dm-sans", "fraunces", "le-murmure", "archivo-black"]) {
      await page.goto(`/${slug}/`);
      const actual = await page.locator("#website-hero").evaluate((root) => {
        const style = (role: string) => getComputedStyle(root.querySelector(`[data-web-text="${role}"]`)!);
        return {
          headlineWeight: style("headline").fontWeight,
          headlineAxes: style("headline").fontVariationSettings,
          descriptionStyle: style("description").fontStyle,
          descriptionSize: parseFloat(style("description").fontSize),
          actionSize: parseFloat(style("action").fontSize),
          tableFeatures: style("tableValue").fontFeatureSettings
        };
      });
      expect(actual.headlineWeight).toBe(slug === "fraunces" ? "600"
        : ["le-murmure", "archivo-black"].includes(slug) ? "400" : "500");
      expect(actual.headlineAxes).toBe(slug === "fraunces" ? '"SOFT" 75' : "normal");
      expect(actual.descriptionStyle).toBe(slug === "fraunces" ? "italic" : "normal");
      expect(actual.descriptionSize).toBe(slug === "le-murmure"
        ? width >= 1105 ? 24 : 22 : width >= 1105 ? 18 : 16);
      expect(actual.actionSize).toBe(slug === "le-murmure" ? 20 : 14);
      expect(actual.tableFeatures).toContain('"lnum"');
      expect(actual.tableFeatures).toContain('"tnum"');
      await expect(page.locator("[data-case-study]")).toHaveCount(4);
    }
  }
});

test("sizes the hero button to the loaded font without overlapping its arrow", async ({ page }) => {
  for (const width of [1440, 390]) {
    await page.setViewportSize({ width, height: 1000 });
    await page.goto("/archivo-black/");
    await page.evaluate(() => document.fonts.ready);
    const spacing = await page.locator("#website-hero button").evaluate((button) => {
      const label = button.querySelector("span")!;
      const range = document.createRange();
      range.selectNodeContents(label);
      const text = range.getBoundingClientRect();
      const arrow = button.querySelector("svg")!.getBoundingClientRect();
      const bounds = button.getBoundingClientRect();
      return { gap: arrow.left - text.right, padding: bounds.right - arrow.right };
    });
    expect(spacing.gap).toBeGreaterThanOrEqual(19);
    expect(spacing.padding).toBeGreaterThanOrEqual(19);
  }
});
