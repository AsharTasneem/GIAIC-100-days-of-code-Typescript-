#! /usr/bin/env node

// Function Expressions vs. Function Declarations: Compare function expressions and declarations by creating one of each that performs the same task, such as squaring a number.

// Explain & TIP: JavaScript allows you to create functions in two ways: declarations that name the function and can be called before they're defined, and expressions that are stored in variables and are called using the variable name.
function squareDeclaration (num1:number) {
    return num1**2;
}

let squareExpression = (num2 : number) => num2**2;

console.log(squareDeclaration(8));
console.log(squareExpression(9));