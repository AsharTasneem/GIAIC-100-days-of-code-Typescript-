#! /usr/bin/env node
// Create a function that generates a random hexadecimal color code.
// Explain & TIP: Hexadecimal color codes are strings that start with # followed by 6 hexadecimal digits. You can generate each digit randomly and concatenate them into a full color code.
function colorCode(randomNumber) {
    const hash = "#";
    const sixDigitNumber = Math.ceil(randomNumber * 10000000);
    let i = sixDigitNumber.toString(16);
    return `${hash}${i}`;
}
console.log(colorCode(Math.random()));
export {};
