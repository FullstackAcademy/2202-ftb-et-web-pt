// //Trust the Process
// // define a function that takes 1 argument 
// // That function should return "Hello" and the argument appended to it 
// // (World) => "Hello World"; (Class) => "Hello Class" 
// //store the output and console log it 


function helloWord(word){
  return "Hello " + word
}

let result = helloWord("Class")

/** Debugger
  Right Click: Inspect

 * */

// // String Methods
let schoolName = "Fullstack"



//.length - Returns the number of characters/letters in the string
console.log(schoolName.length);

/** .indexOf - Returns the index of the 
 "index" => numerical position. Where this letter is in the order of letters 
 starts at 0
 // F u l l s t a c k 
 // 0 1 2 3 4 5 6 7 8
 Fullstack.('u')==> 1
 */
 schoolName.indexOf('u')

/**
 * .slice - returns a new string containing all or part of the string
 * slice(startAtThisIndex, stopBeforeIndex)
 * 
 */
schoolName.slice(0, 4)

//schoolName[5] ==>< 

// //find the last letter in a string 
schoolName[ schoolName.length - 1 ]

// -----------------  Loops --------------------------------------------//
/** 
 * A loop is a chunk of code that should repeat over and over again 
 * The three parts of any loop are: 
 * 1. A Starting Point (Initialization)
 * 2. Stop Condition (When should the loop stop)
 * 3. Update (updates a variable to get closer to the stop condition)
 * We DON'T want the loop to go on forever!
 * */

//Starting Point
let miles = 0; 
// Stop Condition
while (miles < 10){
    //repeating code
    console.log("Run another mile")
    // update
    miles++;
  }
  

for (let sec = 10; sec >= 1; sec = sec - 2){
  console.log(sec);
}

let webDev = "Web Development"

/**
 * Exercise 1: Console.log Every letter in webDev
 */
for (let i = webDev.length - 1; i >= 0 ; i = i - 1) {
  console.log("Calculate some stuff")
  calculation = i + 10;
  if (calculation === 12) break;
  console.log(i, webDev[i])
}


/**
 * Exercise 2: Write a function that takes in string and returns  
 * that string with a 2 after every letter 
 */

