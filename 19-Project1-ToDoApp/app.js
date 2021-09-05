const form = document.getElementById("addTaskForm");
const input = document.getElementById("txtTaskName");
const taskList = document.querySelector("#task-list");
const deleteAll = document.getElementById("btnDeleteAll");


eventListeners();

function eventListeners() {

    form.addEventListener("submit", addTodo);

    document.addEventListener("DOMContentLoaded",
        function(e) {

            let todos = getTodosFromStorage();

            todos.forEach(function(todo) {
                createTodo(todo);

            });
        });

    taskList.addEventListener("click", deleteTask);

    deleteAll.addEventListener("click", deleteAllTodos);
}

function deleteAllTodos() {

    if (confirm("Tüm todoları silmek istediğinize emin misiniz ?")) {
        while (taskList.firstElementChild !== null) {

            taskList.firstElementChild.remove();
        }

        localStorage.clear();
    }

}

function deleteTask(e) {

    if (e.target.className === "fas fa-times") {

        if (confirm("Todoyu silmek istediğinizden emin misiniz ?")) {

            e.target.parentElement.parentElement.remove();

            let todos = getTodosFromStorage();

            todos.forEach(function(todo, index) {


                if (todo === e.target.parentElement.parentElement.textContent) {
                    todos.splice(index, 1);
                }

            });

            localStorage.setItem("todos", JSON.stringify(todos));
        }

    }


}

function getTodosFromStorage() {

    let todos;

    if (localStorage.getItem("todos") === null) {

        todos = [];

    } else {

        todos = JSON.parse(localStorage.getItem("todos"));
    }

    return todos;
}



function addTodo(e) {


    if (input.value === "") {

        alert("Lütfen alanı doldurunuz!");

    } else {

        addTodoToUI();
        addTodoToStorage();

    }

    e.preventDefault();
}

function createTodo(text) {

    const li = document.createElement("li");


    li.className = "list-group-item list-group-item-secondary";
    li.appendChild(document.createTextNode(text));

    const a = document.createElement("a");
    a.href = "#";
    a.className = "delete-item float-right";
    a.innerHTML = "<i class='fas fa-times'></i>";

    li.appendChild(a);

    taskList.appendChild(li);
}

function addTodoToUI() {

    //    <li class="list-group-item list-group-item-secondary">
    //     Text
    //     <a href="#" class="delete-item float-right"><i class='fas fa-times'></i></a>
    //      </li> 


    createTodo(input.value);

}


function addTodoToStorage() {


    let todos = getTodosFromStorage();

    todos.push(input.value.trim());

    localStorage.setItem("todos", JSON.stringify(todos));

}