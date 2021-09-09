const products = [
    { name: "Samsung", price: 3000 },
    { name: "Iphone", price: 5000 },
    { name: "Motorola", price: 500 }
];




let ProductController = (function(data) {

    // private members

    let collections = data || [];

    const addProduct = function(product) {
        collections.push(product);
    }

    const removeProduct = function(product) {

        let index = collections.indexOf(product);

        if (index >= 0) {

            collections.splice(index, 1);
        }
    }

    const getProducts = function() {

        return collections;
    }


    // public members

    return {

        addProduct,
        removeProduct,
        getProducts
    }

})(products);


ProductController.addProduct(products[0]);
ProductController.addProduct(products[1]);

ProductController.removeProduct(products[0]);
ProductController.addProduct(products[2]);


console.log(ProductController.getProducts());


// Module Extending

let extended = (function(m) {

    m.sayHello = function() {

        console.log("Hello from extended");
    }

    return m;

})(ProductController || {});

extended.sayHello();
console.log(extended.getProducts());