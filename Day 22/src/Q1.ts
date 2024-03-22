#! /usr/bin/env node
// : Combine Strings and Numbers: Write a function that merges a piece of text with a number. For example, if provided with "Age: " and 30, it should give back "Age: 30".

// Explain & TIP: In JavaScript, the + operator can add numbers together or join strings. Mixing a string with a number changes the number into a string for the joining.

function stringAndNumber (text : string , age : number){
    return text + age
}

console.log(stringAndNumber("Age: ",21))