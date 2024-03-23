#! /usr/bin/env node
// Dividing and Finding the Remainder: Write a function that divides two numbers and returns both the quotient and the remainder. Use an object to return both values.

// Explain & TIP: Division can give you a whole part (quotient) and a leftover part (remainder). Returning both in an object is a neat way to keep them together.

function division(divisor:number , dividend:number) {
    let answer  : number = divisor/dividend;
    let remainder : number = divisor%dividend;
    return {
        "Quotient": Math.floor(answer),
        "Remainder": remainder
    }
}
console.log(division(24,6));