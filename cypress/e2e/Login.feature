Feature: Carturesti - Login page

    Scenario: Valid Login Page - Using specific data
        Given I navigate to the carturesti homepage
        When I click on the login button 
        And I click on the utilizator existent button
        And I type an emaill adress 
        And I type a password
        And I click on the autentificare button
        Then I should have Salut button