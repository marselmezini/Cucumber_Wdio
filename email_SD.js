const { Given, When, Then } = require('@wdio/cucumber-framework');
const homepage = require('../Pages_Folder/homepage');
const { expect } = require('chai');
const signInOrCreateAccount = require('../Pages_Folder/signInOrCreateAccount');






const Homepage = new homepage();
const SignInOrCreateAccount = new signInOrCreateAccount();

Given(/^I am on the hotels homepage$/, async function () {

await Homepage.launchHotels();

})



When(/^I click on Sign in link$/, async function () {
    await Homepage.clickSignInLink();


})




Then(/^I click on Sign in button$/, async function () {

    await Homepage.signInBtn();
})



Then(/^I enter invalid email address$/, async function () {
    await SignInOrCreateAccount.setIncorrectEmailValue();

})



Then(/^I click on continue button$/, async function () {

    await SignInOrCreateAccount.clickContinueBtn();


})



Then(/^I choose to verify error message is displayed$/, async function () {
    const errorMessageDisplayed = await SignInOrCreateAccount.verifyErrorMessageIsDisplayed();
    expect(errorMessageDisplayed, 'Error message is not dispayed').to.be.true;


})




















