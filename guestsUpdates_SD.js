const { When, Then } = require("@wdio/cucumber-framework")
const homepage = require("../Pages_Folder/homepage");
const { expect } = require("chai");

const Homepage = new homepage();




When(/^I select “Adults as 6$/, async function () {
       await Homepage.selectAdultAsSix();
       await browser.pause(2000);
})

When(/^I select “Children” as 3$/, async function () {
       await Homepage.selectChidrenAsThree();
       await browser.pause(2000);
})


When(/^I select first child age 4$/, async function () {
       await Homepage.selectFirstChildFour();
       await browser.pause(2000);
})


Then(/^I select second child age: Under 1$/, async function () {
       await Homepage.selectSecondChildUnderOne();
       await browser.pause(2000);
})


Then(/^I select third child age: 7$/, async function () {
       await Homepage.thirdChildAgeSeven();
       await browser.pause(2000);
})


Then(/^I click Done$/, async function () {
       await Homepage.clickGuestsDoneButton();
       await browser.pause();
})


Then(/^I verify total number of Travelers is sum of adults and children as same as selected on step 3 and 4$/, async function () {

       const totalTravelers = await Homepage.totalNumberOfTravelers();
       expect(totalTravelers, 'Total number is not as expected').to.be.true;
       await browser.pause(2000);
})





























