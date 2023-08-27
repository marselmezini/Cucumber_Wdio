
Feature: TermsAndConditions

 Scenario: Verify Terms And Conditions link and Privacy Statements link open correct page

     Given I am on the hotels homepage
     When  I click Sign in link
     When  I click Sign in button
     And   I click One Key Rewards Terms & Conditions link
     Then  I verify One Key Terms and Conditions heading is displayed
     Then  I verify Effective from date format is in correct format: MMMM D, yyyy
     When  I click Privacy Statement link
     Then  I verify Privacy Statement heading is displayed
     Then  I verify Last Updated date format 
















   