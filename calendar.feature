
 
Feature: Calendar
  
   
     Scenario: Verify past dates and back button on Current month's calendar is disabled

        Given I am on the hotels homepage
        When  I click on calendar
        When  I go to current month if not displayed
        Then  I verify August is displayed
        Then  I verify past dates are disabled
        Then  I verify back button on current month is disabled 































