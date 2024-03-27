#! /usr/bin/env node
// Iterating Over Object Properties: Write a function that takes an object as an argument and logs all of its properties and values.

// Explain & TIP: You can loop through each property of an object using a for...in loop. This is useful for when you need to examine or display all the information an object holds.

let car = {
    make : "Honda",
    model : "Civic Turbo RS",
    year : 2024
}

function carProperties (car : any){
    for (let i in car) {
        console.log(`Key : ${i} , Value : ${car[i]}`);
    }
}
carProperties(car);