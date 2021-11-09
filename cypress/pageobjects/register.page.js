import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class RegisterPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () { return cy.get('[data-test-id="email"]') }
    get inputPassword () { return cy.get('[data-test-id="password"]') }
    get checkBox () { return cy.get('label .mat-checkbox-inner-container') }
    get singUpButton () { return cy.get('[data-test-id="register_btn"]') }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async register (username, password) {
        this.inputUsername.type(username);
        this.inputPassword.type(password);
        this.checkBox.click();
        this.singUpButton.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('auth/signup');
    }
}

export default new RegisterPage();
