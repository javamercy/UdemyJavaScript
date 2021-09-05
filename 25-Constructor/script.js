/* let yigit = {

    name: "yiğit",
    yearOfBirth: 2000,
    job: "student"
} */

// function Person(name, yearOfBirth, job) {

//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;

//     this.calculateAge = function() {
//         return 2021 - this.yearOfBirth;
//     }


// }


const Person = function(name, yearOfBirth, job) {

    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;

    this.calculateAge = function() {
        return 2021 - this.yearOfBirth;
    }
}

const emrecan = new Person("Emrecan", 2001, "student");

const engin = new Person("Engin", 1985, "instructor");

console.log(emrecan.name);
console.log(emrecan.yearOfBirth);
console.log(emrecan.job);

console.log(emrecan.calculateAge());
console.log(engin.calculateAge());