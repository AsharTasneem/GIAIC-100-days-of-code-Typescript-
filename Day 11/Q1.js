// No Users: Ensure your user list isn’t empty.
var guests = [];
var guestsLength = guests.length;
if (guestsLength == 0) {
    console.log("No guests in invited list.");
}
else {
    for (var _i = 0, guests_1 = guests; _i < guests_1.length; _i++) {
        var i = guests_1[_i];
        console.log("".concat(i, " have invited to the party."));
    }
}
