/* Core */
import { Cypress, cy } from 'local-cypress';

// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

Cypress.Commands.add('interceptCheckout', () => {
    cy.intercept('POST', '/api/checkout', (req) => {
        expect(req.body).to.eql(JSON.stringify({ user: 'test' }));

        console.log('TEST');

        req.continue((res) => {
            expect(res.statusCode).to.eq(200);
            expect(res.body).to.eql({ message: 'SUCCESS' });
        });
    });
});

// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

export {};
