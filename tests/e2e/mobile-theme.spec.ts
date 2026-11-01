import { expect, test } from "@playwright/test";

test.use({ browserName: "webkit", viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });

test.describe("mobile Safari themes", () => {
  for (const { system, saved, expected } of [
    { system: "dark", saved: null, expected: "dark" },
    { system: "light", saved: "dark", expected: "dark" },
    { system: "dark", saved: "light", expected: "light" }
  ] as const) {
    test(`applies ${saved ? `saved ${saved}` : "system dark"} before hydration`, async ({ page }) => {
      await page.emulateMedia({ colorScheme: system });
      await page.addInitScript((value) => {
        if (value) localStorage.setItem("bwt-theme", value);
      }, saved);
      await page.route(/\/_next\/.*\.js(?:\?.*)?$/, (route) => route.abort());
      await page.goto("/", { waitUntil: "domcontentloaded" });
      await expect.poll(() => page.evaluate(() => document.documentElement.classList.contains("dark")), { timeout: 2000 }).toBe(expected === "dark");
      await expect(page.locator("html")).toHaveCSS("color-scheme", expected);
    });
  }

  test("follows system changes until a manual choice is made", async ({ page }) => {
    await page.emulateMedia({ colorScheme: "dark" });
    await page.goto("/");
    await expect(page.getByRole("tab", { name: "Dark theme" })).toHaveAttribute("aria-selected", "true");
    await page.emulateMedia({ colorScheme: "light" });
    await expect(page.locator("html")).not.toHaveClass(/\bdark\b/);
    await expect(page.getByRole("tab", { name: "Light theme" })).toHaveAttribute("aria-selected", "true");
    await page.emulateMedia({ colorScheme: "dark" });
    await expect(page.locator("html")).toHaveClass(/\bdark\b/);
    expect(await page.evaluate(() => localStorage.getItem("bwt-theme"))).toBeNull();
    await page.getByRole("tab", { name: "Light theme" }).tap();
    await page.emulateMedia({ colorScheme: "light" });
    await page.emulateMedia({ colorScheme: "dark" });
    await expect(page.locator("html")).not.toHaveClass(/\bdark\b/);
  });

  test("keeps a manual dark choice across full page loads and reloads", async ({ page }) => {
    await page.emulateMedia({ colorScheme: "light" });
    await page.goto("/");
    await page.getByRole("tab", { name: "Dark theme" }).tap();
    await expect.poll(() => page.evaluate(() => localStorage.getItem("bwt-theme"))).toBe("dark");

    for (const path of ["/newsreader/", "/serif/", "/"]) {
      await page.goto(path);
      await expect(page.locator("html")).toHaveClass(/\bdark\b/);
      await expect(page.getByRole("tab", { name: "Dark theme" })).toHaveAttribute("aria-selected", "true");
    }
    await page.reload();
    await expect(page.locator("html")).toHaveClass(/\bdark\b/);
  });
});
