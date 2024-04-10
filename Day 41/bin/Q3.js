#! /usr/bin/env node
// Create a loop that iterates through a string and stops when it finds the first vowel.
// Explain & TIP: To find a specific character in a string, you can iterate through each character and use a condition to check for vowels. The loop can stop once a vowel is found.
function vowelFinder(str) {
    str = str.toLowerCase();
    const stringLength = str.length;
    for (let initialPointer = 0; initialPointer <= stringLength; initialPointer++) {
        if (str[initialPointer] == "a") {
            return `The first vowel(a) is on ${initialPointer} index.`;
            break;
        }
        else if (str[initialPointer] == "e") {
            return `The first vowel(e) is on ${initialPointer} index.`;
            break;
        }
        else if (str[initialPointer] == "i") {
            return `The first vowel(i) is on ${initialPointer} index.`;
            break;
        }
        else if (str[initialPointer] == "o") {
            return `The first vowel(o) is on ${initialPointer} index.`;
            break;
        }
        else if (str[initialPointer] == "u") {
            return `The first vowel(u) is on ${initialPointer} index.`;
            break;
        }
        else {
            continue;
        }
    }
}
console.log(vowelFinder("My name is Ashar Tasneem."));
export {};
