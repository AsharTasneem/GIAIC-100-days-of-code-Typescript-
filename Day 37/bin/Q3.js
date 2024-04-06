#! /usr/bin/env node
// Use an if-else-if chain to categorize a person's age group (child, teenager, adult).
// Explain & TIP: Age groups can typically be categorized by specific ranges. For instance, you might consider anyone under 13 a child, between 13 and 19 a teenager, and 20 or older an adult.
const ageGroup = (age) => {
    if (age < 13) {
        return "You are a child.";
    }
    else if (age >= 13 && age <= 19) {
        return "You are a teenager.";
    }
    else if (age > 20) {
        return "You are an adult.";
    }
};
console.log(ageGroup(16));
export {};
