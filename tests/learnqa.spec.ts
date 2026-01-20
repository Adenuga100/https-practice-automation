import test from "@playwright/test";
import { HomePage } from "../pages/Home.po";

test("JavaScript Delays", async ({ page }) => {
    await page.goto("/");

    await HomePage.clickNameButtonsBytext(page, "JavaScript Delays");

});
