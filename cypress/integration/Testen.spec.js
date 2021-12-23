describe('Testen', () => {

    beforeEach(() => {
        cy.login('admin@mail.com', '12345678');
    })

    it('name should show up in navbar', () => {
        cy.get('[data-cy=quizNavUsername]').contains('AdminUser')
    })

    it('edit quiz test', () => {
        cy.updateQuiz()
        cy.wait(1000)
        cy.visit('http://localhost:3000/quiz/list')
    });

    it('voeg score toe / speel spel', () => {
        cy.visit('http://localhost:3000/quizzes/detail/adc1a820-6259-11ec-90d6-0242ac120003')

        cy.get('[data-cy=quizDetailsAnswer1]').click()
        cy.get('[data-cy=quizDetailsAnswer3]').click()
        cy.get('[data-cy=quizDetailsAnswer1]').click()

        cy.get('[data-cy=quizDetailsSubmitScore]').click()

        cy.visit('http://localhost:3000/score/list')


        cy.get('[data-cy=scoreIndexTitle]').last().contains('EditedQuiz')
        cy.get('[data-cy=scoreIndexName]').last().contains('AdminUser')
        cy.get('[data-cy=scoreIndexScore]').last().contains('3')
    });

    it('verwijder score', () => {
        cy.visit('http://localhost:3000/score/list')
        cy.get('[data-cy=scoreIndexDelete]').last().click()
        cy.visit('http://localhost:3000/score/list')
        cy.get('[data-cy=scoreIndexName]').last().should('not.contain', 'AdminUser')
    });

})