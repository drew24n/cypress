import RegisterPage from "../pageobjects/register.page";
import * as faker from 'faker';

describe('Register:', () => {
    it('should register new user', () => {
        const randomEmail = faker.internet.email();

        RegisterPage.open();
        RegisterPage.register(randomEmail, 'SuperSecretPassword!');

        cy.get('app-toolbar').should('exist');
    });
});


