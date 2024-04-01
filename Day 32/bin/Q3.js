#! /usr/bin/env node
// Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.
// Explain & TIP: The .reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
let arrOfNums = [8, 4, 76, 434, 9, 5, 0, 2, 945];
let sumOfArr = arrOfNums.reduce(function abc(a, b) {
    return a + b;
});
console.log(sumOfArr);
export {};
