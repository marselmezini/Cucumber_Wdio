Feature: Email


    Scenario: Verify hotels homepage features
        Given I am on the hotels homepage
        When  I click on Sign in link
        And  I click on Sign in button
        And  I enter invalid email address
        And  I click on continue button
        Then  I choose to verify error message is displayed 
