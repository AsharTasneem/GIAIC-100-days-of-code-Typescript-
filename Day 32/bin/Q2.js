#! /usr/bin/env node
// Write a function that uses the .filter() method to return an array of numbers greater than 10.
// Explain & TIP: The .filter() method creates a new array with all elements that pass the test implemented by the provided function.
let arrOfNumbers = [8, 4, 76, 434, 9, 5, 100, 2, 945, 41];
let numberAbove10 = arrOfNumbers.filter((value) => value > 10);
numberAbove10.sort((n1, n2) => n1 - n2);
console.log(numberAbove10);
export {};
