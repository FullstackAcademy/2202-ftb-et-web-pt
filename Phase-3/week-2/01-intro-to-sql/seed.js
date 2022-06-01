const { db } = require("../02-sql-join-updates/db");

const dropTables = async () =>
  db.query(`
  DROP TABLE IF EXISTS pokemon;
  DROP TABLE IF EXISTS gym_badges;
  DROP TABLE IF EXISTS gyms;
  DROP TABLE IF EXISTS trainers;
`);


const createTables = async () => {
  try {
    await db.query(`
    CREATE TABLE trainers (
        id SERIAL PRIMARY KEY,
        name varchar(255) UNIQUE NOT NULL
    );
    CREATE TABLE pokemon (
        id SERIAL PRIMARY KEY,
        name varchar(255) UNIQUE NOT NULL,
        "trainerId" INTEGER REFERENCES trainers(id)
    );
    CREATE TABLE gyms (
        id SERIAL PRIMARY KEY,
        name varchar(255) UNIQUE NOT NULL
    );
    CREATE TABLE gym_badges (
      "gymId" INTEGER REFERENCES gyms(id),
      "trainerId" INTEGER REFERENCES trainers(id)
    );
`);
  } catch (err) {
    throw err;
  }
};

const seedPokemon = async () => {
  const { rows } = await db.query(`
        INSERT into pokemon(name, "trainerId")
        VALUES ('pikachu', 1),
         ('squirtle', 2),
         ('onyx', 3),
         ('staryu', 4)
    `);
  return rows;
};
const seedTrainers = async () => {
  const { rows } = await db.query(`
        INSERT into trainers(name)
        VALUES ('Ash'),
         ('Gary'),
         ('Brock'),
         ('Misty')
    `);
  return rows;
};

const seedGyms = async () => {
  const { rows } = await db.query(`
        INSERT into gyms(name)
        VALUES ('Pewter City'),
         ('Viridian City'),
         ('Cerulean City'),
         ('Saffron City')
    `);
  return rows;
};

const seedGymBadges = async () => {
  const { rows } = await db.query(`
      INSERT into gym_badges("gymId", "trainerId")
      VALUES ($1, $2)
    `, [1, 1]);
  return rows;
};

const seedDB = async () => {
  db.connect();
  await dropTables();
  await createTables();
  await seedTrainers();
  await seedPokemon();
  await seedGyms();
  await seedGymBadges();
};

seedDB().then(() => {
  console.log("Complete");
  db.end();
});
