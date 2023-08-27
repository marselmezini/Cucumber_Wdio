 Feature: travelers
 
    
    Scenario: Verify child-age dropdowns are same as number of Children selected

     
     Given   I am on the hotels homepage
     When    I click on Travelers
     And     I select children as 2
     Then    I verify children dropdowns are 2
     Then    I verify plus button is enabled
     Then    I verify minus button is enabled
     When    I select children as 6
     Then    I verify children age dropdown are 6
     Then    I verify plus button is disabled
     Then    I verify minus button is enabled
     When    I select children as 5
     Then    I verify children age dropdown are 5
     Then    I verify plus button is enabled
     Then    I verify minus button is enabled
     When    I select children as 0
     Then    I verify children age dropdown is NOT displayed
     Then    I verify plus button is enabled
     Then    I verify minus button is disabled