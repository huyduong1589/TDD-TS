#Login.feature
Feature: Login Page
    I should be able to login  
    Scenario: Google search for voter cards app    
        When I navigate to http://localhost:3000
        And I provide username, password
        And I click Submit button
        Then I should login