import test, { expect } from "@playwright/test";
import { HomePage } from "../pages/Home.po";
import { PopupsPage } from "../pages/Popups.po";

test("Alert Popup", async ({ page }) => {
    await page.goto("/");
    await HomePage.clickNameButtonsAs(page, "Popups");
    await PopupsPage.clickAlertButtonsAS(page, "Alert Popup");
    await expect(await PopupsPage.getPopupsTitle(page, "Alert Popup")).toBeVisible();
});

test("Confirm Popup", async ({ page }) => {
    await page.goto("/");
    await HomePage.clickNameButtonsAs(page, "Popups");
    await PopupsPage.clickAlertButtonsAS(page, "Confirm Popup");
    await expect(await PopupsPage.getPopupsTitle(page, "Cancel it is!")).toBeVisible();
});

test("Prompt Popup", async ({ page }) => {
    await page.goto("/");
    await HomePage.clickNameButtonsAs(page, "Popups");
    await PopupsPage.clickAlertButtonsAS(page, "Prompt Popup");
    await expect(await PopupsPage.getPopupsTitle(page, "Fine, be that way...")).toBeVisible();
});

test("Tooltip Popup", async ({ page }) => {
    await page.goto("/");
    await HomePage.clickNameButtonsAs(page, "Popups");
    await PopupsPage.clickAlertButtonsAS(page, "<< click me to see a tooltip >>");
    await PopupsPage.clickHomeMenus(page);
    await expect(await HomePage.getHomeTitle(page)).toBeVisible();
});
