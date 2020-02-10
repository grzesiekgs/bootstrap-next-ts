/// <reference types="Cypress" />

context('Index page', () => {
  beforeEach(() => {
    cy.visit('localhost:9090');
  });

  it('Renders title.', () => {
    cy.get('h1').should('contain', 'G2A CMS');
  });
});
