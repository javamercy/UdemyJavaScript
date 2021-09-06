// Arrays

let names = ["Emrecan", "Engin", "Mustafa", ];

let years = [2017, 1999, 2001, 2010, 1986, 2000];

let mix = ["Emrecan", 1983, null, undefined, ["Cinema", "Book"]]



// // get array item

// console.log(names[0]);
// console.log(names[2]);

// // set array item

// names[names.length] = "Bruno";

// // add item

// years.push(1086);
// years.unshift(1991);

// // remove item

// years.pop(); // deletes last item of array
// years.shift(); // deletes first item of array

// // indexOf

// let index = names.indexOf("Engin");
// console.log("Index :", index);

// // reverse

// names.reverse();

// // sort

// years.sort();

// // concat

// let val = years.concat(names);
// console.log(val);

// splice

// names.splice(2, 1);

// find - filter

function over18(year) {
    let age = 2018 - year;
    return age >= 18;
}

let val;
val = years.find(over18);
console.log(val);


val = years.filter(over18);
console.log(val);

console.log(names);
console.log(names.length);
console.log(typeof names);

// console.log(years);
// console.log(mix);