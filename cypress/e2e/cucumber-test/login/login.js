import { Given, When, And, Then } from '@badeball/cypress-cucumber-preprocessor';
const homeLoginPage = require('../../pages/homeLoginPage')

Given('A user openes a home page and click on sign in button', () => {

    cy.visit("/");
    homeLoginPage.clickSignin()
})

When('A user enters the username {string}', (username) => {

    homeLoginPage.typeUsername(username)
})

And('A user enters the password {string}', (password) => {

    homeLoginPage.typePassword(password)
})


And('A user clicks on green sign in button- loginbtn', () => {

    homeLoginPage.clickLogin()
})

Then('A user will be successfully logged in', () => {

    cy.url().should('contains', '/index.php?controller=my-account')
})


Then('A user will receive message {string}', (message) => {

    cy.get('#center_column').should('contain', message);

})

And('A user clicks on sign out button', () => {

    homeLoginPage.clickLogout()
})

Then('A user will be successfully logged out', () => {

    cy.get('.page-heading').should('contain', 'Authentication')
})


