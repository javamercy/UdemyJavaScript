// Maps : key/value pairs (collections)


let val;


const numbers = new Map();

numbers.set(1, "one");
numbers.set("2", "two");
numbers.set(3, "three");
numbers.set("four", "four");

val = numbers;
val = numbers.get(1);
val = numbers.get("2");
val = numbers.get("four");
val = numbers.size;
val = numbers.has(1);
numbers.delete("four");
val = numbers.has("four");
// numbers.clear();


console.log(val);
console.log(numbers);

console.log("-------------------------------------------");

for (let [key, value] of numbers) {
    console.log(key + " = " + value);
}

console.log("-------------------------------------------");


for (let [key, value] of numbers.entries()) {
    console.log(key + " = " + value);
}

console.log("-------------------------------------------");


for (let key of numbers.keys()) {
    console.log(key);
}

console.log("-------------------------------------------");


for (let value of numbers.values()) {
    console.log(value);
}

console.log("-------------------------------------------");

numbers.forEach(function(key, value) {
    console.log(value + " - " + key);
});




let first = new Map([
        [1, "one"],
        [2, "two"],
        [3, "three"]
    ]



);


let second = new Map(
    [
        [4, "four"],
        [5, "five"]
    ]



);


let merged = new Map([...first, ...second]);


console.log(merged);