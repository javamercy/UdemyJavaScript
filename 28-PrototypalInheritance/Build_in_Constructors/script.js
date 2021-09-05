// String

var str1 = "Emrecan";
var str2 = new String("Emrecan");

console.log(str1);
console.log(typeof str1);

console.log(str2);
console.log(typeof str2);

if (str2 == "Emrecan") {
    console.log("yes");
} else {
    console.log("no");
}

String.prototype.repeat = function(n) {
    return new Array(n + 1).join(this);
}

console.log("Emrecan".repeat(2));


// Number 

var num1 = 10;
var num2 = new Number(10);


// Boolean

var bool1 = true;
var bool2 = new Boolean(true);


// Object

var obj1 = {
    name: "Emrecan"
}

var obj2 = new Object({
    name: "Emrecan"
});


// Array

var arr1 = ["Emrecan", "Engin", "Mustafa"];
var arr2 = new Array("Emrecan", "Engin", "Mustafa");

Array.prototype.remove = Array.prototype.remove || function(member) {

    let index = this.indexOf(member);

    if (index > -1) {
        this.splice(index, 1);
    }

    return this;
}

console.log(arr1.remove("Mustafa"));