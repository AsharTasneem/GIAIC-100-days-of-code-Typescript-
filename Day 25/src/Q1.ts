#! /usr/bin/env node
// Question 73: Assigning and Updating Variables: Create a function where you declare a variable using let and assign an initial value. Then, update its value within the same function and log both the initial and updated values.

// Explain & TIP: In JavaScript, you can assign a value to a variable with = and later update it as needed. This is fundamental for keeping track of changing data within your programs.
function updateValue(){
    let myName : string = "Ashar";
    console.log(`Initial: ${myName}.`);
    myName = "XYZ";
    console.log(`Updated: ${myName}.`);
}
updateValue()