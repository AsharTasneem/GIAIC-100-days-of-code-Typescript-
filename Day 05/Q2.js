// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var guestsInvited = ["Ashar", "Shazaib", "Nabeel", "Muddasir"];
for (var _i = 0, guestsInvited_1 = guestsInvited; _i < guestsInvited_1.length; _i++) {
    var guest = guestsInvited_1[_i];
    console.log("Hi ".concat(guest, ", You have been invited to dinner at 9PM tommorrow."));
}
