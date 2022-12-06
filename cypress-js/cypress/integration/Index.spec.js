/// <reference types = "cypress" />
import 'cypress-xpath';
import { AddingTheProductToTheCart } from './utils.js';

//first cypress code to visit the URL
describe('Test cases for verification of the URL and titles.', function () {
  it('Navigates to the URL', function () {
    cy.visit('https://www.demoblaze.com/');
  });

  // //Cypress code to check the correct URL is loaded
  // it('Check the URL', function () {
  //   cy.url().should('include', 'demoblaze');
  // });

  // //Cypress code to check the title of the page
  // it('Check the title', function () {
  //   cy.title().should('eq', 'STORE');
  // });

  // //cypress code to navigate to the Home page with the URL
  // it('Navigate to the Home page', function () {
  //   cy.contains('Home').click();
  //   cy.url().should('include', 'index.html');
  // });

  // it('Check wether every items are displayed on the Home page', function () {
  //   cy.get('.card-title').should('have.length', 9);
  // });

  // it('Click on the next button and check the every card is displayed on the page', function () {
  //   cy.get('#next2').click();
  //   cy.get('.card-title').should('have.length', 9);
  // });

  // describe('Testing Sign up Form', () => {
  //   it('Testing the sign up with the valid username and userpassword', function () {
  //     cy.get('#signin2').click();
  //     cy.xpath('/html/body/div[2]/div/div/div[2]/form/div[1]/input')
  //       .wait(5000)
  //       .type('testuser');
  //     cy.get('#sign-password').wait(5000).type('testuser');
  //     cy.xpath("//button[contains(text(),'Sign up')]").click();
  // cy.on('window:confirm', () => true);
  //   });
});

describe('Testing login and username', () => {
  it('Testing the login with the valid username and userpassword', function () {
    cy.get('#login2').click();
    cy.get('#loginusername').wait(1000).type('kushdemoblaze', { delay: 30 });
    cy.get('#loginpassword').wait(100).type('kushdemoblaze', { delay: 30 });
    cy.xpath("//button[contains(text(),'Log in')]").click().wait(4000);
    cy.on('window:confirm', () => true);
  });
});

describe('Testing Add to Cart Feature', () => {
  it('Adding the product to the cart', function () {
    // AddingTheProductToTheCart();
    cy.xpath("//a[contains(text(),'Samsung galaxy s6')]")
      // .wait(3000)
      .click();
    cy.get('.col-sm-12 > .btn').wait(3000).click();
    cy.wait(1000);
    cy.on('window:confirm', () => true);
    cy.url().should('include', 'prod.html');
    // cy.get('#cartur').click();
    cy.get(':nth-child(4) > .nav-link').wait(3000).click();
    cy.wait(1000);
  });
});

// describe('Testing place order feature', () => {
//   it('Checking the place order button', function () {
//     cy.get('.col-lg-1 > .btn').wait(10000).click();
//     cy.get('#name').type('Frank');
//     cy.get('#country').type('Canada');
//     cy.get('#city').type('Toronto');
//     cy.get('#card').type('1234567891011121');
//     cy.get('#month').type('May');
//     cy.get('#year').type('2021');
//     cy.get(
//       '#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary'
//     )
//       .click()
//       .wait(4000);
//     cy.get('.confirm').should('be.visible').click();
//   });

//   it('Checking the close button', function () {
//     AddingTheProductToTheCart();
//     cy.get('.col-lg-1 > .btn').click();
//     cy.get('#name').type('Frank');
//     cy.get('#country').type('Canada');
//     cy.get('#city').type('Toronto');
//     cy.get('#card').type('1234567891011121');
//     cy.get('#month').type('May');
//     cy.get('#year').type('2021');
//     cy.get(
//       '#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary'
//     )
//       .wait(4000)
//       .click();
//   });
// });
