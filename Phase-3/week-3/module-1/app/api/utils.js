const pokemonRouter = require("./pokemon");

function requireUser(req, res, next) {
    if (!req.user) {
      next({
        name: "MissingUserError",
        message: "You must be logged in to perform this action"
      });
    }
    
    next();
  }
  

  function requireThatItsBrendan(req, res, next) {
      console.log("The User is ", req.user)
      if (!req.user || req.username != "Brendan"){
        next({
          message: "You have to be brendan to do that"
        })
      }
      next()
  }

  function noReason(req, res, next) {
      console.log("For no reason")
      //  is the user the author of this post?? No? send an error 
      next()
  }


  module.exports = {
    requireUser,
    requireThatItsBrendan,
    noReason
  }