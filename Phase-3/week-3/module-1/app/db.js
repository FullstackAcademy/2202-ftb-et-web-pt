const { Client } = require("pg"); // imports the pg module

//set up the PG client
const client = new Client("postgres://localhost:5432/demo");


const fetchAllTrainers = async () => {
  console.log("Testing")
  const {rows} = await client.query(`
    SELECT *
    FROM trainers;`);
    console.log(rows)
  return rows;
};

// fetch pokemon
const fetchAllPokemon = async () => {
  const { rows } = client.query(`
    SELECT name, type
    FROM pokemon;`);
  return rows;
};

const fetchPokemonById = async (id) => {
  const { rows } = client.query(`
      SELECT name, type
      FROM pokemon
      where id = ${id};`);
  return rows;
};

// create pokemon
const createPokemon = async ({ name, type }) => {
  const { rows } = client.query(
    `
        INSERT into pokemon(name, type)
         VALUES ($1, $2)
         RETURNING *;
        `,
    [name, type]
  );
  return rows;
};

// login
const getUserByUsername = async (username) => {
  console.log(username)
  const { rows } = await client.query(
    `SELECT *
      FROM users;`
  );
  console.log(rows)
  return rows;
};

module.exports = {
    getUserByUsername,
    createPokemon,
    fetchAllPokemon,
    fetchPokemonById,
    fetchAllTrainers,
    client
}
