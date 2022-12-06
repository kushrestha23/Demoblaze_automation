/// <reference types = "cypress" />
import 'cypress-xpath';
import{slowCypressDown} from 'cypress-slow-down';

describe('Test cases for verification of the URL and titles.', function () {
  it('Navigates to the URL', function () {
    cy.visit('https://www.demoblaze.com/');
  });

  //Check the correct URL is loaded
  it('Check the URL', function () {
    cy.url().should('include', 'demoblaze');
  });

  //Check the title of the page
  it('Check the title', function () {
    cy.title().should('eq', 'STORE');
  });

  //Navigate to the Home page with the URL
  it('Navigate to the Home page', function () {
    cy.contains('Home').click();
    cy.url().should('include', 'index.html');
  });

  //Valid username and password
  it('Testing the login with the valid username and userpassword', function () {
    cy.get('#login2').click();
    cy.get('#loginusername').wait(900).type('kushdemoblaze', { delay: 100 });
    cy.get('#loginpassword').wait(900).type('kushdemoblaze', { delay: 100 });
    cy.xpath("//button[contains(text(),'Log in')]").click().wait(4000);
    cy.on('window:confirm', () => true);
    cy.get('#nameofuser').should('have.text', 'Welcome kushdemoblaze');
  });

  //Purchase made by the user
  it('purchase made by the user', function () {
    cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch')
      .wait(2000)
      .click();
    cy.get('.col-sm-12 > .btn').click();
    cy.get('#cartur').click().wait(3000);
  });
});
