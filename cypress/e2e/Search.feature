Feature: Carturesti - Search page

    Scenario Outline: Validate valid & invalid search
        Given I navigate to the carturesti homepage
        When I click on the search input
        And I type a book <book>
        And I press enter on the search button
        Then I should be presented with header text <message>

        Examples:
            | book                    | message                                            |
            | nuvela                  | Alege un tip de produs pentru filtre suplimentare. |
            | sdfghfdsxgv             | Ne pare rău, nu am găsit nimic.                    |
            | Alice in tara minunilor | Alege un tip de produs pentru filtre suplimentare. |