import { Given, When, And, Then } from '@badeball/cypress-cucumber-preprocessor';
const popupPage = require('../../../pages/popupPage')

Given('Item is added to shopping cart and pop up is displayed', () =>{
    cy.visit("/");
    
})