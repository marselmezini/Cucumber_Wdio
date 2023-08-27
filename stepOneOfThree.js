
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

    async getBedroomCount(){
      return await $(this.bedroomCountLocator).getAttribute('value');
    }

    async enterFourAsBedroom() {
        

     let expectedCountBed = 4;
        

        

        for (let i = 0; i < 10; i++) {

            const BedCount = await this.getBedroomCount();

            if (Number(BedCount) <Number (expectedCountBed)) {
                await $(this.increaseBtnBedLocator).click();
            }
            else if (Number(BedCount) >Number (expectedCountBed)) {
                 await $(this.decreaseBtnBedLocator).click();
            }
            else {
                break;

            }

        }

        await browser.pause(2000);


    }

    async getBathroomCount (){
       return await $(this.bathroomCountLocator).getAttribute('value');

    }
       


    async enterTwoPointFiveAsBathroom() {
        await browser.pause(2000);
         let expectedCountBathroom = 2.5;


        for (let i = 0; i < 10; i++) {

            const getBathCount = await  this.getBathroomCount();

            if (Number(getBathCount) < Number(expectedCountBathroom)) {
                await $(this.increaseBtnBathLocator).click();
            }
            else if (Number (getBathCount) > Number (expectedCountBathroom)) {
             await $(this.decreaseBtnBathLocator).click();
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