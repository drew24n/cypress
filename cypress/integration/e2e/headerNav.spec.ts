import Page from "../../pageObjects/page";

describe("Navigation header:", () => {
  before(() => {
    Page.open();
  });

  it("should have a visible header navigation elements", () => {
    Page.headerNav.children().should("be.visible");
  });

  it("should contain 5 child elements in header navigation", () => {
    Page.headerNav.children().should("have.length", 5);
  });
});
