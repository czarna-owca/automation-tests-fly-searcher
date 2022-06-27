describe('onlineshop-cartbutton', () => {
    beforeEach(() => {
        cy.visit('http://automationpractice.com/')
        let newItem = "t-shirt"
        cy.get('#search_query_top')
            .type(`${newItem}{enter}`)
        cy.get('.ajax_add_to_cart_button > span').click()

    })


    it('number of items in shopping cart changed into 1', () => {
        cy.get('.cross').click()
        cy.get('[title="View my shopping cart"] > .ajax_cart_quantity').should('contain.text', '1')

    })

    it('it moves into shopping cart summary', () => {
        cy.get('.cross').click()
        { force: true }
        cy.get('[title="View my shopping cart"]').click()
        cy.get('#cart_title').should('be.visible')
            .and('contain.text', 'Shopping-cart summary')
        //  .and('contain.text', 'Your shopping cart contains: 1') !!!

    })

    // it('it shows ', () => {

    //     cy.get('.mouse-hover-content').invoke('show').should(//have picture, working cross, button summary)
    //   ) 
    // })

})
