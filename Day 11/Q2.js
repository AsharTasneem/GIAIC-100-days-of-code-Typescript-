// Checking Usernames: Ensure uniqueness in usernames.
let currentUsers = ["user1", "user3", "user5", "user7", "user8"];
let newUsers = ["user2", "user3", "user4", "user7", "user9"];
for (let i of newUsers) {
    let check = currentUsers.includes(i);
    if (check === true) {
    }
    else if (check === false) {
        currentUsers.push(i);
    }
}
currentUsers.sort();
for (let j of currentUsers) {
    console.log(j);
}
