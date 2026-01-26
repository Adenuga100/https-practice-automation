import { Locator, Page } from "@playwright/test";

export class SlidersPage {
    static async dragAndDrop(page: Page): Promise<void> {
        let source = page.locator('input[id="slideMe"]'); 
        let target = page.locator('input[id="slideMe"]'); 
        
       await source.dragTo(target);
    }

    static async getSliderTittle(page: Page): Promise<Locator> {
        let source = page.getByText('Current value: '); 
        await source.scrollIntoViewIfNeeded();
       return source;
    }

    static async clickHomeMenu(page: Page): Promise<void> {
        let homeMenu = page.getByText('Home'); 
        await homeMenu.scrollIntoViewIfNeeded();
        return await homeMenu.click();
    }

}