// Call Apply Bind




let welcome = function(a, b) {

    console.log("Welcome " + this.name + "." + " Are you interested in", a, "and", b);
}


let emrecan = { name: "emrecan" }
let engin = { name: "engin" }






welcome.call(emrecan, "asp.net", "angular");
welcome.call(engin, "asp.net", "angular");

welcome.apply(emrecan, ["asp.net", "angular"]);
welcome.apply(engin, ["asp.net", "angular"]);

welcomeEmrecan = welcome.bind(emrecan);
welcomeEmrecan("asp.net", "angular");