import { Page } from "playwright";

export class CarritoPage {
  readonly page: Page;
  constructor(page: Page) { this.page = page; }

  async addFirstProductToCart() {
    await this.page.click('.ui-search-layout__item a'); // Primer producto
    await this.page.waitForSelector('button.andes-button--loud');
    await this.page.click('button.andes-button--loud'); // Botón "Comprar ahora" o "Agregar al carrito"
  }

  async isProductInCart(): Promise<boolean> {
    return this.page.isVisible('.cart-item__title'); 
  }
}