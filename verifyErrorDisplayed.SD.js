const { When,Then } = require("@wdio/cucumber-framework");

const homepage = require("../Pages_Folder/homepage");
const siteFeedback = require("../Pages_Folder/siteFeedback");
const rating = require("../Pages_Folder/ratingPage");
const { expect } = require("chai");



const Homepage = new homepage();
const SiteFeedback = new siteFeedback();
const Rating = new rating();


When(/^I click on “Support”$/, async function () {

    await Homepage.supportButton();
    await browser.pause(2000);

})



When(/^I click “Site Feedback”$/, async function () {

    await SiteFeedback.clickSiteFeedback();

})



When(/^I click on Submit button$/, async function () {

    await Rating.clickSubmitBtn();
    await browser.pause(2000);

})



Then(/^I verify error message is displayed$/, async function () {

    const erroraMessageDisplayed = await Rating.verifyErrorMessage();
    expect(erroraMessageDisplayed, 'Error message is not displayed').to.be.true;
    await browser.pause(2000);

})


Then(/^I verify red-box is displayed around OVERALL section$/, async function () {

    const isRedBoxDisplayed = await Rating.redBoxDisplayed();
    expect(isRedBoxDisplayed,'Red box overall section is not displayed').to.be.true;
    await browser.pause(2000);
})



                                     