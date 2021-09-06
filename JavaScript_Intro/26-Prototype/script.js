// Prototype


const Person = function(name, yearOfBirth, job) {

    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;

}

Person.prototype.calculateAge = function() {

    return new Date().getFullYear() - this.yearOfBirth;

}

Person.prototype.getName = function() {

    return this.name;
}


let emrecan = new Person("emrecan", 2001, "student");


console.log(emrecan.calculateAge());
console.log(emrecan);
console.log(emrecan.getName());
console.log(emrecan.hasOwnProperty("name"));