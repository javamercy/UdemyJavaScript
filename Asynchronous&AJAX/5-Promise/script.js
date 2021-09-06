const products = [
    { id: 1, name: "Samsung", price: 3000 },
    { id: 2, name: "Iphone", price: 5000 },
    { id: 3, name: "Huawei", price: 1000 }
];




function addProduct(product) {


    return new Promise((resolve, reject) => {

        setTimeout(() => {

            products.push(product);

            let isAdded = true;

            if (isAdded) {

                resolve(products);

            } else {
                reject(new Error("Error : 500"));
            }
        }, 1000);

    });


}


function getProducts() {

    setTimeout(() => {

        products.forEach((product) => {

            console.log(product);
        });
    }, 1000);
}

addProduct({ id: 4, name: "Vivo", price: 1500 })
    .then((response) => {
        response.forEach(product => {
            console.log(product.name);
        });
    }).catch(message => console.log(message));