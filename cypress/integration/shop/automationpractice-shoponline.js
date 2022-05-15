describe('onlineshop', () => {
    beforeEach(() => {
        cy.visit('http://automationpractice.com/')

    });

    context('search tool', () => {
        it('can search products by name- t-shirt', () => {

            let newItem = "t-shirt"
            cy.get('#search_query_top')
                .type(`${newItem}{enter}`)

            cy.get('.heading-counter').should('include.text', '1 result has been found.')
            cy.get('.lighter').should('include.text', newItem)

            cy.get('.product-count').should('include.text', 'Showing 1 - 1 of 1 item')
        })

        it('shows O when writting wrong phrase-tshirt', () => {

            cy.get('#search_query_top')
                .type(`tshirt{enter}`)

            cy.get('.heading-counter').should('include.text', '0 results have been found.')
            cy.get('.alert.alert-warning').should('include.text', 'No results')
        })

    })


})