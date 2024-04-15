#! /usr/bin/env node.
// Take a JSON string and parse it into a JavaScript object.
// Explain & TIP: JSON.parse() is used to convert a JSON string into a JavaScript object. This is particularly useful when dealing with data received as JSON from a web server or API.
const me = '{"name" : "Ashar", "age" : 21}';
const convertedObj = JSON.parse(me);
console.log(convertedObj);
export {};
