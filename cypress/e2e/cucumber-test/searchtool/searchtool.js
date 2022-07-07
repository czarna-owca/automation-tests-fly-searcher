import { Given, When, And, Then } from '@badeball/cypress-cucumber-preprocessor';
const searchtoolPage = require('../../pages/searchtoolPage')

Given('A user openes a home page', () => {
    cy.visit("/");
})

When('A user enters the product name {string} into search tool and clicks enter', (productname) => {

    searchtoolPage.typeProductName(productname)
})

Then('Page shows all products labeled as t-shirt', () => {


})