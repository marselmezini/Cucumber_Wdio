

class rating {




    errorListLocator='//*[@class="error-list"]';
    submitBtnLocator = '//input[@class="btn btn-block btn-default submit-btn"]';
    redBoxDisplayedLocator = '#error-1';
    overallCheckBoxLocator = '//*[@class="col-xs-9"]//*[@id="overall-3"]';
    contentCheckLocator = '#content-4';
    designCheckLocator = '#design-4';
    easyOfUseCheckLocator = '#usability-3';



    async overallRating() {

        const windowHandles = await browser.getWindowHandles();
        await browser.switchToWindow(windowHandles[1]);
        const overallCheckBox = await $(this.overallCheckBoxLocator);
        await overallCheckBox.waitForClickable();
        await overallCheckBox.click();

    }

    async contentRating() {
        await $(this.contentCheckLocator).waitForClickable();
        await $(this.contentCheckLocator).click();

    }

    async designRating() {
        await $(this.designCheckLocator).click();

    }


    async easyOfUse() {

        await $(this.easyOfUseCheckLocator).click();
        await browser.pause(2000);


    }

    async clickSubmitBtn() {
    const windowHandles = await browser.getWindowHandles();
    await browser.switchToWindow(windowHandles[1]);
      const submitButton=  await $(this.submitBtnLocator);
      await submitButton.waitForClickable();
      await submitButton.click();
    }

    //site feedback
    


    async verifyErrorMessage() {

        const errorMessage = await $(this.errorListLocator);
        await errorMessage.waitForDisplayed({timeout:2000});
        return await errorMessage.isDisplayed();

    }

        async redBoxDisplayed() {
            await $(this.redBoxDisplayedLocator).waitForDisplayed();
        return  await $(this.redBoxDisplayedLocator).isDisplayed();
        
       
    }


}



  module.exports = rating;












