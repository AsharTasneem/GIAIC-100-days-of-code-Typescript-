#! /usr/bin/env node
// Calculate and log the absolute difference between the number -5 and 5.

// Explain & TIP: The Math.abs() function returns the absolute value of a number, which is useful for finding the magnitude of a difference without regard to direction.
// Calculates the absolute difference between -5 and 5

const a : number  = -5;
const b : number  = 5;
const result : number = Math.abs(a-b);
console.log(result);