// Changing Guest List: One of your guests can't make it to the dinner, so you need to send out a new set of invitations with a replacement guest.
let guestsInvite : string[] = ["Ashar","Shazaib","Nabeel","Muddasir"];
let guestNotAttend : string = "Muddasir";
console.log (`${guestNotAttend} is not able to attend the dinner.`);
let indexOfGuestNotAttend = guestsInvite.indexOf(guestNotAttend);
let newGuest : string= "Bilal";
guestsInvite[indexOfGuestNotAttend] = newGuest;
for(let allGuest of guestsInvite){
console.log (allGuest); 
}