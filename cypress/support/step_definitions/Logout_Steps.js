// <reference types="cypress" />
import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

When('I click Salut button', () => {
    cy.get('#accountDropdown > .cartu-icons-reader').click();

});

When('I press logout button', () => {
    cy.get('.dropdown-menu > :nth-child(5) > a').click();
});

Then('I should have login button', () => {
    cy.get(':nth-child(2) > .md-button > span.ng-scope').should('contain.text', 'login');
})