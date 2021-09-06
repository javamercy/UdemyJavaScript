let a = 10;
let b = a;

// console.log(a);
// console.log(b);


let obj1 = {

    name: "Emrecan",
    age: 20
}

let obj2 = obj1;

obj1.age = 12;


// console.log(obj1.age);
// console.log(obj2.age);

//--------------------------------------------------------------

let num = 50;

let account = {
    name: "Emrecan",
    accountNumber: "123123123"
}

function update(a, b) {
    a = 100;
    b.accountNumber = "222222222";
}

update(num, account);

console.log(num);
console.log(account);

//--------------------------------------------------------------

let products = [
    { name: "product name", price: 1000 },
    { name: "product name", price: 1000 },
    { name: "product name", price: 1000 },
    { name: "product name", price: 1000 },
    { name: "product name", price: 1000 },
    { name: "product name", price: 1000 }
]

function filterProducts(products) {

}

filterProducts(products);