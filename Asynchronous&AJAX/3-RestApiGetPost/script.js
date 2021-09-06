document.querySelector("#getOne").addEventListener("click", getOne);

document.querySelector("#getAll").addEventListener("click", getAll);

document.querySelector("#postData").addEventListener("click", postData);



function getOne() {

    let id = document.getElementById("postId").value;

    const xhr = new XMLHttpRequest();

    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/" + id, true);


    xhr.onload = function() {

        if (this.status === 200) {

            let post = JSON.parse(this.responseText);



            let html = `
            <div class="card mb-2">  
            <div class="card-header">
            ${post.id} : ${post.title}
        </div>
        <div class="card-body">
            <blockquote class="blockquote mb-0">
                <p>
                    ${post.body}
                </p>
               
            </blockquote>
        </div>
            </div>  
            `;

            document.querySelector("#results").innerHTML = html;






        } else if (this.status === 404) {

            console.log(new Error("NOT FOUND"));
        }
    }

    xhr.send();
}

function getAll() {


}

function postData() {

    const data = {
        userId: 1,
        title: "new title",
        body: "new body"
    }

    let json = JSON.stringify(data);

    const xhr = new XMLHttpRequest();

    xhr.open("POST", "https://jsonplaceholder.typicode.com/posts", true);

    xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");

    xhr.onload = function() {

        if (this.status === 201 && this.readyState === 4) {

            let response = xhr.responseText;
            console.log(response);
        }
    }







    xhr.send(json);
}