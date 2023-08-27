

const { Then, When } = require("@wdio/cucumber-framework");

const homepage = require("../Pages_Folder/homepage");

const { expect } = require("chai");
const rating = require("../Pages_Folder/ratingPage");
const thankYou = require("../Pages_Folder/thankYoupage");
const siteFeedback = require("../Pages_Folder/siteFeedback");






const Homepage = new homepage();
const SiteFeedback = new siteFeedback();
const Rating = new rating();
const ThankYou = new thankYou();






When(/^I click on Support$/, async function () {

    await Homepage.supportButton();
    await browser.pause(2000);

})

When(/^I click Site Feedback$/, async function () {

    await SiteFeedback.clickSiteFeedback();
    await browser.pause(2000);


})

When(/^I select any OVERALL rating$/, async function () {

    await Rating.overallRating();
    await browser.pause(2000);
})

When(/^I select any CONTENT rating$/, async function () {

    await Rating.contentRating();
    await browser.pause(2000);
})


When(/^I select any DESIGN rating$/, async function () {

    await Rating.designRating();
    await browser.pause(2000);

})

When(/^I select any EASE OF USE rating$/, async function () {

    await Rating.easyOfUse();
    await browser.pause(2000);

})

When(/^I click on SUBMIT button$/, async function () {
    await browser.pause(2000);
    await Rating.clickSubmitBtn();



})




Then(/^I verify THANK YOU FOR YOUR FEEDBACK is displayed$/, async function () {


    const thankYouIsDisplayed = await ThankYou.thankYouFeedback();
    expect(thankYouIsDisplayed, 'Thank you is not displayed').to.be.true;


})













