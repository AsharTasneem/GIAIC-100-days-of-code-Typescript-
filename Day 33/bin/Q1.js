#! /usr/bin/env node
// Write a function that returns the current date in the format "DD-MM-YYYY".
// Explain & TIP: Working with dates in JavaScript often requires formatting them in a specific way. The Date object provides methods to get the day, month, and year, which you can then assemble into any format you need.
function todayDate() {
    let date = new Date();
    let day = String(date.getDate()).padStart(2, "0");
    let month = (date.getMonth() + 1).toString().padStart(2, "0");
    let year = date.getFullYear();
    return `${day}-${month}-${year}`;
}
console.log(todayDate());
export {};
