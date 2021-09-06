// Classes


// ES5


const PersonES5 = function(name, job, yearOfBirth) {

    this.name = name;
    this.job = job;
    this.yearOfBirth = yearOfBirth;
}


PersonES5.prototype.calculateAge = function() {

    return new Date().getFullYear() - this.yearOfBirth;
}


let emrecan = new PersonES5("emrecan", "student", 2001);

console.log(emrecan.calculateAge());

console.log(emrecan);





// ES6


class PersonES6 {

    constructor(name, job, yearOfBirth) {

        this.name = name;
        this.job = job;
        this.yearOfBirth = yearOfBirth;
    }

    calculateAge() {
        return new Date().getFullYear() - this.yearOfBirth;
    }
}


const engin = new PersonES6("engin", "instructor", 1985);

console.log(engin.calculateAge());
console.log(engin);