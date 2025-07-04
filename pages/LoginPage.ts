import { Page } from "playwright";

export class LoginPage {
  readonly page: Page;
  constructor(page: Page) { this.page = page; }

  async goto() {
    await this.page.goto("https://www.mercadolibre.com.ar/");
    await this.page.click('a[data-link-id="login"]');
  }

  async login(email: string, password: string) {
    await this.page.fill('input[type="email"]', email);
    await this.page.click('button[type="submit"]');
    await this.page.fill('input[type="password"]', password);
    await this.page.click('button[type="submit"]');
  }
}