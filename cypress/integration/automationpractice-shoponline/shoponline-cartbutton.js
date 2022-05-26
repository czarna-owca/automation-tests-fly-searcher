describe('onlineshop-cartbutton', () => {
    beforeEach(() => {
        cy.visit('http://automationpractice.com/')

    })

    
        it('shows pop up with sentence: There are 1 items in your cart. ', () => {
       
            let newItem = "t-shirt"
            cy.get('#search_query_top')
                .type(`${newItem}{enter}`)  
            
            cy.get('.ajax_add_to_cart_button > span').click()
                        //cy.get('ajax_cart_quantity').should('have.value','2')
            cy.get('.ajax_cart_product_txt ').should('.ajax_cart_product_txt ').to.contain('There are 1 items in your cart')
        })
})