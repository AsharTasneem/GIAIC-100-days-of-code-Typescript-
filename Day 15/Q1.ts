// Unchanged Magicians: Preserve the original magician names while creating a new "great" list.
let greatArray : Array<string> = [];
function great(magiciansArray) {
    console.log("Original")
    console.log(magiciansArray);
    for(let i of magiciansArray){
        greatArray.push(`The great ${i}`);
    }
    console.log("Great")
    return greatArray;
}

console.log(great(["Ashar","Shazaib","Nabeel"]));
