import { readdirSync } from "node:fs";

import { expect, test, type Page } from "@playwright/test";

const typefaceSlugs = readdirSync("content/typefaces", { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name);

async function expectWithinViewport(page: Page) {
  await page.evaluate(() => document.fonts.ready);
  // Allow font-driven ResizeObserver updates to reach the next paint.
  await page.evaluate(() => new Promise<void>((resolve) =>
    requestAnimationFrame(() => requestAnimationFrame(() => resolve()))
  ));
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1)).toBe(true);
}

for (const width of [1440, 900, 390]) {
  test(`keeps all typeface specimens within the viewport at ${width}px`, async ({ page }) => {
    test.setTimeout(180_000);
    await page.setViewportSize({ width, height: 1000 });
    for (const slug of typefaceSlugs) {
      await test.step(slug, async () => {
        await page.goto(`/${slug}/`);
        await expectWithinViewport(page);
      });
    }
  });
}

test("fits edited specimens continuously as their container resizes", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("/alegreya/");
  await expectWithinViewport(page);
  const line = page.locator(".examples-words h1").first();
  const before = await line.evaluate((node) => parseFloat(getComputedStyle(node).fontSize));
  await line.evaluate((node) => {
    node.textContent = "An edited specimen that fits on one line.";
    node.dispatchEvent(new Event("input", { bubbles: true }));
  });
  await expect.poll(() => line.evaluate((node) => parseFloat(getComputedStyle(node).fontSize))).toBeLessThan(before);
  for (const width of [390, 900, 1440]) {
    await page.setViewportSize({ width, height: 1000 });
    await expectWithinViewport(page);
    const sizes = await line.evaluate((node) => ({
      text: node.getBoundingClientRect().width,
      container: node.parentElement!.clientWidth,
      height: node.getBoundingClientRect().height,
      fontSize: parseFloat(getComputedStyle(node).fontSize)
    }));
    expect(sizes.text).toBeLessThanOrEqual(sizes.container);
    expect(sizes.text).toBeGreaterThan(sizes.container * 0.9);
    expect(sizes.height).toBeLessThan(sizes.fontSize * 1.3);
  }
});

test("keeps other page layouts within the viewport", async ({ page }) => {
  for (const width of [1440, 900, 390]) {
    await page.setViewportSize({ width, height: 1000 });
    for (const route of ["/", "/serif/", "/sans-serif/", "/display/", "/monospaced/", "/inter/#glyphs"]) {
      await page.goto(route);
      await expectWithinViewport(page);
    }
  }
});

test("provides readable full-width specimens before JavaScript", async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 1440, height: 1000 } });
  const page = await context.newPage();
  await page.goto("/alegreya/");
  const cards = page.locator(".examples-characters, .examples-words, .examples-headlines");
  const boxes = await cards.evaluateAll((nodes) => nodes.map((node) => {
    const { x, y, width, height } = node.getBoundingClientRect();
    return { x, y, width, height };
  }));
  expect(boxes).toHaveLength(3);
  expect(boxes[0].width).toBeGreaterThan(600);
  expect(boxes[1].x).toBe(boxes[0].x);
  expect(boxes[1].width).toBe(boxes[0].width);
  expect(boxes[1].y).toBeGreaterThanOrEqual(boxes[0].y + boxes[0].height);
  expect(boxes[2].y).toBeGreaterThanOrEqual(Math.max(boxes[0].y + boxes[0].height, boxes[1].y + boxes[1].height));
  await context.close();
});


test("keeps consistent gutters between index cards", async ({ page }) => {
  for (const width of [1440, 900, 390]) {
    await page.setViewportSize({ width, height: 1000 });
    for (const route of ["/", "/display/", "/serif/", "/sans-serif/", "/monospaced/"]) {
      await test.step(`${route} at ${width}px`, async () => {
        await page.goto(route);
        await expectWithinViewport(page);
        const spacing = await page.getByTestId("font-grid").evaluate((container) => {
          const style = getComputedStyle(container);
          const cards = Array.from(container.querySelectorAll<HTMLElement>("[data-testid='typeface-card']"));
          const boxes = cards.map((card) => card.getBoundingClientRect());
          const columns = window.innerWidth > 720 ? 2 : 1;
          return {
            display: style.display,
            gap: parseFloat(style.rowGap),
            expectedGap: parseFloat(style.getPropertyValue("--gutter")) * parseFloat(style.fontSize),
            cardGaps: boxes.slice(columns).map((box, i) => box.top - boxes[i].bottom),
            columnGaps: columns === 2 ? boxes.filter((_, i) => i % 2 === 1).map((box, i) => box.left - boxes[i * 2].right) : [],
            centerOffsets: columns === 2 ? boxes.filter((_, i) => i % 2 === 1).map((box, i) => box.top + box.height / 2 - boxes[i * 2].top - boxes[i * 2].height / 2) : []
          };
        });
        expect(spacing.display).toBe("grid");
        expect(spacing.gap).toBeGreaterThan(0);
        expect(spacing.gap).toBeCloseTo(spacing.expectedGap, 1);
        expect(spacing.cardGaps.length).toBeGreaterThan(0);
        for (const gap of spacing.cardGaps) expect(gap).toBeCloseTo(spacing.gap, 1);
        for (const gap of spacing.columnGaps) expect(gap).toBeCloseTo(spacing.gap, 1);
        for (const offset of spacing.centerOffsets) expect(offset).toBeCloseTo(0, 1);
      });
    }
  }
});

test("loads the complete inline glyph grid for every typeface", async ({ page }) => {
  test.setTimeout(180_000);
  for (const slug of typefaceSlugs) {
    await test.step(slug, async () => {
      await page.goto(`/${slug}/#glyphs`);
      const grid = page.locator("#glyph-grid");
      await expect(grid.locator("button").first()).toBeAttached();
      const count = Number(await grid.getAttribute("data-glyph-count"));
      expect(count).toBeGreaterThan(0);
      await expect(grid.locator("button")).toHaveCount(count);
      await expect(page.locator("#glyphs [role=alert]")).toHaveCount(0);
    });
  }
});

test("uses preview subsets on indexes and full fonts for specimens", async ({ page }) => {
  const uiFamilies = new Set(["Alegreya Sans", "Source Sans Variable"]);
  for (const route of ["/", "/sans-serif/", "/serif/", "/display/", "/monospaced/"]) {
    await page.goto(route);
    await expectWithinViewport(page);
    const firstSix = await page.getByTestId("typeface-card").evaluateAll((cards) =>
      cards.slice(0, 6).map((card) => {
        const slug = card.querySelector("a")!.pathname.split("/")[1];
        return `/assets/font-previews/${slug}.woff2`;
      })
    );
    const preloads = page.locator('head link[rel="preload"][as="font"][href^="/assets/font-previews/"]');
    expect(await preloads.evaluateAll((links) => links.map((link) => link.getAttribute("href")))).toEqual(firstSix);
    const loadedFamilies = await page.evaluate(() => Array.from(document.fonts)
      .filter((face) => face.status === "loaded").map((face) => face.family.replace(/["']/g, "")));
    expect(loadedFamilies.some((family) => family.startsWith("BWT Preview "))).toBe(true);
    expect(loadedFamilies.filter((family) => !family.startsWith("BWT Preview ") && !uiFamilies.has(family))).toEqual([]);
  }
  await page.goto("/inter/");
  await expectWithinViewport(page);
  await expect(page.locator("#overview h1")).toHaveCSS("font-family", /Inter/);
  expect(await page.evaluate(() => Array.from(document.fonts)
    .some((face) => face.status === "loaded" && face.family.includes("Inter")))).toBe(true);
});

test("reveals the first card title only after its preview font is loaded and fitted", async ({ page }) => {
  let releaseFont!: () => void;
  const blocked = new Promise<void>((resolve) => { releaseFont = resolve; });
  await page.route("**/assets/font-previews/*.woff2", async (route) => {
    await blocked;
    await route.continue();
  });

  await page.goto("/", { waitUntil: "domcontentloaded" });
  const card = page.getByTestId("typeface-card").first();
  const title = card.locator("[data-font-preview]");
  try {
    await expect(title).toHaveCSS("opacity", "0");
    await expect(card.locator("p")).toBeVisible();
  } finally {
    releaseFont();
  }
  await expect(title).toHaveCSS("opacity", "1");
  expect(await title.evaluate((element) => {
    const style = getComputedStyle(element);
    return document.fonts.check(`400 160px ${style.fontFamily}`, element.textContent ?? "")
      && Number.parseFloat(style.getPropertyValue("--specimen-scale")) > 0;
  })).toBe(true);
});

test("activates a distant card's preview font when it receives keyboard focus", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await expectWithinViewport(page);
  const card = page.getByTestId("typeface-card").last();
  const link = card.getByRole("link");
  const slug = (await link.getAttribute("href"))!.split("/").filter(Boolean)[0];
  const family = `BWT Preview ${slug}`;
  const fontLoaded = () => page.evaluate((family) => Array.from(document.fonts)
    .some((face) => face.family.replace(/["']/g, "") === family && face.status === "loaded"), family);
  expect(await fontLoaded()).toBe(false);
  const height = await page.evaluate(() => document.documentElement.scrollHeight);
  await expect(link).toHaveAccessibleName(/\S/);

  let releaseFont!: () => void;
  let fontRequested!: () => void;
  const blocked = new Promise<void>((resolve) => { releaseFont = resolve; });
  const requested = new Promise<void>((resolve) => { fontRequested = resolve; });
  await page.route(`**/assets/font-previews/${slug}.woff2`, async (route) => {
    fontRequested();
    await blocked;
    await route.continue();
  });
  await link.focus();
  await requested;
  try {
    await expect(card.locator("[data-font-preview]")).toHaveCSS("opacity", "0");
  } finally {
    releaseFont();
  }
  await expect.poll(fontLoaded).toBe(true);
  await expect(card.locator("[data-font-preview]")).toHaveCSS("opacity", "1");
  await expect.poll(() => card.locator("h1").evaluate((heading) =>
    heading.parentElement!.getBoundingClientRect().width / heading.closest("a")!.getBoundingClientRect().width
  )).toBeLessThanOrEqual(0.86);
  expect(await page.evaluate(() => document.documentElement.scrollHeight)).toBe(height);
  await expect(link).toBeFocused();
});
