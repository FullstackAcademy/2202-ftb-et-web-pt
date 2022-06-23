async function createTables(client) {
  console.log("Starting to build tables...");
  // create all tables, in the correct order
  await  client.query(`
  DROP TABLE IF EXISTS users;
`)

  await client.query(`
        CREATE TABLE users(
          id  SERIAL PRIMARY KEY, 
          username VARCHAR(255) UNIQUE NOT NULL, 
          password VARCHAR(255) NOT NULL
        );
      `);

  console.log("Done with tables")
}

module.exports = createTables