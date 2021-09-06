// Event Listeners


const btn = document.querySelector("#btnDeleteAll");
const btn2 = document.querySelector("#btnAddNewTask");


btn.addEventListener("click", function(e) {

    let val;
    val = e;

    val = e.target;
    val = e.target.id;
    val = e.target.classList;
    val = e.type;
    console.log(val);

    e.preventDefault();
});

// btn.addEventListener("click", btnClick);
// btn2.addEventListener("click", btnClick);
// btn2.addEventListener("click", btnClick2);


// function btnClick() {

//     console.log("btn clicked");
// }

// function btnClick2() {

//     console.log("btn 2 clicked");
// }