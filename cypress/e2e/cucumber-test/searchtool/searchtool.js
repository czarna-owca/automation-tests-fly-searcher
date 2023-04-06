import { Given, When, And, Then } from '@badeball/cypress-cucumber-preprocessor';
const searchtoolPage = require('../../pages/searchtoolPage')

Given('Home page is displayed', () => {
    cy.visit("/");
})

When('Enter product name {string} into search tool and click enter', (productname) => {

    searchtoolPage.typeProductName(productname)
})

Then('Page shows all products labeled as {string}', () => {


})