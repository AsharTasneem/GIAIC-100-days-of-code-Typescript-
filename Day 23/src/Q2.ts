#! /usr/bin/env node
// Multiplying Decimals: Create a function that accepts two decimal numbers and returns their product. Round the result to two decimal places.

// Explain & TIP: When working with decimals in JavaScript, results can be unexpectedly long. Rounding can help keep numbers manageable.
function multiplication(number1:number , number2:number){
    return (number1*number2).toFixed(2);
}
console.log(multiplication(5.45,43.6))