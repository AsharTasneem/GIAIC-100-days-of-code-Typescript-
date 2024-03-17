// Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year, and a method describe() that logs a sentence about the laptop.
// Objects can also contain functions (methods) that can perform actions using the object's properties. This introduces method definition within objects.
var laptop = {
    make: "hp",
    model: "Intel i3",
    year: 2013,
    result: function () {
        return ("The ".concat(laptop.make, "'s model is ").concat(laptop.model, " is launched in ").concat(laptop.year, "."));
    }
};
console.log(laptop.result());
