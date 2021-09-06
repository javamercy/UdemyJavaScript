// Static Methods


// class PersonES6 {

//     constructor(name, job, yearOfBirth) {

//         this.name = name;
//         this.job = job;
//         this.yearOfBirth = yearOfBirth;
//     }

//     calculateAge() {
//         return new Date().getFullYear() - this.yearOfBirth;
//     }

//     static sayHi() {
//         console.log("Hello there!");
//     }
// }


// const engin = new PersonES6("engin", "instructor", 1985);

// PersonES6.sayHi();



//------------------------------------------------------------------


class Point {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }


    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx, dy);
    }
}


const d1 = new Point(10, 10);
const d2 = new Point(20, 20);

console.log(Point.distance(d1, d2));