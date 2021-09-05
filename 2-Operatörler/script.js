// Operatörler

let val;

const a = 10;
const b = 5;
const c = 5;
let d = 4;


// 1 - Aritmetik Operatörler

val = a + b;
val = a - b;
val = a * b;
val = a / b;
val = a % b;
val = ++d;
val = --d;


// 2 - Atama Operatörleri

val = a;
val += a;
val -= b;
val *= d;
val /= a;
val %= d;


// 3 - Karşılaştırma Operatörleri

val = a == b;
val = b === c; // Hem değer kontrolü hem type kontrolü
val = a !== b;
val = a > b;
val = b <= c;



// 4 - Mantıksal Operatörler

val = (a > b) && (a > c);
val = (a > b) || (a < c);
val = !(a > b);




console.log(val);
console.log(typeof val);