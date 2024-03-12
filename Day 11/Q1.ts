// No Users: Ensure your user list isn’t empty.
let guests : string[] = []
let guestsLength : number = guests.length;
if (guestsLength == 0) {
    console.log("No guests in invited list.");
} else {
    for(let i of guests){
        console.log(`${i} have invited to the party.`);
    }
}