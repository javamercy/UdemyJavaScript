// 1-) Global variable naming conflicts


// script.js
// var name = "Emrecan";

// // app.js
// var name = "Kurşun";

// console.log(name);



// 2-) Encapsulation

// var Counter = {

//     number: 0,

//     increment: function() {

//         return ++this.number;


//     },

//     decrement: function() {

//         return --this.number;
//     }
// }




// console.log(Counter.increment());
// console.log(Counter.increment());
// Counter.number = 10;
// console.log(Counter.decrement());







// IIFE ( Immediately Invoked Function Expressions)


// (function() {

//     var name = "Emrecan";
//     console.log(name);
// })();

// (function() {

//     var name = "Kurşun";
//     console.log(name);
// })();





// const Module = (function() {


//     // private members

//     let number = 0;

//     let increment = function() {

//         return ++number;
//     }

//     let decrement = function() {

//         return --number;
//     }

//     return {

//         // public members
//         increment,
//         decrement
//     }
// })();


// // console.log(number);
// console.log(Module.increment());
// console.log(Module.increment());
// console.log(Module.decrement());





let Module = (function() {


    let privateMethod = function() {


    }

    return {

        publicMethod: function() {

        }
    }
})();



Module.publicMethod();