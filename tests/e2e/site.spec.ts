import { expect, test } from "@playwright/test";

test("renders the serif category page with serif samples", async ({ page }) => {
  await page.goto("/serif/");

  await expect(page.locator(".page-header h1")).toHaveText("Serif Typefaces");
  await expect(page.locator(".samples > .sample a[href='/alegreya/']").first()).toBeVisible();
  await expect(page.locator(".samples > .sample a[href='/inter/']")).toHaveCount(0);
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

  await expect(page.locator(".menu-overlay")).toHaveClass(/open/);
});

test("loads the glyph inspector and updates the glyph query param", async ({ page }) => {
  await page.goto("/inter/glyphs/?i=10");
  await page.waitForFunction(
    () => document.querySelectorAll("#glyph-pagination a").length > 0
  );

  await page.locator("#glyph-grid canvas").first().click();
  await expect(page).toHaveURL(/\/inter\/glyphs\/\?i=\d+/);
});
