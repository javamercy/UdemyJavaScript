/* 
async function fn() {

    return "hello";
}

console.log(fn());

fn()
    .then(response => console.log(response));


*/

let isError = false;

function getCategory() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (!isError) {
                resolve("phone");
            } else {
                reject(new Error("Error at 26.js"));
            }

        }, 1000);
    });

}


function getProducts(category) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(`5 products in ${category}`);
        }, 1000);
    });
}


getCategory()
    .then(getProducts)
    .then(response => console.log(response))
    .catch(err => console.log(err));



async function getProduct() {

    let result;
    let category;

    try {
        category = await getCategory();
        result = await getProducts(category);

    } catch (error) {
        console.log(error);
    }


    return result;






}


getProduct()
    .then(result => {
        if (result) {
            console.log(result);
        }
    })
    .catch(err => console.log(err));