class CheckoutPage 
{
    constructor(page) 
    {
      this.page = page;

      this.login = "//label[normalize-space()='Login']";

      this.email = "//input[@id='input-login-email']";

      this.password="//input[@id='input-login-password']";

      this.loginButton="//button[@id='button-login']";

      this.checkoutButton="//a[text()='Checkout']"

      this.defaultAddress="(//label[text()='I want to use an existing address'])[1]"

      this.agree="//label[@for='input-agree']"

      this.continue="//button[normalize-space()='Continue']"

      this.confirmOrder="//button[normalize-space()='Confirm Order']"

      this.confirmationMessage = "//h1[normalize-space()='Your order has been placed!']";

    }
  
    async loginToApplication(emailId,pass) {

        await this.page.waitForTimeout(5000);

        await this.page.click(this.login);
       
        await this.page.fill(this.email, emailId);
        await this.page.fill(this.password,pass);
        await this.page.click(this.loginButton);
    }
  
    async clickOnCheckout()
    {
        await this.page.click(this.checkoutButton);
    }

    async selectDefaultAddress()
    {
        await this.page.click(this.defaultAddress)
    }

    async acceptTermCondition()
    {
        await this.page.click(this.agree)
    }

    async clickOnContinue()
    {
        await this.page.click(this.continue)
    }

    async clickConfirmOrder()
    {
        await this.page.click(this.confirmOrder)
    }

    async getConfirmationMessageText() {
        await this.page.waitForSelector(this.confirmationMessage);
        const messageElement = await this.page.$(this.confirmationMessage);
        const textContent = await messageElement.textContent();
        return textContent.trim();
      }

  }
  
  module.exports = CheckoutPage;
  