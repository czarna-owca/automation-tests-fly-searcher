import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
const homeShopPage = require('../../e2e/homeShopPage')


Given('open home page and click on sign in button', () => {
    cy.visit("/")
    //cy.get('.login').click()-- before homeshoppage

    homeShopPage.click(signin)
})

When('Enter the Email address {string}', (username) => {

    //cy.get('#email').type(newLogin)
    // cy.get('#email').type(username)- before homeshoppage
    homeShopPage.typeUsername(username)
})

And('Enter the password {string}', (password) => {
    //cy.get('#passwd').type(password)- before homeshoppage

    homeShopPage.typePassword(password)

})


And('Click on green sign in button- loginbtn', () => {

    //  cy.get('#SubmitLogin > span').click()- before homeshoppage
    homeShopPage.click(login)
})

Then('The user is successfully logged in', () => {
    cy.get('#center_column').should('contain', 'My account');
    cy.url().should('contain', 'index.php?controller=my-account')

})


Then('The user will received message {string}', (message) => {
    cy.get('#center_column').should('have.text', message)
})
