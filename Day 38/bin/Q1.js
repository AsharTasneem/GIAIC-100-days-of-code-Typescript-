#! /usr/bin/env node
// Create a Map that stores the names of countries as keys and their capitals as values. Add three countries to the Map.
// Explain & TIP: The Map object in JavaScript holds key-value pairs and remembers the original insertion order of the keys. It can be more efficient for large sets of data and when the key is not a string
const countries = new Map();
countries.set("USA", "Washington, D.C."); // Adds USA to the Map
countries.set("France", "Paris"); // Adds France to the Map
countries.set("Japan", "Tokyo");
console.log(countries);
export {};
