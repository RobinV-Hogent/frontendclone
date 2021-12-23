// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('login', (email, password) => {
    cy.intercept('/api/users/login').as('login');

    cy.visit('http://localhost:3000/login');

    cy.get('[data-cy=emailInput]').type(email);
    cy.get('[data-cy=passwordInput]').type(password);
    cy.get('[data-cy=loginButton]').click();

    cy.wait('@login');
    cy.wait(1000)
});


Cypress.Commands.add('updateQuiz', () => {

    // cy.intercept('PUT', '/api/quizzes/quiz/adc1a820-6259-11ec-90d6-0242ac120003').as('updateQuiz');

    cy.wait(1000)
    cy.visit('http://localhost:3000/quizzes/detail/adc1a820-6259-11ec-90d6-0242ac120003');
    cy.get("[data-cy=quizDetailsEdit]").click();

    cy.get("[data-cy=editTitle]").type('EditedQuiz');
    cy.get("[data-cy=editDescription").type('EditedDescriptionForQuizEditedQuiz');
    cy.get("[data-cy=editImg]").type('https://images.pexels.com/photos/1147124/pexels-photo-1147124.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
    cy.get("[data-cy=editCategory]").type('1');


    cy.get("[data-cy=editSubmit]").click();
    // cy.wait('@updateQuiz');
})

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })