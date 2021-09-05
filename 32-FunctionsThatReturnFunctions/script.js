// Functions that return functions

function question(hobby) {

    switch (hobby) {

        case "car":

            return function(name) {
                console.log(name, "do you have a car ?");
            }



        case "book":

            return function(name) {
                console.log(name, "what is your favorite book ?");
            }



        case "software":

            return function(name, type) {
                console.log(name, "are you interested in " + type + " ?");
            }


        default:

            return function(name) {
                console.log(name, "what is up ?");
            }

    }
}


let carQuestion = question("car");

carQuestion("Emrecan");
carQuestion("Engin");

let bookQuestion = question("book");
bookQuestion("Emrecan");

let softwareQuestion = question("software");
softwareQuestion("Mustafa", "JavaScript")