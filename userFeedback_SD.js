

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






When(/^I click on “Support”$/, async function () {

    await Homepage.supportButton();
    await browser.pause(2000);

})

When(/^I click “Site Feedback”$/, async function () {

    await SiteFeedback.clickSiteFeedback();



})

When(/^I select any OVERALL rating$/, async function () {
    const overallratingSelected = await Rating.overallRating();
    expect(overallratingSelected, 'Overall rating is not selected').to.be.true;
    await browser.pause(2000);
})

When(/^I select any CONTENT rating$/, async function () {

    const ratingContent = await Rating.contentRating();
    expect(ratingContent, 'Rating content is not selected').to.be.true;
    await browser.pause(2000);
})


When(/^I select any DESIGN rating$/, async function () {

    const ratingDesign = await Rating.designRating();
    expect(ratingDesign, 'Rating design is not selected').to.be.true;
    await browser.pause(2000);

})

When(/^I select any EASE OF USE rating$/, async function () {

    const ratingEasyOfUse = await Rating.easyOfUse();
    expect(ratingEasyOfUse, 'Rating easy of use is not selected').to.be.true;
    await browser.pause(2000);

})

When(/^I click on SUBMIT button$/, async function () {
    await Rating.clickSubmitBtn();



})




Then(/^I verify THANK YOU FOR YOUR FEEDBACK is displayed$/, async function () {


    const thankYouIsDisplayed = await ThankYou.thankYouFeedBack();
    expect(thankYouIsDisplayed, 'Thank You text is not displayed').to.be.true;
    await browser.pause(2000);

})













