
// FOR LOOP

// const guestsArray = ['Jack', 'Aravind', 'Samira', 'Haley', 'Lydia', 'Adrian'];
// for (let i = 0; i < guestsArray.length; i++) { // iterates through the entire array
//     console.log('Welcome to the party ' + guestsArray[i] + '!'); // welcomes each person to the party
// }

// FOR ... OF LOOPS
// These loops work with arrays and other data structures that contain a list of items

// const guestsArray = ['Jack', 'Aravind', 'Samira', 'Haley', 'Lydia', 'Adrian'];
// for (const guest of guestsArray) { // declare a variable in the loop that iterates through each element in the array
//     console.log("Welcome to the pary " + guest + '!');
// }

// BREAK within a loop immediately stops it
// CONTINUE immediately skips to the next iteration of the loop
// for (let i = 0; i < 10; i++){ // returns numbers 0-4 and STOPS
//     if (i === 5) {
//         break; // this makes the loop STOP
//     }
//     console.log(i);
// }

// for (let i = 0; i < 10; i++){ // returns numbers 0-9 SKIPPING 5
//     if (i === 5) {
//         continue; // this makes the loop SKIP 5
//     }
//     console.log(i);
// }