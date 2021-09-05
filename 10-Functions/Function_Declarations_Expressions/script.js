// Function Declarations

// function sum(a, b) {

//     return a + b;

// }

// console.log(sum(10, 20));


// Function Expressions


// const sum = function(a, b) {

//     if (typeof a === "undefined") { a = 0; }

//     if (typeof b === "undefined") { b = 0; }

//     return a + b;
// }



const sum = function(a = 0, b = 0) {

    return a + b;
}

function sumAll() {

    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}

console.log(sum(10, 30));
console.log(sum(10));
console.log(10, 30, 40, 50);


console.log(sumAll(10, 20, 30, 40));