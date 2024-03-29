describe('login test', () => {

    beforeEach(() => {
        cy.visit('/')
     });

    it('Success login/logout', () => {

        let newLogin = 'df@fmsd.com';
        let newPassword = '123456';

        cy.get('.login').click()
        cy.get('#email').type(newLogin)
        cy.get('input').filter('[type="password"]').type(newPassword)
        cy.get('#SubmitLogin > span').click();
        cy.get('#center_column')
        .should('contain', 'My account');
        
        cy.url().should('contain', 'index.php?controller=my-account')

        cy.get('.logout').click()
        
        cy.get('.page-heading')
        .should('contain', 'Authentication');
    });
})