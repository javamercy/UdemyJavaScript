// Destructuring 


// Destructuring Assignment

let a, b, rest;


[a, b] = [10, 20];
console.log(a, b);


[a, b, ...rest] = [10, 20, 30, 40, 50, 60];
console.log(a, b);
console.log(rest);

({ a, b } = { a: 11, b: 22 });
console.log(a, b);

({ a, b, ...rest } = { a: 10, b: 20, c: 20, d: 40 });

console.log(a, b);
console.log(rest);

// Array Destructuring


const arrConfig = ["localhost", "8080", "900"];

// ES5

// let server = arrConfig[0];
// let port = arrConfig[1];
// let timeout = arrConfig[2];

// console.log(server, port, timeout);

// ES6

// const [server, port, timeout] = arrConfig;

// console.log(server, port, timeout);



// Object Destructuring


const objConfig = {

    server: "localhost",
    port: "8080",
    timeout: 900
}

// let server = objConfig.server;
// let port = objConfig.port;
// let timeout = objConfig.timeout;

// const { server, port, timeout } = objConfig;

// console.log(server, port, timeout);

// let { timeout: t } = objConfig;

// console.log(t);


// let { server: s, port: p, timeout: t = 1000 } = objConfig;

// console.log(s, p, t);


const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

const [, , wed, , fri] = days;
console.log(wed, fri);