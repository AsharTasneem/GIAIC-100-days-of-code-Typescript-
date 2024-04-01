#! /usr/bin/env node
// Use the .map() method to create a new array that contains the length of each word from an array of words.
// Explain & TIP: The .map() method transforms each item in an array according to a specific function and returns a new array with the transformed items.
let word = ["Cricket", "Football", "Mango", "Gaming"];
let wordLength = word.map(function (value) {
    return value.length;
});
console.log(wordLength);
export {};
