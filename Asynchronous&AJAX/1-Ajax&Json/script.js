document.querySelector("#getEmployees").addEventListener("click", loadEmployee);


function loadEmployee(e) {


    let loadImage = document.getElementById("loading");
    loadImage.style.display = "block";

    const xhr = new XMLHttpRequest();

    xhr.open("GET", "employees.json", true);


    setTimeout(() => {

        xhr.onload = function() {

            loadImage.style.display = "none";

            if (this.status === 200) {

                let employees = JSON.parse(this.responseText);


                employees.forEach(employee => {

                    let html = `
                
                    <tr>
                        <td>${employee.firstName}</td>
                        <td>${employee.lastName}</td>
                        <td>${employee.age}</td>
                        <td>${employee.retired}</td>
    
                    </tr>
            `;
                    document.getElementById("employees").innerHTML += html;
                });

            }

        }
        xhr.send();
    }, 1500);






}