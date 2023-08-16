class stepTwoOfThree {

    stepTwoOfThreeLocator = '//*[text()="Step 2 of 3"]';
    placeLocatedLocator = '//*[@class="ulx-location-wrapper__content"]//h1';
    enterAddressLocator = '//*[@aria-label="Enter address..."]';
    allSuggestionAddressLocator = '//*[@class="typeahead-prediction-list fds-field-select"]';
    ariaMapLocator = '//*[@aria-label="Map"]';
    pinLocator= '//*[@style="width: 50px; height: 56px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;"]';
    adjustPinLocator= '//*[@class="map-footer"]';




     //property functions



    async isStepTwoOfThreeDisplayed() {

        return await $(this.stepTwoOfThreeLocator).isDisplayed();
        


    }

    async isYourPlaceDisplayed() {

        return await $(this.placeLocatedLocator).isDisplayed();
    }


    async enterAddressOnetwentyOne() {

        return await $(this.enterAddressLocator).setValue(121);
        


    }


    async typeAddressinfield() {

           const allSuggestion = await $$(this.allSuggestionAddressLocator);

        for (const address of allSugesstionAddressLocator) {

            const addressText = await address.getText('1212 J Avenue, Plano, TX');

            if (addressText.startsWith('1212')) {
              return  await addressText.click();
                break;

            }

        }
        await browser.pause(2000);

    }

    async verifyMapIsDisplayed() {

    return await $(this.ariaMapLocator).isDisplayed();
    

    }

    async pinInMapDisplayed(){
    
       return await $(this.pinLocator).isDisplayed();
       
    }

     async verifyAdjustPin(){
     
       return await $(this.adjustPinLocator).isDisplayed();
       


     }






}


module.exports = stepTwoOfThree;