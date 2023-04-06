describe('pop-up - added item to cart test', () => {

    beforeEach(() => {
        cy.visit('/')
    });

    it('shows pop up- added item to cart', () => {

        let newItem = "dress"
        cy.get('#search_query_top').type(`${newItem}{enter}`)
        cy.get(':nth-child(1) > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').click()
        cy.get('#layer_cart > .clearfix')
        .should('be.visible')
    })
})
