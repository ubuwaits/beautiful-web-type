import { expect, test } from "@playwright/test";

test("edits the specimen, combines stylistic sets, and resets the tester", async ({ page }) => {
  await page.goto("/inter/");
  const tester = page.locator("#tester");
  const preview = tester.getByRole("textbox", { name: "Try Inter" });
  await expect(preview).toHaveValue(/Sphinx/);
  expect(await tester.evaluate((node) => {
    const paragraph = document.getElementById("paragraphs")!;
    const features = document.getElementById("features")!;
    return Boolean(paragraph.compareDocumentPosition(node) & Node.DOCUMENT_POSITION_FOLLOWING)
      && Boolean(node.compareDocumentPosition(features) & Node.DOCUMENT_POSITION_FOLLOWING);
  })).toBe(true);

  await preview.fill("An editable specimen\n0123456789");
  await tester.getByRole("slider", { name: "Weight", exact: true }).press("End");
  await expect(preview).toHaveCSS("font-weight", "900");
  await tester.getByRole("slider", { name: "Size", exact: true }).press("Home");
  await expect(preview).toHaveCSS("font-size", "16px");
  await tester.getByRole("slider", { name: "Spacing", exact: true }).press("End");
  await expect(preview).toHaveCSS("letter-spacing", "3.2px");
  await tester.getByRole("button", { name: "Italic", exact: true }).click();
  await expect(preview).toHaveCSS("font-style", "italic");

  const firstSet = tester.getByRole("button", { name: /^ss01:/ });
  const secondSet = tester.getByRole("button", { name: /^ss02:/ });
  await firstSet.click();
  await secondSet.click();
  await expect(firstSet).toHaveAttribute("aria-pressed", "true");
  await expect(secondSet).toHaveAttribute("aria-pressed", "true");
  await expect(preview).toHaveCSS("font-feature-settings", '"ss01", "ss02"');
  await firstSet.click();
  await expect(preview).toHaveCSS("font-feature-settings", '"ss02"');

  await tester.getByRole("button", { name: "Reset font tester" }).click();
  await expect(preview).toHaveValue(/Sphinx/);
  await expect(preview).toHaveCSS("font-size", "128px");
  await expect(preview).toHaveCSS("font-weight", "400");
  await expect(preview).toHaveCSS("font-style", "normal");
  await expect(preview).toHaveCSS("font-feature-settings", "normal");
  expect(await preview.evaluate((node) => parseFloat(getComputedStyle(node).letterSpacing) || 0)).toBe(0);
  await expect(preview).toHaveCSS("text-align", "center");
});

test("uses real custom axes and style-specific stylistic sets", async ({ page }) => {
  await page.goto("/commissioner/");
  const tester = page.locator("#tester");
  const preview = tester.getByRole("textbox");
  for (const name of ["Flare", "Volume"]) {
    const axis = tester.getByRole("slider", { name, exact: true });
    await expect(axis).toHaveAttribute("max", "100");
    await axis.press("End");
  }
  await expect(preview).toHaveCSS("font-variation-settings", '"FLAR" 100, "VOLM" 100, "wght" 400');

  await page.goto("/crimson-pro/");
  await expect(tester.getByRole("button", { name: /^ss01:/ })).toHaveCount(0);
  await tester.getByRole("button", { name: "Italic", exact: true }).click();
  await expect(tester.getByRole("button", { name: "ss01: j alternate" })).toBeVisible();

  await page.goto("/playfair-display/");
  await tester.getByRole("button", { name: "Italic", exact: true }).click();
  // A pinned ital=1 entry in the font is not an adjustable axis.
  await expect(tester.getByRole("slider", { name: "Italic", exact: true })).toHaveCount(0);
  await expect(tester.getByRole("slider", { name: "Width", exact: true })).toHaveAttribute("min", "88");
});

test("shows static weights without invented axes and fits mobile dark mode", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 1000 });
  await page.goto("/poppins/");
  const tester = page.locator("#tester");
  await expect(tester.getByRole("textbox")).toHaveCSS("font-size", "64px");
  await expect(tester.getByRole("group", { name: "Variable font axes" })).toHaveCount(0);
  await tester.getByRole("combobox", { name: "Weight", exact: true }).selectOption("700");
  await expect(tester.getByRole("textbox")).toHaveCSS("font-weight", "700");
  await page.getByRole("tab", { name: "Dark theme" }).click();
  await expect(page.locator("html")).toHaveClass(/dark/);
  expect(await tester.getByRole("textbox").evaluate((node) => getComputedStyle(node).backgroundColor))
    .toBe(await page.locator("body").evaluate((node) => getComputedStyle(node).backgroundColor));
  await tester.getByRole("textbox").fill("A".repeat(100));
  await tester.getByRole("slider", { name: "Size", exact: true }).press("End");
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);

  await page.goto("/le-murmure/");
  await expect(tester.getByRole("combobox")).toHaveCount(0);
  await expect(tester.getByRole("textbox", { name: "Try Le Murmure" })).toBeVisible();
});
