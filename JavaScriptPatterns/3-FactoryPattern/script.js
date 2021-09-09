// Factory Pattern


function Factory() {

    this.createEmployee = function(type) {

        let employee;
        if (type === "fulltime") {

            employee = new FullTime();
        } else if (type === "parttime") {

            employee = new PartTime();
        } else if (type === "temporary") {

            employee = new Temporary();
        }

        employee.type = type;
        employee.say = function() {

            console.log(this.type, "=> Saatilk ücreti:", this.hourly);
        }

        return employee;

    }
}


let FullTime = function() {

    this.hourly = "30TL"
}
let PartTime = function() {

    this.hourly = "20TL"
}
let Temporary = function() {

    this.hourly = "15TL"
}


let factory = new Factory();

let employees = [];

employees.push(factory.createEmployee("fulltime"));
employees.push(factory.createEmployee("parttime"));
employees.push(factory.createEmployee("parttime"));
employees.push(factory.createEmployee("temporary"));
employees.push(factory.createEmployee("fulltime"));


employees.forEach(emp => {

    emp.say();
});