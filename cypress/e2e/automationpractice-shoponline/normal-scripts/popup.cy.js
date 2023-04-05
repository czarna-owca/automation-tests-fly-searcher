describe('pop-up test', () => {

    beforeEach(() => {
        cy.visit('http://automationpractice.pl//')
    });

    it('shows pop up', () => {

        let newItem = "t-shirt"
        cy.get('#search_query_top').type(`${newItem}{enter}`)
        cy.get('.ajax_add_to_cart_button > span').click()
        cy.get('#layer_cart').contains('.clearfix')
        .should('be.visible')
    })
})
