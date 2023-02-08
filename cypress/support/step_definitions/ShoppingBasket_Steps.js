// <reference types="cypress" />
import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";


Then('I should be presented with header text', () => {
   cy.get('.checkout__empty').contains('Nu aveți produse în coș.');

 });

 When('I click on the produse button', () => {
  cy.get('.coco').click();
  
});

When('I press on the carte button', () => {
  cy.xpath('//*[@id="mm-produse"]/div/div/div[1]/mega-menu-cats/md-list/md-list-item[1]/div[1]/a[1]').click();
});

When('I pick a book', () => {
  cy.get(':nth-child(2) > .product-grid-container > .clean-a').click();
  // cy.xpath('//*[@id="coloana-produse"]/div/div/div[2]/prod-grid-box/a/div').click();

});

When('I click on the adauga in cos button', () => {
  cy.get('#cartu-add-to-cart-btn-x > .ng-scope').click();
  
});

Then('I should have one item in the shopping basket', () => {
  cy.get('.product-count').should('have.text', '1')

});

When('I press on the shopping basket button', () => {
  cy.get('.checkout__text').click();
});

When('I click on the finalizare comanda button', () => {
  cy.get('[data-ng-if="!!cart.products && cart.products.length"] > .hidden-sm').click();
  
});

When('I click on the delete button', () => {
  cy.xpath('//*[@id="checkout-products-grid-container"]/table/tbody/tr/td[5]').click();

});

Then('I should be presented with text', () => {
  cy.get('h1').should('have.text', ' Nu mă lăsa gol ')
 
});

When('I pick an indisponible book', () => {
  cy.get(':nth-child(1) > .product-grid-container > .clean-a').click();

});

When('I click on the adauga in wishlist button', () => {
  cy.get('.addToWishList > .clean-a').click();

});

When('I press on the adauga in wishlist button', () => {
  cy.get('[style="font-size: 15px;"]').click();
  
});

When('I click on the adauga in button', () => {
  cy.get('strong.ng-binding').click();
  
});

When('I click on the salut button', () => {
  cy.get('#accountDropdown > :nth-child(2)').click();
  
});

When('I navigate to the wishlist button', () => {
  cy.get('.open > .dropdown-menu > :nth-child(3) > a').click();
  
});

Then('I should have the product in wishlist', () => {
  cy.get('.md-title > .ng-binding').should('have.text', ' ⚑ ❤ ✂')
  //cy.xpath('/html/body/div[2]/div[2]/div[2]/div[2]/div/md-card/md-card-content/md-list/md-card').should('have.product', 'Nemuritor in poezie')
  
  
});

