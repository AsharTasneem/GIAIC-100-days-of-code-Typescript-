#! /usr/bin/env node
// Create a Promise that resolves with "Hello, World!" after 2 seconds.
// Explain & TIP: Promises in JavaScript are used for asynchronous computations and can be in one of these states: pending, fulfilled, or rejected. A Promise that resolves after a delay demonstrates how to handle operations that take some time to complete, like fetching data or timing events.
const p1 = new Promise((resolve, reject) => {
    console.log("Execution is pending.");
    setTimeout(() => {
        resolve("Hello World.");
    }, 2000);
});
p1.then((value) => {
    console.log(value);
});
export {};
