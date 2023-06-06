// classes are same as constructors, but just modren way of writing it

// // class expression
// const TestClass = class {

// }

// // class declaration
// class TestCl {

// }

// the above both will work same.

class TestPersonCl {
    constructor(firstName, birthYear) {
        //  console.log("this:", this);
        this.firstName = firstName
        this.birthYear = birthYear
        //  console.log("this result:", this)
    }
}

const sunil = new TestPersonCl('Sunil', 1995);
// console.log("sunil class", sunil)
// TestPersonCl {firstName: 'Sunil', birthYear: 1995}
// if we expand
// birthYear: 1995
// firstName: "Sunil"
// [[Prototype]]: Object
// constructor: class TestPersonCl
// [[Prototype]]:Object

// classes are not hoisted. We cannot use them even before they are declared
// classes are also first class citizens
// classes are executed in strict mode ?? 


///////////////////////////////////////////

console.log("---- getters and setters ----");

const account = {
    owner: 'Jonas',
    movements: [200, 250, 300, 120, 30],

    // getters
    get latest() {
        return this.movements.slice(-1).pop();
    },

    // setters .. this will accept one parameter
    set latest(mov) {
        this.movements.push(mov);
    }
}

// assesing the getter
console.log("getter", account.latest) // 30

// assesing the setter
account.latest = 50
console.log("setter", account.movements) // [200, 250, 300, 120, 30, 50], see in the end 50 is added

/////////////////////////////////////////////


class PersonCl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    // Instance methods
    // Methods will be added to .prototype property
    calcAge() {
        console.log(2037 - this.birthYear);
    }

    get age() {
        return 2037 - this.birthYear;
    }

    // Set a property that already exists
    set fullName(name) {
        if (name.includes(' ')) {
            this._fullName = name;
        }
        else {
            console.log(`${name} is not a full name!`);
        }
    }

    get fullName() {
        return this._fullName;
    }

    // Static method
    static hey() {
        console.log('Hey there 👋');
        console.log(this);

        // output

        // Hey there 👋
        // classes.js: 101 class PersonCl {
        //     constructor(fullName, birthYear) {
        //         this.fullName = fullName;
        //         this.birthYear = birthYear;
        //     }



        // Instance methods
        // Methods will be added to .prototype prope…
    }
}

const jessica = new PersonCl("Jessica Davis", 1996);
console.log("check jessica", jessica)
jessica.calcAge(); // this wil call calcAge function
console.log(jessica.__proto__ == PersonCl.prototype) // true
console.log("jessica getter", jessica.age) // 41

// we can also add methods like this
// PersonCl.prototype.greet = function () {
//     console.log(`Hey ${this.fullName}`) // Hey Jessica
// }

// jessica.greet()

PersonCl.hey() // Hey there 👋


console.log("--- Object.create ---");

const PersonProto = {
    calcAge() {
        console.log(2037 - this.birthYear) // 35
    },

    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
}

const steven = Object.create(PersonProto);
console.log(steven) // check inside __proto__, you can able to see calcAge function
steven.name = 'Steven';
console.log(steven)
// output : {name: 'Steven'}, if we expand
// name: "Steven"
// [[Prototype]]: Object // if we expand
// calcAge: ƒ calcAge()
// [[Prototype]]:Object

steven.birthYear = 2002;
steven.calcAge() // now it will print output of PersonProto which is created from const steven
console.log(steven.__proto__) // {calcAge: ƒ}
console.log(steven.__proto__.__proto__) // this will point to object prototype
console.log(steven.__proto__.__proto__.__proto__) // null

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge(); // 58

console.log("-- example --")

class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }
    acclerate() {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/h`)
    }
    brake() {
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/h`)
    }

    // getters
    get speedUS() {
        return this.speed / 1.6;
    }

    // setters
    set speedUS(speed) {
        this.speed = speed * 1.6
    }
}

const bmw = new CarCl('BMW', 120);

console.log(bmw.speedUS) // 75
bmw.acclerate(); // BMW is going at 130 km/h
bmw.acclerate(); // BMW is going at 140 km/h
bmw.brake(); // BMW is going at 135 km/h
bmw.acclerate(); // BMW is going at 145 km/h
bmw.speedUS = 50;
console.log(bmw) // CarCl {make: 'BMW', speed: 80} 80 = 50 * 1.6