  

  
      Feature: Submit form

            Scenario: Verify error is displayed when user submits the empty feedback form
               Given I am on the hotels homepage
               When  I click on “Support”
               And   I click “Site Feedback”
               And   I click on Submit button
               Then  I verify error message is displayed 
               Then  I verify red-box is displayed around OVERALL section













    
