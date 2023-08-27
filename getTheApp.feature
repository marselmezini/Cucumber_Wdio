
Feature: Get the App
  
  Scenario: Verify Get the app section

    Given I am on the hotels homepage
    When  I click Get the app button
    Then  I verify Scan the QR code and download our app is displayed
    And   I verify QR code is displayed







