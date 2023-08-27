
Feature: Languages

    Scenario: Verify language can be changed successfully

        Given      I am on the hotels homepage
        When       I click on English language
        And        I select Español in language dropdown
        And        I click on Save button
        Then       I verify Español is displayed
        Then       I click on Español language
        Then       I select English
        Then       I click on Guardar button
        Then       I verify English is displayed


    