// SERVER FILE

const express = require('express');
const apiRouter = require('./api');
const app = express(); 

// GET SECRET from Env variables
/* 
* 1. npm install dotenv
* 2. create .env file and add secret to it 
* 3. require('dotenv').config() in index 
* 4. access secret at process.env.SECRETKEYNAME
*/

// {headers: {
//  'Authorization': 'Bearer eyndsklaslkdmlaksndlknasdlknas;lkn'
//}}
/**
 * 1. unpack the user => see if I can extract {username, id} from jwt
 * 2. grab the user from the data base or fetch any relevant data about my user
 * 3. attach a user object to the request object 
 *    req {
 *      body, 
 *      params, 
 *      user: {stuff about the user }
 *     }
 * 4. pass along this req object to the other middlewares 
 *   ==> POST /posts 
 */


require('dotenv').config()
console.log("SECRET IS", process.env.JWT_SECRET)

app.use(express.json());

app.use('/api', require('./api'))    

app.use((error, req, res, next) => {
    console.log("there was an error")
    res.send("An error occured")
})

app.listen(3001, () => {
    console.log("Listening NOW")
}); 