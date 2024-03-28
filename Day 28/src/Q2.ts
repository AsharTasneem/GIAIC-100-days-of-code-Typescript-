#! /usr/bin/env node
// Converting to Upper and Lower Case: Create a function that takes a string, converts it to uppercase, then to lowercase, and logs both.

// Explain & TIP: The .toUpperCase() and .toLowerCase() methods allow you to change the case of all letters in a string, useful for formatting or comparing strings.
function upperLowerCases (str : string) {
    let lowerCase : string = str.toLowerCase();
    console.log(lowerCase);
    let upperCase : string = str.toUpperCase();
    console.log(upperCase);
}

upperLowerCases("asHAr");