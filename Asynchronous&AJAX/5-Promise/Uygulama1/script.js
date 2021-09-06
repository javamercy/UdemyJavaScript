/*

let promise = new Promise((resolve, reject) => {

    if (false) {
        resolve("success");
    } else {
        reject("failure");
    }

});


promise
    .then(data => console.log(data))
    .catch(err => console.log(err));

*/

/*
new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(5);
        }, 1000);
    })
    .then(data => data * data)
    .then(data => data * data)
    .then(data => console.log(data));

*/


const isMomHappy = false;

const willGetNewPhone = new Promise((resolve, reject) => {

    if (isMomHappy) {
        const phone = {
            name: "Iphone 12 Pro Max",
            price: 15000,
            color: "Black"
        }

        resolve(phone);

    } else {

        reject(new Error("Mom is not happy"));
    }
});


const showToFriends = function(phone) {

    const message = "Hey friends! That's my phone " + phone.name;

    return Promise.resolve(message);
}

const askMom = () => {

    willGetNewPhone
        .then(showToFriends)
        .then(message => console.log(message))
        .catch(err => console.log(err));
}

askMom();