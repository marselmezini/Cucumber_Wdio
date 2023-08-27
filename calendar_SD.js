const { Then, When } = require("@wdio/cucumber-framework");
const homepage = require("../Pages_Folder/homepage");

const { expect } = require("chai");
const moment = require("moment/moment");



const Homepage = new homepage();

When(/^I click on calendar$/,async function(){
     await Homepage.clickCalendar();
     
})


When(/^I go to current month if not displayed$/, async function() {
   
    await  browser.pause(5000);
    const monthYear = moment().format('MMMM YYYY');
    await Homepage.goToCurrentMonth(monthYear);
    
})

Then(/^I verify August is displayed$/, async function() {
    const monthYear = moment().format('MMMM YYYY');
    const currentElementDisplayed= await Homepage.verifyAugMonth(monthYear);
    expect(currentElementDisplayed, 'Current month is not displayed').to.be.true;
    await browser.pause(2000);


})


Then(/^I verify past dates are disabled$/, async function() {
    
    const monthYear = moment().format('MMMM YYYY');
    const currentDate = moment().format('D');

     await Homepage.goToCurrentMonth(monthYear);
    
    const disabledDates= await Homepage.disabledDatesCount(monthYear);
    expect(currentDate - 1, 'Number of disabled dates are not as expected').to.be.equal(disabledDates);
})


Then(/^I verify back button on current month is disabled$/, async function() {
    
    const backBtnEnabled = await Homepage.verifyBackButton();
    expect(backBtnEnabled, 'Back button is not  enabled').to.be.false;
})
















