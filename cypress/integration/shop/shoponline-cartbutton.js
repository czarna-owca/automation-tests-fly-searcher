describe('onlineshop-cartbutton', () => {
    beforeEach(() => {
        cy.visit('http://automationpractice.com/')

    })
    context('adding 1 item to cart', () => {
        it('shows 1 item added', () => {
       
            let newItem = "t-shirt"
            cy.get('#search_query_top')
                .type(`${newItem}{enter}`)  
            
            cy.get('.ajax_add_to_cart_button > span').click()
            cy.get('btn btn-default button button-medium',{ timeout: 10000 }).click()
            cy.get('ajax_cart_quantity').should('have.value','2')
        })
    })

})