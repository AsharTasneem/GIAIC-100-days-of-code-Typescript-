// Hello Admin: Greet users differently, especially 'admin'.
let users:string[] = ["admin","user1","user2","user3","user4"];
let greetTo:string = "user3"
for(let greet of users){
    if(greet==greetTo){
        console.log("Hello sir! How are you?");
        break;
    } else if(greet!=greetTo){
        console.log("Hi employees!")
        break;
    }
}