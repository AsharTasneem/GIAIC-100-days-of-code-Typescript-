#! /usr/bin/env node
// Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows, like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them.
// Explain & TIP: Breaking down a complex list into simpler parts makes it easier to work with and understand specific pieces of information.
// A list showing a programmer's skills in detail
let developerSkills = {
    languages: ["Python", "TypeScript", "C++"],
    frameworks: ["Django", "React", ".net"],
    tools: ["Git", "Webpack", "Docker"]
};
let { languages, frameworks, tools } = developerSkills;
console.log(`Languages: ${languages[0]}, Framework: ${frameworks[0]}, Tools: ${tools[0]}`);
export {};
