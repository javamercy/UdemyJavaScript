// let value;

// value = window.document;
// value = document.all;
// value = document.all.length;
// value = document.all[10];
// value = document.head;
// value = document.anchors;
// value = document.URL;
// value = document.domain;
// value = document.title;
// value = document.forms[0];
// value = document.forms[0].id;
// value = document.forms[0].method;
// value = document.forms[0].action;
// value = document.scripts;
// value = document.scripts[2];
// value = document.scripts[2].getAttribute("src");

// console.log(value);



//-------------------------------------------------------------------------------


// Selecting Elements

//----------------------


// *** Single ELements

//----------------------

// document.getElementById();

// let value;

// value = document.getElementById("header");
// value = document.getElementById("header").id;
// value = document.getElementById("header").className;

// value = document.getElementById("header");
// // value = value.id;
// // value = value.className;

// value.style.fontSize = "45px";
// value.style.color = "red";
// value.style.fontWeight = "bolder";
// // value.style.display = "none";

// document.getElementById("header").innerText = "My ToDo App";
// document.getElementById("header").innerHTML = "<b>My ToDo App</b>";



// console.log(value);

//-------------------------------------------------------------------------------

// document.querySelector();

// console.log(document.querySelector("#header"));
// console.log(document.querySelector(".card-header"));
// console.log(document.querySelector("div"));

// document.querySelector("li").style.color = "red";
// document.querySelector("li:last-child").style.color = "blue";
// document.querySelector("li:nth-child(2)").style.color = "aqua";
// document.querySelector("li:nth-child(3)").textContent = "task item";

// document.querySelector("li").className = "list-group-item list-group-item-info";
// document.querySelector("li").classList.add("active");


//-------------------------------------------------------------------------------


// ** Multiple Elements

//----------------------


// class name
// document.getElementByClassName();

//----------------------


// let value;

// value = document.getElementsByClassName("list-group-item");
// value = document.getElementsByClassName("list-group-item")[0];

// value = value[2];

// value[1].style.color = "blue";
// value[1].style.fontSize = "25px";
// value[2].textContent = "New Item";

// for (let i = 0; i < value.length; i++) {

//     console.log(value[i].style.color = "darkblue");
// }

//----------------------

// document.getElementsByTagName();

// value = document.getElementsByTagName("li");
// value = document.getElementById("task-list").getElementsByTagName("a");

// document.querySelectorAll();

// value = document.querySelectorAll("li");

// value.forEach(function(item, index) {

//     item.textContent = `${index} - hello`;
// });


// value = document.querySelectorAll("li:nth-child(odd)");

// value.forEach(function(item) {

//     item.style.background = "#aaa";
// });
// console.log(value);

//-------------------------------------------------------------------------------

// Traversing the Dom


// let value;

// let list = document.querySelector(".list-group");

// value = list;

// value = list.childNodes;


// value = list.childNodes[0];
// value = list.childNodes[0].nodeName;
// value = list.childNodes[0].nodeType; // text
// value = list.childNodes[1].nodeType; // element

// value = list.children;
// value = list.children[0];
// value = list.children[2];

// value = list.children[2].textContent = "NEW ITEM";
// value = list.children[3].children;

// value = list.firstChild;
// value = list.firstElementChild;
// value = list.lastChild;
// value = list.lastElementChild;

// value = list.childElementCount;

// value = list.parentNode;
// value = list.parentElement;
// value = list.parentElement.parentElement;

// value = list.children[0].nextSibling;
// value = list.children[0].nextElementSibling;


// value = list.children[1].previousSibling;
// value = list.children[1].previousElementSibling;




// console.log(value);


// for (let i = 0; i < list.childNodes.length; i++) {

//     if (list.childNodes[i].nodeType === 1) {

//         console.log(list.childNodes[i]);
//     }
// }

//-------------------------------------------------------------------------------


// Creating Elements

// const li = document.createElement("li");

// li.className = "list-group-item list-group-item-secondary";

// li.setAttribute("title", "new item");
// li.setAttribute("data-id", "5");

// const text = document.createTextNode("new item");
// li.appendChild(text);

// const a = document.createElement("a");
// a.setAttribute("href", "#");
// a.className = "delete-item float-right";
// a.innerHTML = "<i class='fas fa-times'></i>";

// li.appendChild(a);

// document.querySelector("#task-list").appendChild(li);
// console.log(li);


//-------------------------------------------------------------------------------


// Deleting Elements


const taskList = document.querySelector("#task-list");

// taskList.remove();
// taskList.childNodes[7].remove();
// taskList.children[3].remove();

// taskList.removeChild(taskList.children[3]);


// taskList.children[1].removeAttribute("class");

// for (let i = 0; i < taskList.children.length; i++) {

//     taskList.children[i].removeAttribute("class");
// }


// const cardHeader = document.querySelector(".card-header");

// const h2 = document.createElement("h2");
// h2.setAttribute("class", "card-header");
// h2.appendChild(document.createTextNode("My List"));

// const parent = document.querySelector(".card");
// parent.replaceChild(h2, cardHeader);
// console.log(h2);



let value;

link = taskList.children[0].children[0];

// value = link.className;
// value = link.classList;
// value = link.classList[1];

// link.classList.add("new");
// link.classList.remove("new");


value = link.getAttribute("data-id");
link.setAttribute("href", "https://www.kodlama.io/");
value = link.getAttribute("href");

console.log(value);