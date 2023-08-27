class fiveStar {

    fiveStarLocatorStarts = '//label[contains(@aria-label,';
    fiveStarLocatorEnds = ')]';
    hotelLocator = '//a[@data-stid="open-hotel-information"]';
    sortByLocator = '#sort-filter-dropdown-sort';
    priceLocator = '//div[contains(text(),"The price is")]';
    hotelStarLocator_starts = '//span[text()= "';
    hotelStarLocator_ends ='out of 5"]';

    async clickFiveStar() {
        await $('//*[@for="ShoppingSelectableFilterOption-star-50"]').scrollIntoView();
        //const fiveStarLocator= this.fiveStarLocatorStarts +rating+ this.fiveStarLocatorEnds;

        await $('//*[@for="ShoppingSelectableFilterOption-star-50"]').click();
        await browser.pause(2000);
    }

    async lowToHighSortDropdown() {
        const sortLowToHigh = await $(this.sortByLocator);
        await sortLowToHigh.selectByIndex(1);
        await browser.pause(2000);
    }


    async allHotelStarRating(expectedRating) {

        const hotelElements = await $$(this.hotelLocator);

        for (const hotel of hotelElements) {
            const locatorForStar = $(this.hotelStarLocator_starts) + expectedRating + $(this.hotelStarLocator_ends);
            const locatorForStarElement = await hotel.$(locatorForStar);
            if (!locatorForStarElement || !(await locatorForStarElement.isDisplayed())

            ) {
                return false;
            }

        }
        return true;
    }

    async verifyHotelPriceIncrease() {
        const hotelprice = await $$(this.priceLocator);
        const prices = [];
        for (const priceElement of hotelprice) {
            const priceTextElement = await priceElement.getText();
            const textParts = await priceTextElement.split("");
            const dividedPrice = await textParts.slice(3).join("");
            prices.push(dividedPrice);
        }
        return prices;
    }



}
module.exports = fiveStar;


