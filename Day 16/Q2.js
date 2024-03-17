// Advanced Array Destructuring: Given an array of objects representing different laptops, each with properties make, model, and year, use array destructuring to assign the first and second laptops to variables. Then, log these variables.
var laptop1 = {
    make: "hp",
    model: "Intel i3",
    year: 2013,
};
var laptop2 = {
    make: "Dell",
    model: "Xls 20",
    year: 2019,
};
var laptopArray = [laptop1, laptop2];
var a = laptopArray[0], b = laptopArray[1];
console.log(a);
console.log(b);
