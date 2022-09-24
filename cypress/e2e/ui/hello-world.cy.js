describe('Application', function() {
    it('Visits the app', function() {
    cy.visit('http://localhost:3000/');
    cy.get('h2[data-test="heading"]').contains('Hello world')
    })
    })