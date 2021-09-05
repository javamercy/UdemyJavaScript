// Functions


function calculateAge(yearOfBirth) {

    return new Date().getFullYear() - yearOfBirth;
}


let ageEmrecan = calculateAge(2001);

console.log(ageEmrecan);



function howMuchYears(yearOfBirth, name) {

    let age = calculateAge(yearOfBirth);
    let retired = 65 - age;

    if (retired > 0) {

        console.log(`${retired} years have remained ${name}`);
    } else {

        console.log("you have already retired");
    }
}


howMuchYears(2001, "Emrecan");
howMuchYears(1983, "Engin");
howMuchYears(1950, "Mustafa");