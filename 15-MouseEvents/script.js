// Mouse Events


const btn = document.querySelector("#btnDeleteAll");
const ul = document.querySelector("#task-list");

// click
// btn.addEventListener("click", eventHandler);
// ul.addEventListener("click", eventHandler);

// dblclick
// btn.addEventListener("dblclick", eventHandler);

// mousedown
// btn.addEventListener("mousedown", eventHandler);

// mouseup
// btn.addEventListener("mouseup", eventHandler);

// mouseenter
// ul.addEventListener("mouseenter", eventHandler);

//mouseleave
// ul.addEventListener("mouseleave", eventHandler);


// mouseover
// ul.addEventListener("mouseover", eventHandler);

// mouseout
// ul.addEventListener("mouseout", eventHandler);

// mousemove
const h5 = document.querySelector("h5");
ul.addEventListener("mousemove", eventHandler);




function eventHandler(e) {

    console.log(`event type : ${e.type}`);

    h5.textContent = `Mouse X : ${e.offsetX} Mouse Y : ${e.offsetY}`;
}