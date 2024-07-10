class HomePage 
{
    constructor(page) 
    {
      this.page = page;
      this.megaMenu = "//span[normalize-space()='Mega Menu']";
      this.htcLink = "//a[normalize-space()='HTC']";
    }
  
    async navigate() {
      await this.page.goto('/index.php');
    }
  
    async hoverMegaMenu() {
      await this.page.hover(this.megaMenu);
    }
  
    async clickHTCLink() {
      await this.page.click(this.htcLink);
    }
  }
  
  module.exports = HomePage;
  