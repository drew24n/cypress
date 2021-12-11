import "cypress-file-upload";

const url = Cypress.env("orderSite");
const filepath = "text_file.txt";
const uploadButtonSelector = "#file_upload";
const englishSelector = "[for='English']";
const russianSelector = "[for='Russian']";
const priceSelector = "[class*='OrderInfo'] > div > div:first-child";

describe("Price:", () => {
  before(() => {
    cy.visit(url);
    cy.get(uploadButtonSelector).attachFile(filepath);
  });

  it("should check price for English translation", () => {
    cy.get(englishSelector).click();

    cy.get(priceSelector)
      .invoke("text")
      .then((value) => parseFloat(value))
      .should("equal", 193.54);
  });

  it("should check price for Russian translation", () => {
    cy.get(russianSelector).click();

    cy.get(priceSelector)
      .invoke("text")
      .then((value) => parseFloat(value))
      .should("equal", 80.64);
  });
});
