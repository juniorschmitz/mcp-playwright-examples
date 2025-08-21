import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
  private page: Page;
  private usernameInput: Locator;
  private passwordInput: Locator;
  private loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('[data-test="username"]');
    this.passwordInput = page.locator('[data-test="password"]');
    this.loginButton = page.getByRole('button', { name: 'LOGIN' });
  }

  async navigate() {
    await this.page.goto('https://www.saucedemo.com/v1/');
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async verifyLoginSuccess() {
    await expect(this.page).toHaveURL('https://www.saucedemo.com/v1/inventory.html');
    await expect(this.page.getByText('Products')).toBeVisible();
  }
}
