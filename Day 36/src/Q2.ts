#! /usr/bin/env node
// Write a condition using logical operators that checks if a number is divisible by both 2 and 3.

// Explain & TIP: Checking for divisibility involves using the modulo operator (%) to see if there's any remainder. A number divisible by both 2 and 3 without a remainder is also divisible by 6.
function diviosr(num : number){
    return (num % 2 == 0 && num % 3 == 0);
}
console.log(diviosr(8));