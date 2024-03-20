#! /usr/bin/env node
// Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the user's name and age.
// Explain & TIP: This is like a self-building lego set. Once you start it, it builds a user profile by itself and can tell you about the user.
let user = {
    userName: "Ashar",
    age: 21
};
function print(user) {
    console.log(`Name ${user.userName}, Age ${user.age}.`);
}
print((user));
export {};
