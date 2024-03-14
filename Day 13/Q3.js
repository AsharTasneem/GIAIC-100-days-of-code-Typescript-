// City Names: Formatting city-country pairs.
var cityNames = function (city, country) {
    if (city === void 0) { city = "Delhi"; }
    if (country === void 0) { country = "India"; }
    return ("".concat(city, " is in ").concat(country));
};
console.log(cityNames());
console.log(cityNames("Karachi", "Pakistan."));
console.log(cityNames("Tokyo", "Japan."));
console.log(cityNames("Melboune", "Australia."));
console.log(cityNames("Capetown", "RSA."));
