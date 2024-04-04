#! /usr/bin/env node
// Simulate a dice roll using JavaScript and return a random integer between 1 and 6.

// Explain & TIP: Simulating a dice roll involves randomly choosing an integer between 1 and 6. Use Math.random() along /with some arithmetic to achieve this range.
function dice (randomNumber : number){
    let diceDigit : number = Math.ceil(randomNumber * 6)
    return diceDigit;
}

console.log(dice(Math.random()));
