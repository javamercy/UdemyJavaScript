const githubForm = document.getElementById("github-form");
const nameInput = document.querySelector("#githubname");
const clearLastUsers = document.getElementById("clear-last-users");
const lastUsers = document.getElementById("last-users");
const github = new Github();
const ui = new UI();

eventListeners();


function eventListeners() {

    githubForm.addEventListener("submit", getData);
    clearLastUsers.addEventListener("click", clearAllSearched);
    document.addEventListener("DOMContentLoaded", getAllSearchedFromStorage);
}

function getData(e) {

    let username = nameInput.value.trim();

    if (username === "") {

        window.alert("Lütfen geçerli bir kullanıcı adı giriniz.")
    } else {

        github.getGithubData(username)
            .then(response => {

                if (response.user.message === "Not Found") {

                    ui.showError("Kullanıcı bulunamadı!");
                } else {

                    ui.addSearchedUserToUI(username);
                    LocalStorage.addSearchedUserToStorage(username.toLowerCase());
                    ui.showUserInfo(response.user);
                    ui.showRepoInfo(response.repo);


                }
            })
            .catch(err => ui.showError(err));
    }
    ui.clearInput();
    e.preventDefault();
}

function clearAllSearched(e) {

    if (window.confirm("Are you sure about to clear search history ?")) {

        LocalStorage.clearAllSearchedFromStorage();

        ui.clearAllSearchedFromUI();
    }

}

function getAllSearchedFromStorage(e) {

    // Arananları storagedan al ve ui ya ekle

    let users = LocalStorage.getSearchedUsersFromStorage();
    let result = "";
    users.forEach(user => {

        result += `<li class="list-group-item">${user}</li>`;

    });

    lastUsers.innerHTML = result;
}