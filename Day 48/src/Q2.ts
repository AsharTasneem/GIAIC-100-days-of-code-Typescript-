#! /usr/bin/env node
// Show how to use the .then() and .catch() methods to handle Promise resolution and rejection.

// Explain & TIP: The .then() method is called when a Promise is successfully resolved, while .catch() is called when a Promise is rejected. Together, they provide a powerful and readable way to handle asynchronous success and error scenarios.
const p1 = new Promise((resolve , reject) => {
    console.log("Execution is pending.");
    setTimeout(() => {
        resolve ("Hello World.")
    }, 3000);
})

const p2 = new Promise((resolve , reject) => {
    console.log("Execution is pending.");
    setTimeout(() => {
        reject (new Error ("Error occured in p2."))
    }, 3000);
})

p1.then((value) => {
    console.log(value)
}) 

p2.catch((error) => {
    console.log("Error occured in p2.");
})