// Object Literals

let val;

let person = {

    firstName: "Emrecan",
    lastName: "Kurşun",
    age: 20,
    hobbies: ["Music", "Game"],
    address: {
        city: "Elazığ",
        country: "Turkey"
    },
    getBirthYear: function() {
        return new Date().getFullYear() - this.age;
    }
}

val = person.firstName;
val = person.lastName;
val = person["firstName"];
val = person.age;
val = person.hobbies;
val = person.hobbies[1];
val = person.hobbies.length;
val = person.address;
val = person.address.city;
val = person["address"]["country"];
val = person.getBirthYear();





let people = [
    { firstName: "Emrecan", lastName: "Kurşun" },
    { firstName: "Engin", lastName: "Demiroğ" },
    { firstName: "Mustafa", lastName: "Coşkun" }

];


val = people[0];
val = people[2].firstName;

for (let i = 0; i < people.length; i++) {

    console.log(people[i].firstName);
}

console.log(val);
console.log(typeof people);