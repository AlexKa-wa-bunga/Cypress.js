describe('Длинный автотесn', function () {
    it('Позитивный кейс логики сайта', function () {
         cy.visit('https://testqastudio.me/');
         cy.get('.post-11342 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
         cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase').dblclick();
         cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
         cy.get('#cart-modal > .off-modal-layer').should('be.visible').click({force:true});
         cy.get('.header-left-items > .site-branding > .logo > .logo-dark').click();
         cy.get('.post-11337 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
         cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
         cy.get('.checkout').should('be.visible').click({force:true});
         cy.get('#billing_first_name').type('Алексей');
         cy.get('#billing_last_name').type('Камшилов');
         cy.get('#billing_address_1').type('Moscow');
         cy.get('#billing_city').type('Moscow');
         cy.get('#billing_state').type('Moscow');
         cy.get('#billing_postcode').type('123456');
         cy.get('#billing_phone').type('89652630388');
         cy.get('#billing_email').type('german@dolnikov.qa');
         cy.get('#place_order').click();
         cy.contains('Ваш заказ принят. Благодарим вас.')
     })
})