describe('onlineshop- search tool', () => {

    const newItem = "t-shirt";

    beforeEach(() => {
        cy.visit('http://automationpractice.com/')
    });



    it('shows products labeled as "t-shirt"', () => {

        cy.get('#search_query_top')
            .type(`${newItem}{enter}`)

        cy.get('.heading-counter').should('include.text', '1 result has been found.')
        cy.get('.lighter').should('include.text', newItem)

        cy.get('.product-count').should('include.text', 'Showing 1 - 1 of 1 item')
    })

    it('shows O when writting wrong phrase-tshirt, shows phrase: "No results"', () => {

        cy.get('#search_query_top')
            .type(`tshirt{enter}`)

        cy.get('.heading-counter').should('include.text', '0 results have been found.')
        cy.get('.alert.alert-warning').should('include.text', 'No results')
    })


    it('shows all products, that have in their name specific phrase "printed dress"', () => {
        cy.get('#search_query_top')
            .type(`printed dress{enter}`)
        cy.get('.lighter').should('contain.text', 'printed dress')
    })

})