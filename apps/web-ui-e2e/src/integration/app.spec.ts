describe('web-ui', () => {
  let NX_GITHUB_API_TOKEN;

  before(() => {
    NX_GITHUB_API_TOKEN = Cypress.env('NX_GITHUB_API_TOKEN');
  });

  beforeEach(() => cy.visit('/'));

  it('should redirect to the enter token page', () => {
    cy.url().should('include', 'enter-token');
  });

  it('should redirect to repos page after sumbitting a valid token', () => {
    cy.visit('/enter-token');
    cy.get('input#enter_token').type(NX_GITHUB_API_TOKEN);
    cy.contains('Submit').click();
    cy.url().should('include', 'repositories');
  });
});
