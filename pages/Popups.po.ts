import { Locator, Page } from "@playwright/test";

export class PopupsPage {
    static async clickAlertButtonsAS(page: Page, text: string): Promise<void> {
        let popupButton = page.getByText(text); 
        
       return await popupButton.click();

    }

    static async getPopupsTitle(page: Page, text: string): Promise<Locator> {
        let alert = page.getByText(text); 
       return  alert;
    }

}