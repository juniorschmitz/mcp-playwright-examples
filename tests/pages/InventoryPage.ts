import { Page, Locator, expect } from '@playwright/test';

export class InventoryPage {
  private page: Page;
  private productsTitle: Locator;
  private cartIcon: Locator;
  private cartBadge: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productsTitle = page.getByText('Products');
    this.cartIcon = page.locator('.shopping_cart_link');
    this.cartBadge = page.locator('.shopping_cart_badge');
  }

  async addProductToCart(productName: string) {
    const productSelector = this.getProductSelector(productName);
    await productSelector.addToCartButton.click();
  }

  async verifyProductAddedToCart() {
    await expect(this.cartBadge).toBeVisible();
    await expect(this.cartBadge).toHaveText('1');
  }

  async verifyProductRemovedFromCart(productName: string) {
    const productSelector = this.getProductSelector(productName);
    await expect(productSelector.removeButton).toBeVisible();
  }

  async goToCart() {
    await this.cartIcon.click();
  }

  private getProductSelector(productName: string) {
    let selector: Locator;
    
    switch (productName) {
      case 'Sauce Labs Fleece Jacket':
        selector = this.page.locator('div').filter({ hasText: /^\$49\.99ADD TO CART$/ });
        break;
      default:
        throw new Error(`Product ${productName} not found`);
    }

    return {
      addToCartButton: selector.getByRole('button'),
      removeButton: this.page.locator('div').filter({ hasText: /^\$49\.99REMOVE$/ }).getByRole('button')
    };
  }
}
