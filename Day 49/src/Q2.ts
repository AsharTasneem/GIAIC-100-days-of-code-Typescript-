#! /usr/bin/env node
// : Show an example of a callback function used to filter an array of numbers.

// Explain & TIP: The .filter() method creates a new array with all elements that pass the test implemented by the provided function. This method is commonly used to search through an array and create a subset of it based on certain criteria.
const randomNumbers : number[] = [4,7,13,5,2,16,18,10,12,6,20,8];
const filterNumbers = randomNumbers.filter((key) => {
    return key >= 5;
})
console.log(filterNumbers.sort((a,b) => a-b));