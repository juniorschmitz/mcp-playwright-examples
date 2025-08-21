import { Page, Locator, expect } from '@playwright/test';

export interface CheckoutInformation {
  firstName: string;
  lastName: string;
  postalCode: string;
}

export class CheckoutInformationPage {
  private page: Page;
  private pageTitle: Locator;
  private firstNameInput: Locator;
  private lastNameInput: Locator;
  private postalCodeInput: Locator;
  private continueButton: Locator;
  private cancelButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pageTitle = page.getByText('Checkout: Your Information');
    this.firstNameInput = page.locator('[data-test="firstName"]');
    this.lastNameInput = page.locator('[data-test="lastName"]');
    this.postalCodeInput = page.locator('[data-test="postalCode"]');
    this.continueButton = page.getByRole('button', { name: 'CONTINUE' });
    this.cancelButton = page.getByRole('link', { name: 'CANCEL' });
  }

  async verifyCheckoutInformationPage() {
    await expect(this.page).toHaveURL('https://www.saucedemo.com/v1/checkout-step-one.html');
    await expect(this.pageTitle).toBeVisible();
  }

  async fillCheckoutInformation(info: CheckoutInformation) {
    await this.firstNameInput.fill(info.firstName);
    await this.lastNameInput.fill(info.lastName);
    await this.postalCodeInput.fill(info.postalCode);
  }

  async continueToOverview() {
    await this.continueButton.click();
  }
}
