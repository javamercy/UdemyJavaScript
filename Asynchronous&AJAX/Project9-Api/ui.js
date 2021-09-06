class UI {

    constructor() {
        this.profileContainer = document.querySelector("#profileContainer");
        this.alert = document.getElementById("alert");
    }


    showProfile(profile) {

        this.profileContainer.innerHTML = `

            <div class="card card-body">
                <div class=row>
                    <div class="col-md-3">
                        <a href="https://placeholder.com">
                            <img src="https://via.placeholder.com/350x150" class="img-thumbnail"/>
                        </a>
                    </div>
                    <div class="col-md-9">
                        <h4>Contact</h4>
                        <ul class="list-group">
                            <li class="list-group-item">
                              name: ${profile.name} 
                            </li>
                            <li class="list-group-item">
                              username: ${profile.username} 
                            </li>
                            <li class="list-group-item">
                              email: ${profile.email} 
                            </li>
                            <li class="list-group-item">
                                address: ${profile.address.street}
                                         ${profile.address.city}
                                         ${profile.address.zipcode}
                                         ${profile.address.suite}
                            </li>
                            <li class="list-group-item">
                                 website: ${profile.website} 
                            </li>
                            <li class="list-group-item">
                                 company: ${profile.company.name} 
                            </li>
                        </ul>
                        <h4 class"mt-4">Todo List</h4>
                        <ul class="list-group" id="todo">
                        </ul>
                    </div>
                </div>
            </div>
        `;
    }

    showAlert(text) {
        this.alert.innerHTML = `${text} is not found`;
        this.alert.style.padding = "0.4rem";
        this.alert.style.borderRadius = "5px";
    }

    clear() {
        this.profileContainer.innerHTML = "";
        this.alert.innerHTML = "";
        this.alert.style = "";
    }

    showTodo(todo) {

        let html = "";

        todo.forEach(item => {

            if (item.completed) {

                html += `
                <li class="list-group-item bg-dark text-white">
                    ${item.title}
                </li>
                `;
            } else {

                html += `
                <li class="list-group-item bg-info">
                    ${item.title}
                </li>
                `;
            }
        });

        this.profileContainer.querySelector("#todo").innerHTML = html;
    }
}