describe("Users:", () => {
  before(() => {
    cy.task(
      "queryDb",
      `CREATE TABLE users (Id INT, Age INT, Name NVARCHAR(20))`
    ).task("queryDb", `INSERT INTO users VALUES(1, 30, 'Andrew')`);
  });

  after(() => {
    cy.task("queryDb", `DROP TABLE users`);
  });

  describe("SQL queries:", () => {
    it("Get user name and age by id", () => {
      cy.task("queryDb", `SELECT Name, Age FROM users WHERE Id = 1`).then(
        (res) => {
          expect(res).to.have.lengthOf(1);
          expect(res).deep.include({ Name: "Andrew", Age: 30 });
        }
      );
    });
  });
});
