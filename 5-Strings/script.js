// Strings

const firstName = "Emrecan";
const lastName = "Kurşun";
let hobbies = "Sinema,Spor,Kitap,Yazılım";
const age = 20;
let val;

// String Concatenation

val = firstName + " " + lastName;
val = "Emrecan";
val += " Kurşun";

val = "Benim adım " + firstName + " " + lastName + " ve yaşım " + age + " Elazığ'da yaşıyorum";


// String Concat

val = firstName.concat(" ", lastName);

// String Length

// val = val.length;

// String Uppercase - Lowercase

val = val.toUpperCase();
val = val.toLowerCase();

// String Replace

val = "      " + val.replace("emrecan", "engin") + "        ";

// Trim

val = val.trim();

// Substring

// val = val.substring(0, 5);

// Slice

//val = val.slice(8);


// val = val.indexOf("m");



// val = val[6];

val = hobbies.split(",");


console.log(val);
console.log(typeof val);