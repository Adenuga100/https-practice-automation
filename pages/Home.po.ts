import { Locator, Page } from "@playwright/test";

export class HomePage {

  static  async clickNameButtonsBytext (page : Page, text: string): Promise<void> {
    let delay = await page.getByText(text).click();
    return delay;
  }


  static async clickAjaxDataLoading(page: Page): Promise<void> {
    let ajaxDataLoadingBtn = page.getByText('Load AJAX Data'); 
    return await ajaxDataLoadingBtn.click();
  }

  static async getHomeTitle(page: Page): Promise<Locator> {
    let formTitle = page.getByText('Welcome to your software automation practice website! '); 
     await formTitle.scrollIntoViewIfNeeded();
     return formTitle;

    }

  
}