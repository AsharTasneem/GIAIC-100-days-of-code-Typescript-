// Hello Admin: Greet users differently, especially 'admin'.
var users = ["admin", "user1", "user2", "user3", "user4"];
var greetTo = "user3";
for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
    var greet = users_1[_i];
    if (greet == greetTo) {
        console.log("Hello sir! How are you?");
        break;
    }
    else if (greet != greetTo) {
        console.log("Hi employees!");
        break;
    }
}
