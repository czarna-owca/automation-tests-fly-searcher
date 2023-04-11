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

Then('Page shows product labeled as {string}', () => {
    cy.get('.heading-counter').should('contain', 'results have been found.')
})

And('Enter {string} into search tool', (productname) => {
    searchtoolPage.typeProductName(productname)
})

Then('Receive message: {string}', (message) => {
cy.get('.alert').should('contain', message)
})
