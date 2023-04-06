describe('onlineshop-cartbutton', () => {
   
    beforeEach(() => {
        let newItem = "dress"
        
        cy.visit('/')
        cy.get('#search_query_top').type(`${newItem}{enter}`)
        cy.get(':nth-child(1) > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').click()
    })

    it('number of items in shopping cart changed into 1', () => {
        cy.get('[title="View my shopping cart"] > .ajax_cart_quantity').should('contain.text', '1')
    })

    it('it moves into shopping cart summary', () => {
        cy.get('[title="View my shopping cart"]').click()
        cy.get('#cart_title')
            .should('be.visible')
            .and('contain.text', 'Shopping-cart summary')
    })
})
