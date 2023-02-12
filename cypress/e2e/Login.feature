@Log-in @regression
Feature: Carturesti - Login page

    Background: Pre Condition
        Given I navigate to the carturesti homepage
        When I click on the login button


    Scenario: Valid Login Page
        And I click on the utilizator existent button
        And I type an emaill adress
        And I type a password
        And I click on the autentificare button
        Then I should have Salut button

    @smoke
    Scenario: Invalid Login Page
        And I click on the utilizator existent button
        And I type an wrong emaill adress
        And I type a wrong password
        And I click on the autentificare button
        Then I should have presented with header text
