#! /usr/bin/env node
// Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.
let mixedArray = ["No",56,"Hat",2,"Go","Best",44];
let str = mixedArray.filter(function (currentValue , index  ){
    return typeof(currentValue) === "string";
})
console.log(str);