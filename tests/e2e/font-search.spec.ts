import { expect, test } from "@playwright/test";

test.use({ hasTouch: true });

test("filters fonts by name and designer and navigates by keyboard", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Search fonts", exact: true }).click();
  const dialog = page.getByRole("dialog", { name: "Search fonts", exact: true });
  const input = dialog.getByRole("combobox");
  const results = dialog.getByRole("option");
  await expect(input).toBeFocused();
  await input.fill("plex mono");
  await expect(results).toHaveCount(1);
  await expect(results.first()).toContainText("IBM Plex Mono");
  await input.fill("rene bieder");
  await expect(results).toHaveCount(1);
  await expect(results.first()).toContainText("Strichpunkt Sans");

  await input.fill("libre caslon");
  await expect(results).toHaveCount(3);
  await input.press("ArrowDown");
  const selectedName = await dialog.locator('[cmdk-item][aria-selected="true"]').getAttribute("data-value");
  await input.press("Enter");
  await expect(page).toHaveURL(new RegExp(`/${selectedName!.toLowerCase().replaceAll(" ", "-")}/$`));
  await expect(dialog).not.toBeVisible();
});

test("handles empty results, Escape, shortcuts, pointer navigation, and resetting the search", async ({ page }) => {
  await page.goto("/inter/");
  const trigger = page.getByRole("button", { name: "Search fonts", exact: true });
  await page.keyboard.press("Control+k");
  const dialog = page.getByRole("dialog", { name: "Search fonts", exact: true });
  const input = dialog.getByRole("combobox");
  await expect(input).toBeFocused();
  await input.fill("zzzz-no-font");
  await expect(dialog.getByText("No fonts found.")).toBeVisible();
  await expect(dialog.getByRole("option")).toHaveCount(0);
  await input.press("Enter");
  await expect(page).toHaveURL(/\/inter\/$/);
  await page.keyboard.press("Escape");
  await expect(dialog).not.toBeVisible();
  await expect(trigger).toBeFocused();
  await trigger.click();
  await expect(input).toHaveValue("");
  await input.fill("newsreader");
  await dialog.getByRole("option", { name: /Newsreader/ }).click();
  await expect(page).toHaveURL(/\/newsreader\/$/);
  await expect(dialog).not.toBeVisible();
});

test("keeps the search accessible and contained on a narrow screen", async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 568 });
  await page.goto("/");
  const trigger = page.getByRole("button", { name: "Search fonts", exact: true });
  await expect(trigger).toBeInViewport();
  await trigger.tap();
  const dialog = page.getByRole("dialog", { name: "Search fonts", exact: true });
  await expect(dialog.getByRole("combobox")).toBeFocused();
  const bounds = await dialog.boundingBox();
  expect(bounds!.x).toBeGreaterThanOrEqual(8);
  expect(bounds!.x + bounds!.width).toBeLessThanOrEqual(312);
  expect(bounds!.y).toBeGreaterThanOrEqual(8);
  expect(bounds!.y + bounds!.height).toBeLessThanOrEqual(560);
  await expect(page.locator("html")).toHaveJSProperty("scrollWidth", 320);
  await dialog.getByRole("button", { name: "Close search" }).click();
  await expect(dialog).not.toBeVisible();
  await expect(trigger).toBeFocused();
});
