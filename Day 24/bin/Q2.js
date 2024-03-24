#! /usr/bin/env node
// Compare let and const: Create two examples where let allows reassignment but const does not. Try to reassign a const-declared variable and catch the error.
// Explain & TIP: let allows you to declare variables that can be reassigned, while const is for variables that should not change once set. Using const helps make your code safer and more predictable.
let nameAshar = "Ashar Tasneem";
nameAshar = "Hi";
//  Let allows reassignment
const nameShazaib = "Shazaib Imran";
try {
    nameShazaib = "World";
}
catch {
    console.log("Can not assign new value to const.");
}
export {};
// Const does'nt allow reassignment
