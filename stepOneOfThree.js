
class stepOneOfThree {

    stepLocator = '//*[text()="Step 1 of 3"]';
    decreaseBtnBedLocator = '//*[@aria-label="Decrease bedrooms"]';
    increaseBtnBedLocator = '//*[@aria-label="Increase bedrooms"]';
    bedroomCountLocator = '//*[@name="bedroom-count"]';
    decreaseBtnBathLocator = '//*[@aria-label="Decrease bathrooms"]';
    increaseBtnBathLocator = '//*[@aria-label="Increase bathrooms"]';
    bathroomCountLocator = '//*[@name="bathroom-count"]';
    nextBtnLocator = '//*[@id="propertyInfoNextBtn"]';







    //property functions 

    async isStepOneOfThreeDisplayed() {


        return await $(this.stepLocator).isDisplayed();
    }

    async enterFourAsBedroom() {

        const expectedCountBedroom = 4;

        await browser.pause(2000);

        for (let i = 0; i < 10; i++) {

            const getBedroonCount = await $(this.bedroomCountLocator).getAttribute('value');

            if (Number(this.getBedroonCount) < this.expectedCountBedroom) {
                return await $(this.increaseBtnBedLocator).click();
            }
            else if (Number(this.getBedroonCount) > this.expectedCountBedroom) {
                return await $(this.decreaseBtnBedLocator).click();
            }
            else {
                break;

            }

        }

        await browser.pause(2000);


    }



    async enterTwoPointFiveAsBathroom() {

        const expectedCountBathroom = 2.5;

        await browser.pause(2000);

        for (let i = 0; i < 10; i++) {

            const getBathroomCount = await $(this.bathroomCountLocator).getAttribute('value');

            if (Number(this.getBathroomCount) < this.expectedCountBathroom) {
                return await $(this.increaseBtnBathLocator).click();
            }
            else if (Number(this.getBathroomCount) > this.expectedCountBathroom) {
                return await $(this.decreaseBtnBathLocator).click();
            }
            else {
                break;

            }

        }

        await browser.pause(2000);

    }

    async clicknextButton() {

        await $(this.nextBtnLocator).click();

    }



}












module.exports = stepOneOfThree;