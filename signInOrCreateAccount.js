class signInOrCreateAccount {

  emailFieldLocator = '#loginFormEmailInput';
  clickContinueBtnLocator = '#loginFormSubmitButton';
  errorMessageLocator = '#loginFormEmailInput-error';

  // functions

  async setIncorrectEmailValue() {

    const emailInput = await $(this.emailFieldLocator);
    await emailInput.setValue('1234');

    await browser.pause(2000);



  }

  async clickContinueBtn() {
    await $(this.clickContinueBtnLocator).click();
    





  }

  async verifyErrorMessageIsDisplayed() {
     
     await $(this.errorMessageLocator).waitForDisplayed({timeout:3000});
     return await $(this.errorMessageLocator).isDisplayed();
  
   
    

  }


  // Terms and condition 

  privacyLinkLocator = '//a[text()="Privacy Statement"]';

  keyRewardsLocator= '//a[text()="One Key Rewards Terms & Conditions"]';


  async clickKeyRewards (){
      
      await $(this.keyRewardsLocator).click();
      

  }

  async  clickPrivacyLink (){
   
    const windowHandles = await browser.getWindowHandles();
    await browser.switchToWindow(windowHandles[0]);
    await $(this.privacyLinkLocator).waitForClickable({timeout:3000});
    await $(this.privacyLinkLocator).click();
    


    
 
  }






}
  module.exports = signInOrCreateAccount;



