import { createConnection } from "mysql";

function queryTestDb(query: string, config: any) {
  const connection = createConnection(config.env.db);
  // start connection to db
  connection.connect();
  // exec query + disconnect to db as a Promise
  return new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
      if (error) reject(error);
      else {
        connection.end();
        // console.log(results)
        return resolve(results);
      }
    });
  });
}

module.exports = (on: any, config: any) => {
  // Usage: cy.task('queryDb', query)
  on("task", {
    queryDb: (query: string) => {
      return queryTestDb(query, config);
    },
  });
};
