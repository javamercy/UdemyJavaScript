const profile = new Profile();
const ui = new UI();

const searchProfile = document.querySelector("#searchProfile");

searchProfile.addEventListener("keyup", e => {

    ui.clear();
    let text = e.target.value;

    if (text !== null) {

        profile.getProfile(text)
            .then(response => {

                if (response.profile.length === 0) {
                    ui.showAlert(text);
                } else {

                    ui.showProfile(response.profile[0]);
                    ui.showTodo(response.todo);
                }
            })
            .catch(err => {
                ui.showAlert(text);
            });
    }
});