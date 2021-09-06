// let category = "computer";

// switch (category) {

//     case "telephone":

//         console.log("Category of Telephone");
//         break;

//     case "computer":
//         console.log("Category of Computer");
//         break;

//     default:
//         console.log("Wrong Category");
// }





// let day;

// switch (new Date().getDay()) {

//     case 0:
//         day = "Sunday";
//         break;
//     case 1:
//         day = "Monday";
//         break;
//     case 2:
//         day = "Tuesday";
//         break;
//     case 3:
//         day = "Wednesday";
//         break;
//     case 4:
//         day = "Thursday";
//         break;
//     case 5:
//         day = "Friday";
//         break;
//     case 6:
//         day = "Saturday";
//         break;
// }

// console.log(`Today is ${day}.`);


const age = 20;
const firstName = "Emrecan";

switch (true) {

    case age > 0 && age <= 12:
        console.log(`${firstName} is a child.`);
        break;

    case age > 12 && age <= 20:
        console.log(`${firstName} is a teenager.`);
        break;

    default:
        console.log(`${firstName} is an adult.`);

}

// if (age > 0 && age <= 12) {

//     console.log(`${firstName} is a child.`);

// } else if (age > 12 && age <= 20) {

//     console.log(`${firstName} is a teenager.`);

// } else {

//     console.log(`${firstName} is an adult.`);
// }