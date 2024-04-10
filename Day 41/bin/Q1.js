#! /usr/bin/env node
// Implement a for loop that counts from 1 to 10 but skips number 5 using the continue statement.
// Explain & TIP: The continue statement can be used to skip over an iteration in a loop. It's particularly handy when you want to ignore specific cases without stopping the entire loop.
function countingContinue() {
    for (let i = 0; i <= 10; i++) {
        if (i == 5) {
            continue;
        }
        else {
            console.log(i);
        }
    }
}
countingContinue();
export {};
