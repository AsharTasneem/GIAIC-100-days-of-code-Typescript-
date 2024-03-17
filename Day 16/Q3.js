// Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Explain & TIP: The spread operator can be used in conjunction with array methods like sort() to combine and manipulate arrays efficiently.
var pricesSet1 = [20000, 130000, 88000];
var pricesSet2 = [70000, 35000, 48000];
var combinedPrices = __spreadArray(__spreadArray([], pricesSet1, true), pricesSet2, true);
combinedPrices.sort().sort(function (a, b) { return a - b; });
console.log(combinedPrices);
