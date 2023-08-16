 Feature: travelers
 
    Scenario: Verify child-age dropdowns are same as number of Children selected

     
     Given   I am on the hotels homepage
     When    I click on Travelers
     And     I select “Children” as 2
     Then    I verify Children-age dropdown are 2
     Then    I verify Plus-button is enabled
     Then    I verify minus-button is enabled
     When    I select “Children” as 6
     Then    I verify Children-age dropdown are 6
     Then    I verify Plus button is disabled
     Then    I verify minus-button is enabled
     When    I select “Children” as 5
     Then    I verify Children-age dropdown are 5
     Then    I verify Plus button is enabled
     Then    I verify minus-button is enabled
     When    I select “Children” as 0
     Then    I verify Children-age dropdown is NOT displayed
     Then    I verify Plus button is enabled
     Then    I verify minus-button is disabled