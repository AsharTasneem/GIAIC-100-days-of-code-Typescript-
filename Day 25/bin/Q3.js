#! /usr/bin/env node
// Compound Assignment Operators: Use compound assignment operators to simplify arithmetic operations. Start with x = 4 and perform a series of operations (addition, subtraction, multiplication, division) on x using compound operators.
// Explain & TIP: Compound assignment operators combine an arithmetic operation with assignment, making your code cleaner and more concise. Instead of writing x = x + 2, you can simply write x += 2.
let x = 10;
console.log(`
    Initally: ${x}.
    Addition: ${x += 9}.
    Subtraction: ${x -= 4}.
    Multiplication: ${x *= 7}.
    Division: ${x /= 2}.
    `);
export {};
