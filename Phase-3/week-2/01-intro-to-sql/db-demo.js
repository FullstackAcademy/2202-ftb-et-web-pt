const { Client } = require("pg"); // imports the pg module

//set up the PG client
const client = new Client("postgres://localhost:5432/demo");
//connect to the PG Client
client.connect();

/**
 * CREATE ===> INSERT
 * RETRIEVE ==> SELECT
 * UPDATE --THURSDAY
 * DELETE
 */

/**
 * ACTION
 *     relevant columns
 * FROM (INTO) relevant TABLE
 * CLAUSES
 *  Ordering / Filtering /
 *  ORDER BY /
 */

//  client.query(`
//  SELECT name, type
//   FROM pokemon
//   WHERE id = 7
// `)

client
  .query(
    `
    SELECT 
    t.name as trainername,
    g.name as gymname
    FROM gym_badges tg 
    JOIN trainers t ON tg."trainerId" = t.id
    JOIN gyms g ON g.id = tg."gymId"
`
  )

/***
 * name(trainers), name(gyms)
 * ===> 
 * gymname | trainername
 * ---------------------
 * name(gyms) | name(trainers)
 */

  // client.query(`
  //     INSERT into
  //         POKEMON(name, type, "trainerId")
  //         VALUES ('vulpix', 'fire', 2)
  // `)
  .then((response) => {
    const rows = response.rows;
    console.log(rows);
    // rows.forEach((pokemon) => {
    //     console.log(`${pokemon.name} is type ${pokemon.type}`)
    // })
    client.end();
  });
