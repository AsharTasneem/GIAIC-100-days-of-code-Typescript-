// Shrinking Guest List: Unfortunately, your new table won’t arrive in time, and you can only invite two guests.
var guestsInvited = ["Ashar", "Shazaib", "Nabeel", "Muddasir", "Bilal"];
guestsInvited.splice(1, 3);
for (var _i = 0, guestsInvited_1 = guestsInvited; _i < guestsInvited_1.length; _i++) {
    var guests = guestsInvited_1[_i];
    console.log(guests);
}
