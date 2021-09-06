let myObj = {

    url: "https://randomuser.me/ap2i/?results=5",
    // headers: { "content-type": "application/json" }

}

let buildHtml = (data) => {

    let users = JSON.parse(data);

    let html = "";
    users.results.forEach((result) => {

        html += `

        <div>
        <img src="${result.picture.medium}"/>
        </div>
        <div>
            ${result.name.title}
            ${result.name.first}
            ${result.name.last}
        </div>
        `;
    });

    document.getElementById("users").innerHTML = html;

    return Promise.resolve("Html is loaded");
}






let request = obj => {

    return new Promise((resolve, reject) => {


        const xhr = new XMLHttpRequest();

        xhr.open(obj.method || "GET", obj.url, true);

        if (xhr.headers) {
            Object.keys[obj.headers].forEach(key => {
                xhr.setRequestHeader(key, obj.headers[key]);
            });
        }

        xhr.onload = () => {

            if (xhr.status >= 200 && xhr.status < 300) {

                resolve(xhr.response);
            } else {
                reject(new Error("Error! Status code : " + xhr.status));

            }
        }

        xhr.onerror = () => {

            reject(xhr.statusText);
        }

        xhr.send();
    });
}

request(myObj)
    .then(buildHtml)
    .then(message => console.log(message))
    .catch(err => console.log(err));