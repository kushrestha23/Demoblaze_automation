
  export function AddingTheProductToTheCart() {
    cy.xpath("//a[contains(text(),'Samsung galaxy s6')]").wait(3000).click();
    cy.get('.col-sm-12 > .btn').wait(3000).click();
    // cy.url().should('include', 'prod.html');
    cy.get('#cartur').click();
    // cy.get('.success > :nth-child(1) > img').should('be.visible');
    // cy.get('.success > :nth-child(2)').should('be.visible');
    // cy.get('.success > :nth-child(4) > a').should('be.visible');
  }