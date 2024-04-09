#! /usr/bin/env node
// Use a for...of loop to iterate through an array of your favorite movies and log each one.
// for...of loop is a modern loop introduced in ES6, designed to iterate over iterable objects like arrays, strings, Maps, NodeLists, and more, making it very readable and easy to use.
const favMovies = ["Inception", "Titanic", "Interstellar", "San Andreas"];
for (let movies of favMovies) {
    console.log(movies);
}
export {};
