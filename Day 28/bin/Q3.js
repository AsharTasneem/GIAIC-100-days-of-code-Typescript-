#! /usr/bin/env node
// Replacing Text in a String: Write a function that takes a sentence and replaces all instances of the word "JavaScript" with "TypeScript".
// Explain & TIP: The .replace() method can search for a specific text pattern in a string and replace it with something else. By default, it only replaces the first occurrence, but you can use a global regex for multiple replacements.
function replaceWord(sentence) {
    let replaceSentence = sentence.replaceAll("javascript", "typescript");
    return replaceSentence;
}
console.log(replaceWord("javascript is javascript."));
export {};
// Also use replace function with global  flag i.e sentence.replace(\"javascript\gi,"typescript")
