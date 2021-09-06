// Date object

let date = new Date();
let birthday = new Date(2001, 6, 10, 12, 00, 12, 10);
// Get Methods


console.log(date.getDate());
console.log(date.getDay());
console.log(date.getFullYear());
console.log(date.getHours());
console.log(date.getMonth());
console.log(date.getSeconds());

console.clear();

// Set Methods


date.setFullYear(2023);
date.setDate(20);
date.setHours(10);

console.log(date.getFullYear() - birthday.getFullYear());

console.log(date);
console.log(typeof date);