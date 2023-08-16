
class homepage {

  // locators to interact on homepage

  signInLinkLocator = '//button[contains(text(),"Sign")]';
  signInButtonLocator = '//*[@data-stid="link-header-account-signin"]';
  travelersBtnLocator = '//button[@data-stid="open-room-picker"]';
  propertyButtonLocator = ' #listYourProperty';
  espanolBtnLocator = '//*[text()="Español"]';
  englishBtnLocator = '//*[@data-stid="button-type-picker-trigger"]';
  supportBtnLocator = '//*[text()="Support"]';




  //functions to interact with elements in homepage ..Email

  async launchHotels() {

    await browser.url('https://www.hotels.com/');
    await browser.pause(2000);
    await browser.maximizeWindow();

  }
  async englishClickButton() {

    await $(this.englishBtnLocator).click();

  }

  async isEspañolDisplayed() {
    await $(this.espanolBtnLocator).isDisplayed();
  }

  async clickEspanol() {
    await $(this.espanolBtnLocator).click();
  }
  async isEnglishDisplayed() {

    await $(this.englishBtnLocator).isDisplayed();
  }



  async clickSignInLink() {

    await $(this.signInLinkLocator).click();

    
  }


  async signInBtn() {

    await $(this.signInButtonLocator).click();
    



  }

  //Travelers
  async clickTravelers() {

    await $(this.travelersBtnLocator).click();
    

  }




  //Property flow

  async propertyButton() {

    await $(this.propertyButtonLocator).click();

  }


  // submit empty form


  async supportButton() {

    await $(this.supportBtnLocator).click();
  }




}










module.exports = homepage;




