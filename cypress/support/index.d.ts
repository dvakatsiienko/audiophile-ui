declare namespace Cypress {
    interface Chainable<Subject = any> {
        /**
         * Intercepts checkout API call request and response.
         * @example cy.interceptCheckout()
         */
        interceptCheckout(): Chainable<null>;
    }
}
