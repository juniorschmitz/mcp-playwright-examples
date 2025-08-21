import { Page, Locator, expect } from '@playwright/test';

export class CheckoutCompletePage {
  private page: Page;
  private thankYouHeader: Locator;
  private completionMessage: Locator;
  private cartIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.thankYouHeader = page.getByRole('heading', { name: 'THANK YOU FOR YOUR ORDER' });
    this.completionMessage = page.getByText('Your order has been dispatched, and will arrive just as fast as the pony can get there!');
    this.cartIcon = page.locator('.shopping_cart_link');
  }

  async verifyCheckoutCompletePage() {
    await expect(this.page).toHaveURL('https://www.saucedemo.com/v1/checkout-complete.html');
  }

  async verifyOrderCompletion() {
    await expect(this.thankYouHeader).toBeVisible();
    await expect(this.completionMessage).toBeVisible();
  }

  async verifyCartIsEmpty() {
    await expect(this.page.getByRole('link', { name: '1' })).not.toBeVisible();
  }
}
