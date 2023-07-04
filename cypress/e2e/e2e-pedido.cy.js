///<reference types="cypress"/>

describe('Fazendo teste na Loja Virtual EBAC', () => {

    it('Deve fazer todo processo de compra', () => {
       
        // VISITAR O SITE
        cy.visit('http://lojaebac.ebaconline.art.br/')
        
        // CADASTRAR
        cy.get('.icon-user-unfollow').click()
        cy.get('#reg_email').type('xandibr@yahoo.com.br')
        cy.get('#reg_password').type('fogaocampeao')
        cy.get(':nth-child(4) > .button').click()
        
        // ENTRAR NO SITE
        cy.get('.woocommerce-form > :nth-child(1) > label').type('xandibr@yahoo.com.br')
        cy.get('#password').type('fogaocampeao')
        cy.get('.woocommerce-form > .button').click()
        
        // TERMINAR O CADASTRO
        cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click()
        cy.get(':nth-child(1) > .title > .edit').type('Rua Logo Ali')
        cy.get('#billing_first_name').type('Alexandre')
        cy.get('#billing_last_name').type('Cavalcanti')
        cy.get('#billing_company').type('Botafoto O melhore do Rio')
        cy.get('#select2-billing_country-container').type('Brasil')
        cy.get('#select2-billing_country-container').select('Brasil')
        cy.get('#select2-billing_country-container').click('Rio de Janeiro')
        cy.get('#billing_address_1').type('Rua Logo Ali')
        cy.get('#billing_city').type('Rio de Janeiro')
        cy.get('#select2-billing_state-container').select('Rio de Janeiro')
        cy.get('#billing_postcode').type('22222-000')
        cy.get('#billing_phone').type('21-9999999')












    });
    
});