#! /usr/bin/env node
// Block Scope with let and const: Demonstrate block scope by creating a code block with {} that uses both let and const. Show how variables declared inside the block are not accessible outside of it.
// Explain & TIP: Block scope, created by {} in JavaScript, confines let and const variables to that block, enhancing code organization and preventing accidental access from outside the block.
{
    let me = "Ashar";
    const you = "Bilal";
}
try {
    console.log(me);
}
catch {
    console.log("Let and const assign variable cannot use outside the code block.");
}
export {};
