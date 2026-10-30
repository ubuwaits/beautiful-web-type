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

test("places glyphs between standard specimens and OpenType features", async ({ page }) => {
  await page.goto("/alegreya/");
  const positions = await page.evaluate(() => {
    const glyphs = document.getElementById("glyphs")!;
    const specimen = glyphs.previousElementSibling!;
    const features = glyphs.nextElementSibling!;
    return {
      afterStandard: specimen.querySelector(".examples-paragraphs") !== null,
      beforeFeatures: features.querySelector(".type-detail-table") !== null,
      specimenBottom: specimen.getBoundingClientRect().bottom,
      glyphTop: glyphs.getBoundingClientRect().top
    };
  });
  expect(positions.afterStandard).toBe(true);
  expect(positions.beforeFeatures).toBe(true);
  expect(positions.glyphTop).toBeGreaterThanOrEqual(positions.specimenBottom);
  await expect(page.locator("a.glyph-explorer").first()).toHaveAttribute("href", "/alegreya/#glyphs");
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
  await page.locator("a.glyph-explorer").first().click();
  await expect(page.locator("#glyph-grid button").first()).toBeAttached();
  await page.locator('#glyph-grid button[data-glyph-index="8"]').focus();
  await expect(page.locator('#glyph-grid button[data-glyph-index="8"]')).toHaveAttribute("aria-pressed", "true");
});

test("draws newly visible glyphs without per-cell layout work", async ({ page }) => {
  const cdp = await page.context().newCDPSession(page);
  await cdp.send("Network.enable");
  await cdp.send("Network.setCacheDisabled", { cacheDisabled: true });
  await cdp.send("Performance.enable");
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("/inter/#glyphs");
  await expect(page.locator("#glyph-grid button canvas").first()).toBeAttached();
  const settle = () => page.evaluate(() => new Promise<void>((resolve) => {
    requestAnimationFrame(() => requestAnimationFrame(() => resolve()));
  }));
  await page.evaluate(() => document.fonts.ready);
  await settle();
  const before = await cdp.send("Performance.getMetrics");
  const target = page.locator('#glyph-grid button[data-glyph-index="1800"]');
  await target.scrollIntoViewIfNeeded();
  await expect(target.locator("canvas")).toBeAttached();
  await settle();
  const after = await cdp.send("Performance.getMetrics");
  const layoutCount = (result: typeof before) => result.metrics.find((metric) => metric.name === "LayoutCount")!.value;
  // One viewport needs hundreds of glyphs. It must not trigger hundreds of layouts.
  expect(layoutCount(after) - layoutCount(before)).toBeLessThan(30);

  await page.setViewportSize({ width: 390, height: 844 });
  await target.scrollIntoViewIfNeeded();
  await expect.poll(() => target.evaluate((button) => {
    const canvas = button.querySelector("canvas")!;
    return canvas.width === Math.round(button.clientWidth * window.devicePixelRatio);
  })).toBe(true);
  await cdp.detach();
});
