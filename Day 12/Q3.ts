// T-shirt Create a function for customizing t-shirts.
function tShirt(){
    let color : string = "red";
    let size : string = "large";
    return (`Your shirt of ${color} color and ${size} size have been ordered.`);
}
console.log(tShirt());

// Parameter Function

let makeShirt = (quality : string , fabric : string) => {
    console.log(`Shirt's quality is ${quality} and fabric is ${fabric}.`)
}
makeShirt("A+","Cotton")