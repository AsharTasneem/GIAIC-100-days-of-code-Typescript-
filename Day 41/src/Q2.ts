#! /usr/bin/env node
// Use a while loop to count down from 10 to 1 and breaks the loop when it reaches 5.

// Explain & TIP: The break statement terminates the loop immediately. This is useful for stopping a loop when a certain condition is met, even if the loop's original termination condition hasn't been reached yet.

function countingBreak(){
    let i = 1
    while(i <= 10) {
        if (i==5) {
            break;
        }
        else {
            console.log (i);
            i++;
        }
    }
}
countingBreak()