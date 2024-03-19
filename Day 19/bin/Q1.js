#! /usr/bin/env node
// Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new list where each number is twice its original value.
let digit = [3, 25, 40, 7, 86];
let doubleit = digit.map(function (currentValue, index) {
    return currentValue * 2;
});
console.log(doubleit);
export {};
