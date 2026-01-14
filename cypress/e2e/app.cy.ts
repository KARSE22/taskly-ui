describe('App', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display the welcome message', () => {
    cy.contains('Welcome to Taskly').should('be.visible');
  });

  it('should display the logo', () => {
    cy.get('img[alt="Taskly logo"]').should('be.visible');
  });
});
