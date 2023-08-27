const { When, Then } = require("@wdio/cucumber-framework")
const homepage = require("../Pages_Folder/homepage");
const signInOrCreateAccount = require("../Pages_Folder/signInOrCreateAccount");
const { expect } = require("chai");

const Homepage = new homepage();
const SignInOrCreateAccount = new signInOrCreateAccount();

When(/^I click Sign in link$/,async function(){
     await Homepage.clickSignInLink();

})

When(/^I click Sign in button$/,async function(){
   await Homepage.signInBtn();

})




When(/^I click One Key Rewards Terms & Conditions link$/, async function() {
       
await SignInOrCreateAccount.clickKeyRewards();
    
}) 

When(/^I verify One Key Terms and Conditions heading is displayed$/, async function() {
     const oneKeyDisplayed = await Homepage.keyHeadingDisplayed({timeout:3000});
     expect(oneKeyDisplayed, 'Key is not displayed').to.be.true;
    
})

Then(/^I verify Effective from date format is in correct format: MMMM D, yyyy$/, async function() {
 await Homepage.verifyCorrectDateFormat();
    
})


When(/^I click Privacy Statement link$/, async function() {
 await SignInOrCreateAccount.clickPrivacyLink();
  await browser.pause(2000);
})

Then(/^I verify Privacy Statement heading is displayed$/, async function() {
 const isPrivacyDisplayed = await  Homepage.verifyPrivacyHeading();
 expect(isPrivacyDisplayed,'Privacy heading is not displayed').to.be.true;
 

})

Then(/^I verify Last Updated date format$/, async function() {

    const lastUpdateDisplayed= await  Homepage.updatedDate();
    expect(lastUpdateDisplayed, 'Updated date is not displayed').to.be.true;
    await browser.pause(2000);
})


















