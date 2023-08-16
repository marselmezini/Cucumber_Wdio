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



}
module.exports = signInOrCreateAccount;



