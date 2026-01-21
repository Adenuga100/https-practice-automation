import test, { expect } from "@playwright/test";
import { HomePage } from "../pages/Home.po";
import { JavascriptDelayPage } from "../pages/Javascriptdelay.po";

test("JavaScript Delays", async ({ page }) => {
    await page.goto("/");
    await HomePage.clickNameButtonsBytext(page, "JavaScript Delays");
    await JavascriptDelayPage.clickJavascriptDelayButton(page);
    await expect(JavascriptDelayPage.getTittle(page)).toBeVisible({ timeout: 20000 });

});

test("Navigate back to Home page from JavaScript Delays page", async ({ page }) => {
    await page.goto("/");
    await HomePage.clickNameButtonsBytext(page, "JavaScript Delays");
    await JavascriptDelayPage.clickJavascriptDelayButton(page);
    await expect(JavascriptDelayPage.getTittle(page)).toBeVisible({ timeout: 20000 });
    await JavascriptDelayPage.clickHomeMenus(page);
    await expect(HomePage.getHomeTitle(page)).toBeVisible({ timeout: 5000 });

});
