const { Client } = require("pg"); // imports the pg module

//set up the PG client 
const client = new Client("postgres://localhost:5432/demo");
//connect to the PG Client 
client.connect();

client.query(`
    select * from pokemon order by id desc;
`).then( 
    ({rows}) => {
    rows.forEach((pokemon) => {
        console.log(`${pokemon.name} is type ${pokemon.type}`)
    })
    client.end();
});

