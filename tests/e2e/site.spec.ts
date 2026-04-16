import { expect, test } from "@playwright/test";

test("renders the serif category page with serif samples", async ({ page }) => {
  await page.goto("/serif/");

  await expect(page.locator(".page-header h1")).toHaveText("Serif Typefaces");
  await expect(page.locator("[data-testid='typeface-card'] a[href='/alegreya/']").first()).toBeVisible();
  await expect(page.locator("[data-testid='typeface-card'] a[href='/inter/']")).toHaveCount(0);
  await expect(page.locator("[data-testid='typeface-card']").first()).toContainText("The Iliad");
});

test("uses typeface-specific specimen text on detail pages", async ({ page }) => {
  await page.goto("/inter/");

  await expect(page.locator("[data-testid='typeface-card'][data-variant='hero']")).toContainText(
    "Hahnenkammrennen"
  );
});

test("keeps comparison text in sync on detail pages", async ({ page }) => {
  await page.goto("/inter/");

  const firstComparison = page.locator("#comparisons h1").first();
  await firstComparison.evaluate((node) => {
    node.innerText = "synced specimen";
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

test("loads the glyph inspector and updates the glyph query param", async ({ page }) => {
  await page.goto("/inter/glyphs/?i=10");
  await page.waitForFunction(
    () => document.querySelectorAll("#glyph-pagination a").length > 0
  );

  await page.locator("#glyph-grid canvas").first().click();
  await expect(page).toHaveURL(/\/inter\/glyphs\/\?i=\d+/);
});

test("loads the Commissioner glyph inspector from WOFF2", async ({ page }) => {
  await page.goto("/commissioner/glyphs/?i=10");
  await page.waitForFunction(
    () => document.querySelectorAll("#glyph-pagination a").length > 0
  );

  await page.locator("#glyph-grid canvas").first().click();
  await expect(page).toHaveURL(/\/commissioner\/glyphs\/\?i=\d+/);
});

test("loads the Work Sans glyph inspector from generated WOFF2", async ({ page }) => {
  await page.goto("/work-sans/glyphs/?i=10");
  await page.waitForFunction(
    () => document.querySelectorAll("#glyph-pagination a").length > 0
  );

  await page.locator("#glyph-grid canvas").first().click();
  await expect(page).toHaveURL(/\/work-sans\/glyphs\/\?i=\d+/);
});

test("loads the Cooper Hewitt glyph inspector from converted WOFF2", async ({ page }) => {
  await page.goto("/cooper-hewitt/glyphs/?i=10");
  await page.waitForFunction(
    () => document.querySelectorAll("#glyph-pagination a").length > 0
  );

  await page.locator("#glyph-grid canvas").first().click();
  await expect(page).toHaveURL(/\/cooper-hewitt\/glyphs\/\?i=\d+/);
});
