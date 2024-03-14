// Magicians: Display magician names from an array.
// Passing arrays to functions allows for the manipulation or display of their contents in a centralized manner. This is useful for handling lists of data.
function magicians (magician1 : string , magician2 : string , magician3? : string){
    let allMagicans = [magician1,magician2];
    if (magician3){
        allMagicans.push(magician3);
        return allMagicans  
    } 
    else {
        return allMagicans;
    }
}

function printing(allMagicans : any){
    if (allMagicans.length == 3){
        for(let i of allMagicans){
            console.log(`Hi ${i}`);
        }
    }
    else {
        for(let j of allMagicans){
            console.log(j);
        }
    }
}
printing(magicians("Ashar","Shazaib","Nabeel"));
printing(magicians("Bilal","Ali"));

