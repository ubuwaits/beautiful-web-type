import { readdirSync } from "node:fs";

import { expect, test, type Page } from "@playwright/test";

async function expectPacked(page: Page) {
  await page.waitForFunction(() =>
    Array.from(document.querySelectorAll<HTMLElement>("[data-masonry]")).every(
      (node) => node.dataset.masonryReady === "true"
    ) && document.fonts.status === "loaded"
  );
  // Allow font-driven ResizeObserver updates to reach the next paint.
  await page.evaluate(() => new Promise<void>((resolve) =>
    requestAnimationFrame(() => requestAnimationFrame(() => resolve()))
  ));
  const errors = await page.locator("[data-masonry]").evaluateAll((containers) => {
    const errors: string[] = [];
    for (const container of containers) {
      const bounds = container.getBoundingClientRect();
      const gap = parseFloat(getComputedStyle(container).columnGap);
      const columns = window.innerWidth >= 1105 ? 2 : 1;
      const width = (bounds.width - gap * (columns - 1)) / columns;
      const bottoms = Array.from({ length: columns }, () => 0);
      const items = Array.from(container.children).flatMap((child) =>
        child.classList.contains("contents") ? Array.from(child.children) : [child]
      );
      for (const item of items) {
        const box = item.getBoundingClientRect();
        const column = columns === 1 || bottoms[0] <= bottoms[1] ? 0 : 1;
        if (Math.abs(box.x - bounds.x - column * (width + gap)) > 1 ||
            Math.abs(box.y - bounds.y - bottoms[column]) > 1 ||
            Math.abs(box.width - width) > 1) {
          errors.push(`Incorrect packing: ${item.className}`);
        }
        bottoms[column] += box.height + gap;
      }
      if (Math.abs(bounds.height - Math.max(...bottoms) + (items.length ? gap : 0)) > 1) {
        errors.push("Container does not end at the last card");
      }
    }
    return errors;
  });
  expect(errors).toEqual([]);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1)).toBe(true);
}

for (const width of [1440, 900, 390]) {
  test(`packs all typeface specimens at ${width}px`, async ({ page }) => {
    test.setTimeout(180_000);
    await page.setViewportSize({ width, height: 1000 });
    for (const slug of readdirSync("content/typefaces")) {
      await test.step(slug, async () => {
        await page.goto(`/${slug}/`);
        await expectPacked(page);
      });
    }
  });
}

test("reflows edited specimens and when switching column counts", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("/alegreya/");
  await expectPacked(page);
  const container = page.locator("[data-masonry]").first();
  const before = (await container.boundingBox())!.height;
  await page.locator(".examples-words h1").first().evaluate((node) => {
    node.textContent = "An edited specimen that wraps naturally. ".repeat(30);
    node.dispatchEvent(new Event("input", { bubbles: true }));
  });
  await expect.poll(async () => (await container.boundingBox())!.height).toBeGreaterThan(before);
  await expectPacked(page);
  for (const width of [390, 1440]) {
    await page.setViewportSize({ width, height: 1000 });
    await expectPacked(page);
  }
});

test("keeps other page layouts within the viewport", async ({ page }) => {
  for (const width of [1440, 900, 390]) {
    await page.setViewportSize({ width, height: 1000 });
    for (const route of ["/", "/serif/", "/sans-serif/", "/display/", "/monospaced/", "/pairings/", "/inter/glyphs/"]) {
      await page.goto(route);
      await expectPacked(page);
    }
  }
});

test("provides a readable grid before JavaScript", async ({ browser }) => {
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
  expect(boxes[1].x).toBeGreaterThan(boxes[0].x + boxes[0].width);
  expect(boxes[2].y).toBeGreaterThanOrEqual(Math.max(boxes[0].y + boxes[0].height, boxes[1].y + boxes[1].height));
  await context.close();
});


test("keeps consistent gutters between index cards", async ({ page }) => {
  for (const width of [1440, 900, 390]) {
    await page.setViewportSize({ width, height: 1000 });
    for (const route of ["/", "/display/", "/serif/", "/sans-serif/", "/monospaced/", "/pairings/"]) {
      await test.step(`${route} at ${width}px`, async () => {
        await page.goto(route);
        await expectPacked(page);
        const spacing = await page.locator(".samples").evaluate((container) => {
          const style = getComputedStyle(container);
          const cards = Array.from(container.querySelectorAll<HTMLElement>("[data-testid='typeface-card']"));
          const boxes = cards.map((card) => card.getBoundingClientRect());
          return {
            display: style.display,
            gap: parseFloat(style.rowGap),
            expectedGap: parseFloat(style.getPropertyValue("--gutter")) * parseFloat(style.fontSize),
            cardGaps: boxes.slice(1).map((box, i) => box.top - boxes[i].bottom)
          };
        });
        expect(spacing.display).toBe("grid");
        expect(spacing.gap).toBeGreaterThan(0);
        expect(spacing.gap).toBeCloseTo(spacing.expectedGap, 1);
        if (route !== "/pairings/") expect(spacing.cardGaps.length).toBeGreaterThan(0);
        for (const gap of spacing.cardGaps) expect(gap).toBeCloseTo(spacing.gap, 1);
      });
    }
  }
});
