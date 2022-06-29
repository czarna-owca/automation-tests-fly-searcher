import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"

Given('open home page and click on sign in button', () => {
    cy.visit("/")
    cy.get('.login').click()
})

When('Enter the Email address {string}', (username) => {

    //cy.get('#email').type(newLogin)
    cy.get('#email').type(username)
})

And('Enter the password {string}', (password) => {
    cy.get('#passwd').type(newPassword)

})


And('Click on sign in button', () => {

    cy.get('#SubmitLogin > span').click()
})

Then('The user is successfully logged in', () => {
    cy.get('#center_column').should('contain', 'My account');
    cy.url().should('contain', 'index.php?controller=my-account')

})


Then('The user will received message {string}', (message) => {
    cy.get('#center_column').should('have.text', message)
})
