export class Page {
  get headerNav() {
    return cy.get("#primary_nav");
  }
  get searchField() {
    return cy.get("#primary_search_box");
  }
  get searchResults() {
    return cy.get("#primary_search_results");
  }

  open(path = "") {
    return cy.visit(`${Cypress.env("baseUrl")}/${path}`);
  }
}

export default new Page();
