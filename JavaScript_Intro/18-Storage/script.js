// Local Storage


let val;


// set item
const firstName = localStorage.setItem("firstName", "Emrecan");
const lastName = localStorage.setItem("lastName", "Kurşun");
let hobbies = ["Cinema", "Car", "Game", "Tour"];

// get item
val = localStorage.getItem("firstName");
val = localStorage.getItem("lastName");


// remove item
// localStorage.removeItem("firstName");
// localStorage.removeItem("lastName");


// clear
// localStorage.clear();


// set array to storage
localStorage.setItem("hobbies", JSON.stringify(hobbies));
val = JSON.parse(localStorage.getItem("hobbies"));
console.log(val);
console.log(window.localStorage);



// // Session Storage





// const city = sessionStorage.setItem("city", "Elazığ");
// const country = sessionStorage.setItem("country", "Turkey");
// console.log(window.sessionStorage);