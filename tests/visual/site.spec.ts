import { expect, test } from "@playwright/test";

const pages = ["/", "/about", "/services", "/gallery", "/faq", "/contact", "/privacy"];

test.describe("RS Junk Removal visual checks", () => {
  test.use({ reducedMotion: "reduce" });

  for (const path of pages) {
    test(`navbar overlay on ${path}`, async ({ page }) => {
      await page.goto(path);
      await page.getByRole("button", { name: /open menu/i }).click();
      await expect(page.getByTestId("navbar-overlay")).toHaveScreenshot(`navbar-overlay-${path.replace(/\W+/g, "-")}.png`, {
        animations: "disabled",
        maxDiffPixelRatio: 0.03,
      });
    });
  }

  test("loader uses RS logo", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByTestId("page-loader")).toHaveScreenshot("loader.png", {
      animations: "disabled",
      maxDiffPixelRatio: 0.03,
    });
  });

  test("home hero orbit area", async ({ page }) => {
    await page.goto("/");
    await page.getByTestId("page-loader").waitFor({ state: "detached" });
    await expect(page.getByTestId("hero-orbit")).toHaveScreenshot("hero-orbit.png", {
      animations: "disabled",
      maxDiffPixelRatio: 0.03,
    });
  });
});