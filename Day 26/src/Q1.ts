#! /usr/bin/env node
// Function Parameters and Return Values: Create a function that takes two numbers as parameters, adds them together, and returns the result. Show how you can call this function and log the result.

// Explain & TIP: Functions can take inputs (parameters) and give back an output (return value). They're like personal assistants that do a specific task for you and report back with the results.
let addition = (num1 : number , num2 : number) => {
    return num1 + num2;
}
console.log(addition(65,342))