import { Page } from "./page";

class LoginPage extends Page {
  get inputUsername() {
    return cy.get("#login_email");
  }
  get inputPassword() {
    return cy.get("#login_password");
  }
  get singInButton() {
    return cy.get("#login");
  }
  get message() {
    return cy.get(".form_feedback");
  }

  signIn(username: string, password: string) {
    this.inputUsername.type(username);
    this.inputPassword.type(password);
    this.singInButton.click();
  }

  open() {
    return super.open("/login");
  }
}

export default new LoginPage();
