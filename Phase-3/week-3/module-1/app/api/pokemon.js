const pokemonRouter = require("express").Router();
const { fetchPokemonById, fetchAllPokemon, createPokemon } = require("../db");
const {requireUser} = require('./utils')


// api/pokemon/1
pokemonRouter.get("/:pokemonId", async (req, res, next) => {
   const {pokemonId} = req.params;
   const pokemon = await fetchPokemonById(pokemonId)
   res.json(pokemon);
});

pokemonRouter.get("/", async (req, res, next) => {
    const pokemon = await fetchAllPokemon()
    res.json(pokemon);
});

//POST api/pokemon 
pokemonRouter.post("/", requireUser, async (req, res, next) => {
    const {name, type} = req.body;
    const response = await createPokemon({name, pokemon})
    res.json(response);  
});

module.exports = pokemonRouter;
