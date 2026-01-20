import { Locator, Page } from "@playwright/test";

export class FormFieldsPage {
    static async fillNameAs(page: Page, text: string): Promise<void> {
        let nameInput = page.locator('[id="name-input"]'); 
       return await nameInput.fill(text);
    }

    
    static async fillPasswordAs(page: Page, text: string): Promise<void> {
        let passwordInput = page.locator('[type="password"]'); 
       return await passwordInput.fill(text);
    }

    static async fillEmailAs(page: Page, text: string): Promise<void> {
        let emailInput = page.locator('[id="email"]'); 
       await emailInput.scrollIntoViewIfNeeded();
       return await emailInput.fill(text);
    }

    static async fillMessageAs(page: Page, text: string): Promise<void> {
        let messageInput = page.locator('[id="message"]'); 
        await messageInput.scrollIntoViewIfNeeded();
       return await messageInput.fill(text);
    }

    static async clickSubmit(page: Page): Promise<void> {
        let submitButton = page.locator('[id="submit-btn"]'); 
        await submitButton.scrollIntoViewIfNeeded();
       return await submitButton.click();
    }

    // static async clickAlert(page: Page): Promise<void> {
    // //     let submitButton = page.locator('[id="submit-btn"]'); 
    // //     submitButton.scrollIntoViewIfNeeded();
    // //    return await submitButton.click();
    //    await dialog.accept();

    // }

    static async handleAlert(page: Page, action: 'accept' | 'dismiss', text?: string) {
       const dialog = await page.waitForEvent('dialog');

        if (action === 'accept') {
          await dialog.accept(text);
        } else {
          await dialog.dismiss();
        }
   }

   
    static async clickFavoriteDrinks(page: Page): Promise<void> {
        let favoriteDrinks = page.locator('[type="checkbox"]'); 
       
        let count = await favoriteDrinks.count();
        let randomIndex = Math.floor(Math.random() * count);
        await favoriteDrinks.nth(randomIndex).scrollIntoViewIfNeeded();
       return await favoriteDrinks.nth(randomIndex).check();
    }

    static async clickFavoriteColors(page: Page): Promise<void> {
        let favoriteColors  = page.locator('[type="radio"]'); 
        let count = await favoriteColors.count();
        let randomIndex = Math.floor(Math.random() * count);
        await favoriteColors.nth(randomIndex).scrollIntoViewIfNeeded();
        return await favoriteColors.nth(randomIndex).click();
    }

    static async selectAutomationYoulike(page: Page): Promise<void> {
        let dropdown = page.locator('[id="automation"]');
        dropdown.scrollIntoViewIfNeeded();
        let  options = await dropdown.locator('option').count();

        let randomIndex = Math.floor(Math.random() * options);

        await dropdown.selectOption({ index: randomIndex });
        return;
    }

    static async getFormTitle(page: Page): Promise<Locator> {
        let formTitle = page.locator('[class="breadcrumbs"]'); 
        await formTitle.scrollIntoViewIfNeeded();
        return formTitle;

    }

}