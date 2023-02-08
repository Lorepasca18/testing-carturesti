///<reference types="cypress" />
import { Given, When, Then, Before } from "@badeball/cypress-cucumber-preprocessor";

const url = "https://carturesti.ro/"


Given(`I navigate to the carturesti homepage`, () => {
  cy.visit(url);
});

When(`I click on the login button`, () => {
  cy.get(':nth-child(2) > .md-button > span.ng-scope').click();
  }); 

  When(`I click on the search input`, () => {
    cy.get('#search-input').click();
  
  }); 

  When(`I click on the shopping basket button`, () => {
    cy.get('.checkout__text').click();
  }); 