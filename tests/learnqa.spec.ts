import test, { expect } from "@playwright/test";
import { HomePage } from "../pages/Home.po";
import { SlidersPage } from "../pages/Sliders.po";

test("Sliders page", async ({ page }) => {
    await page.goto("/");
    await HomePage.clickNameButtonsBytext(page, "Sliders");
    await SlidersPage.dragAndDrop(page);
    await expect(await SlidersPage.getSliderTittle(page)).toBeVisible({timeout: 5000});

});

test("Navigate back to home page from Sliders page", async ({ page }) => {
    await page.goto("/");
    await HomePage.clickNameButtonsBytext(page, "Sliders");
    await SlidersPage.dragAndDrop(page);
    await SlidersPage.clickHomeMenu(page);
    await expect(await HomePage.getHomeTittle(page)).toBeVisible({timeout: 5000});

});
