// state that we care about

//number of guesses 
let numGuesses = 0
//which numbers have been guessed 
let numbersGuessed = [32] 
//currentGuess
let currentGuess = 0

//===>currentGuess
//secretNumber 
let secretNumber = 44

let state = {
    numGuesses: this.numbersGuessed.length,
    numbersGuessed: [32,23,45],
    currentGuess: 0,
    secretNumber:44
}

//RENDERING FUNCTION
// get the list of "old guesses nodes on the screen"
// iterate through numbersGuessed [32,23,45]
// for each, update the innerText in the node 

// Flow the Game 
 //The user does something 
 //What needs to change/update on the screen
 //what needs to update/change in state 
 //RENDERING 
 //State Functions 
