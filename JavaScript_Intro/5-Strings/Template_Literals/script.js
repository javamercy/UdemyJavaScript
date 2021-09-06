// Template Literals


const fullName = "Emrecan Kurşun";
const city = "Elazığ";
const yearOfBirth = 2001;

let val;


val = "My name is " + fullName + " I'm " + (2021 - yearOfBirth) + " years old" +
    " and I live in " + city;



val = `My name is ${fullName}. I'm ${(2021-yearOfBirth >= 18) ? "Over 18" : "Under 18"} 
and I live in ${city}`;










console.log(val);