#! /usr/bin/env node
// Find the Average Grade: Given a list of grades, calculate the average grade.
// We can sum up all the grades and divide by the number of grades to find the average, giving us an idea of how well someone did overall.
let score = [56, 70, 45, 85, 72, 66];
let result = score.reduce(function (e1, e2) {
    return e1 + e2;
});
console.log(result / score.length);
export {};
