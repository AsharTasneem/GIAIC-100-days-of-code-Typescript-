#! /usr/bin/env node
// Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any other number you give them later.
// Explain & TIP: Imagine you have a magic box that can add a specific number to any number you put in it. This program makes that magic box for you!
function customAdder(arg1) {
    let magicNumber = 6;
    return magicNumber + arg1;
}
console.log(customAdder(5874));
export {};
