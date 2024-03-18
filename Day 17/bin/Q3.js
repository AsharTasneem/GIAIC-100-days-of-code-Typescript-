#! /usr/bin/env node
// Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.
function rectangleArea(width, height) {
    return (`The area of rectangle is ${width * height}m² (Simple Function).`);
}
let rectangleAreaArrow = (width, height) => (`The area of rectangle is ${width * height}m² (Arrow Function).`);
console.log(rectangleArea(5, 7));
console.log(rectangleAreaArrow(5, 7));
export {};
