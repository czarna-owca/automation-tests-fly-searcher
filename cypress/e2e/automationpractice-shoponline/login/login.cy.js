import { Given, When, And, Then } from '@badeball/cypress-cucumber-preprocessor';
//const homeShopPage = require('../../e2e/homeShopPage');


Given('A user openes a home page and click on sign in button', () => {
    cy.visit("http://automationpractice.com");

    cy.get('.login').click()//-- before homeshoppage

    //homeShopPage.click(signin)
})

When('A user enter the username {string}', (username) => {

    //cy.get('#email').type(newLogin)
    cy.get('#email').type(username)//- before homeshoppage
    //homeShopPage.typeUsername(username)
})

And('A user enter the password {string}', (password) => {
    cy.get('#passwd').type(password) // before homeshoppage

    //homeShopPage.typePassword(password)

})


And('A user clicks on green sign in button- loginbtn', () => {

    cy.get('#SubmitLogin > span').click()//- before homeshoppage
    // homeShopPage.click(login)
})

Then('A user will be successfully logged in', () => {

    //cy.get('#center_column').should('contain', 'My account');
    cy.url().should('contains', 'index.php?controller=my-account')

})


Then(' A user will received message {string}', (message) => {
    cy.get('#center_column').should('have.text', message)
})
