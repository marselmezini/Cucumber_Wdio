const { expect } = require("chai");
const moment = require("moment/moment");


class homepage {

  // locators to interact on homepage

  signInLinkLocator = '//button[contains(text(),"Sign")]';
  signInButtonLocator = '//*[@data-stid="link-header-account-signin"]';
  propertyButtonLocator = ' #listYourProperty';
  espanolBtnLocator = '//*[text()="Español"]';
  englishBtnLocator = '//*[@data-stid="button-type-picker-trigger"]';
  supportBtnLocator = '//*[text()="Support"]';

  secondChildLocator = "#age-traveler_selector_children_age_selector-0-1";
  thirdChildLocator = '#age-traveler_selector_children_age_selector-0-2';
  doneTravelersLocator = '#traveler_selector_done_button';





  //functions to interact with elements in homepage ..Email

  async launchHotels() {

    await browser.url('https://www.hotels.com/');
    await browser.pause(2000);
    await browser.maximizeWindow();

    // Languages

  }
  async englishClickButton() {

    await $(this.englishBtnLocator).click();

  }

  async isEspañolDisplayed() {
    return await $(this.espanolBtnLocator).isDisplayed();
  }

  async clickEspanol() {
    await $(this.espanolBtnLocator).click();
  }
  async isEnglishDisplayed() {

    return await $(this.englishBtnLocator).isDisplayed();
  }

  //Email

  async clickSignInLink() {

    await $(this.signInLinkLocator).click();


  }


  async signInBtn() {

    await $(this.signInButtonLocator).click();




  }

  //Travelers
  travelersBtnLocator = '//button[@data-stid="open-room-picker"]';
  childButtonLocator = '#traveler_selector_children_step_input-0';
  childMinusLocator = '//*[@id="traveler_selector_children_step_input-0"]/preceding-sibling::button';
  childPlusLocator = '//*[@id="traveler_selector_children_step_input-0"]/following-sibling::button';
  childAgeFieldLocator = '//*[@class="uitk-field-select"]';
  fieldDropdownLocators = '#traveler_selector_children_step_input-0';
  childTwoAgeDropLocator = '#age-traveler_selector_children_age_selector-0-1';
  childFiveAgeDropLocator = '#age-traveler_selector_children_age_selector-0-4';
  childAgeSixDropLocator = '#age-traveler_selector_children_age_selector-0-5';
  plusAdultsLocator = '//input[@id="traveler_selector_adult_step_input-0"]/following-sibling::button';
  minusAdultsLocator = '//input[@id="traveler_selector_adult_step_input-0"]/preceding-sibling::button';
  adultsCountLocator = '#traveler_selector_adult_step_input-0';
  totalCountLocator = '//button[contains(text(),"9 travelers")]';








  async clickTravelers() {

    await $(this.travelersBtnLocator).click();

  }

  async getChildCount() {
    return await $(this.childButtonLocator).getAttribute('value');
  }


  async countChildrenTwo() {

    await browser.pause(2000);
    let expectedChildCount = 2;



    for (let i = 0; i < 10; i++) {
      await browser.pause(2000);
      const childCount = await this.getChildCount();

      if (Number(childCount) < Number(expectedChildCount)) {
        await $(this.childPlusLocator).click();

      }
      else if (Number(childCount) > Number(expectedChildCount)) {
        await $(this.childMinusLocator).click();

      }
      else {
        break;

      }
      await browser.pause(2000);
    }


  }

  async areDropdownsTwo() {

    return await $(this.childTwoAgeDropLocator).isDisplayed();

  }

  async countChildrenSix() {

    let expChildCountSix = 6;

    await browser.pause(2000);

    for (let i = 0; i < 10; i++) {

      const getChildCountSix = await this.getChildCount();

      if (Number(getChildCountSix) < Number(expChildCountSix)) {
        await $(this.childPlusLocator).click();
      }
      else if (Number(getChildCountSix) > Number(expChildCountSix)) {
        await $(this.childMinusLocator).click();
      }
      else {
        break;

      }

    }

    await browser.pause(2000);
  }

  async areDropdownsSix() {

    return await $(this.fieldDropdownLocators).isDisplayed();


  }

  async isPlusBtnDisabled() {


    return await $(this.childPlusLocator).isEnabled();

  }



  async selectChildrenFive() {

    let expChildCountFive = 5;

    await browser.pause(2000);

    for (let i = 0; i < 10; i++) {

      const getChildCountFive = await this.getChildCount();

      if (Number(getChildCountFive) < Number(expChildCountFive)) {
        await $(this.childPlusLocator).click();
      }
      else if (Number(getChildCountFive) > Number(expChildCountFive)) {
        await $(this.childMinusLocator).click();
      }
      else {
        break;

      }

    }

    await browser.pause(2000);
  }




  async areDropdownsFive() {
    return await $(this.fieldDropdownLocators).isDisplayed();


  }

  async countChildrenZero() {

    let expectChildCountZero = 0;

    await browser.pause(2000);

    for (let i = 0; i < 10; i++) {

      const getChildCountZero = await this.getChildCount();

      if (Number(getChildCountZero) < Number(expectChildCountZero)) {
        await $(this.childPlusLocator).click();
      }
      else if (Number(getChildCountZero) > Number(expectChildCountZero)) {
        await $(this.childMinusLocator).click();
      }
      else {
        break;

      }

    }


  }


  async isChildrenDropdownDisplayed() {


    return await $(this.childAgeFieldLocator).isDisplayed();


  }

  async isPlusBtnEnabled() {


    return await $(this.childPlusLocator).isEnabled();



  }

  async isMinusBtnDisabled() {


    return await $(this.childMinusLocator).isEnabled();
  }




  //Guests 

  async selectAdultAsSix() {


    const expectedAdultCount = 6;

    await browser.pause(2000);

    for (let i = 0; i < 10; i++) {

      const adultCount = await $(this.adultsCountLocator).getAttribute('value');



      if (Number(adultCount) < Number(expectedAdultCount)) {
        await $(this.plusAdultsLocator).click();
      }
      else if (Number(adultCount) > Number(expectedAdultCount)) {
        await $(this.minusAdultsLocator).click();
      }
      else {
        break;

      }
      await browser.pause(2000);
    }


  }

  async selectChidrenAsThree() {



    let expectedCountThree = 3;

    await browser.pause(2000);

    for (let i = 0; i < 10; i++) {

      const getChildCountThree = await this.getChildCount();

      if (Number(getChildCountThree) < Number(expectedCountThree)) {
        await $(this.childPlusLocator).click();
      }
      else if (Number(getChildCountThree) > Number(expectedCountThree)) {
        await $(this.childMinusLocator).click();
      }
      else {
        break;

      }
      await browser.pause(2000);
    }


  }

  async selectFirstChildFour() {

    return await $(this.childAgeFieldLocator).selectByIndex(5);

  }

  async selectSecondChildUnderOne() {

    return await $(this.secondChildLocator).selectByIndex(1);


  }

  async thirdChildAgeSeven() {
    return await $(this.thirdChildLocator).selectByIndex(8);

  }

  async clickGuestsDoneButton() {

    return await $(this.doneTravelersLocator).click();
  }


  async totalNumberOfTravelers() {

    return await $(this.totalCountLocator).isDisplayed();






  }



  //Property flow

  async propertyButton() {
    await $(this.propertyButtonLocator).click();

  }


  // submit empty form


  async supportButton() {
    await $(this.supportBtnLocator).click();
    await browser.pause(3000);
  }


  //calendar 

  allDatesLocator = '//h2[text()="August 2023"]/following-sibling::table//button';
  backArrowLocator = '//button[@data-stid="date-picker-paging"][1]';
  nextArrowLocator = '//button[@data-stid="date-picker-paging"][2]';
  leftCalendarHeadingLocator = '//*[@class="uitk-date-picker-month-name uitk-type-medium"][1]';
  disabledDates = '//*[@class="uitk-date-picker-day is-disabled"]';
  enabledDates = '//*[@class="uitk-date-picker-day"]';
  clickDatesInputLocator = '#date_form_field-btn';
  datesLocator_starts = '//h2[text()="';
  datesLocator_ends = '"]/following-sibling::table//button';
  septemberLocator = '(//div[@class="uitk-date-picker-menu-months-container"]//h2)[2]';


  async clickCalendar() {
    await $(this.clickDatesInputLocator).click();
    await browser.pause(3000);

  }


  async goToCurrentMonth(monthYear) {


    await browser.pause(3000);
    const previousArrowDisplayed = await $(this.backArrowLocator).isEnabled();


    for (let i = 0; i < 12; i++) {

      let leftCalendarHeading = await $(this.leftCalendarHeadingLocator).getText();

      if (leftCalendarHeading.localeCompare(monthYear) !== 0) {
        if (previousArrowDisplayed) {
          await $(this.backArrowLocator).click();

        } else {
          await $(this.nextArrowLocator).click();
        }
      } else {

      } break;
    }
  }

  async verifyAugMonth() {


    return await $(this.leftCalendarHeadingLocator).isDisplayed();


  }

  async disabledDatesCount(monthYear) {

    const allDatesLocator = this.datesLocator_starts + monthYear + this.datesLocator_ends;
    const allDates = await $$(allDatesLocator);


    let disabledDateCount = 0;

    for (const date of allDates) {

      const classAttribute = await date.getAttribute('class');

      if (classAttribute.includes('is-disabled')) {

        disabledDateCount++;

      }

    }
    return disabledDateCount;
  }







  async verifyBackButton() {
    return await $(this.backArrowLocator).isEnabled();
  }


  keyHeadingLocator = '//*[text()="One Key Terms and Conditions"]';
  correctDateFormatLocator = '//*[text()="Effective from July 6, 2023"]';
  privacyHeadingLocator = '//h2[text()="Privacy Statement"][1]';
  lastDateUpdatedLocator = '//p[contains(text(),"Last Updated")]';

  //Terms and conditions 


  async keyHeadingDisplayed() {

    const windowHandles = await browser.getWindowHandles();
    await browser.switchToWindow(windowHandles[1]);
    await $(this.keyHeadingLocator).waitForDisplayed();
    return await $(this.keyHeadingLocator).isDisplayed();


  }

  async verifyCorrectDateFormat() {

    const correctFormat = await $(this.correctDateFormatLocator);
    const dateText = await correctFormat.getText();
    const dateParts = dateText.split(" ");
    const dividedParts = dateParts.slice(2).join(" ");
    const expectedDateFormat = "MMMM D, YYYY";
    console.log(dividedParts);
    const effectiveDate = moment(dividedParts, expectedDateFormat);
    expect(effectiveDate.isValid(), 'Date is not in an effective format').to.be.true;

  }
  async verifyPrivacyHeading() {
    const windowHandles = await browser.getWindowHandles();
    await browser.switchToWindow(windowHandles[2]);
    await $(this.privacyHeadingLocator).waitForDisplayed();
    return await $(this.privacyHeadingLocator).isDisplayed();

  }

  async updatedDate() {
    await $(this.lastDateUpdatedLocator).waitForDisplayed({ timeout: 3000 });
    return await $(this.lastDateUpdatedLocator).isDisplayed();


  }


  //Filter functionalities 
  destinationTriggerLocator = '//button[@aria-label="Going to"]';
  searchLocator = '#destination_form_field';
  searchSuggestionsLocator = '//button[@data-stid="destination_form_field-result-item-button"]';
  allSeptemberDatesLocator = '//button[@class="uitk-date-picker-day"]';
  allOctoberDatesLocator = '//h2[text()="October 2023"]/following-sibling::table//button[not(@disabled)]';
  doneButtonLocator = '//button[@data-stid="apply-date-picker"]';
  searchButtonLocator = '#search_button';


  async clickDestination() {
    await $(this.destinationTriggerLocator).waitForClickable();
    await $(this.destinationTriggerLocator).click();

  }



  async searchManhattan() {

    await $(this.searchLocator).setValue('Manhattan');
    await browser.pause(2000);
    await $('//*[@aria-label="Manhattan New York, New York, United States"]').click();

  }

  async selectManhattan() {

    await browser.waitUntil(async () => {
      const suggestions = await $$(this.searchSuggestionsLocator);
      return suggestions.length > 0
    },

      { timeout: 3000, timeoutMsg: 'Autosuggestions are not displayed within 3-seconds' });

    const allSuggestions = await $$(this.searchSuggestionsLocator);

    for (const address of allSuggestions) {

      const addressText = await address.getAttribute('aria-label');

      if (addressText.startsWith('Manhattan, New York')) {

        await address.click();

        break;

      }

    }

  }

  async goToSeptember(monthYearSept) {



    const nextArrowDisplayed = await $(this.nextArrowLocator).isDisplayed();


    for (let i = 0; i < 12; i++) {

      let septemberHeading = await $(this.septemberLocator).getText();

      if (septemberHeading.localeCompare(monthYearSept) !== 0) {
        if (nextArrowDisplayed) {
          await $(this.nextArrowLocator).click();

        } else {
          await $(this.backArrowLocator).click();
        }
      } else {

      } break;
    }
  }

  async checkInDate() {


    const allSeptemberDates = await $$(this.allSeptemberDatesLocator);
    for (const septemberDateElement of allSeptemberDates) {
      const dateValue = await septemberDateElement.getAttribute('data-day');
      if (dateValue.localeCompare('29') === 0) {
        await septemberDateElement.click();
        break;
      }

    }

  }

  async checkOutDate() {
    await $(this.nextArrowLocator).click();

    const allOctoberDates = await $$(this.allOctoberDatesLocator);
    for (const octoberDateElement of allOctoberDates) {
      const dateValue = await octoberDateElement.getAttribute('data-day');
      if (dateValue.localeCompare('16') === 0) {
        await octoberDateElement.click();
        break;
      }

    }

  }

  async checkInOutBtn() {
    await $(this.doneButtonLocator).waitForClickable();
    await $(this.doneButtonLocator).click();
    await browser.pause(2000);

  }

  async searchButton() {
    await $(this.searchButtonLocator).waitForClickable();
    await $(this.searchButtonLocator).click();

  }




  // Get the app

  getTheAppLocator = '//*[text()="Get the app"]';
  downloadLocator = '#marquee-title';
  QRCodeLocator = '//img[@alt="QR code"]';



  async getTheApp() {
    await $(this.getTheAppLocator).click();
  }

  async scanAndQRCodeDownload() {
    const getDownloadApp = $(this.downloadLocator);
    await getDownloadApp.waitForDisplayed({ timeout: 2000 });
    const isDownloadAppDisplayed = await getDownloadApp.isDisplayed();
    expect(isDownloadAppDisplayed, 'Scan the QR code and Download is not displayed').to.be.true;



  }

  async QRCodeDisplayed() {
    const getQRCodeElement = await $(this.QRCodeLocator);
    await getQRCodeElement.waitForDisplayed({ timeout: 2000 });
    const isDisplayed = await getQRCodeElement.isDisplayed();
    expect(isDisplayed, 'Element is not displayed').to.be.true;
  }





}





















module.exports = homepage;




