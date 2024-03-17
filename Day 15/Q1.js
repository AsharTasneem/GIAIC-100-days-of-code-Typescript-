// Unchanged Magicians: Preserve the original magician names while creating a new "great" list.
var greatArray = [];
function great(magiciansArray) {
    console.log("Original");
    console.log(magiciansArray);
    for (var _i = 0, magiciansArray_1 = magiciansArray; _i < magiciansArray_1.length; _i++) {
        var i = magiciansArray_1[_i];
        greatArray.push("The great ".concat(i));
    }
    console.log("Great");
    return greatArray;
}
console.log(great(["Ashar", "Shazaib", "Nabeel"]));
