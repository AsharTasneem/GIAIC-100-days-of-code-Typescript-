#! /usr/bin/env node
// Convert a traditional function expression to an arrow function.

// Explain & TIP: Arrow functions provide a concise syntax for writing function expressions. They don't have their own bindings to this or super, and should not be used as methods.

function simpleFunction(num1 : number , num2 : number){
    return num1 + num2;
}

const arrowFunction = (num1 : number , num2 : number) => num1 + num2;

console.log(simpleFunction(6,7));
console.log(arrowFunction(6,7));