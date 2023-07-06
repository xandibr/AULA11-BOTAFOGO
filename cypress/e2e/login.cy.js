///<reference types="cypress"/>

describe('CRIANDO UM LOGIN', () => {
    it('DEVE FAZER TODO PROCESSO DO LOGIN', () => {
       
        // VISITAR O SITE
        cy.visit('http://lojaebac.ebaconline.art.br/')
        
        // CADASTRAR
        cy.get('.icon-user-unfollow').click()
        cy.get('#reg_email').type('adorocomprar@yahoo.com')
        cy.get('#reg_password').type('fogaocampeao')
        cy.get(':nth-child(4) > .button').click()

        
    });
    
});