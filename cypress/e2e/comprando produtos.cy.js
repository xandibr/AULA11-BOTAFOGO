///<reference types="cypress"/>

describe('REALIZAR E FINALIZAR COMPRAS', () => {
    it('Devemos comprar e finalizar o pedido', () => {

// VISITAR O SITE
cy.visit('http://lojaebac.ebaconline.art.br/')

// ENTRAR NO PERFIL
cy.get('.icon-user-unfollow').click()
cy.get('.woocommerce-form > :nth-child(1) > label').type('adorocomprar@yahoo.com')
cy.get('#password').type('fogaocampeao')
cy.get('.woocommerce-form > .button').click()

// REALIZAR UMA COMPRA
cy.get('#primary-menu > .menu-item-629 > a').click()
cy.get('.post-2559 > .product-block > .caption > .meta > .infor > .name > a').click()
cy.get('.button-variable-item-XL').click()
cy.get('.button-variable-item-Red').click()
cy.get('.plus').click()
cy.get('.single_add_to_cart_button').click()
cy.get('.logo-in-theme > .logo > a > .logo-img').click()
cy.get('#primary-menu > .menu-item-629 > a').click()
cy.get(':nth-child(2) > .page-numbers').click()
cy.get('.post-3680 > .product-block > .caption > .meta > .infor > .name > a').click()
cy.get('.button-variable-item-XL').click()
cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item').click()
cy.get('.single_add_to_cart_button').click()
cy.get('.woocommerce-message > .button').click()
cy.get('.checkout-button').click()
cy.get('#payment_method_cod').click()
cy.get('#terms').click()
cy.get('#place_order').click()

        
    });
    
});


