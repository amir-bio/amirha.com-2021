describe('Test landing page with visual testing', () => {
  it('Loads the landing page', () => {
    cy.visit('/');

    cy.get('h1').contains('Hey 👋, I’m Amirhossein Andohkosh').should('be.visible')
    cy.get('img[alt="Amirhossein Andohkosh"]').should('be.visible')
    // Take a snapshot for visual diffing - widths correspond to a mobile phone, ipad, 11" laptop, 15" laptop
    cy.percySnapshot('Landing page', { widths: [320, 768, 1366, 1440] });
  });
});
