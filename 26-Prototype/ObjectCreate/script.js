// object.create


let personProto = {

    calculateAge: function() {

        return new Date().getFullYear() - this.yearOfBirth;
    }
}


let emrecan = Object.create(personProto);

emrecan.name = "emrecan";
emrecan.yearOfBirth = 2001;
emrecan.job = "student";


let engin = Object.create(personProto, {
    name: { value: "engin" },
    yearOfBirth: { value: 1085 },
    job: { value: "instructor" }
});







console.log(emrecan);
console.log(emrecan.calculateAge());
console.log(engin);
console.log(engin.calculateAge());