// Question 3: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let nameAshar : string = "asHaR";
let name2 = nameAshar.toUpperCase();
console.log(name2);
name2 = nameAshar.toLowerCase();
console.log(name2);
name2 = nameAshar.charAt(0).toUpperCase() + nameAshar.slice(1).toLowerCase();
console.log(name2);

