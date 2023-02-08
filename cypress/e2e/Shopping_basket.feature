Feature: Carturesti - Shopping basket page

    Scenario: Valid Shopping basket page
        Given I navigate to the carturesti homepage
        When I click on the shopping basket button
        Then I should be presented with header text
        And I click on the produse button
        And I press on the carte button 
        And I pick a book
        And I click on the adauga in cos button 
        Then I should have one item in the shopping basket 
        And I press on the shopping basket button
        And I click on the finalizare comanda button
        And I click on the delete button
