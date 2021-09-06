const products = [
    { id: 1, name: "Samsung", price: 3000 },
    { id: 2, name: "Iphone", price: 5000 },
    { id: 3, name: "Huawei", price: 1000 }
];

let isAdded = false;


function addProduct(product, callback) {

    if (isAdded) {

        setTimeout(() => {
            products.push(product);
            callback(null, product);
        }, 2000);

    } else {
        callback("Error", null);
    }

}


function getProducts() {

    setTimeout(() => {

        products.forEach((product) => {

            console.log(product);
        });
    }, 1000);
}

addProduct({ id: 4, name: "Vivo", price: 1500 }, function(err, data) {
    if (err) {

        console.log(new Error(err));
    } else {

        console.log(data);
    }
});