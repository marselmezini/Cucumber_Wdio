 

Feature: User feedback

   Scenario: Verify user can submit feedback after completing the feedback form

    Given I am on the hotels homepage
    When  I click on “Support”
    And   I click “Site Feedback”
    And   I select any OVERALL rating
    And   I select any CONTENT rating
    And   I select any DESIGN rating
    And   I select any EASE OF USE rating
    And   I click on SUBMIT button
    Then  I verify THANK YOU FOR YOUR FEEDBACK is displayed 














 