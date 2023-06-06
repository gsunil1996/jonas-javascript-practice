const Person = function (firstName, birthYear) {
    this.firstName = firstName
    this.birthYear = birthYear
}

Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
    // this.firstName = firstName;
    // this.birthYear = birthYear;

    // we need to make use of above constructor
    Person.call(this, firstName, birthYear);

    this.course = course;
}

Student.prototype = Object.create(Person.prototype)

// create a method introduce
Student.prototype.introduce = function () {
    console.log(`My name is ${this.firstName} and I study ${this.course}`)
}

const mike = new Student('Mike', 2020, 'Computer Science');
console.log(mike) // Student {firstName: 'Mike', birthYear: 2020, course: 'Computer Science'}. if we expand:
// birthYear: 2020
// course: "Computer Science"
// firstName: "Mike"
// [[Prototype]]: Object // if we expand
// introduce: ƒ()
// constructor: ƒ(firstName, birthYear, course)
// [[Prototype]]: Object

mike.introduce() // My name is Mike and I study Computer Science
mike.calcAge(); // 17 .. though it is not in student constructor, it will look for its parent constructor which is person and take values from it

console.log(mike.__proto__) // Person {introduce: ƒ}, if we expand
// introduce: ƒ()
// [[Prototype]]: Object // if we expand
// calcAge: ƒ() // calcAge function is here which belongs to Person constructor
// constructor: ƒ(firstName, birthYear)
// [[Prototype]]: Object

console.dir(Student.prototype.constructor) // ƒ Person(firstName, birthYear) // this points to Person constructor, but it should point to Student constructor

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor) // ƒ Student(firstName, birthYear, course)

console.log("--- example ---");

const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
}

Car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`)
}

Car.prototype.brake = function () {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`)
}

const EV = function (make, speed, charge) {
    Car.call(this, make, speed)
    this.speed = speed;
}

// Link the prototype
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
    this.charge = chargeTo;
}

EV.prototype.accelerate = function () {
    this.speed += 20;
    this.charge--;
    console.log(`${this.make} is going at ${this.speed} km/h and with a charge of ${this.charge}`);
}

const tesla = new EV('Tesla', 120, 33);
tesla.chargeBattery(90);

console.log(tesla) // EV {make: 'Tesla', speed: 120, charge: 90}
tesla.brake() // Tesla is going at 115 km/h
tesla.accelerate() // Tesla is going at 135 km/h and with a charge of 89

console.log("--- inheritance in classes ---")

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

    greet() {
        console.log(`Hey ${this.fullName}`)
    }

    get age() {
        return 2037 - this.birthYear;
    }

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
    }
}

class StudentCl extends PersonCl {
    constructor(fullName, birthYear, course) {
        // Always needs to happen this at first
        super(fullName, birthYear);
        this.course = course;
    }
    introduce() {
        console.log(`My name is ${this.fullName} and I study ${this.course}`);
    }
    // overwrite the parent calcAge Function. Because this will come first in the prototype chain and override the parent class same method
    calcAge() {
        console.log(`I'm ${2037 - this.birthYear} years old, but as a student I feel more like ${2037 - this.birthYear + 10}`)
    }
}

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
console.log(martha) // StudentCl {_fullName: 'Martha Jones', birthYear: 2012, course: 'Computer Science'}
martha.introduce() // My name is Martha Jones and I study Computer Science
martha.calcAge() // I'm 25 years old, but as a student I feel more like 35
console.log(martha) // if you expand all protypes, you can see the all the methods in student class as well as classes from parent class which is PersonCl. This proves that classes will set prototype chain automatically.

const PersonProto = {
    calcAge() {
        console.log(2037 - this.birthYear);
    },
    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
}

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);

StudentProto.init = function (firstName, birthYear, course) {
    PersonProto.init.call(this, firstName, birthYear);
    this.course = course;
}

StudentProto.introduce = function () {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
}

const jay = Object.create(StudentProto); // StudentProto is now the prototype of jay, PersonProto is the prototype of StudentProto, PersonProto is also a parent proto for jay.

jay.init('Jay', 2010, 'Computer Science');
console.log("check Jay init:", jay) // {firstName: 'Jay', birthYear: 2010, course: 'Computer Science'}
jay.introduce() // My name is Jay and I study Computer Science
jay.calcAge() // 27


console.log("-- another class example --");

class Account {
    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;

        // protected property start
        this._pin = pin;
        this._movements = [];
        // protected property end

        this.locale = navigator.language;

        console.log(`Thanks for opening an account, ${owner}`); // Thanks for opening an account, Jona
    }

    // public interface (API)
    getMoments() {
        console.log("get moments", this._movements)
        return this._movements;
    }
    deposit(val) {
        this._movements.push(val);
    }
    withdraw(val) {
        this.deposit(-val); // we can use another methods inside it
    }

    // protected property start
    _approveLoan(val) {
        return true;
    }
    // protected property end

    requestLoan(val) {
        if (this._approveLoan(val)) {
            this.deposit(val);
            console.log(`Loan Approved`)
        }
    }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
console.log(acc1) // Account {owner: 'Jonas', currency: 'EUR', _pin: 1111, _movements: Array(0), locale: 'en-GB'}
acc1.deposit(250);
acc1.withdraw(140);
console.log(acc1) // {owner: 'Jonas', currency: 'EUR', _pin: 1111, _movements: [250, -140], locale: 'en-GB'}
console.log("account pin", acc1._pin) // 1111
acc1.requestLoan(1000);
acc1._approveLoan(1000);
console.log("check Loan approved:", acc1)  // Account {owner: 'Jonas', currency: 'EUR', _pin: 1111, _movements: [250, -140, 1000], locale: 'en-GB'}
acc1.getMoments() //  [250, -140, 1000]



