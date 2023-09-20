describe('Funcionalidade Página de Produtos', () => {
    beforeEach(() => {
        cy.visit('/produtos');
    });

    it('Deve selecionar o primeiro produto da lista', () => {
        cy.get('[class="product-block grid"]').first().click();
        cy.url().should('contain', '/product/')
    });

    it('Deve selecionar o ultimo produto da lista', () => {
        cy.get('[class="product-block grid"]').last().click();
        cy.url().should('contain', '/product/')
    });

    it('Deve selecionar o quinto produto da lista', () => {
        cy.get('[class="product-block grid"]').eq(4).click();
        cy.url().should('contain', '/product/')
    });
    
    it('Deve adicionar um produto ao carrinho ', () => {
        let quantidade = 7;

        cy.get('[class="product-block grid"]').contains('Abominable Hoodie').click();
        cy.get('.button-variable-item-XS').click();
        cy.get('.button-variable-item-Red').click();
        cy.get('.input-text').clear().type(quantidade);
        cy.get('.single_add_to_cart_button').click();

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade);
        cy.get('.woocommerce-message').should('contain',
            quantidade + ' × “Abominable Hoodie” foram adicionados no seu carrinho.'
        );

    });
});