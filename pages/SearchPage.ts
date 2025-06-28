import { Page } from "playwright";

export class SearchPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async hasResults(): Promise<boolean> {
    await this.page.waitForSelector('.ui-search-layout__item, .ui-search-search-result__wrapper', { timeout: 10000 });
    const results = await this.page.$$('.ui-search-layout__item');
    return results.length > 0;
  }
}