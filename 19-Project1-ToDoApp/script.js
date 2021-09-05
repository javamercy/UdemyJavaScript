// // UI variables


// const form = document.querySelector("form");
// const input = document.querySelector("#txtTaskName");
// const deleteAll = document.querySelector("#btnDeleteAll");
// const taskList = document.querySelector("#task-list");


// loadItems();



// eventListeners();

// function eventListeners() {

//     form.addEventListener("submit", addNewItem);
//     taskList.addEventListener("click", deleteItem);
//     deleteAll.addEventListener("click", deleteAllItems);
// }

// function loadItems() {

//     let items = getItemsFromLocalStorage();
//     items.forEach(function(item) {
//         createItem(item);

//     });
// }

// function getItemsFromLocalStorage() {

//     let items;

//     if (localStorage.getItem("items") === null) {
//         items = [];
//     } else {

//         items = JSON.parse(localStorage.getItem("items"));
//     }

//     return items;
// }

// function setItemToLocalStorage(text) {

//     items = getItemsFromLocalStorage();
//     items.push(text);
//     localStorage.setItem("items", JSON.stringify(items));
// }

// function deleteItemFormLocalStorage(text) {
//     let items = getItemsFromLocalStorage();

//     items.forEach(function(item, index) {

//         if (item === text) {
//             items.splice(index, 1);
//         }

//     });

//     localStorage.setItem("items", JSON.stringify(items));
// }

// function createItem(text) {

//     const li = document.createElement("li");
//     li.className = "list-group-item list-group-item-secondary";
//     li.appendChild(document.createTextNode(text));

//     const a = document.createElement("a");
//     a.className = "delete-item float-right";
//     a.setAttribute("href", "#");
//     a.innerHTML = "<i class='fas fa-times'></i>";

//     li.appendChild(a);

//     taskList.appendChild(li);
// }

// function addNewItem(e) {

//     if (input.value === "") {

//         alert("Add New Item");

//     } else {

//         createItem(input.value);
//         setItemToLocalStorage(input.value);
//         input.value = "";

//     }





//     e.preventDefault();
// }

// function deleteItem(e) {



//     if (e.target.className === "fas fa-times") {

//         if (confirm("Are you sure ?")) {

//             e.target.parentElement.parentElement.remove();
//             deleteItemFormLocalStorage(e.target.parentElement.parentElement.textContent);
//         }
//     }



//     e.preventDefault();
// }

// function deleteAllItems(e) {

//     // taskList.innerHTML = "";

//     // taskList.childNodes.forEach(function(item) {

//     //     if (item.nodeType === 1) {

//     //         item.remove();
//     //     }
//     // });

//     if (confirm("Are you sure ?")) {

//         while (e.target.parentElement.nextElementSibling.firstElementChild !== null) {

//             e.target.parentElement.nextElementSibling.firstElementChild.remove();
//         }

//         localStorage.clear();

//     }



//     e.preventDefault();
// }