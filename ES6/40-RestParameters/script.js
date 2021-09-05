// Rest parameters

// ES5


function sumES5() {

    let arr = Array.prototype.slice.call(arguments);

    console.log(arr);

    let result = 0;

    arr.forEach(function(item) {
        result += item;
    });

    return result;
}

console.log(sumES5(10, 20, 30));


// ES6

function sumES6(...arr) {

    let result = 0;
    arr.forEach(item => result += item);
    return result;
}


console.log(sumES6(20, 25, 50));


// ES6

function isDriver(age, ...years) {
    years.forEach(year => console.log(new Date().getFullYear() - year >= age));
}

isDriver(18, 1990, 2002, 2005, 1987);