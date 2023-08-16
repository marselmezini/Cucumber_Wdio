class rating {

    overallLocator = '//*[@id="overall-3"]';
    contentLocator = '//*[@id="content-4"]';
    designLocator = 'id="design-4"';
    easyOfUseLocator = '//*[@id="usability-4"]';
    submitBtnLocator = '//*[@data-value="  Submit  "]';
    errorMessageLocator = '#error-text';
    redBoxDisplayedLocator= 'id="error-1"';


    async overallRating() {

        return await $(this.overallLocator).isSelected();
        
    }

    async contentRating() {

        return await $(this.contentLocator).isSelected();

    }

    async designRating() {
        return await $(this.designLocator).isSelected();
    }


    async easyOfUse() {

        return await $(this.easyOfUseLocator).isSelected()

    }

    async clickSubmitBtn() {

         await $(this.submitBtnLocator).click();
        

    }


    async verifyErrorMessage(){

     return await $(this.errorMessageLocator).isDisplayed();
     


    }

    async redBoxDisplayed (){

        return await $(this.redBoxDisplayedLocator).isDisplayed();
        

    }

}


module.exports = rating;












