// Magicians: Display magician names from an array.
// Passing arrays to functions allows for the manipulation or display of their contents in a centralized manner. This is useful for handling lists of data.
function magicians(magician1, magician2, magician3) {
    var allMagicans = [magician1, magician2];
    if (magician3) {
        allMagicans.push(magician3);
        return allMagicans;
    }
    else {
        return allMagicans;
    }
}
function printing(allMagicans) {
    if (allMagicans.length == 3) {
        for (var _i = 0, allMagicans_1 = allMagicans; _i < allMagicans_1.length; _i++) {
            var i = allMagicans_1[_i];
            console.log("Hi ".concat(i));
        }
    }
    else {
        for (var _a = 0, allMagicans_2 = allMagicans; _a < allMagicans_2.length; _a++) {
            var j = allMagicans_2[_a];
            console.log(j);
        }
    }
}
printing(magicians("Ashar", "Shazaib", "Nabeel"));
printing(magicians("Bilal", "Ali"));
