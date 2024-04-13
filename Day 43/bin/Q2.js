#! /usr/bin/env node.
// Create an arrow function that takes multiple parameters and returns the product of all parameters.
// Explain & TIP: Arrow functions can take zero, one, or multiple parameters. When dealing with multiple parameters, you enclose them in parentheses.
const returnProduct = (...rest) => rest.reduce((a, b) => (a * b));
console.log(returnProduct(2, 2, 6));
export {};
