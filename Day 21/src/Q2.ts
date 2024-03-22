// Making a Student Template: Create a blueprint for student information, including their name, age, and the classes they're taking, and then fill in this blueprint with an example student.

// Explain & TIP: This blueprint, called an interface, helps ensure all students have the same kind of information, making your code more organized.
type students={
    name:string,
    age:number,
    classes:Array<string>
}
let student1:students = {
    name : "Ashar",
    age : 21,
    classes : ["Pyhsics","Mathmematics","Python Programming"],
}

console.log(student1);