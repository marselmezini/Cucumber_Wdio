
const { Then, When } = require('@wdio/cucumber-framework');
const homepage = require("../Pages_Folder/homepage");
const { expect } = require('chai');


const Homepage = new homepage();





When(/^I click on Travelers$/, async function () {


    await Homepage.clickTravelers();
    await browser.pause(2000);


})




When(/^I select children as 2$/, async function () {

    await Homepage.countChildrenTwo();

})



Then(/^I verify children dropdowns are 2$/, async function () {
    
    const dropdownDisplayed = await Homepage.areDropdownsTwo();
    expect(dropdownDisplayed, 'Dropdowns are not 2').to.be.true;
    await browser.pause(3000);

})



When(/^I verify plus button is enabled$/, async function () {

    const plusBtnEnabled = await Homepage.isPlusBtnEnabled();
    expect(plusBtnEnabled, 'Plus button is not enabled').to.be.true;
    await browser.pause(2000);





})



When(/^I verify minus button is enabled$/, async function () {

    const minusBtnEnabled = await Homepage.isMinusBtnEnabled();

    expect(minusBtnEnabled, 'Minus button is not enabled').to.be.true;
    await browser.pause(2000);
})

When(/^I select children as 6$/, async function () {

    await Homepage.countChildrenSix();
    await browser.pause(2000);

})

Then(/^I verify children age dropdown are 6$/, async function () {

    const fieldDropdown = await Homepage.areDropdownsSix();
    expect(fieldDropdown, 'Dropdowns are not six').to.be.true;
    await browser.pause(2000);

})




Then(/^I verify plus button is disabled$/, async function () {
    await browser.pause(2000);
    const plusButtonDisabled = await Homepage.isPlusBtnDisabled();
    expect(plusButtonDisabled, 'Plus button is enabled').to.be.false;
})




Then(/^I verify minus button is enabled$/, async function () {
    
    const plusBtnEnabled = await Homepage.isMinusBtnEnabled();
    expect(plusBtnEnabled, 'Minus button is not enabled').to.be.true;
})


When(/^I select children as 5$/, async function () {
  
    await Homepage.selectChildrenFive();

})

Then(/^I verify children age dropdown are 5$/, async function () {
   
    const dropdownsFive = await Homepage.areDropdownsFive();
    expect(dropdownsFive, 'Dropdowns are not five').to.be.true;




})


Then(/^I verify plus button is enabled$/, async function () {
   
    const plusBtnEnabled = await Homepage.isPlusBtnEnabled();
    expect(plusBtnEnabled, 'Plus button is not enabled').to.be.true;


})

Then(/^I verify minus button is enabled$/, async function () {
   
    const minusBttnEnabled = await Homepage.minusBtnEnabled();
    expect(minusBttnEnabled, 'Plus button is  enabled').to.be.true;


})



When(/^I select children as 0$/, async function () {
    
    await Homepage.countChildrenZero();


})


Then(/^I verify children age dropdown is NOT displayed$/, async function () {
    
    const childFieldDisplayed = await Homepage.isChildrenDropdownDisplayed();
    expect(childFieldDisplayed, 'Child field is displayed').to.be.false;



})



Then(/^I verify plus button is enabled$/, async function () {
    
    const buttonEnabled = await Homepage.isPlusBtnEnabled();
    expect(buttonEnabled, 'Plus button is not enable').to.be.true;


})


Then(/^I verify minus button is disabled$/, async function () {
   
    const minusBtnEnabled = await Homepage.isMinusBtnDisabled();
    expect(minusBtnEnabled, 'Minus button is enabled').to.be.false;





})
















