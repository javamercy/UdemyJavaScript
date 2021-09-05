// Arrays In ES6


const boxes = document.querySelectorAll(".box");

// ES5

// let boxesES5 = Array.prototype.slice.call(boxes);

// console.log(boxesES5);

// boxesES5.forEach((box) => box.style.backgroundColor = "green");


// ES6

// Array.from(boxes).forEach(box => box.style.backgroundColor = "purple");



// ES5

// for (let i = 0; i < boxesES5.length; i++) {

//     if (boxesES5[i].className == "blue box") {
//         continue;
//     }

//     boxesES5[i].textContent = "I'm changed";
//     boxesES5[i].style.backgroundColor = "blue";
// }



// ES6

// let boxesES6 = Array.from(boxes);

// for (let box of boxesES6) {

//     if (box.className == "blue box") {
//         continue;
//     }

//     box.textContent = "ES6 Arrays";
//     box.style.backgroundColor = "darkGray";
// }



// From

// let arr = Array.from("Modern JavaScript");

const products = [

    { name: "Samsung", price: 3000 },
    { name: "Iphone", price: 5000 },
    { name: "Huawei", price: 2000 }

];


console.log(Array.from(products, prd => prd.name === "Iphone"));
console.log(products.find(prd => prd.name === "Iphone"));
console.log(products.filter(prd => prd.name === "Samsung"));
console.log(products.findIndex(prd => prd.price == 2000));


let numbers = ["a", "b", "c"];

let entries = numbers.entries();

for (let i of entries) {

    console.log(i);
}

let keys = numbers.keys();

for (let i of keys) {
    console.log(i);
}

let values = numbers.values();

for (let i of values) {
    console.log(i);
}