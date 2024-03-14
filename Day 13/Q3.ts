// City Names: Formatting city-country pairs.
let cityNames = (city : string = "Delhi" , country : string = "India") => {
    return (`${city} is in ${country}`);
} 
console.log(cityNames());
console.log(cityNames("Karachi","Pakistan."));
console.log(cityNames("Tokyo","Japan."));
console.log(cityNames("Melboune","Australia."));
console.log(cityNames("Capetown","RSA."));