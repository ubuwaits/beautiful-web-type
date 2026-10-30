import { expect, test } from "@playwright/test";

test("keeps comparison text in sync on detail pages", async ({ page }) => {
  await page.goto("/inter/");

  const firstComparison = page.locator("#comparisons h1").first();
  await firstComparison.evaluate((node) => {
    (node as HTMLElement).innerText = "synced specimen";
    node.dispatchEvent(new Event("input", { bubbles: true }));
  });

  await expect(page.locator("#comparisons h1").nth(1)).toHaveText("synced specimen");
});

test("opens the mobile navigation overlay", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.locator(".menu-link").click();

  const overlay = page.locator(".menu-overlay");
  const nav = page.locator(".menu-overlay .main-nav");

  await expect(overlay).toHaveClass(/open/);
  await expect(overlay).toHaveCSS("background-color", "rgb(255, 255, 255)");

  const overlayBox = await overlay.boundingBox();
  const navBox = await nav.boundingBox();

  expect(overlayBox).not.toBeNull();
  expect(navBox).not.toBeNull();

  expect(Math.round(overlayBox!.x)).toBe(0);
  expect(Math.round(overlayBox!.y)).toBe(0);
  expect(Math.round(overlayBox!.height)).toBeGreaterThanOrEqual(844);

  const overlayCenterX = overlayBox!.x + overlayBox!.width / 2;
  const overlayCenterY = overlayBox!.y + overlayBox!.height / 2;
  const navCenterX = navBox!.x + navBox!.width / 2;
  const navCenterY = navBox!.y + navBox!.height / 2;

  expect(Math.abs(navCenterX - overlayCenterX)).toBeLessThan(24);
  expect(Math.abs(navCenterY - overlayCenterY)).toBeLessThan(48);
});

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

test("places glyphs after OpenType features and before comparisons", async ({ page }) => {
  await page.goto("/alegreya/");
  const positions = await page.evaluate(() => {
    const glyphs = document.getElementById("glyphs")!;
    const features = glyphs.previousElementSibling!;
    const comparisons = glyphs.parentElement!.nextElementSibling!;
    return {
      afterFeatures: features.querySelector(".type-detail-table") !== null,
      beforeComparisons: comparisons.id === "comparisons",
      featuresBottom: features.getBoundingClientRect().bottom,
      glyphTop: glyphs.getBoundingClientRect().top
    };
  });
  expect(positions.afterFeatures).toBe(true);
  expect(positions.beforeComparisons).toBe(true);
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
  await page.locator('.main-nav a[href="/serif/"]').first().click();
  await page.locator('a[href="/alegreya/"]').first().click();
  await page.evaluate(() => document.fonts.ready);
  await page.locator("#glyphs").scrollIntoViewIfNeeded();
  await expect(page.locator("#glyph-grid button").first()).toBeAttached();
  await page.locator('#glyph-grid button[data-glyph-index="8"]').focus();
  await expect(page.locator('#glyph-grid button[data-glyph-index="8"]')).toHaveAttribute("aria-pressed", "true");
});
