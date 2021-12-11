const { basePath, key, token } = Cypress.env("trello");

type methodTypes = "GET" | "POST" | "PUT" | "DELETE";

export const http = (
  method: methodTypes,
  path = "",
  query?: Object,
  body?: Object,
  failOnStatusCode = true
) => {
  return cy.request({
    url: basePath + path,
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
