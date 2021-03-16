describe('Test landing page with visual testing', () => {
  it('Loads the landing page', () => {
    // Load the page or perform any other interactions with the app.
    cy.visit('/');

    // Take a snapshot for visual diffing - widths correspond to a mobile phone, ipad, 11" laptop, 15" laptop
    cy.percySnapshot('Landing page', { widths: [320, 768, 1366, 1440] });
  });
});
