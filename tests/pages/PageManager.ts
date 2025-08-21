import { Page } from '@playwright/test';
import { LoginPage } from './LoginPage';
import { InventoryPage } from './InventoryPage';
import { CartPage } from './CartPage';
import { CheckoutInformationPage } from './CheckoutInformationPage';
import { CheckoutOverviewPage } from './CheckoutOverviewPage';
import { CheckoutCompletePage } from './CheckoutCompletePage';

export class PageManager {
  private page: Page;
  
  public loginPage: LoginPage;
  public inventoryPage: InventoryPage;
  public cartPage: CartPage;
  public checkoutInformationPage: CheckoutInformationPage;
  public checkoutOverviewPage: CheckoutOverviewPage;
  public checkoutCompletePage: CheckoutCompletePage;

  constructor(page: Page) {
    this.page = page;
    this.loginPage = new LoginPage(page);
    this.inventoryPage = new InventoryPage(page);
    this.cartPage = new CartPage(page);
    this.checkoutInformationPage = new CheckoutInformationPage(page);
    this.checkoutOverviewPage = new CheckoutOverviewPage(page);
    this.checkoutCompletePage = new CheckoutCompletePage(page);
  }
}
