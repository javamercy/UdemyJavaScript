// Sub Classes


// ES5

function PersonES5(firstName, lastName) {

    this.firstName = firstName;
    this.lastName = lastName;
}

PersonES5.prototype.sayHi = function() {

    return `Hello there! I am ${this.firstName} ${this.lastName}`;
}


function CustomerES5(firstName, lastName, phone, username) {

    PersonES5.call(this, firstName, lastName);
    this.phone = phone;
    this.username = username;
}


CustomerES5.prototype = Object.create(PersonES5.prototype);
CustomerES5.prototype.constructor = CustomerES5;



const customer1 = new CustomerES5("Emrecan", "Kurşun", "123467142", "warmachine");

console.log(customer1.sayHi());
console.log(customer1);





// ES6

class PersonES6 {

    constructor(firstName, lastName) {

        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayHi() {
        return `Hello there! I am ${this.firstName} ${this.lastName}`;
    }


}


class CustomerES6 extends PersonES6 {

    constructor(firstName, lastName, phone, username) {
        super(firstName, lastName);
        this.phone = phone;
        this.username = username;

    }

    static getTotal() {

        return 1000;
    }
}


const customer2 = new CustomerES6("Engin", "Demiroğ", "123213", "destroyer123");

console.log(customer2.sayHi());
console.log(customer2);

console.log(CustomerES6.getTotal());