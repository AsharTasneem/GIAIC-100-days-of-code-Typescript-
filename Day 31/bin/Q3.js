#! /usr/bin/env node
// Find the index of "Banana" in an array of fruits and replace it with "Mango".
// Explain & TIP: To replace an item in an array, find its index using .indexOf(), then use that index to set a new value with array bracket notation.
let fruits = ["Mango", "Peach", "Banana"];
let peachIndex = fruits.indexOf("Peach");
fruits[peachIndex] = "Apple";
console.log(fruits);
export {};
