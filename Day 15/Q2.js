// Sandwiches: Summarize sandwich orders with varying ingredients.
// Utilizing rest parameters allows functions to accept an indefinite number of arguments, useful for handling lists of data like sandwich ingredients.
function sandwich(meat, price, chesse, mayo) {
    if (chesse || mayo) {
        if (chesse && mayo) {
            price += 150;
            return ("The cost of ".concat(meat, " sandwich with ").concat(chesse, " and ").concat(mayo, " is ").concat(price, "pkr."));
        }
        else if (chesse) {
            price += 100;
            return ("The cost of ".concat(meat, " sandwich with ").concat(chesse, " is ").concat(price, "pkr."));
        }
        else if (mayo) {
            price += 50;
            return ("The cost of ".concat(meat, " sandwich with ").concat(mayo, " is ").concat(price, "pkr."));
        }
    }
    else {
        return ("The cost of ".concat(meat, " sandwich is ").concat(price, "pkr."));
    }
}
console.log(sandwich("Chicken", 1200));
