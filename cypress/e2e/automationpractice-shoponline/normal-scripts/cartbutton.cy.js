describe('onlineshop-cartbutton', () => {
   
    beforeEach(() => {
        let newItem = "t-shirt"
        
        cy.visit('/')
        cy.get('#search_query_top').type(`${newItem}{enter}`)
        cy.get('.right-block > .button-container').click()
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
