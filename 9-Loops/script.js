// For Loop

// for (let i = 0; i < 10; i++) {

//     if (i === 3) {
//         console.log("En sevdiğim rakam :", i);
//         continue;
//     }

//     if (i === 6) {
//         console.log("En pis rakam :", 6);
//         break;
//     }
//     console.log(i);

// }



// While Loop


// for (let i = 0; i < 10; i++) {

//     console.log(i);
// }

// let i = 0;

// while (i < 10) {

//     console.log(i);
//     i++;
// }



// Do-While Loop


// let i = 0;

// do {
//     console.log(i);
//     i++;
// } while (i < 10);




// let conclusion = 1;
// for (let i = 10; i > 0; i--) {

//     if (i % 2 == 0) {

//         conclusion *= i;
//     }

// }

// console.log(conclusion);


let value = "\n";

for (let i = 0; i < 10; i++) {

    for (let j = 0; j < 10; j++) {

        value += "* ";
    }
    value += "\n";
}

console.log(value);