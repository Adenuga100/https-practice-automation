import test from "@playwright/test";
import { HomePage } from "../pages/Home.po";
import { JavascriptDelayPage } from "../pages/Javascriptdelay.po";

test("JavaScript Delays", async ({ page }) => {
    await page.goto("/");
    await HomePage.clickNameButtonsBytext(page, "JavaScript Delays");
    await JavascriptDelayPage.clickJavascriptDelayButton(page);
    await JavascriptDelayPage.getTittle(page).isVisible({ timeout: 20000 });

});
