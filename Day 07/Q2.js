// Think of something you could store in an array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
var countries = ["Belgium", "Australia", "USA", "UAE", "UK"];
for (var _i = 0, countries_1 = countries; _i < countries_1.length; _i++) {
    var country = countries_1[_i];
    console.log("Countries I'd like to visit: ".concat(country));
}
