import { test } from '@playwright/test';
import { PageManager } from './pages/PageManager';
import { testData } from './data/testData';

test.describe('SauceDemo Purchase Flow - Additional Scenarios', () => {
  test('should complete purchase flow with different user data', async ({ page }) => {
    // Arrange - Initialize page objects and test data
    const pageManager = new PageManager(page);
    const user = testData.users.standardUser;
    const product = testData.products.fleeceJacket;
    const checkoutInfo = testData.checkoutInfo.anotherValidUser; // Using different user data
    
    // Act & Assert - Login
    await pageManager.loginPage.navigate();
    await pageManager.loginPage.login(user.username, user.password);
    await pageManager.loginPage.verifyLoginSuccess();
    
    // Act & Assert - Add product to cart
    await pageManager.inventoryPage.addProductToCart(product.name);
    await pageManager.inventoryPage.verifyProductAddedToCart();
    
    // Act & Assert - Complete checkout flow
    await pageManager.inventoryPage.goToCart();
    await pageManager.cartPage.verifyCartPage();
    await pageManager.cartPage.proceedToCheckout();
    
    await pageManager.checkoutInformationPage.fillCheckoutInformation(checkoutInfo);
    await pageManager.checkoutInformationPage.continueToOverview();
    
    await pageManager.checkoutOverviewPage.verifyCheckoutOverviewPage();
    await pageManager.checkoutOverviewPage.finishPurchase();
    
    await pageManager.checkoutCompletePage.verifyOrderCompletion();
  });

  test('should handle login and navigation flow only', async ({ page }) => {
    // Arrange - Initialize page objects
    const pageManager = new PageManager(page);
    const user = testData.users.standardUser;
    
    // Act & Assert - Login and verify inventory page
    await pageManager.loginPage.navigate();
    await pageManager.loginPage.login(user.username, user.password);
    await pageManager.loginPage.verifyLoginSuccess();
    
    // Verify user can navigate to cart and back
    await pageManager.inventoryPage.goToCart();
    await pageManager.cartPage.verifyCartPage();
  });
});
