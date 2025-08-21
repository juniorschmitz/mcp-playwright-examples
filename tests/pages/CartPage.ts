import { Page, Locator, expect } from '@playwright/test';

export class CartPage {
  private page: Page;
  private pageTitle: Locator;
  private checkoutButton: Locator;
  private continueShoppingButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pageTitle = page.getByText('Your Cart');
    this.checkoutButton = page.getByRole('link', { name: 'CHECKOUT' });
    this.continueShoppingButton = page.getByRole('link', { name: 'Continue Shopping' });
  }

  async verifyCartPage() {
    await expect(this.page).toHaveURL('https://www.saucedemo.com/v1/cart.html');
    await expect(this.pageTitle).toBeVisible();
  }

  async verifyProductInCart(productName: string, price: string) {
    await expect(this.page.getByText(productName)).toBeVisible();
    await expect(this.page.getByText(price)).toBeVisible();
  }

  async proceedToCheckout() {
    await this.checkoutButton.click();
  }
}
