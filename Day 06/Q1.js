// More Guests: You've found a bigger dinner table, so there's room for more guests.
var guestsInvited = ["Ashar", "Shazaib", "Nabeel"];
// let newInvite : string = "Asif";
var newLength = guestsInvited.push("Asif", "Sohail");
newLength = guestsInvited.unshift("Bilal", "Muddasir");
console.log(guestsInvited);
guestsInvited.splice(3, 0, "Rohaan");
for (var _i = 0, guestsInvited_1 = guestsInvited; _i < guestsInvited_1.length; _i++) {
    var guests = guestsInvited_1[_i];
    console.log("Dear ".concat(guests, ", would you like to join me for dinner?"));
}
