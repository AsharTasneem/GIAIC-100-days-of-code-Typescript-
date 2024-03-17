// Advanced Array Destructuring: Given an array of objects representing different laptops, each with properties make, model, and year, use array destructuring to assign the first and second laptops to variables. Then, log these variables.
let laptop1 = {
    make : "hp" ,
    model : "Intel i3",
    year : 2013,
}
let laptop2 = {
    make : "Dell" ,
    model : "Xls 20",
    year : 2019,
}

let laptopArray : Array <object> = [laptop1 , laptop2];
let [a,b] = laptopArray;
console.log(a);
console.log(b);