// Loops In Arrays & In Objects

let cars = ["Bmw", "Mercedes", "Bugatti"];

let people = [
    { firstName: "Emrecan", lastName: "Kurşun" },
    { firstName: "Engin", lastName: "Demiroğ" },
    { firstName: "Mustafa", lastName: "Coşkun" }

];

// for (let i = 0; i < cars.length; i++) {

//     console.log(cars[i]);

// }
//-----------------------------------------------------------------------------------

// for (let i = 0; i < people.length; i++) {

//     console.log(people[i].firstName, people[i].lastName);
// }

//-----------------------------------------------------------------------------------

// For in 

// for (let i in cars) {

//     console.log(`ìndex : ${i} value : ${cars[i]}`);
// }

//-----------------------------------------------------------------------------------

// for (let i in people) {

//     console.log(`ìndex : ${i} value : ${people[i].firstName +" " + people[i].lastName}`);
// }

//-----------------------------------------------------------------------------------


// Foreach


// cars.forEach(function(car) {

//     console.log(car);
// });

//-----------------------------------------------------------------------------------


// people.forEach(function(human) {

//     console.log(human.firstName);
// });


//-----------------------------------------------------------------------------------


// Map : return an array

let value = people.map(function(human) {

    return human.firstName + " " + human.lastName;
});

console.log(value);

//-----------------------------------------------------------------------------------


let numbers = [1, 5, 6, 8, 10];

let num = numbers.map(function(n) {

    return n * n;
});

console.log(num);