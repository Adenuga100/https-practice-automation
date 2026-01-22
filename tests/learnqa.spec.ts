import test, { expect } from "@playwright/test";
import { HomePage } from "../pages/Home.po";
import { FormFieldsPage } from "../pages/Formfields.po";

test("Form fields", async ({ page }) => {
    await page.goto("/");
    await HomePage.clickNameButtonsBytext(page, "Form Fields");
    await FormFieldsPage.fillNameAs(page, "John");
    await FormFieldsPage.fillPasswordAs(page, "secret123");
    await FormFieldsPage.clickFavoriteDrinks(page);
    await FormFieldsPage.clickFavoriteColors(page);
    await FormFieldsPage.selectAutomationYoulike(page);
    await FormFieldsPage.fillEmailAs(page, "john@example.com");
    await FormFieldsPage.fillMessageAs(page, "Hello, this is a test message.");
    await FormFieldsPage.clickSubmit(page);
    await expect( await FormFieldsPage.getFormTitle(page)).toBeVisible({ timeout: 5000 });
    // await FormFieldsPage.handleAlert(page, 'accept');

});

test("Navigate back to home page from Form Fields", async ({ page }) => {
    await page.goto("/");
    await HomePage.clickNameButtonsBytext(page, "Form Fields");
    await FormFieldsPage.fillNameAs(page, "John");
    await FormFieldsPage.fillPasswordAs(page, "secret123");
    await FormFieldsPage.clickFavoriteDrinks(page);
    await FormFieldsPage.clickFavoriteColors(page);
    await FormFieldsPage.selectAutomationYoulike(page);
    await FormFieldsPage.fillEmailAs(page, "john@example.com");
    await FormFieldsPage.fillMessageAs(page, "Hello, this is a test message.");
    await FormFieldsPage.clickSubmit(page);
    await FormFieldsPage.clickHome(page);
    await expect( await HomePage.getHomeTitle(page)).toBeVisible({ timeout: 5000 });
    // await FormFieldsPage.getFormTitle(page);
   
});
