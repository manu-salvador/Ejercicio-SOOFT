import { Given, When, Then } from "@cucumber/cucumber";
import { chromium, Browser, Page, firefox } from "playwright";
import { LoginPage } from "../pages/LoginPage";
import assert from "assert";

let browser: Browser;
let page: Page;
let loginPage: LoginPage;

Given('que estoy en la página de login', async function () {
  browser = await firefox.launch({ headless: false }); // cambiar por firefox.launch() para alternar
  page = await browser.newPage();
  loginPage = new LoginPage(page);
  await loginPage.goto();
});

When('inicio sesión con usuario {string} y contraseña {string}', async function (email: string, password: string) {
  await loginPage.login(email, password);
});

Then('veo mi nombre de usuario {string} en la página', async function (username: string) {
  const userVisible = await page.isVisible(`text=${username}`);
  await page.screenshot({ path: `reports/screenshot-${Date.now()}.png` });
  assert.strictEqual(userVisible, true, "El usuario no está logueado correctamente");
  await browser.close();
});