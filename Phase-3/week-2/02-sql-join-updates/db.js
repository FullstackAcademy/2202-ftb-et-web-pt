const { Client } = require("pg");
const db = new Client("postgres://localhost:5432/demo");
//connect to the PG Client

//db adapters
const getAllPokemon = async () => {
  try {
    const { rows } = await db.query(`select * from pokemon;`);
    return rows;
  } catch(e){
    console.log(e);
  }
};

const getPokemonById = async (pokemonId) => {
  const {rows} = await db.query(`
  SELECT p.name, t.name as Trainer
  FROM pokemon p                           
  JOIN trainers t ON t.id = p."trainerId"                                        
  WHERE p.id = ${pokemonId};
    `);
  console.log("Pokemon", rows);
  return rows;
};

/**
 * CREATE UPDATE function => We want to be able to dynamically pass in data 
 */


async function run(){
  db.connect()
  console.log("Running")
  const p = await getPokemonById(4);
  console.log("P", p)
  db.end()

}

run().then(() => console.log("Done"));

module.exports = {
  getAllPokemon,
  getPokemonById,
  db,
};
