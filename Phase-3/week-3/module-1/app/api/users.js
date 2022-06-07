const router  = require("express").Router()
const {getUserByUsername} = require('../db')
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;

router.post('/login', async (req, res, next) => {
    const {username, pwd} = req.body;
    const user = await getUserByUsername(username);
    
    if (user && user.password == password) {
        const token = jwt.sign({ 
          id: user.id, 
          username
        }, process.env.JWT_SECRET, {
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
