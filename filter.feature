
Feature: Filter
   
   Scenario: Verify filter by and sort by functionality works as expected
   
     Given  I am on the hotels homepage
     When   I click Going To
     When   I search Manhattan, NY
     When   I select Manhattan, NY
     And    I click calendar
     And    I go to September
     And    I enter Check in date as Sep 29, 2023
     And    I enter Check out date as Oct 16, 2023
     And    I click checkIn and CheckOut Done button
     And    I click on Search button
     And    I click on 5 star
     And    I select Price Low to High from sort by dropdown
     Then   I verify all hotels in search results are 5.0 star rated as selected
     Then   I verify all hotels are listed in increasing price order
    













       