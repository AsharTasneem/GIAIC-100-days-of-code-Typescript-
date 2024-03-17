// Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year, and a method describe() that logs a sentence about the laptop.
// Objects can also contain functions (methods) that can perform actions using the object's properties. This introduces method definition within objects.
let laptop = {
    make : "hp" ,
    model : "Intel i3",
    year : 2013,
    result : function(){
        return (`The ${laptop.make}'s model is ${laptop.model} is launched in ${laptop.year}.`);
    } 
}

console.log(laptop.result());
