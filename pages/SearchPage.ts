import { Page } from "playwright";

export class SearchResultsPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async hasResults(): Promise<boolean> {
    return await this.page.locator('.ui-search-result').count() > 0;
  }
}