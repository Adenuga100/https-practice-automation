import { Locator, Page } from "@playwright/test";

export class HomePage {

    static  async clickNameButtonsAs(page : Page, text: string): Promise<void> {
      let delay = await page.getByText(text).click();
      return delay;
    }


    static async clickAjaxDataLoading(page: Page): Promise<void> {
        let ajaxDataLoadingBtn = page.getByText('Load AJAX Data'); 
       return await ajaxDataLoadingBtn.click();
    }
}