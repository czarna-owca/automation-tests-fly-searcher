import { Given, When, And, Then } from '@badeball/cypress-cucumber-preprocessor';
const popupPage = require('../../../pages/popupPage');
const searchtoolPage = require('../../../pages/searchtoolPage')

Given('Item is added to shopping cart', () =>{
    cy.visit("/");
    searchtoolPage.typeProductName(`${"dress"}{enter}`)
    cy.get(":nth-child(1) > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span").click()

})

When ('Pop up is displayed', () => {
    cy.get("#layer_cart > .clearfix").should('exist')
})

Then('Pop up contains elements: message {string}, productName "Dress", imagige, size {string}, quantity: "1", price: {string}', (message, size, price) => {
    cy.get('.layer_cart_product > h2').should('contain', message)
    cy.get('.product-image-container > .layer_cart_img').should('exist')
    cy.get('#layer_cart_product_attributes').should('contain', size)
    cy.get('#layer_cart_product_quantity').invoke('text').then(parseFloat).should('be.gte', 1)
    cy.get('#layer_cart_product_price').should('contain', price)
})

