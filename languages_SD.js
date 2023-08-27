


const { When, Then } = require('@wdio/cucumber-framework');
const languagesField = require("../Pages_Folder/languagesField");
const homepage = require('../Pages_Folder/homepage');
const { expect } = require('chai');









const Homepage = new homepage();
const LanguagesField = new languagesField();








When(/^I click on English language$/, async function () {

  await Homepage.englishClickButton();
  await browser.pause(2000);

})

Then(/^I select Español in language dropdown$/, async function () {

  await LanguagesField.selectEspañolDropdown();
  await browser.pause(2000);

})






Then(/^I click on Save button$/, async function () {

  await LanguagesField.saveButton();
  await browser.pause(2000);
})



Then(/^I verify Español is displayed$/, async function () {

  const isLanguageGiven = await Homepage.isEspañolDisplayed();
  expect(isLanguageGiven, 'Español is not displayed').to.be.true;
  await browser.pause(2000);

})
Then(/^I click on Español language$/, async function () {

  await Homepage.clickEspanol();


})





Then(/^I select English$/, async function () {

  await LanguagesField.selectEnglishDropdown();
  await browser.pause(2000);


})

Then(/^I click on Guardar button$/, async function () {

  await LanguagesField.clickGuardarButton();
  await browser.pause(2000);

})


Then(/^I verify English is displayed$/, async function () {

  const englishDisplayed = await Homepage.isEnglishDisplayed();
  expect(englishDisplayed, 'English language is not displayed').to.be.true;
  await browser.pause(2000);
})





























