/* Core */
import { cy, describe, it, beforeEach } from 'local-cypress';

describe('Checkout page:', () => {
    beforeEach(() => {
        cy.visit('/checkout');
    });

    it('renders heading with correct value', () => {
        const heading = cy.get('[data-testid=heading');

        heading.should('have.length', 1);
        heading.should('have.text', 'Checkout');
    });

    it('should not submit a form with validation error', () => {
        cy.get('[data-testid=input-name]').type(`{backspace}{backspace}`);
        cy.get('[data-testid=button-submit]').click();
        cy.get('[data-testid=checkout-state]').should('have.text', 'waiting');
        // cy.intercept() // TODO validate newtwork call not sent
        cy.url().should('eq', 'http://localhost:3000/checkout');
    });

    it('should submit a form without validation errors and redirect to home page', () => {
        cy.interceptCheckout();

        cy.get('[data-testid=button-submit]').click();
        // cy.get('[data-testid=checkout-state]').should('have.text', 'SUCCESS');

        cy.url().should('eq', 'http://localhost:3000/');
    });
});

export {};
