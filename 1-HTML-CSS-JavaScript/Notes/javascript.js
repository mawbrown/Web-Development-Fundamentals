// function addOrSubtract(shouldAdd, a, b) { // shouldAdd has a boolean value. a and b have a number value
//     if(shouldAdd){ // if shouldAdd is true
//         return a + b;
//     }
//     else { // if shouldAdd is false
//         return a - b;
//     }
// }

// console.log(addOrSubtract(true, 1, 2));
// console.log(addOrSubtract(false, 7, 5));

// &&
// if left side is truthy, answer is right side
// if left side is falsy, answer is left side

// ||
// if left side is truthy, answer is left side
// if left side is falsy, answer is right side

// loops

// let i = 0;
// while (i < 5) {
//     console.log('i less than 3');
//     i++;
// }

//same thing but in a DO WHILE loop

// let i = 0;
// do {
//     console.log("i less than 3");
//     i++;
// } while (i < 5);

// arrays

// const fruits = ['apple', 'banana', 'cherry'];
// console.log(fruits); // returns all elements within the array
// console.log(fruits[0]); // returns the first element in the array (starts at 0)
// console.log(fruits[1]); // returns second element
// console.log(fruits[2]); // returns third element

// console.log(fruits.length); // returns number of elements in the array

// fruits[0] = 'watermelon'; // replace the element within the index specified with a new value
// console.log(fruits);

// fruits [3] = 'strawberry' // add a value to an index
// console.log(fruits);

// // mutator array methods
// fruits.pop(); //removes the last element in the array
// console.log(fruits);

// fruits.push('orange'); // adds an element to the end of an array
// console.log(fruits);

// fruits.shift(); // removes an element from the start of an array
// console.log(fruits);

// fruits.unshift('kiwi'); // adds an element to the start of an array
// console.log(fruits);

// // non mutator array methods
// let arrayStr = console.log(fruits.join(" - ")); // join all elements in an array into a string. Define a separator between the elements

// let hasBanana = console.log(fruits.includes("banana")); // returns true or false if the element is found within the array

// let elementNum = console.log(fruits.indexOf("cherry")); // returns the index of an element if it is found within an array

// math function

// let a = console.log(Math.random()); // returns a random number between 0 and 0.9999
// let b = console.log(Math.random() * 10); // returns a random number between 0 and 9.9999
// let c = console.log(Math.floor(Math.random() * 10)); // returns a random number between 0 and 9, no decimals
// let d = console.log(Math.floor(Math.random() * 10) + 1); // allows you to actually generate numbers between 1 and 10, no decimals