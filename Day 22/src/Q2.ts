#! /usr/bin/env node
// Determine the Remainder: Make a function that gets two numbers and shows the leftover from dividing them using the % sign. For example, remainder(5, 2) should give 1.

// Explain & TIP: The % (modulus) operator finds what's left after one number is divided by another. It's handy for figuring out if numbers are even, odd, and more
function division(divisor : number , dividend : number) {
    return divisor % dividend;
}
console.log(division(5,2))