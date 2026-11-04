import { expect, test } from "@playwright/test";

test("loads every glyph inline and preserves the selected glyph in the URL", async ({ page }) => {
  await page.goto("/inter/?i=10#glyphs");
  const grid = page.locator("#glyph-grid");
  await expect(grid.locator("button").first()).toBeAttached();
  const count = Number(await grid.getAttribute("data-glyph-count"));
  expect(count).toBeGreaterThan(128);
  await expect(grid.locator("button")).toHaveCount(count);
  await expect(grid.locator('[data-glyph-index="10"]')).toHaveAttribute("aria-pressed", "true");
  await expect(page.locator("#glyph-pagination")).toHaveCount(0);

  await grid.locator('[data-glyph-index="12"]').click();
  await expect(page).toHaveURL(/\/inter\/\?i=12#glyphs$/);
  await expect(grid.locator('[data-glyph-index="12"]')).toHaveAttribute("aria-pressed", "true");
  await expect(page.locator("#glyph-detail-canvas")).toHaveAttribute("aria-label", "Preview of glyph 12");
});

test("places glyphs after OpenType features at the end of specimens", async ({ page }) => {
  await page.goto("/alegreya/");
  const positions = await page.evaluate(() => {
    const glyphs = document.getElementById("glyphs")!;
    const features = glyphs.previousElementSibling!;
    return {
      afterFeatures: features.querySelector("[data-font-feature]") !== null,
      lastSpecimen: glyphs.nextElementSibling === null,
      featuresBottom: features.getBoundingClientRect().bottom,
      glyphTop: glyphs.getBoundingClientRect().top
    };
  });
  expect(positions.afterFeatures).toBe(true);
  expect(positions.lastSpecimen).toBe(true);
  await expect(page.locator("#comparisons")).toHaveCount(0);
  await expect(page.getByRole("navigation", { name: "On this page" })).toHaveCount(0);
  expect(positions.glyphTop).toBeGreaterThanOrEqual(positions.featuresBottom);
});

for (const width of [1440, 390]) {
  test(`keeps the selected glyph visible while the full grid scrolls at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/inter/#glyphs");
    const cells = page.locator("#glyph-grid button");
    await expect(cells.first()).toBeAttached();
    const start = await page.locator("#glyph-grid").evaluate((node) => node.getBoundingClientRect().top + window.scrollY);
    await page.evaluate((top) => window.scrollTo(0, top + 300), start);
    const before = await page.locator("#glyph-detail").boundingBox();
    await page.evaluate(() => window.scrollBy(0, 500));
    const after = await page.locator("#glyph-detail").boundingBox();
    expect(before!.y).toBeGreaterThanOrEqual(60);
    expect(Math.abs(before!.y - after!.y)).toBeLessThan(1);
    expect(after!.y + after!.height).toBeLessThanOrEqual(900);
    await cells.last().scrollIntoViewIfNeeded();
    await expect(cells.last().locator("canvas")).toBeAttached();
    await cells.last().click();
    await expect(cells.last()).toHaveAttribute("aria-pressed", "true");
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  });
}

test("initializes the explorer after client navigation with its script already loaded", async ({ page }) => {
  await page.goto("/inter/#glyphs");
  await expect(page.locator("#glyph-grid button").first()).toBeAttached();
  await page.getByRole("navigation", { name: "Main navigation", exact: true }).getByRole("link", { name: "Serif", exact: true }).press("ArrowDown");
  await page.locator('[data-slot="navigation-menu-content"] a[href="/alegreya/"]').click();
  await expect(page).toHaveURL(/\/alegreya\/$/);
  await page.evaluate(() => document.fonts.ready);
  await page.locator("#glyphs").scrollIntoViewIfNeeded();
  await expect(page.locator("#glyph-grid button").first()).toBeAttached();
  await page.locator('#glyph-grid button[data-glyph-index="8"]').focus();
  await expect(page.locator('#glyph-grid button[data-glyph-index="8"]')).toHaveAttribute("aria-pressed", "true");
});

test("releases off-screen glyph canvases and redraws them on return", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/eb-garamond/#glyphs");
  const grid = page.locator("#glyph-grid");
  const first = grid.locator("button").first();
  const last = grid.locator("button").last();
  await expect(first.locator("canvas")).toBeAttached();
  const count = await grid.locator("button").count();
  const sample = grid.locator('[data-glyph-index="5"]');
  await sample.click();
  const label = await sample.getAttribute("aria-label");
  const originalCanvas = await sample.locator("canvas").elementHandle();
  const originalImage = await originalCanvas!.evaluate((canvas) => (canvas as HTMLCanvasElement).toDataURL());
  const bounds = await grid.evaluate((element) => ({ top: element.getBoundingClientRect().top + scrollY, height: element.scrollHeight }));

  // Traverse the grid so every region is drawn, rather than jumping past cells.
  for (let y = bounds.top; y < bounds.top + bounds.height; y += 1600) {
    await page.evaluate((top) => window.scrollTo(0, top), y);
    await page.evaluate(() => new Promise<void>((resolve) => requestAnimationFrame(() => requestAnimationFrame(() => resolve()))));
  }
  await last.scrollIntoViewIfNeeded();
  await expect(last.locator("canvas")).toBeAttached();
  await expect(sample.locator("canvas")).toHaveCount(0);
  expect(await originalCanvas!.evaluate((canvas) => [(canvas as HTMLCanvasElement).width, (canvas as HTMLCanvasElement).height])).toEqual([0, 0]);
  await expect(sample).toHaveAttribute("aria-pressed", "true");
  await expect(sample).toHaveAttribute("aria-label", label!);
  await expect(grid.locator("button")).toHaveCount(count);
  await expect.poll(() => grid.locator("canvas").count()).toBeLessThan(count / 4);

  await sample.scrollIntoViewIfNeeded();
  await expect(sample.locator("canvas")).toBeAttached();
  expect(await sample.locator("canvas").evaluate((canvas) => (canvas as HTMLCanvasElement).toDataURL())).toBe(originalImage);
  await expect(sample).toHaveAttribute("aria-pressed", "true");
});
