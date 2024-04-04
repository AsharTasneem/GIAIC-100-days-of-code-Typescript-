#! /usr/bin/env node
// Generate a random integer between 1 and 10.
// Explain & TIP: To generate a random integer within a specific range, you can use Math.random() in combination with Math.floor() or Math.ceil() to ensure the result is an integer.
// Floor Round a number downward to its nearest integer. 
// Ceil Round a number upward to its nearest integer.
function randomNumbers(range) {
    let generatedNumber = Math.ceil(Math.random() * range);
    return (`The generated random number is : ${generatedNumber}`);
}
console.log(randomNumbers(10));
export {};
