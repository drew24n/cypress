const apiURL = Cypress.env("trelloAPI");
const token = Cypress.env("trelloToken");
const key = Cypress.env("trelloKey");
export const idList = Cypress.env("trelloListId");

type methodTypes = "GET" | "POST" | "PUT" | "DELETE";

export const http = (
  method: methodTypes,
  path = "",
  params?: Object,
  failOnStatusCode = true
) => {
  return cy.request({
    url: apiURL + path,
    method,
    failOnStatusCode,
    qs: {
      token,
      key,
      ...params,
    },
  });
};
