describe('My awesome home page', () => {
    it('clicking the button should show the vinyl', () => {
        cy.visit('http://localhost:3000');

        cy.get('.button')
            .click()
            .get('#vinyl:visible')
            .get('.button')
            .click()
            .get('#vinyl:hidden')
            .get('button')
            .contains('Show me the magic');
    });
});