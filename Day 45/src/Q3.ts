#! /usr/bin/env node.
// Explain how you can format a JSON string with proper indentation for readability.

// Explain & TIP: JSON.stringify() can take additional parameters to format the resulting JSON string. Adding an indent level as the third argument beautifies the output, making it more readable.
const me = {
    name : "Ashar",
    age : 21,
    city : "Karachi",
}
const convertedFile = JSON.stringify(me,null,4);
console.log(convertedFile);