#! /usr/bin/env node
// Determine if a given year is a leap year using comparison operators.

// Explain & TIP: A leap year is divisible by 4 but not by 100 unless it's also divisible by 400. This rule helps align our calendar years with the Earth's orbital period.
function leapYear(year : number){
    if (year % 4 == 0){
        if (year % 100 == 0){
            if(year % 400 == 0) {
                return `${year} is a leap year.`;
            } else {
                return `${year} is not a leap year.`;
            }
        } else {
            return `${year} is a leap year.`;
        }
    } else{
        return `${year} is not a leap year.`;
    }
}
console.log(leapYear(2020));