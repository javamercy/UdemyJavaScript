/* 

Person -> Student
        -> Teacher -> Headmaster
    

person -> name and introduce()
student -> number and study()
teacher -> branch and teach()
headmaster -> shareTask()

*/




function Person(name) {

    this.name = name;

}

Person.prototype.introduce = function() {

    console.log("Hello my name is", this.name);
}

const person1 = new Person("Emrecan");
person1.introduce();

//------------------------------------------------------------------

function Student(name, number) {

    Person.call(this, name);
    this.number = number;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.study = function() {

    console.log("My student number is", this.number, "and I've already studied hard");
}

const student1 = new Student("Ahmet", "101");
student1.introduce();
student1.study();

//------------------------------------------------------------------


function Teacher(name, branch) {
    Person.call(this, name);
    this.branch = branch;
}


Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;

Teacher.prototype.teach = function() {
    console.log("I teach", this.branch);
}


const teacher1 = new Teacher("Engin", "computer science");
teacher1.introduce();
teacher1.teach();

//------------------------------------------------------------------


function Headmaster(name, branch) {
    Teacher.call(this, name, branch);
}


Headmaster.prototype = Object.create(Teacher.prototype);
Headmaster.prototype.constructor = Headmaster;

Headmaster.prototype.shareTask = function() {
    console.log("I've already shared all of the work");
}

const headmaster1 = new Headmaster("Mustafa", "bilişim");
headmaster1.introduce();
headmaster1.teach();
headmaster1.shareTask();