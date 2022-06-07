const express = require('express');
const app = express(); 

// GET SECRET from Env variables
/* 
* 1. npm install dotenv
* 2. create .env file and add secret to it 
* 3. require('dotenv').config() in index 
* 4. access secret at process.env.SECRETKEYNAME
*/

require('dotenv').config()
console.log(process.env.JWT_SECRET)

app.use(express.json());

app.use('/api', require('./api'))    

app.listen(3001, () => {
    console.log("Listening NOW")
}); 