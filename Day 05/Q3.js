// Changing Guest List: One of your guests can't make it to the dinner, so you need to send out a new set of invitations with a replacement guest.
var guestsInvite = ["Ashar", "Shazaib", "Nabeel", "Muddasir"];
var guestNotAttend = "Muddasir";
console.log("".concat(guestNotAttend, " is not able to attend the dinner."));
var indexOfGuestNotAttend = guestsInvite.indexOf(guestNotAttend);
var newGuest = "Bilal";
guestsInvite[indexOfGuestNotAttend] = newGuest;
for (var _i = 0, guestsInvite_1 = guestsInvite; _i < guestsInvite_1.length; _i++) {
    var allGuest = guestsInvite_1[_i];
    console.log(allGuest);
}
