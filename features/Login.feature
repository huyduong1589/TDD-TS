#Login.feature
Feature: Login Page
    I should be able to login  
    Scenario: Login with valid credential    
        When I navigate to http://localhost:3000
        When I provide username, password
        When I click Submit button
        Then I should login