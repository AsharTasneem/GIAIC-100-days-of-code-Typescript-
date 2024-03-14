// Cities: Describing cities with a function.
var cities = function (city1, city2) {
    if (city1 === void 0) { city1 = "Karachi"; }
    if (city2 === void 0) { city2 = "London"; }
    console.log("Man I love ".concat(city1, " and ").concat(city2, "."));
};
cities();
cities("Melboune");
cities("Chicago", "Tokyo");
