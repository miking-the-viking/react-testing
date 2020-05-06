
describe('web-ui', () => {
  beforeEach(() => cy.visit('/'));

  it('should redirect to the enter token page', () => {

    cy.url().should('include', 'enter-token')
  });
});
