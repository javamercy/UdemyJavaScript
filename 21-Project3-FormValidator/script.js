const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const repassword = document.getElementById("repassword");
const phone = document.getElementById("phone");


function error(input, message) {

    input.className = "form-control is-invalid";

    const div = input.nextElementSibling;
    div.innerText = message;
    div.className = "invalid-feedback";

}


function success(input) {

    input.className = "form-control is-valid";

}

function checkEmail(input) {

    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value)) {

        success(input);
    } else {

        error(input, "Wrong email format!")
    }
}

function checkRequired(inputs) {

    inputs.forEach(function(input) {

        if (input.value === "") {

            error(input, `${input.id} is required!`);
        } else {
            success(input);
        }
    });

}

function checkLength(input, min, max) {

    if (input.value.length < min) {

        error(input, `${input.id} must be min ${min} character!`);

    } else if (input.value.length > max) {

        error(input, `${input.id} must be max ${max} character!`);

    } else {

        success(input);
    }
}

function checkPasswords(pass1, pass2) {

    if (pass1.value !== pass2.value) {

        error(pass2, "Passwords does not match!");
    }
}

function checkPhone(input) {

    const exp = /^\d{10}$/;

    if (!exp.test(input.value)) {

        error(input, "Phone must be 10 character!");
    }
}

form.addEventListener("submit", function(e) {

    checkRequired([username, email, password, repassword, phone]);
    checkEmail(email);
    checkLength(username, 7, 15);
    checkLength(password, 7, 12);
    checkPasswords(password, repassword);
    checkPhone(phone);



    e.preventDefault();
});