#! /usr/bin/env node
// Make a Smartphone Object: Create a simple way to keep track of a smartphone's details. Include its brand, model, and other key features like how much storage it has, the size of its screen, and how long its battery lasts.

// Explain & TIP: Just like a box can contain smaller boxes, objects can contain other objects. This helps organize related information neatly.
let smartphone = {
    brand : "Samsung",
    model : "A51",
    Price : 50_000,
    specs : {
        storage : "128 GB",
        displaySize : "5.7",
        batteryMah : 4000
    }
}
console.log(smartphone);