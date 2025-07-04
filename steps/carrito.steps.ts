import { When, Then, Given } from "@cucumber/cucumber";
import { chromium, Browser, Page, firefox } from "playwright";
import { CarritoPage } from "../pages/CarritoPage";
import assert from "assert";

let browser: Browser;
let page: Page;
let carritoPage: CarritoPage;

Given('que estoy en la web de Mercado Libre', async function () {
  browser = await firefox.launch({ headless: false }); // cambiar por firefox.launch() para alternar
  page = await browser.newPage();
  carritoPage = new CarritoPage(page);
  await page.goto("https://listado.mercadolibre.com.ar/mochila#D[A:mochila]");
});

When('agrego el primer producto al carrito', async function () {
  await carritoPage.addFirstProductToCart();
});

Then('veo el producto en el carrito', async function () {
  const inCart = await carritoPage.isProductInCart();
  await page.screenshot({ path: `reports/screenshot-${Date.now()}.png` });
  assert.strictEqual(inCart, true, "El producto no está en el carrito");
  await browser.close();
});