import Page from "../../../pageObjects/page";

describe("Search movie:", () => {
  before(() => {
    Page.open();
    Page.searchField.type("The Matrix Resurrections");
    Page.searchResults
      .trigger("change")
      .then(() => cy.contains("The Matrix Resurrections").click());
  });

  it("should have a text with movie release date", () => {
    cy.contains("RELEASE DATE: December 22, 2021");
  });
});
