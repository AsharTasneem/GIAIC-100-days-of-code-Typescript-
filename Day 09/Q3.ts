// Alien Colors #2: Choose a color for an alien, then write an if-else chain.
let alienColor:string = "Green";
if(alienColor.toLowerCase() === "red"){
    console.log("You just earned 5 points.");
} else if (alienColor.toLowerCase() === "green"){
    console.log("You just earned 10 points.");
} else if (alienColor.toLowerCase() === "yellow"){
    console.log("You just earned 15 points.");
} else {
    console.log("You lose.");
}