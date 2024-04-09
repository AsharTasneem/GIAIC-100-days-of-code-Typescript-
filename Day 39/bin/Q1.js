#! /usr/bin/env node
//  Use a switch statement to log the days of the week based on a number (1-7).
// Explain & TIP: A switch statement is a great way to select one of many code blocks to be executed. It's particularly useful for scenarios like mapping numbers to days of the week.
function days(dayNumber) {
    switch (dayNumber) {
        case (1): {
            return "Monday";
            break;
        }
        case (2): {
            return "Tuesday";
            break;
        }
        case (3): {
            return "Wednesday";
            break;
        }
        case (4): {
            return "Thursday";
            break;
        }
        case (5): {
            return "Friday";
            break;
        }
        case (6): {
            return "Saturday";
            break;
        }
        case (7): {
            return "Sunday";
            break;
        }
    }
}
console.log(days(5));
export {};
