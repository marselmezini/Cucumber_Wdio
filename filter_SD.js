const { Then } = require("@cucumber/cucumber");
const { When } = require("@wdio/cucumber-framework");
const homepage = require("../Pages_Folder/homepage");
const moment = require ("moment");
const { expect } = require("chai");
const fiveStar = require("../Pages_Folder/fiveStar");


const Homepage = new homepage();
const FiveStar = new fiveStar();


When (/^I click Going To$/,async function (){

   await Homepage.clickDestination();
   await browser.pause(2000);
})




When(/^I search Manhattan, NY$/, async function (){
   
   await  Homepage.searchManhattan('Manhattan');

})

When(/^I select Manhattan, NY$/, async function (){
     
   await  Homepage.selectManhattan();
})


When(/^I click calendar$/, async function (){
   await  Homepage.clickCalendar();

})

When(/^I go to September$/,async function(){
   
    
   await Homepage.goToSeptember();
   await browser.pause(2000);
})

When(/^I enter Check in date as Sep 29, 2023$/, async function (){
    
     
     await Homepage.checkInDate();
     await browser.pause(2000);
     
    
})

When(/^I enter Check out date as Oct 16, 2023$/, async function (){

    await Homepage.checkOutDate();
    await browser.pause(2000);
    
})

When(/^I click checkIn and CheckOut Done button$/, async function (){

  await Homepage.checkInOutBtn();
  
    
})

When(/^I click on Search button$/, async function (){

   await Homepage.searchButton();
   await browser.pause(2000);
    
})

When(/^I click on 5 star$/, async function (){
 
 await FiveStar.clickFiveStar();
 
    
})

Then(/^I select Price Low to High from sort by dropdown$/, async function (){

    await FiveStar.lowToHighSortDropdown();
    
})

/*Then(/^I verify all hotels in search results are 5.0 star rated as selected$/, async function (){

  await FiveStar.allHotelStarRating();
 expect(areHotelsFiveStar,'Hotels are not five star selected').to.be.true; 
 await browser.pause(2000);
})

Then(/^I verify all hotels are listed in increasing price order$/, async function (){

const verifyprices= await FiveStar.verifyHotelPriceIncrease();
expect(verifyprices,'Hotels are not listed in an increase order').to.be.true;
await browser.pause(2000);
})*/
