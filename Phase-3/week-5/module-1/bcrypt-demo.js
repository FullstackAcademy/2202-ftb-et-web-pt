const { Client } = require("pg"); // imports the pg module
const bcrypt = require("bcrypt");
const createTables = require("./createTables");

//set up the PG client
const client = new Client("postgres://localhost:5432/demo");
//connect to the PG Client
const SALT = 10


const createUser = async (username, password) => {
  const hashedPassword = await bcrypt.hash(password, SALT);
  console.log(username, password)
  console.log(hashedPassword)
  try {
    const {
      rows: [user],
    } = await client.query(
      `
      INSERT INTO users(username, password) VALUES ($1, $2)
      RETURNING id, username
    `,
      [username, hashedPassword]
    );
    return user;
  } catch (error) {
    throw error;
  }
};

const getUser = async (username, password) => {
  try {
    const user = await getUserByUsername(username);
    if (!user) return;
    const hashedPassword = user.password;
    const passwordsMatch = await bcrypt.compare(password, hashedPassword);
    console.log("The Passwords", passwordsMatch)
    if (!passwordsMatch) return;
    delete user.password;
    return user;
  } catch (error) {
    throw error;
  }
};

async function getUserByUsername(userName) {
  // first get the user
  try {
    const { rows } = await client.query(
      `
        SELECT *
        FROM users
        WHERE username = $1;
      `,
      [userName]
    );
    // if it doesn't exist, return null
    if (!rows || !rows.length) return null;
    // if it does:
    // delete the 'password' key from the returned object
    const [user] = rows;
    // delete user.password;
    return user;
  } catch (error) {
    console.error(error);
  }
}


async function run(){
    client.connect()
    await createTables(client)
    console.log("Tables Done")
    await createUser("bb", "test")
    const user = await getUser("bb", "test")
    console.log("User => ", user)
    client.end();
}

run()