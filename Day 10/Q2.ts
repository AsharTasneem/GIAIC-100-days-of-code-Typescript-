// Favorite Fruit: Create an array for your favorite fruits and check if certain fruits are included.
let favoriteFruits:string[] = ["mango","banana","apple","orange","peach","strawberry"];
let checkFruit:string = "peach"
if(favoriteFruits.includes(checkFruit)==true){
    console.log(`It includes ${checkFruit} at index ${favoriteFruits.indexOf(checkFruit)}.`)
} else {
    console.log("Fruit is not in the list.")
}