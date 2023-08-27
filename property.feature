
Feature: Property

    
    Scenario: Verify "List your Property" flow
        
        Given I am on the hotels homepage
        When  I click on List your property
        Then  I verify what would you like to list is displayed
        Then  I verify Lodging is displayed 
        Then  I verify Private residence is displayed
        When  I click on Private residence
        Then  I verify Step 1 of 3 is displayed
        When  I enter 4 as bedroom
        And   I enter 2.5 as bathroom
        And   I click on Next button
        Then  I verify Step 2 of 3 is displayed
        And   I verify Where is your place located is displayed
        When  I enter 1211 in address
        And   I Select 1211 Crescent Lane, Prosper, TX from auto-suggestion
        Then  I verify map is displayed
        And   I verify pin in map is displayed
        And   I verify Move the pin to adjust the location of your property











    