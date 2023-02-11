Feature: Carturesti - Shopping basket page

    #Scenario: Valid Shopping basket page with disponible item
    #Given I navigate to the carturesti homepage
    #When I click on the shopping basket button
    #Then I should be presented with header text
    #And I click on the produse button
    #And I press on the carte button
    #And I pick a book
    #And I click on the adauga in cos button
    #Then I should have one item in the shopping basket
    #And I press on the shopping basket button
    #And I click on the finalizare comanda button
    #And I click on the delete button
    #Then I should be presented with text

    #Scenario: Valid Shopping basket page with indisponible item
    #Given I navigate to the carturesti homepage
    #When I click on the shopping basket button
    #Then I should be presented with header text
    #And I click on the produse button
    #And I press on the carte button
    #And I pick an indisponible book
    #And I click on the adauga in wishlist button
    #And I click on the utilizator existent button
    #And I type an emaill adress
    #And I type a password
    #And I click on the autentificare button
    #And I press on the adauga in wishlist button
    #And I click on the adauga in button
    #And I click on the salut button
    #And I navigate to the wishlist button
    #Then I should have the product in wishlist

    Scenario: Valid order completion
        Given I navigate to the carturesti homepage
        When I click on the login button
        And I click on the utilizator existent button
        And I type an emaill adress
        And I type a password
        And I click on the autentificare button
        Then I should have Salut button
        And  I click on the search input
        And I type a book
        And I press enter on the search button
        And I choose a book
        And I click on the adauga in cos button
        Then I should have one item in the shopping basket
        And I press on the shopping basket button
        And I click on the finalizare comanda button
        And I click continua la date de livrare button
        And I select persoana fizica box
        And I type a last name
        And I type a first name
        And I type a number phone
        And I select a country
        And I select a county
        And I select a city
        And I type an adress
        And I type a postal code
        And I select curier rapid box
        And I click continua la facturare si plata button
        #And I mark off curier rapid box
        #And I press continua la facturare si plata button






