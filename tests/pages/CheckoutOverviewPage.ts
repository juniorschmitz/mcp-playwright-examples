import { Page, Locator, expect } from '@playwright/test';

export class CheckoutOverviewPage {
  private page: Page;
  private pageTitle: Locator;
  private finishButton: Locator;
  private cancelButton: Locator;
  private itemTotal: Locator;
  private tax: Locator;
  private total: Locator;
  private paymentInfo: Locator;
  private shippingInfo: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pageTitle = page.getByText('Checkout: Overview');
    this.finishButton = page.getByRole('link', { name: 'FINISH' });
    this.cancelButton = page.getByRole('link', { name: 'CANCEL' });
    this.itemTotal = page.getByText('Item total: $49.99');
    this.tax = page.getByText('Tax: $4.00');
    this.total = page.getByText('Total: $53.99');
    this.paymentInfo = page.getByText('SauceCard #31337');
    this.shippingInfo = page.getByText('FREE PONY EXPRESS DELIVERY!');
  }

  async verifyCheckoutOverviewPage() {
    await expect(this.page).toHaveURL('https://www.saucedemo.com/v1/checkout-step-two.html');
    await expect(this.pageTitle).toBeVisible();
  }

  async verifyProductInOverview(productName: string) {
    await expect(this.page.getByText(productName)).toBeVisible();
  }

  async verifyOrderSummary() {
    await expect(this.itemTotal).toBeVisible();
    await expect(this.tax).toBeVisible();
    await expect(this.total).toBeVisible();
  }

  async verifyPaymentAndShipping() {
    await expect(this.paymentInfo).toBeVisible();
    await expect(this.shippingInfo).toBeVisible();
  }

  async finishPurchase() {
    await this.finishButton.click();
  }
}
