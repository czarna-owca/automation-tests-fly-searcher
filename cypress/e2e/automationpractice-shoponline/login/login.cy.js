import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"

Given('open home page and click on sign in button', () => {
    cy.visit("/")
    cy.get('.login').click()
})

When('Enter the Email address {string}', (username) => {

    cy.get('#email').type(newLogin)
})

     And  enter the password '123456'
     And click on sign in button
     Then  The user is successfully logged in

    cy.get('#email').type(newLogin)
cy.get('#passwd').type(newPassword)
cy.get('#SubmitLogin > span').click();