// Great Magicians: Add "the Great" to magician names.
var magician = function (magician1, magician2, magician3) {
    var magicianNames = [magician1, magician2];
    if (magician3) {
        magicianNames.push(magician3);
        return magicianNames;
    }
    else {
        return magicianNames;
    }
};
var magicianArray = magician("Ashar", "Shazaib");
for (var _i = 0, magicianArray_1 = magicianArray; _i < magicianArray_1.length; _i++) {
    var i = magicianArray_1[_i];
    console.log("The Great ".concat(i, "."));
}
