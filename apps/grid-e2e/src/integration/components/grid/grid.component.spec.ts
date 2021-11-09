describe('grid', () => {
  beforeEach(() => cy.visit('/iframe.html?id=gridcomponent--primary'));
  it('should render the component', () => {
    cy.get('driverz-grid').should('exist');
  });
});