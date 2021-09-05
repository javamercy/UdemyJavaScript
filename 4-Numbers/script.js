// Numbers

let val;

val = 10;
val = Number("10");
val = parseInt("10");
val = parseInt("12.6");
val = parseFloat("10.5");
val = parseInt("10a");
val = parseInt("a10a"); // NaN
val = isNaN("10"); // Number
val = isNaN("a10"); // NaN


// let num = 10.123456789;
// val = num.toPrecision(4);
// val = num.toFixed(5);

val = Math.PI;
val = Math.round(2.4);
val = Math.round(2.7);
val = Math.ceil(4.1);
val = Math.floor(2.7);
val = Math.pow(2, 4);
val = Math.abs(-100);
val = Math.min(1, 2, 3, 5, 7, -2, 2);
val = Math.max(2, 32, 1231, 2, 2, 11);
val = Math.floor(Math.random() * 10 + 1);


console.log(val);
console.log(typeof val);