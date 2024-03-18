#! /usr/bin/env node
// Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies. It should log each hobby with a statement saying you enjoy that hobby.
function hobby(...rest) {
    for (let hobbies of rest) {
        console.log(`Enjoy that ${hobbies}.`);
    }
}
hobby("Badminton", "Cricket");
export {};
