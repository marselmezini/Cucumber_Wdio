
class property {

   whatWouldYouLikeToListLocator = '//*[@class="classification__title"]';
   lodgingLocator = '//*[@id="classification_lodging"]//*[@class="classification__Options__inner__titleDiv__title"]';
   privatResidenceLocator = 'id="classification_privateResidence"';


   async listNameDisplayed() {


      return await $(this.whatWouldYouLikeToListLocator).isDisplayed();



   }


   async isLodgingDisplayed() {


      return await $(this.lodgingLocator).isDisplayed();
   }

   async isPrivateResidenceDisplayed() {

      return await $(this.privatResidenceLocator).isDisplayed();






   }

   async clickPrivateResidence() {

      await $(this.privatResidenceLocator).click();
      

   }









}



module.exports = property;










