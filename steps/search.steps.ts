import { Given, When, Then } from "@cucumber/cucumber";
import { chromium, firefox, Browser, Page } from "playwright";
import { HomePage } from "../pages/HomePage";
import { SearchPage } from "../pages/SearchPage";
import * as api from "../api/api.mercadolibre";
import assert from "assert";

let browser: Browser;
let page: Page;
let homePage: HomePage;
let searchPage: SearchPage;

Given('que estoy en la pagina de Mercado Libre', async function () {
  browser = await firefox.launch({ headless: false }); // cambiar por firefox.launch() para alternar
  page = await browser.newPage();
  homePage = new HomePage(page);
  searchPage = new SearchPage(page);
  await homePage.goto();
});

When('busco un {string} con almacenamiento {string}', async function (product: string, storage: string) {
  await homePage.searchProduct(`${product} ${storage}`);
});

When('busco un {string}', async function (product: string) {
  await homePage.searchProduct(product);
});

Then('veo resultados de busqueda que contienen el producto', async function () {
  const hasResults = await searchPage.hasResults();
  await page.screenshot({ path: `reports/screenshot-${Date.now()}.png` });
  assert.strictEqual(hasResults, true, 'No se encontraron resultados');
  await browser.close();
});

Then('veo resultados de busqueda que no contienen el producto', async function () {
  const hasResults = await searchPage.hasResults();
  await page.screenshot({ path: `reports/screenshot-${Date.now()}.png` });
  assert.strictEqual(hasResults, false, 'No se encontraron resultados');
  await browser.close();
});

When('consulto la API de configuracion', async function () {
  this.sitesResponse = await api.getSites();
  this.currenciesResponse = await api.getCurrencies();
  this.countriesResponse = await api.getCountries();
});

Then('encuentro correctamente los datos de sitios, monedas y países', function () {
  assert.strictEqual(this.sitesResponse.status, 200);
  assert.strictEqual(this.currenciesResponse.status, 200);
  assert.strictEqual(this.countriesResponse.status, 200);
});


