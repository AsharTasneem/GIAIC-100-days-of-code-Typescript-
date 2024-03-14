// Large Shirts: Default values in make_shirt().
let makeShirt = (size : string = "Large", color : string = "White", price : number = 2500) => {
    return (`The cost of ${color} shirt in ${size} size is ${price} pkr.`);
}
console.log(makeShirt());
console.log(makeShirt("medium","Black"));
console.log(makeShirt("X-Large","Orange",3000));