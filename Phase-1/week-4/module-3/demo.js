// Quick Review 
// Given an array of both strings and numbers
// sum all of the Numbers in the array only 
function sumNums(array){  //["abc", 2, "apple", 10]
    //create a variable to collect the sum
    let sum = 0;
    //iterate through the array 
    for (let i = 0; i < array.length; i++){
      let currentElement = array[i];
      //isolate the elements that are numbers (typeof????)
      console.log(currentElement, "The type of the current Element: ", typeof currentElement)
      if(typeof currentElement === "number"){
        //add it to sum
        sum += currentElement 
      }
    }
    //return that bad boy 
    return sum;
  }
  
  let result = sumNums(["abc", true, "apple", 10]); 
  console.log(result);

// Nested Arrays 
const cityMap = [
    //northeast
    ['NYC', 'BOS', 'PHI'], //0
    //midwest 
    ['CHI', 'STL', 'DET'], //1`
    //southeast
    ['ATL', 'NOLA', 'MIA'], //2
  ]
  
  let cityCollector = []
  
  for (let regionIndex = 0; regionIndex < cityMap.length; regionIndex++){ 
    for (let cityIndex = 0; cityIndex < cityMap[regionIndex].length; cityIndex++){
      let currentCity = cityMap[regionIndex][cityIndex]; 
      cityCollector.push(currentCity);
      console.log(cityIndex, "Current City:", currentCity);
    }
  }
  console.log(cityCollector)

// Grid 
const grid = [
  [1, 2, 3], //0
  [4, 5, 6], //1`
  [7, 8, 9], //2
// 0  1  2
]
// console.log(grid[0][0])
// console.log(grid[1][0])
// console.log(grid[2][0])

// get the 2nd column
for (let i = 0; i < grid.length; i++){
  let element = grid[i][1]
  console.log(element);
}