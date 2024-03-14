// Great Magicians: Add "the Great" to magician names.
let magician = (magician1 : string , magician2 : string , magician3? : string) => {
    let magicianNames : string [] = [magician1 , magician2];
    if (magician3) {
        magicianNames.push(magician3);
        return magicianNames;
    }
    else {
        return magicianNames;
    }
}
let magicianArray = magician("Ashar","Shazaib");
for (let i of magicianArray){
    console.log(`The Great ${i}.`);
}