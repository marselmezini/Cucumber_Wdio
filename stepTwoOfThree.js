




class stepTwoOfThree {

    stepTwoOfThreeLocator = '//*[text()="Step 2 of 3"]';
    placeLocatedLocator = '//*[@class="ulx-location-wrapper__content"]//h1';
    enterAddressLocator = '//*[@aria-label="Enter address..."]';
    allSuggestionAddressLocators = '//li[@class="typeahead-prediction-item fds-list-item"]';
    ariaMapLocator = '//div[contains(@style,"z-index: 3")]';
    pinLocator = '//*[@src="https://maps.gstatic.com/mapfiles/transparent.png"]';
    adjustPinLocator = '//span[contains(text(),"Move the pin to adjust")]';




    //property functions



    async isStepTwoOfThreeDisplayed() {

        return await $(this.stepTwoOfThreeLocator).isDisplayed();



    }

    async isYourPlaceDisplayed() {

        return await $(this.placeLocatedLocator).isDisplayed();
    }


    async enterAddressOnetwentyOne() {

        return await $(this.enterAddressLocator).setValue(1211);



    }


    async typeAddressinfield(searchAddress) {

        const allSuggestion = await $$(this.allSuggestionAddressLocators);

        for (const address of allSuggestion) {

            const addressText = await address.getText();

            if (addressText.startsWith(searchAddress)) {
                await address.click();
                break;

            }

        }


    }

    async verifyMap() {
        
        return await $(this.ariaMapLocator).isDisplayed();

        

    }

    async pinInMapDisplayed() {

        await $(this.pinLocator).waitForDisplayed();
        return await $(this.pinLocator).isDisplayed();


    }

    async verifyAdjustPin() {

        await $(this.adjustPinLocator).waitForDisplayed();
        return $(this.adjustPinLocator).isDisplayed();



    }






}


module.exports = stepTwoOfThree;