#! /usr/bin/env node
// Extracting a Substring: Demonstrate how to extract the first 10 characters from a string.
// Explain & TIP: .substring() can be used to get a specific part of a string, by specifying the start and end positions.
function extract10Characters(str) {
    return str.substring(0, 10);
}
console.log(extract10Characters("Hello! How are you?"));
export {};
