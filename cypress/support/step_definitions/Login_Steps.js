// <reference types="cypress" />
import { When,Then, Given} from "@badeball/cypress-cucumber-preprocessor";

When('I click on the utilizator existent button', () => {
    cy.get('#loginTrigger').click();
})

When('I type an emaill adress', () => {
    cy.get('#loginform-email').type("pascalorena18@yahoo.com");
   
})

When('I type a password', () => {
    cy.get('#loginform-password').type("abcd1234.");
})

When('I click on the autentificare button', () => {
    cy.get('#modalLoginForm > .form-group > .btn').click();
})

Then('I should have Salut button', () => {
    // cy.get('#accountDropdown > :nth-child(2)').should('include.text', 'Salut')
    cy.get('#accountDropdown > :nth-child(2)').should('contain.text', 'Salut');
})

When('I type an wrong emaill adress', () => {
    cy.get('#loginform-email').type("pascalorena@yahoo.com");
   
})

When('I type a wrong password', () => {
    cy.get('#loginform-password').type("abcd1234");
})

Then('I should have presented with header text', () => {
    cy.get('.field-loginform-password > .help-block').should('have.text', "Adresă de email sau parolă incorectă.")
   
})
