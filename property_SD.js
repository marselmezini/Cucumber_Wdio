

//property flow 

const { Then, When } = require("@wdio/cucumber-framework")
const homepage = require("../Pages_Folder/homepage");
const property = require("../Pages_Folder/property_class");
const stepOneOfThree = require("../Pages_Folder/stepOneOfThree");
const stepTwoOfThree = require("../Pages_Folder/stepTwoOfThree");
const { expect } = require("chai");







const Homepage = new homepage();
const Property = new property();
const StepOneOfThree = new stepOneOfThree();
const StepTwoOfThree = new stepTwoOfThree();




When(/^I click on List your property$/, async function() {

  await Homepage.propertyButton();



})


Then(/^I verify what would you like to list is displayed$/, async function() {

  const isTextListDisplayed = await Property.listNameDisplayed();
  expect(isTextListDisplayed, 'Text list name is not displayed').to.be.true;
  await browser.pause(2000);
})




Then(/^I verify “Lodging“ is displayed$/, async function() {

  const lodgingDisplayed = await Property.isLodgingDisplayed();
  expect(lodgingDisplayed, 'lodging is not displayed').to.be.true;
  await browser.pause(2000);
})

Then(/^I verify “Private residence“ is displayed$/, async function() {

  const residenceDisplayed = await Property.isPrivateResidenceDisplayed();
  expect(residenceDisplayed, 'Residence is not displayed').to.be.true;
  await browser.pause(2000);
})



When(/^I click on “Private residence“$/, async function() {

  await Property.clickPrivateResidence();

})



Then(/^I verify ”Step 1 of 3” is displayed$/, async function() {

  const oneOfThreeDisplayed = await StepOneOfThree.isStepOneOfThreeDisplayed();
  expect(oneOfThreeDisplayed, 'One of three is not displayed').to.be.true;

  await browser.pause(2000);
})



When(/^I enter “4“ as bedroom$/, async function() {

  await StepOneOfThree.enterFourAsBedroom();
  await browser.pause(2000);
})



When(/^I enter “2.5“ as bathroom$/, async function () {

  await StepOneOfThree.enterTwoPointFiveAsBathroom();
  await browser.pause(2000);
})



When(/^I click on “Next” button$/, async function() {

  await StepOneOfThree.clicknextButton();

})



Then(/^I verify ”Step 2 of 3” is displayed$/, async function() {

  const stepDispalyed = await StepTwoOfThree.isStepTwoOfThreeDisplayed();
  expect(stepDispalyed, 'step is not displayed').to.be.true;
  await browser.pause(2000);
})



Then(/^I verify “Where is your place located” is displayed$/, async function() {

  const stepTwoOrThreeIsDisplayed = await StepTwoOfThree.isYourPlaceDisplayed();
  expect(stepTwoOrThreeIsDisplayed, 'Step two or three is not displayed').to.be.true;
  await browser.pause(2000);
})




When(/^I enter (.+) in address$/, async function() {

  await StepTwoOfThree.enterAddressOnetwentyOne(121);
  await browser.pause(2000);

})





When(/^I select 1212 J Avenue,Plano,Tx from auto-suggestion$/, async function() {

  await StepTwoOfThree.typeAddressinfield();
  await browser.pause(2000);

})





Then(/^I verify map is displayed$/, async function () {

  const mapDisplayed = await StepTwoOfThree.verifyMapIsDisplayed();
  expect(mapDisplayed, 'Map is not displayed').to.be.true;
  await browser.pause(2000);
})






Then(/^I verify pin in map is displayed$/, async function () {

  const pinDisplayed = await StepTwoOfThree.pinInMapDisplayed();
  expect(pinDisplayed, 'Pin is not displayed').to.be.true;
  await browser.pause(2000);
})







Then(/^I verify “Move the pin to adjust the location of your property“$/, async function () {

  const displayedAdjustPin = await StepTwoOfThree.verifyAdjustPin();
  expect(displayedAdjustPin, 'Adjust pin text is not displayed').to.be.true;
  await browser.pause(2000);
})












