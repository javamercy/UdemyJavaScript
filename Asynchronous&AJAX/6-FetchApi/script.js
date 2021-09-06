// text


function getText() {

    fetch("text.txt")
        .then(response => response.text())
        .then(data => console.log(data))
        .catch(err => console.log(err));

}



getText();







// json



function getJson() {

    fetch("products.json")
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));
}


getJson();










// external api



function getExternalApi() {

    fetch("https://randomuser.me/api/?results=5")
        .then(data => data.json())
        .then(users => {
            let html = "";
            users.results.forEach(user => {
                html += `

                <div>
                    <img src="${user.picture.medium}"/>
                </div>
                <div>
                ${user.name.first}
                </div>
                
                `;
            });

            document.querySelector("#users").innerHTML = html;
        })
        .catch(err => console.log(err));

}

//getExternalApi();


function postExternalApi() {

    const url = "https://jsonplaceholder.typicode.com/todos";


    fetch(url, {
            method: "POST",
            body: JSON.stringify({
                userId: 1,
                title: "Metallica",
                body: "Best Metal Music"
            }),
            headers: {
                "content-type": "application/json; charset=utf=8"
            },
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));
}


postExternalApi();