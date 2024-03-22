#! /usr/bin/env node
// Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example.
// Explain & TIP: Enums are like special lists in your code that help you categorize things. They make your code cleaner and easier to understand.
var vehicle;
(function (vehicle) {
    vehicle["bike"] = "Bike";
    vehicle["car"] = "Car";
    vehicle["truck"] = "Truck";
    vehicle["bus"] = "Bus";
})(vehicle || (vehicle = {}));
console.log(vehicle.car);
export {};
