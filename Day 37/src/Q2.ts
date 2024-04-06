#! /usr/bin/env node
// Create a function that assigns a grade (A, B, C, D, F) based on a student's score.

// Explain & TIP: A common grading system assigns letter grades based on score ranges. You can use an if-else-if chain to determine the grade.
const studentScore = (score : number) => {
    if (score >= 90 && score < 100){
        return "Your grade is A."
    } else if (score >= 80 && score < 90){
        return "Your grade is B."
    } else if (score >= 70 && score < 80){
        return "Your grade is C."
    } else if (score >= 60 && score < 70){
        return "Your grade is D."
    } else if (score < 60){
        return "Your grade is F."
    } else {
        return "Invalid Score."
    }
}
console.log(studentScore(870));