const { test, expect } = require('@playwright/test');
const { connectToBrowser } = require('../utils/setup');
const { teardown } = require('../utils/teardown');
const HomePage = require('../pages/homePage');
const ProductPage = require('../pages/productPage');
const CheckoutPage = require('../pages/checkoutPage');

test.setTimeout(60000)

test('Login and Logout Test', async ({ browserName }) => 
{
  const capabilities = require('../config/capabilities');
  const capability = capabilities.find(cap => cap.browserName === browserName);

  if (!capability) {
    throw new Error(`No capability found for browser: ${browserName}`);
  }

  const browser = await connectToBrowser(capability);
  const page = await browser.newPage();

  try {
    const homePage = new HomePage(page);

  const productPage = new ProductPage(page);

  const checkoutPage = new CheckoutPage(page);

  await homePage.navigate();

  await homePage.hoverMegaMenu()

  await homePage.clickHTCLink()
  
  await productPage.hoverOnFirstProductImage1()

 await productPage.clickAddToCart1()

 await productPage.hoverOnFirstProductImage2()

  await productPage.clickAddToCart2()

  await productPage.waitForCloseButtonToDisappear()

  await productPage.clickCheckout()

  await productPage.clickCheckoutButton()

  await checkoutPage.loginToApplication("mukeshotwani.50@gmail.com","Sample@1234")

  await checkoutPage.selectDefaultAddress()

  await checkoutPage.acceptTermCondition()  

  await checkoutPage.clickOnContinue()

  await checkoutPage.clickConfirmOrder()

  const confirmationMessageText = await checkoutPage.getConfirmationMessageText();

  expect(confirmationMessageText).toBe('Your order has been placed!');
    await page.evaluate(() => {}, `lambdatest_action: ${JSON.stringify({ action: 'setTestStatus', arguments: { status: 'passed', remark: 'Title matched' } })}`);
  } catch (e) {
    await page.evaluate(() => {}, `lambdatest_action: ${JSON.stringify({ action: 'setTestStatus', arguments: { status: 'failed', remark: e.stack } })}`);
    throw e;
  } finally {
    await teardown(page, browser);
  }
});
