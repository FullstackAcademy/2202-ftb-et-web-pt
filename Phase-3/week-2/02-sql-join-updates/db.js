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
  SELECT 
      p.name, 
      COALESCE(t.name, 'no trainer') as trainername
    FROM pokemon p                           
    LEFT JOIN trainers t ON t.id = p."trainerId";                                        
    `);
  console.log("Pokemon", rows);
  return rows;
};

/**
 * UPDATE function => We want to be able to dynamically pass in data 
 */
 async function updateTrainer(id, columns = {}) {
   console.log("Go")
  // build the set string
  // * {name: 'Mewtwo', type:"Psychic"} ===> 'SET name=$1, type=$3, "trainerId"=3'
  const setString = Object.keys(columns).map(
    (key, index) => `"${ key }"=$${ index + 1 }`
  ).join(', ');

  // return early if this is called without columns
  if (setString.length === 0) {
    return;
  }


  try {
    const { rows: [ trainer ] } = await db.query(`
      UPDATE trainers
      SET ${ setString }
      WHERE id=${ id }
      RETURNING *;
    `, Object.values(columns));

    // const { rows } = await db.query(`
    //   UPDATE pokemon
    //   SET name=$1, type=$3, "trainerId"=3
    //   WHERE id=$2
    //   RETURNING *;
    // `, ['Mewtwo', 1, 'psychic']);
    // console.log("Again", rows);
    //client.query needs to take the values passed in from the 2 param Object.values(fields). 
    //You can interpolate the rest 

    return rows;
  } catch (error) {
    throw error;
  }
}


async function run(){
  db.connect()
  // const p = await getPokemonById(1);
  console.log("From ", await updateTrainer(1))
  db.end()

}

run().then(() => console.log("Done"));

module.exports = {
  getAllPokemon,
  getPokemonById,
  db,
};
