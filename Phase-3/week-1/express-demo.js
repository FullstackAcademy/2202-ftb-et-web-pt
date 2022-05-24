// //import the http library 
// const http = require('http');

// //create server 
// const server  = http.createServer()

// //event listener 
// server.on('request', (request, response) => {
//     console.log(request.url);
//     response.write(`<h1> Hello Class </h1>`);
// });

// server.listen(3000, 'localhost');

const express = require('express');
const app = express();

app.get('/posts', (req, res) => {
    console.log(req.path);
    res.send(`<h1> Root </h1>`)
})

app.get('/user/me', (req, res) => {
    console.log(req.path);
    res.send(`<h1> Test </h1>`)
})

app.listen(8080, () => {
    console.log("App has begun Listening")
})