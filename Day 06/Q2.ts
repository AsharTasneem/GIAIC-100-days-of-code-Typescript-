// Shrinking Guest List: Unfortunately, your new table won’t arrive in time, and you can only invite two guests.
let guestsInvited : string[] = ["Ashar","Shazaib","Nabeel","Muddasir","Bilal"];
guestsInvited.splice(1,3);
for(let guests of guestsInvited){
    console.log(guests);
}