const baseURL = Cypress.env("trelloAPI");
const token = Cypress.env("trelloToken");
const key = Cypress.env("trelloKey");
export const idList = Cypress.env("trelloListId");

type methodTypes = "GET" | "POST" | "PUT" | "DELETE";

export const http = (
  method: methodTypes,
  path = "",
  query?: Object,
  body?: Object,
  failOnStatusCode = true
) => {
  return cy.request({
    url: baseURL + path,
    method,
    failOnStatusCode,
    qs: {
      token,
      key,
      ...query,
    },
    body,
  });
};
