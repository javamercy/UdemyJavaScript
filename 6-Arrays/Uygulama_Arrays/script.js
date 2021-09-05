// Demo : Arrays

// "Bmw, Mercedes, Opel, Mazda" elemanlarına sahip bir dizi oluşturunuz.

const cars = ["Bmw", "Mercedes", "Opel", "Mazda"];
console.log(cars);

// Dizi kaç elemanlıdır?

console.log(cars.length);

// Dizinin ilk ve son elemanı nedir?

console.log("Dizinin ilk elemanı :", cars[0]);
console.log("Dizinin son elemanı :", cars[cars.length - 1]);

// "Renault" değerini dizinin sonuna ekleyiniz.

cars.push("Renault");
console.log(cars);

// "Toyota" değerini dizinin başına ekleyiniz.

cars.unshift("Toyota");
console.log(cars);

// "Renault" değerini siliniz.

cars.splice(cars.indexOf("Renault"), 1);
console.log(cars);

// "Toyota" değerini siliniz.

cars.splice(cars.indexOf("Toyota"), 1);
console.log(cars);

// Dizi elemanlarını ters çeviriniz.

cars.reverse();
console.log(cars);

// Dizi elemenlarını alfabetik olarak sıralayınız.

cars.sort();
console.log(cars);

// [1,2,5,80] dizisini sıralayınız.

let numbers = [1, 2, 5, 80, 15];

function compare(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}
console.log(numbers.sort(compare));

// "Opel" değeri dizinin bir elemanı mıdır ?

console.log(cars.includes("Opel"));

// let str = "Chevrolet,Dacia"; ifadesini diziye çeviriniz.

let str = "Chevrolet,Dacia";

let arr = str.split(",");
console.log(arr);

// Oluşturulan iki dizinin elemanlarını bir başka dizi ile birleştiriniz.

let concatArr = arr.concat(cars);
console.log(concatArr);

// Oluşturulan dizide son iki elemanı siliniz.

// concatArr.pop();
// concatArr.pop();
// console.log(concatArr);

// concatArr.splice(concatArr.length - 2, 2);
// console.log(concatArr);

console.log(concatArr.slice(0, concatArr.length - 2));

/* 
Aşağıda verilen elemanları bir dizi içerisinde saklayınız.

studentA : Emre Kurşun 2001
studentB : Mustafa Coşkun 1993
studentC : Engin Demiroğ 1985
*/

let studentA = ["Emre", "Kurşun", 2001];
let studentB = ["Mustafa", "Coşkun", 1993];
let studentC = ["Engin", "Demiroğ", 1985];

const students = [studentA, studentB, studentC];

console.log(students[0]);
console.log(students[0][0]);
console.log(students[0][1]);
console.log(students[0][2]);

console.log(...students);