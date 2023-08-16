
const { When, Then } = require('@wdio/cucumber-framework');
const travelers = require("../Pages_Folder/travelers");
const homepage = require("../Pages_Folder/homepage");
const { expect } = require('chai');


const Homepage = new homepage();

const Travelers = new travelers();




When(/^I click on Travelers$/, async function () {


    await Homepage.clickSignInLink();


})




When(/^I select “Children” as 2$/, async function () {

    await Travelers.countChildrenTwo();



})



Then(/^I verify Children-age dropdown are 2$/, async function () {

    const dropdowntwo = await Travelers.areDropdownsTwo();
    expect(dropdowntwo, 'dropdowns are not two').to.be.equal(2);
    await browser.pause(2000);

})



When(/^I verify Plus-button is enabled$/, async function () {

    const plusBtnEnabled = await Travelers.isPlusBtnEnabled();
    expect(plusBtnEnabled, 'Plus button is not enabled').to.be.true;
    await browser.pause(2000);



})



When(/^I verify minus-button is enabled$/, async function () {

    const minusBtnEnabled = await Travelers.isMinusBtnEnabled();

    expect(minusBtnEnabled, 'Plus button is not enabled').to.be.true;

})

When(/^I select “Children” as 6$/, async function () {

    await Travelers.countChildrenSix();


})

Then(/^I verify Children-age dropdown are 6$/, async function () {

    const fieldDropdown = await Travelers.areDropdownsSix();
    expect(fieldDropdown, 'dropdowns are not six').to.be.equal(6);
    await browser.pause(2000);

})




Then(/^I verify Plus button is disabled$/, async function () {

    const plusButtonDisabled = await Travelers.isPlusBtnDisabled();
    expect(plusButtonDisabled, 'Plus button is enabled').to.be.false;
})



Then(/^I verify minus-button is enabled$/, async function () {

    const plusBtnEnabled = await Travelers.isMinusBtnEnabled();
    expect(plusBtnEnabled, 'Plus button is not enabled').to.be.true;
})


When(/^I select “Children” as 5$/, async function () {

    await Travelers.selectChildrenFive();

})

Then(/^I verify Children-age dropdown are 5$/, async function () {

    const dropdownsFive = await Travelers.areDropdownsFive();
    expect(dropdownsFive, 'Dropdowns are not 5').to.be.equal(5);
    await browser.pause(2000);



})


Then(/^I verify Plus button is enabled$/, async function () {

    const plusBtnEnabled = await Travelers.isPlusBtnEnabled();
    expect(plusBtnEnabled, 'Plus button is not enabled').to.be.true;
    await browser.pause(2000);

})

Then(/^I verify minus-button is enabled$/, async function () {

    const minusBtnEnabled = await Travelers.isMinusBtnEnabled();
    expect(minusBtnEnabled, 'Plus button is  enabled').to.be.true;
    await browser.pause(2000);

})



When(/^I select “Children” as 0$/, async function () {

    await Travelers.countChildrenZero();


})


Then(/^I verify Children-age dropdown is NOT displayed$/, async function () {

    const childFieldDisplayed = await Travelers.isChildrenDropdownDisplayed();
    expect(childFieldDisplayed, 'child field is displayed').to.be.false;
    await browser.pause(2000);


})



Then(/^I verify Plus button is enabled$/, async function () {

    const buttonEnabled = await Travelers.isPlusBtnEnabled();
    expect(buttonEnabled, 'Plus button is not enable').to.be.true;
    await browser.pause(2000);

})


Then(/^I verify minus-button is disabled$/, async function () {

    const minusBtnEnabled = await Travelers.isMinusBtnDisabled();
    expect(minusBtnEnabled, 'Minus button is enabled').to.be.false;
    await browser.pause(2000);




})
















