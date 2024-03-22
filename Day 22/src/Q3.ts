#! /usr/bin/env node
// Logical AND Verification: Create a function that checks two boolean (true or false) values. It should only say true if both are true, using the && operator. For instance, checkBothTrue(true, false) should be false.

// Explain & TIP: The && operator in JavaScript checks if both sides are true. It's great for confirming several things are true all at once.

function checkBoth(condition1 : boolean , condition2 : boolean){
    if (condition1 && condition2 === true){
        return true;
    }
    else {
        return false;
    }
}

console.log(checkBoth(true,true));