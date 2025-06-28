import { Page } from "playwright";

export class HomePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto("https://www.mercadolibre.com.ar");
  }

  async searchProduct(product: string) {
    await this.page.fill('input[name="as_word"]', product);
    await this.page.press('input[name="as_word"]', 'Enter');
  }
}