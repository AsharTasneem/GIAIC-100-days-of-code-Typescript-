#! /usr/bin/env node
// Implement a switch statement that evaluates an expression and uses the default case if none of the cases match.

// Explain & TIP: The default case in a switch statement provides a way to execute a block of code when none of the other case labels match the expression's value.

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

console.log(month(56));