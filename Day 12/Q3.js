// T-shirt Create a function for customizing t-shirts.
function tShirt() {
    var color = "red";
    var size = "large";
    return ("Your shirt of ".concat(color, " color and ").concat(size, " size have been ordered."));
}
console.log(tShirt());
// Parameter Function
var makeShirt = function (quality, fabric) {
    console.log("Shirt's quality is ".concat(quality, " and fabric is ").concat(fabric, "."));
};
makeShirt("A+", "Cotton");
