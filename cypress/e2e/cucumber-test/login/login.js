import { Given, When, And, Then } from '@badeball/cypress-cucumber-preprocessor';
const homeLoginPage = require('../../pages/homeLoginPage')

Given('Open a home page and click on sign in button', () => {
    cy.visit("/");
    homeLoginPage.clickSignin()
})


When('Enter username {string}', (username) => {

    homeLoginPage.typeUsername(username)
})

And('Enter password {string}', (password) => {

    homeLoginPage.typePassword(password)
})

And('Click on green sign in button- loginbtn', () => {

    homeLoginPage.clickLogin()
})

Then('Successfully logged in', () => {

    cy.url().should('contains', '/index.php?controller=my-account')
})


And('Click on sign out button', () => {

    homeLoginPage.clickLogout()
})

Then('Successfully logged out', () => {

    cy.get('.page-heading').should('contain', 'Authentication')
})


And('Enter wrongPassword {string}', (password) => {

    homeLoginPage.typePassword(password)
})


Then('Receive message {string}', (message) => {

    cy.get('[class="alert alert-danger"]').should('contain', message);
})







