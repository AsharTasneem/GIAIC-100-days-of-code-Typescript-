#! /usr/bin/env node
// Create a switch case that matches several cases to the same code block, representing seasons.

// Explain & TIP: You can group multiple case statements together when they should execute the same block of code, which is handy for categorizing items into broader groups.
function month(monthNumbner : number){
    switch(monthNumbner){
        case(12):
        case(1):
        case(2):
            return "winter";
            break;
        case(3):
        case(4):
        case(5):
            return "Spring";
            break;
        case(6):
        case(7):
        case(8):
            return "Summer";
            break;
        case(9):
        case(10):
        case(11):
            return "Fall";
            break;
        default:
            return "Invalid Month"
    }
}

console.log(month(4));