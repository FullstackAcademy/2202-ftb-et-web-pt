# JavaScript: Array I

## Quick Review: 


### Daily - Key Topics
- what's an array?
- typeof []
- Array.isArray
- bracket access, bracket assignment
- .length property
- basic methods
- .push
- .pop
- .shift
- .unshift
- .indexOf
- .slice

### Lessons

<hr>

## Lecture Notes

### Array I
-   Array  
  - One of the most powerful yet simple data structure provided to us by JavaScript.
  - An array is a list-like data strucure in Javascript. A structure that helps you organize tons of data. A variable can only hold up to one form of data.
  - its a great way to send a fucntion tons of data through a parameters.
  - An array can look like this. You can store a mix bag of values in the array. 
  - Each value in the array are called elements.
``` js
let names = ["George","John", "Scott"];

console.log(names);

console.log (typeof names);

```
- Data Types
    - undefined
    - object 
    - boolean
    - number
    - bigint
    - string
    - symbol
    - function

- What are wew expecting for the typeof to result in? Array? 
    - If we remember an object is a data type so an array is an object. 
    - This is a bit confusing, so there is a better way to check wether it is an array or not.

 - Array.isArray
    - A method to check if a variable is an array 

```js 
console.log(Array.isArray(names));
// true

console.log(Array.isArray("Hello"));
//false


```
### Bracket Access
-  A way to access elements in the array. Numbers in the array are called index. The index refers to the position of different elements in the array.

``` js
console.log(names[1])

// would expect George but actually get John

console.log(names[0])

// it would require zero jumps from the start to access the first element. 

```
- the bracket tells the compiler how many jumps it needs to make from the first element to get that value.
 
 - Use the bracket notation to set and get values. Say we want to change the first name changed.

 ``` js
names[0]= "David"

console.log(names);

 ```

### .Length properties
- if we want to know how long an array, javascript as a property called .length 

```js
console.log(names.length);

// will print out the number that is the total number of elements in the array
// although the last index of the array is 3, there are in total 4 elements in the array.

```
- if we want to access the last element of the array 

```js
console.log(names[names.lenght]);

// whenever you want to access the last element

console.log(names[names.lenght -1]);

```
### Basic methods

- This will let you add and subtract items to the array. 

What if you want to add things to the end of the array. 

- .push method
    - Adds elements to the end of the array.

```js
names.push("Jane");

console.log(names);
```

- .pop method
    - Removes, accesses and returns the most recently added item to the array.

```js
 let latestAdded = names.pop();

 console.log(lastestAdded);

 console.log(names);
```

Say you added two people to the array, Jane and Emily. 

```js

names.push("Jane")
names.push("Emily")

names.pop();
names.pop();

```

- you would have to pop twice to remove the two most recent names added.

- .shift method
    - Removes the first element of the array.

```js
let firstElRemoved = names.shift();

console.log(firstElRemoved);

```

- .unshift
    - Adds to the beginning of the array.

```js 

console.log(names);

names.unshift("Taylor");

console.log(names;

```
- .Indexof methods
    - Finding something in the array, check if it exists.

``` js
console.log(names.indexOf("George"));

// return the index of where it was able to find George. At the second element of the array.

console.log(names[1]);

// if it doesnt find the element

console.log(names.indexOf("Jack"))

// will return -1

if (names.indexOf("Jack") > -1){
    console.log("Person found")
} else {
console.log("Person NOT found")
}


```

- Slice method
    - Extracts a portion of the array for you. Returns a new copy of the array. 

```js

console.log(names(0,1)) // returns first element, make cut right before the first element
console.log(names(0,2)) // returns 0, 1 elements

console.log(names(1, 2)) // start cut at one one and end at 2. so it gets the second element in the array.
console.log(names.slices(1)) // returns all the elements starting at the 1 index.

console.log(names.slices()) // returns all the elements

let namesCopy = names.slice();
namesCopy[0] = "Kate";

console.log(names);
console.log(namesCopy)
 // wil not affect original array.
```

- includes method
    - check if a vlaue is in array.
```js
console.log(names.includes ("Geroge")) //true

console.log(names.includes("Jenn")) //false

```

- Reverse method 
    - reverses the array

``` js
console.log(names);

names.reverse();

console.log(names);

```

- [Resources to Array Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)