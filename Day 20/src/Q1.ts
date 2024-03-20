#! /usr/bin/env node
// Average Score Calculator: Write a simple program that can take lots of scores and find their average.

// Explain & TIP: This program can handle any number of scores you give it, and it tells you the average score. Handy for seeing how well you did overall!
function score (...rest : Array<any>){
    var average = rest.reduce( function (e1 ,e2) {
        return e1 + e2;
    })
    return (average/rest.length)
}
console.log(score(4,5,3,5,2,435,98,2,4,234,52,43,56,342,54,342));