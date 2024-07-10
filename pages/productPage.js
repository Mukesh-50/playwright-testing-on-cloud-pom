class ProductPage {
    constructor(page) {
      this.page = page;
      this.firstProductImage1 = '(//div[contains(@class,"product-layout product-grid")]//div[contains(@class,"carousel-item active")]//img)[1]';
      this.firstProductImage2 = '(//div[contains(@class,"product-layout product-grid")]//div[contains(@class,"carousel-item active")]//img)[2]';
      this.addToCartButton1 = '(//span[text()="Add to Cart"])[1]/parent::button';
      this.addToCartButton2 = '(//span[text()="Add to Cart"])[2]/parent::button';
      this.checkoutIcon="(//div[@class='cart-icon']//div[contains(@class,'icon')])[1]";
      this.checkOutButton="//a[normalize-space()='Checkout']"
      this.login="//label[normalize-space()='Login']"
      this.closeButton = '//button[@aria-label="Close"]';
    }
  
    async waitForFirstProductImage() {
        await this.page.waitForSelector(this.firstProductImage, { state: 'visible' });
      }

    async hoverOnFirstProductImage1() {
      await this.page.hover(this.firstProductImage1);
    }
  
    async hoverOnFirstProductImage2() {
        await this.page.hover(this.firstProductImage2);
      }

    async clickAddToCart1() {
      await this.page.click(this.addToCartButton1);
    }
    async clickAddToCart2() {
        await this.page.click(this.addToCartButton2);
      }

      async clickCheckout() {
        await this.page.click(this.checkoutIcon);
      }

      async clickCheckoutButton() 
      {
        await this.page.click(this.checkOutButton);
      }

      async waitForCloseButtonToDisappear() {
        await this.page.waitForSelector(this.closeButton, { state: 'hidden', timeout: 60000 });
      }

  }
  
  module.exports = ProductPage;
  