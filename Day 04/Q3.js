// Greetings: Use the array from Exercise 11. Instead of just printing each person’s name, print a message to them. The message should be the same for each person, but personalized with their name.
var friendsArray = ["Ashar", "Shazaib", "Nabeel"];
for (var j = 0; j < friendsArray.length; j++) {
    console.log("Hi ".concat(friendsArray[j], ", How are you?"));
}
