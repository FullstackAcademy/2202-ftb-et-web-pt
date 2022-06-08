const express = require("express")
// little reception for the trainers floor 
const trainerRouter = express.Router();
const {fetchAllTrainers} = require('../db')

// trainerRouter.use("/badges") ====> api/trainers/badges

// api/trainers/
trainerRouter.get("/", async (req, res, next) => {
    console.log("Hello")
    const trainers = await fetchAllTrainers();
    console.log(trainers);
    res.json(trainers);
})


module.exports = trainerRouter
