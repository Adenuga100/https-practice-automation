import { Locator, Page } from "@playwright/test";

export class JavascriptDelayPage {
    static async clickJavascriptDelayButton(page: Page): Promise<void> {
        let jsDelayButton = page.getByRole('button', { name: 'Start' }); 
        jsDelayButton.scrollIntoViewIfNeeded();
       return await jsDelayButton.click();
    }

    static   getTittle(page: Page): Locator {
        let jsDelayButton = page.getByText('Liftoff!'); 
        return jsDelayButton;
    }
}