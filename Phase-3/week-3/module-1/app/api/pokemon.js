const pokemonRouter = require("express").Router();
const { fetchPokemonById, fetchAllPokemon, createPokemon } = require("../db");
const {requireUser, requireThatItsBrendan, noReason} = require('./utils')


// api/pokemon/1
pokemonRouter.get("/:pokemonId", async (req, res, next) => {
    console.log(req.user)/// ==> {username: Brendan, id: 1}
   const {pokemonId} = req.params;
   const pokemon = await fetchPokemonById(pokemonId)
   res.json(pokemon);
});

pokemonRouter.get("/", async (req, res, next) => {
    const pokemon = await fetchAllPokemon()
    res.json(pokemon);
});

// Only Logged in Users can update a pokemon and create a pokemon

//POST api/pokemon 
pokemonRouter.post("/", async (req, res, next) => {
    const {name, type} = req.body;
    const response = await createPokemon({name, type})
    res.json(response);  
});

// If your username is not Brendan, you cannot edit
pokemonRouter.put("/", requireUser,requireThatItsBrendan, noReason, async (req, res, next) => {
    console.log("I have begun to update")
    res.json("You updated the Pokemon");  
});



module.exports = pokemonRouter;
