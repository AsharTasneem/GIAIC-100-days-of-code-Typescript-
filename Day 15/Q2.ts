// Sandwiches: Summarize sandwich orders with varying ingredients.
// Utilizing rest parameters allows functions to accept an indefinite number of arguments, useful for handling lists of data like sandwich ingredients.
function sandwich(meat : string , price : number , chesse? : string , mayo? : string ) {
    if (chesse || mayo){
        if (chesse && mayo){
            price += 150;
        return (`The cost of ${meat} sandwich with ${chesse} and ${mayo} is ${price}pkr.`);

        }
        else if (chesse) {
            price += 100;
            return (`The cost of ${meat} sandwich with ${chesse} is ${price}pkr.`);
        }
        else if (mayo){
            price += 50;
            return (`The cost of ${meat} sandwich with ${mayo} is ${price}pkr.`);
        }
    }
    else {
        return (`The cost of ${meat} sandwich is ${price}pkr.`)
    }
}
console.log(sandwich("Chicken",1200,))