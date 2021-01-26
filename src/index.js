// var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

// function double(x) {
//   return x * 2;
// }
// const newNumbers = numbers.map(double);

// var newNumbers = [];

// numbers.forEach(function (x) {
//   newNumbers.push(x*2);
// });

// console.log(newNumbers);

// numbers.forEach(function(currentNumber){
//   newNumber += currentNumber
// })

// const newNumber = numbers.findIndex(function(num){
//   return num >10
// })

// console.log(newNumber);

//Filter - Create a new array by keeping the items that return true.

//Reduce - Accumulate a value by doing something to each item in an array.

//Find - find the first item that matches from an array.

//FindIndex - find the index of the first item that matches.

// importing the array from the emojipedia file
import emojipedia from "./emojipedia";

// creating a new const set to a mapping of a specfic function to each entry
const NewEmojipedia = emojipedia.map(function (emojiEntry) {
  //passing the meaning element of each entry through the substring function to truncate the entry to 100 characters
  return emojiEntry.meaning.substring(0, 100);
});

// loging the resulting array to the console.
console.log(NewEmojipedia);
