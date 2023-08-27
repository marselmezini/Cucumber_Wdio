const { expect } = require("chai");


class property {

   whatWouldYouLikeToListLocator = '//p[text()="What would you like to list?"]';
   lodgingLocator = '//*[@id="classification_lodging"]//*[@class="classification__Options__inner__titleDiv__title"]';
   privatResidenceLocator = "#classification_privateResidence";


   async listNameDisplayed() {
      const windowHandles = await browser.getWindowHandles();
      await browser.switchToWindow(windowHandles[1]);

      const textElement= $(this.whatWouldYouLikeToListLocator);
      await textElement.waitForDisplayed({timeout:3000});
      const IsTextDisplayed = await textElement.isDisplayed();
      expect(IsTextDisplayed,'Text is not displayed').to.be.true;


   }


   async lodgingDisplayed() {


      const lodgingElement= $(this.lodgingLocator);
      await lodgingElement.waitForDisplayed({timeout:2000});
      const isElementDisplayed = await lodgingElement.isDisplayed();
      expect(isElementDisplayed,'Element is not displayed').to.be.true;
   }

   async isPrivateResidenceDisplayed() {

      return await $(this.privatResidenceLocator).isDisplayed();






   }

   async clickPrivateResidence() {

      await $(this.privatResidenceLocator).click();
      

   }









}



module.exports = property;










