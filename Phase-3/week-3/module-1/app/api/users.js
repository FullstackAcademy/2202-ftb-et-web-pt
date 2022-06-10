const router  = require("express").Router()
const {getUserByUsername} = require('../db')
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;

router.post('/login', async (req, res, next) => {

    const {username, pwd} = req.body;
    console.log("In Login", username, pwd)
    const user = await getUserByUsername(username);
    console.log("The Users from DB is ", user)
    // if user is not false, there is a user at username
    // and the password matches my pwd
    if (user && user.password == pwd) {

        const token = jwt.sign({ 
          id: user.id, 
          username
        }, JWT_SECRET, {
          expiresIn: '1w'
        });
  
        res.send({ 
          message: "you're logged in!",
          token 
        });
      } else {
        next({ 
          name: 'IncorrectCredentialsError', 
          message: 'Username or password is incorrect'
        });
      }
})  

module.exports = router;
