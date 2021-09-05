// console.log("Merhaba");
// console.log(1234);
// console.log(true);
// console.log([1, 2, 3]);
// console.error("Hata oluştu");
// console.warn("Bir uyarı oluştu");

// // tek satırlık yorum satırı

// /*

// Yorum satırları

// */

// console.clear();



// Değişkenler


// var age;

// console.log(age);


// age = 20;

// console.log(age);


// var fullName = "Emre Kurşun";

// console.log(fullName);

// fullName = "Mustafa Coşkun";

// console.log(fullName);



// // Değişken Tanımlama Kuralları

// // var 1yas;

// var _yas2;
// var $yas3;



// // var, let, const 


// let city = "İstanbul";


// console.log(city);

// const email = "abc@gmail.com";

// console.log(email);


// email = "bcd@gmail.com";


// Değişken Tipleri

// Primitive Types

// string

// let firstName = "Emrecan";

// console.log(typeof firstName);

// // Number

// let age = 20;
// let money = 100.5;

// console.log(typeof age);
// console.log(typeof money);

// // Boolean

// let isActive = true;

// console.log(typeof isActive);

// // null

// let job = null;


// console.log(typeof job);

// // undefined

// let car;

// console.log(typeof car);


// // Reference Types - Objects

// // Array

// let names = ["Emrecan", "Mustafa", "Engin"];

// console.log(typeof names);

// // Object

// let addres = {
//     city: "Elazığ",
//     country: "Turkey"
// }

// console.log(typeof addres);


// // function

// var calculateAge = function() {
//     return 0;
// }

// console.log(typeof calculateAge);



// let num1 = Number("5");
// let num2 = Number("10");

// let total = num1 + num2;


let value;

// Number to String

value = String(10);

// Boolean to String

value = String(true);

// Date to String
value = String(new Date().getFullYear());

// Array to String

value = String([1, 2, 3, 4]);

// toString

value = (10).toString();

// String to Number

value = Number("10");
value = Number(true);
value = Number(false);
value = Number(null);
value = Number("a");
value = Number([1, 2, 3, 4]);

// parseInt
// parseFloat

value = parseInt("10");
value = parseInt("10.5");
value = parseFloat("10.5");

console.log(value);
console.log(typeof value);
console.log(value.toFixed(2));