/* Core */
import { cy, describe, it } from 'local-cypress';

describe('<Header />:', () => {
    it('opens a mobile device by clicking on Burger Menu Icon', () => {
        cy.visit('/');

        const nav = cy.get('.nav');
        const logoSvg = cy.get('[data-testid=logo-svg]');
        const shoppingCartSvg = cy.get('[data-testid=shopping-cart-svg');

        cy.viewport(1440, 750);

        nav.should('exist');
        logoSvg.should('exist');
        shoppingCartSvg.should('exist');

        cy.viewport(375, 750);
        const burger = cy.get('[data-testid=burger-menu-svg]');

        burger.should('exist');
        burger.click();

        const mobileViewModal = cy.get('[data-testid=mobile-nav-modal');
        mobileViewModal.should('exist');
    });

    it('navigates to a target route once link is clicked', async () => {
        const lis = cy.get('li');
        lis.eq(1).click();
        cy.url().should('eq', 'http://localhost:3000/speakers');
    });

    it('closes mobile modal once Escape key is pressed', async () => {
        cy.viewport(375, 750);
        const burger = cy.get('[data-testid=burger-menu-svg]');
        burger.click();
        const mobileViewModal = cy.get('[data-testid=mobile-nav-modal]');
        mobileViewModal.should('exist');
        cy.type('{esc}');
        cy.get('.header-container').should(
            'not.have.descendants',
            '[data-testid=mobile-nav-modal]',
        );
    });
});

export {};
