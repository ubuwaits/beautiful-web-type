import { expect, test } from "@playwright/test";

for (const width of [1440, 390]) {
  test(`keeps font pages at the top until the inline command is used at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    const expectTopAfterHydration = async () => {
      await page.waitForLoadState("networkidle");
      await expect(page.locator("#interfaces [cmdk-item][aria-selected=true]")).toHaveCount(0);
      expect(await page.evaluate(() => window.scrollY)).toBe(0);
    };

    await page.goto("/dm-sans/");
    await expectTopAfterHydration();
    await page.goto("/");
    await page.locator('[data-testid="font-grid"] a[href="/dm-sans/"]').click();
    await expect(page).toHaveURL(/\/dm-sans\/$/);
    await expectTopAfterHydration();

    const input = page.getByRole("combobox", { name: "Search example workspace" });
    await input.fill("Shared files");
    await input.press("Enter");
    await expect(page.locator("#interface-files h3")).toBeFocused();
  });
}

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

test("uses Mioya’s named Regular across the catalog and specimen", async ({ page }) => {
  await page.goto("/display/");
  const card = page.locator('[data-font-preview="mioya"]');
  await card.scrollIntoViewIfNeeded();
  await expect(card).toHaveCSS("opacity", "1");
  await expect(card.locator("h1")).toHaveCSS("font-weight", "340");

  await card.click();
  await expect(page.locator("#overview h1")).toHaveCSS("font-weight", "340");
  const weights = await page.locator("#headlines [data-fit-line]").evaluateAll(
    (lines) => lines.map((line) => getComputedStyle(line).fontWeight)
  );
  expect(weights).toEqual(["100", "340", "700", "1000"]);
  const tester = page.getByRole("textbox", { name: "Try Mioya" });
  await expect(tester).toHaveCSS("font-weight", "340");
  await page.getByRole("slider", { name: "Weight" }).press("ArrowRight");
  await expect(tester).toHaveCSS("font-weight", "341");
  await page.getByRole("button", { name: "Reset font tester" }).click();
  await expect(tester).toHaveCSS("font-weight", "340");
  await page.locator("#glyphs").scrollIntoViewIfNeeded();
  await expect(page.locator("#glyph-grid button")).toHaveCount(451);
});

test("offers Playfair’s full variable axes in Roman and Italic", async ({ page }) => {
  await page.goto("/playfair/");
  await expect(page.locator("#overview h1")).toHaveText("Playfair");
  await expect(page.getByRole("link", { name: "Google Fonts", exact: true })).toHaveAttribute("href", "https://fonts.google.com/specimen/Playfair");
  const tester = page.getByRole("textbox", { name: "Try Playfair" });
  const opticalSize = page.getByRole("slider", { name: "Optical size", exact: true });
  const size = page.getByRole("slider", { name: "Size", exact: true });
  const width = page.getByRole("slider", { name: "Width", exact: true });
  await expect(width).toHaveValue("100");
  await expect(tester).toHaveCSS("font-optical-sizing", "auto");
  await expect(tester).toHaveCSS("font-variation-settings", /"wdth" 100/);
  await expect(tester).not.toHaveCSS("font-variation-settings", /"opsz"/);
  await size.press("Home");
  await expect(opticalSize).toHaveValue("16");
  await opticalSize.press("Home");
  await size.press("End");
  await expect(opticalSize).toHaveValue("5");
  await expect(tester).toHaveCSS("font-variation-settings", /"opsz" 5/);
  await page.getByRole("button", { name: "Reset font tester" }).click();
  await expect(tester).toHaveCSS("font-optical-sizing", "auto");
  await expect(opticalSize).toHaveValue("128");
  for (const style of ["Roman", "Italic"]) {
    await page.locator("#tester").getByLabel(style, { exact: true }).click();
    await expect(tester).toHaveCSS("font-style", style === "Italic" ? "italic" : "normal");
    const loaded = await page.evaluate(async (style) => {
      const faces = await document.fonts.load(`${style} 400 24px Playfair`, "Playfair");
      return faces.map((face) => face.family);
    }, style === "Italic" ? "italic" : "normal");
    expect(loaded).toContain("Playfair");
    for (const [name, min, max] of [["Weight", "360", "900"], ["Width", "88", "113"], ["Optical size", "5", "1200"]]) {
      const slider = page.getByRole("slider", { name, exact: true });
      await expect(slider).toHaveAttribute("min", min);
      await expect(slider).toHaveAttribute("max", max);
      await slider.press("End");
      await expect(slider).toHaveValue(max);
    }
  }
});
