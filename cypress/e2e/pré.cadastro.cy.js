///<reference types="cypress"/>

describe('FAZENDO O PRÉ-CADASTRO', () => {
    it('COMPLETANDO TODO O CADASTRO', () => {

         // VISITAR O SITE
         cy.visit('http://lojaebac.ebaconline.art.br/')

         // ENTRAR NO PERFIL
         cy.get('.icon-user-unfollow').click()
         cy.get('.woocommerce-form > :nth-child(1) > label').type('adorocomprar@yahoo.com')
         cy.get('#password').type('fogaocampeao')
         cy.get('.woocommerce-form > .button').click()

         // COMPLETANDO OS DADOS PESSOAIS
         cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click()
         cy.get(':nth-child(1) > .title > .edit').type('Rua Aqui Perto')
         cy.get('#billing_first_name').type('Alexandre')
         cy.get('#billing_last_name').type('Cavalcanti')
         cy.get('#billing_company').type('Botafoto O melhor do Rio')
         cy.get('#select2-billing_country-container').click(); // Abre a lista suspensa
         cy.contains('.select2-results__option', 'Brasil').click(); // Seleciona a opção "Brasil"
         cy.get('#billing_address_1').type('Rua Aqui Perto')
         cy.get('#billing_address_2').type('casa 00')
         cy.get('#billing_city').type('Rio de Janeiro')
         cy.get('#select2-billing_state-container').click(); // Abre lista suspensa
         cy.contains('.select2-results__option', 'Rio de Janeiro').click(); // Seleciona a opção "Rio de Janeiro"
         cy.get('#billing_postcode').type('22221-010')
         cy.get('#billing_phone').type('(21)9999-9999')
         cy.get('.button').click()

        
    });
    
});