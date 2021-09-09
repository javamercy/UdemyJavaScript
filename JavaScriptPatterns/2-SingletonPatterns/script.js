// Singleton Pattern


// let singleton = (function() {


//     let instance;


//     const createInstance = function() {

//         return {

//             randomNumber: Math.random()
//         }
//     }

//     return {

//         getInstance: function() {

//             if (!instance) {

//                 instance = new createInstance();
//             }

//             return instance;
//         }
//     }
// })();


// const instance1 = singleton.getInstance();
// const instance2 = singleton.getInstance();

// console.log(instance1.randomNumber);
// console.log(instance2.randomNumber);


let singleton = (function() {


    let instance;

    function ProductController() {

        const products = [
            { name: "product 1" },
            { name: "product 1" },
            { name: "product 1" },

        ];

        const add = function(product) {

            products.push(product);
        }

        const get = function() {

            return products;
        }

        return {

            add,
            get
        }
    }


    return {

        getInstance: function() {


            if (!instance) {

                instance = new ProductController();
            }
            return instance;
        }
    }

})();


const productController1 = singleton.getInstance();
const productController2 = singleton.getInstance();




productController1.add({ name: "Product 4" });
console.log(productController1.get());
console.log(productController2.get());