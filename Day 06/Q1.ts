// More Guests: You've found a bigger dinner table, so there's room for more guests.
let guestsInvited : string[] = ["Ashar","Shazaib","Nabeel"];
let newLength = guestsInvited.push("Asif","Sohail");
newLength = guestsInvited.unshift("Bilal","Muddasir");
console.log(guestsInvited);
guestsInvited.splice(3,0,"Rohaan");
for(let guests of guestsInvited){
    console.log(`Dear ${guests}, would you like to join me for dinner?`);
}
