import { expect, test, type Locator } from "@playwright/test";

async function glyphInk(canvas: Locator) {
  return canvas.evaluate((element: HTMLCanvasElement) => {
    const pixels = element.getContext("2d")!.getImageData(0, 0, element.width, element.height).data;
    for (let i = 0; i < pixels.length; i += 4) {
      if (pixels[i + 3] === 255) return pixels[i];
    }
    return -1;
  });
}

test("uses the system theme until a manual choice is saved", async ({ page }) => {
  await page.emulateMedia({ colorScheme: "dark" });
  await page.goto("/");
  const light = page.getByRole("tab", { name: "Light theme" });
  const dark = page.getByRole("tab", { name: "Dark theme" });
  await expect(dark).toHaveAttribute("aria-selected", "true");
  await expect(page.locator("html")).toHaveClass("dark");

  await dark.focus();
  await dark.press("ArrowLeft");
  await expect(light).toHaveAttribute("aria-selected", "true");
  await expect(page.locator("html")).not.toHaveClass("dark");
  expect(await page.evaluate(() => localStorage.getItem("bwt-theme"))).toBe("light");
  await page.emulateMedia({ colorScheme: "light" });
  await page.emulateMedia({ colorScheme: "dark" });
  await page.reload();
  await expect(light).toHaveAttribute("aria-selected", "true");

  await dark.click();
  await page.getByRole("navigation", { name: "Main navigation", exact: true }).getByRole("link", { name: "Serif", exact: true }).click();
  await expect(page).toHaveURL(/\/serif\/$/);
  await expect(dark).toHaveAttribute("aria-selected", "true");
  await page.reload();
  await expect(page.locator("html")).toHaveClass("dark");
});

test("redraws glyph canvases when the theme changes without resetting selection", async ({ page }) => {
  await page.goto("/inter/?i=5#glyphs");
  const preview = page.locator("#glyph-detail-canvas");
  const cell = page.locator('#glyph-grid [data-glyph-index="5"]');
  await expect(cell.locator("canvas")).toBeAttached();
  await expect.poll(() => glyphInk(preview)).toBeGreaterThanOrEqual(0);
  await expect.poll(() => glyphInk(preview)).toBeLessThan(30);

  await page.getByRole("tab", { name: "Dark theme" }).click();
  await expect.poll(() => glyphInk(preview)).toBeGreaterThan(220);
  await expect.poll(() => glyphInk(cell.locator("canvas"))).toBeGreaterThan(220);
  await expect(cell).toHaveAttribute("aria-pressed", "true");

  await page.getByRole("tab", { name: "Light theme" }).click();
  await expect.poll(() => glyphInk(preview)).toBeLessThan(30);
  await expect.poll(() => glyphInk(cell.locator("canvas"))).toBeLessThan(30);
  await expect(cell).toHaveAttribute("aria-pressed", "true");
});
