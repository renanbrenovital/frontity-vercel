import { Given, Then } from "cypress-cucumber-preprocessor/steps";

Given('I open home page', () => {
  cy.visit('/')
})

Then(`I see {string} in the title`, (title) => {
  cy.title().should('include', title)
})