import { expect, test } from "@playwright/test";
import { typefaceData } from "../../content/typefaces";

// Exercise the authored data through the actual page, including responsive sizes,
// inherited styles, table features, and repeated case-study text roles.
test("uses the authored website typography for every text role", async ({ page }) => {
  for (const width of [1440, 390]) {
    await page.setViewportSize({ width, height: 1000 });
    for (const slug of ["alegreya-sans", "fraunces", "dm-sans"]) {
      const typography = typefaceData.find((font) => font.slug === slug)!.websiteHero;
      await page.goto(`/${slug}/`);
      const actual = await page.locator("#website-hero").evaluate((root, config) => {
        const settings = (value: string) => Object.fromEntries(
          Array.from(value.matchAll(/["']([^"']+)["'](?:\s+(-?[\d.]+))?/g), (match) => [match[1], Number(match[2] ?? 1)])
        );
        const result = Array.from(root.querySelectorAll<HTMLElement>("[data-web-text]"), (element) => {
          const role = element.dataset.webText as keyof typeof config;
          const authored = config[role];
          const size = innerWidth >= 1105 ? authored.desktopSize ?? authored.size : authored.size;
          const probe = document.createElement("span");
          probe.style.fontSize = typeof size === "number" ? `${size}px` : size;
          root.appendChild(probe);
          const expectedSize = parseFloat(getComputedStyle(probe).fontSize);
          probe.remove();
          const style = getComputedStyle(element);
          return {
            role,
            expectedSize,
            size: parseFloat(style.fontSize),
            weight: Number(style.fontWeight),
            italic: style.fontStyle === "italic",
            lineHeight: parseFloat(style.lineHeight),
            transform: style.textTransform,
            features: settings(style.fontFeatureSettings),
            axes: settings(style.fontVariationSettings)
          };
        });
        return result;
      }, typography);
      expect(new Set(actual.map((text) => text.role)).size).toBe(Object.keys(typography).length);
      for (const text of actual) {
        const authored = typography[text.role];
        expect(text.size).toBeCloseTo(text.expectedSize, 1);
        expect(text.weight).toBe(authored.weight);
        expect(text.italic).toBe(Boolean(authored.italic));
        expect(text.lineHeight).toBeCloseTo(typeof authored.lineHeight === "number"
          ? authored.lineHeight * text.size : parseFloat(authored.lineHeight), 1);
        expect(text.transform).toBe(authored.textTransform ?? "none");
        expect(text.features).toEqual(authored.features === "normal" ? {} : authored.features ?? {});
        expect(text.axes).toEqual(authored.axes ?? {});
      }
      await expect(page.locator("[data-case-study]")).toHaveCount(4);
    }
  }
});
