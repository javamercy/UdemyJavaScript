// prototypal inheritance


let Person = function(name, yearOfBirth, job) {

    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function() {

    return new Date().getFullYear() - this.yearOfBirth;
}


let Teacher = function(name, yearOfBirth, job, subject) {

    // this.name = name;
    // this.yearOfBirth = yearOfBirth;
    // this.job = job;
    Person.call(this, name, yearOfBirth, job)
    this.subject = subject;
}

// Inherit the person prototype methods

Teacher.prototype = Object.create(Person.prototype);

Teacher.prototype.constructor = Teacher;

Teacher.prototype.greeting = function() {

    return "hello my name is " + this.name;
}


let engin = new Teacher("engin", 1985, "instructor", "computer science");


console.log(engin);
console.log(Teacher.prototype.constructor);
console.log(engin.calculateAge());