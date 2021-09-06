// Event Bubbling

const form = document.querySelector("form");
const cardBody = document.querySelectorAll(".card-body")[0];
const card = document.querySelector(".card");
const container = document.querySelector(".container");

// form.addEventListener("click", function(e) {

//     console.log("form");
//     e.stopPropagation();
// });

// cardBody.addEventListener("click", function(e) {

//     console.log("card-body");
//     e.stopPropagation();

// });

// card.addEventListener("click", function(e) {

//     console.log("card");
//     e.stopPropagation();

// });

// container.addEventListener("click", function(e) {

//     console.log("container");
//     e.stopPropagation();

// });



// Event Capturing


// form.addEventListener("click", function(e) {

//     console.log("form");
//     e.stopPropagation();

// }, true);

// cardBody.addEventListener("click", function(e) {

//     console.log("card-body");
//     e.stopPropagation();


// }, true);

// card.addEventListener("click", function(e) {

//     console.log("card");
//     e.stopPropagation();


// }, true);

// container.addEventListener("click", function(e) {

//     console.log("container");
//     e.stopPropagation();


// }, true);




// const deleteItems = document.querySelectorAll(".fa-times");

// deleteItems.forEach(function(item) {

//     item.addEventListener("click", function(e) {

//         console.log(e.target);
//     });
// });


// console.log(deleteItems);


const ul = document.querySelector("ul");


ul.addEventListener("click", function(e) {

    if (e.target.className === "fas fa-times") {
        (e.target.parentElement.parentElement.remove());
    }


    e.preventDefault();
});