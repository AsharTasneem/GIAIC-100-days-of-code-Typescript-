#! /usr/bin/env node
// Updating Object Properties: Add a property named color to the existing car object, and then update the year property to 2021. Show how to perform these operations.

// Explain & TIP: You can add new properties to an object or change existing ones after the object is created. This flexibility allows objects to be dynamically updated as needed.

let car = {
    make : "Honda",
    model : "Civic Turbo RS",
    year : 2024,
}
car.color = "Black";
car.year = 2021;
console.log(car);

