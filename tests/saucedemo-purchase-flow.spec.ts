import { test } from '@playwright/test';
import { PageManager } from './pages/PageManager';
import { testData } from './data/testData';

test.describe('SauceDemo Purchase Flow', () => {
  test('should complete purchase flow for Sauce Labs Fleece Jacket', async ({ page }) => {
    // Arrange - Initialize page objects and test data
    const pageManager = new PageManager(page);
    const user = testData.users.standardUser;
    const product = testData.products.fleeceJacket;
    const checkoutInfo = testData.checkoutInfo.validUser;
    
    // Act & Assert - Login
    await pageManager.loginPage.navigate();
    await pageManager.loginPage.login(user.username, user.password);
    await pageManager.loginPage.verifyLoginSuccess();
    
    // Act & Assert - Add product to cart
    await pageManager.inventoryPage.addProductToCart(product.name);
    await pageManager.inventoryPage.verifyProductAddedToCart();
    await pageManager.inventoryPage.verifyProductRemovedFromCart(product.name);
    
    // Act & Assert - View cart
    await pageManager.inventoryPage.goToCart();
    await pageManager.cartPage.verifyCartPage();
    await pageManager.cartPage.verifyProductInCart(product.name, product.price);
    
    // Act & Assert - Checkout information
    await pageManager.cartPage.proceedToCheckout();
    await pageManager.checkoutInformationPage.verifyCheckoutInformationPage();
    await pageManager.checkoutInformationPage.fillCheckoutInformation(checkoutInfo);
    await pageManager.checkoutInformationPage.continueToOverview();
    
    // Act & Assert - Checkout overview
    await pageManager.checkoutOverviewPage.verifyCheckoutOverviewPage();
    await pageManager.checkoutOverviewPage.verifyProductInOverview(product.name);
    await pageManager.checkoutOverviewPage.verifyOrderSummary();
    await pageManager.checkoutOverviewPage.verifyPaymentAndShipping();
    
    // Act & Assert - Complete purchase
    await pageManager.checkoutOverviewPage.finishPurchase();
    await pageManager.checkoutCompletePage.verifyCheckoutCompletePage();
    await pageManager.checkoutCompletePage.verifyOrderCompletion();
    await pageManager.checkoutCompletePage.verifyCartIsEmpty();
  });
});
