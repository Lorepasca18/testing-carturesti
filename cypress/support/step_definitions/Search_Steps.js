// <reference types="cypress" />
import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

When('I type a book {}', (book) => {
    cy.get('#search-input').type(book);
  
});

When('I press enter on the search button', () => {
    cy.get('#search-input').type('{enter}')
});

Then('I should be presented with header text {}', (message) => {
    //cy.get('#container-search > .col-xs-12').contains(message)
    cy.xpath('//*[@id="container-search"]/div[1]/div[1] | //*[@id="search-category"]/div').should('contain', message);

 });

 
