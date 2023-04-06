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



When('Enter username {string}', (username) => {

    homeLoginPage.typeUsername(username)
})

And('Enter password {string}', (password) => {

    homeLoginPage.typePassword(password)
})

And('Click on green sign in button- loginbtn', () => {

    homeLoginPage.clickLogin()
})

And('Click on sign out button', () => {

    homeLoginPage.clickLogout()
})

Then('Successfully logged out', () => {

    cy.get('.page-heading').should('contain', 'Authentication')
})



When('Enter wrong credentials in login boxes', (table) => {
    console.log(table)
    table.hashes().forEach(row => {
        console.log(row.username)
        console.log(row.password)
    })
})

Then('Receive message {string}', (message) => {

    cy.get('[class="alert alert-danger"]').should('contain', message);
})

