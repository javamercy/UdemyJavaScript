class Storage {

    static getCoursesFromStorage() {

        let courses;

        if (localStorage.getItem("courses") === null) {

            courses = [];
        } else {

            courses = JSON.parse(localStorage.getItem("courses"));
        }

        return courses;
    }

    static loadCoursesToUI() {

        const courses = Storage.getCoursesFromStorage();

        document.addEventListener("DOMContentLoaded", function(e) {

            const ui = new UI();
            courses.forEach((course) => {


                ui.addCourseToList(course);

            });

        });
    }

    static addCourseToStorage(course) {

        const courses = Storage.getCoursesFromStorage();

        courses.push(course);

        localStorage.setItem("courses", JSON.stringify(courses));

    }

    static deleteCourse(courseId) {

        const courses = Storage.getCoursesFromStorage();

        courses.forEach((course, index) => {

            if (course.courseId == courseId) {
                courses.splice(index, 1);
            }


        });

        localStorage.setItem("courses", JSON.stringify(courses));
    }
}

Storage.loadCoursesToUI();

class Course {

    constructor(title, instructor, image) {

        this.courseId = Math.floor(Math.random() * 10000);
        this.title = title;
        this.instructor = instructor;
        this.image = image;

    }
}

class UI {

    addCourseToList(course) {

        const list = document.getElementById("course-list");

        let html = `
        <tr>
            <td><img src="img/${course.image}"/></td>
            <td>${course.title}</td>
            <td>${course.instructor}</td>
            <td><a href="#" class= "btn btn-danger btn-sm delete" data-id="${course.courseId}">Delete</a></td>
        </tr>`;

        list.innerHTML += html;
    }

    clearInputs() {

        document.getElementById("title").value = "";
        document.getElementById("instructor").value = "";
        document.getElementById("image").value = "";
    }

    deleteCourse(element) {

        if (element.classList.contains("delete")) {
            element.parentElement.parentElement.remove();
        }
    }

    showAlert(message, type) {

        let alert = `
        <div class="alert alert-${type} role="alert">
                ${message}
        </div>`;

        const row = document.querySelector(".row");

        // beforeBegin, afterBegin, beforeEnd, afterEnd
        row.insertAdjacentHTML("beforebegin", alert);

        setTimeout(() => {
            document.querySelector(".alert").remove();
        }, 3000);
    }
}

document.getElementById("new-course").addEventListener("submit", function(e) {

    const title = document.getElementById("title").value;
    const instructor = document.getElementById("instructor").value;
    const image = document.getElementById("image").value;

    // create course object
    const course = new Course(title, instructor, image);

    console.log(course);
    // create ui
    const ui = new UI();



    if (title === "" || instructor === "" || image === "") {
        ui.showAlert("Please complete the form", "warning");
    } else {

        // add course to list
        ui.addCourseToList(course);

        // save to localStorage
        Storage.addCourseToStorage(course);


        // clear inputs
        ui.clearInputs();

        ui.showAlert("The course has been added successfully", "success")
    }









    e.preventDefault();
});


document.getElementById("course-list").addEventListener("click", function(e) {

    const ui = new UI();
    ui.deleteCourse(e.target);

    const courseId = e.target.getAttribute("data-id");
    console.log(courseId);
    Storage.deleteCourse(courseId);

    if (e.target.classList.contains("delete")) {
        ui.showAlert("The course has been deleted successfully", "danger");
    }


});