// Large Shirts: Default values in make_shirt().
var makeShirt = function (size, color, price) {
    if (size === void 0) { size = "Large"; }
    if (color === void 0) { color = "White"; }
    if (price === void 0) { price = 2500; }
    return ("The cost of ".concat(color, " shirt in ").concat(size, " size is ").concat(price, " pkr."));
};
console.log(makeShirt());
console.log(makeShirt("medium", "Black"));
console.log(makeShirt("X-Large", "Orange", 3000));
