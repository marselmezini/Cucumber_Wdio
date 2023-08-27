

const { When, Then } = require("@cucumber/cucumber");
const homepage = require("../Pages_Folder/homepage");
const { expect } = require("chai");


const Homepage = new homepage();

 When(/^I click Get the app button$/,async function(){
   await Homepage.getTheApp();
  


})

 Then(/^I verify Scan the QR code and download our app is displayed$/,async function(){
  await Homepage.scanAndQRCodeDownload();
  

    
})

 Then(/^I verify QR code is displayed$/,async function(){
      await Homepage.QRCodeDisplayed();
 

    
})





