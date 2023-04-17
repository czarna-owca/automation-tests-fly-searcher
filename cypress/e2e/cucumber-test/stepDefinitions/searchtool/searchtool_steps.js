import { Given, When, And, Then } from '@badeball/cypress-cucumber-preprocessor';
const searchtoolPage = require('../../../pages/searchtoolPage')

Given('Home page is displayed', () => {
    cy.visit("/");
})

When('Enter product name {string} into search tool', (productname) => {

    searchtoolPage.typeProductName(productname)
})

And('Click on searchtool button', () => {
    searchtoolPage.clickSearch()
})

//  jedynie dress, a nie inne
Then('Page shows only products with productName {}', () =>{
     cy.get('.product-name').should('exist')
 })

And('Enter {string} into search tool', (productname) => {
    searchtoolPage.typeProductName(productname)
})

Then('Receive message: {string}', (message) => {
cy.get('.alert').should('contain', message)
})

Then('Action not performed, searchtool button blocked', () => {
    cy.get('#searchbox > .btn').should('be.disabled')
})

Then('Show message {string}', (message) => {
    cy.get('.alert').should('contain', message)
})


//  'contain', 'results have been found.') zamienic na >= 1 
Then('Page shows suggestions form category {string} under searchtool', (category) => {
    cy.get('.ac_results').should('exist')
    // cy.get('.ac_results').then(($el) => {
    //     if ($el.length) {
        
    //     } else {
    //     // Element does not exist, do something else
    //     }
    //     });

   
})


// Then('Page shows category {string} description', (category) => {
//  cy.get('.content_scene_cat').should('contain', category)
// })
