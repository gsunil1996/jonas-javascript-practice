const Person = function (firstName, birthYear) {
    this.firstName = firstName
    this.birthYear = birthYear
}

const jonas = new Person('Jonas', 1991);

// console.log(jonas) // Person { firstName: 'Jonas', birthYear: 1991 }

console.log("constructor prototype:", Person.prototype); // in terminal it will show empty {}, but in browser it. this represents all the objects created by using Person constructor and it  shows {constructor: ƒ}
// if we expand, we can see following below : 
// calcAge: ƒ()
// constructor: ƒ(firstName, birthYear)
// [[Prototype]]: Object

Person.prototype.calcAge = function () {
    console.log("birthYear", 2037 - this.birthYear) // 46
}

jonas.calcAge()

console.log("jonas constructor:", jonas) // Person { firstName: 'Jonas', birthYear: 1991 }. it still shows only firstName and birthYear, but not calcAge function.

console.log("jonas protoType:", jonas.__proto__)
// below is the output
// calcAge: ƒ()
// constructor: ƒ(firstName, birthYear)
// [[Prototype]]: Object

console.log("check prototype", jonas.__proto__ === Person.prototype) // true
console.log("confirm prototype:", Person.prototype.isPrototypeOf(jonas)); // true. this shows that Person.prototype is indeed the prototype of jonas

console.log("check constructor", Person.prototype.isPrototypeOf(Person)) // false. this shows that Person is also not a prototype of Person

console.log("--- assign to prototype ---");

Person.prototype.spices = "Homo Sapiens";

console.log("check prototype assignment", jonas)
// output
// Person {firstName: 'Jonas', birthYear: 1991}
// if we expand
// birthYear: 1991
// firstName: "Jonas"
// [[Prototype]]: Object
// calcAge: ƒ()
// spices: "Homo Sapiens" //////// this is assigned
// constructor: ƒ(firstName, birthYear)
// [[Prototype]]: Object

const matilda = new Person('matilda', 1995);

console.log("jonas spices", jonas.spices) // "Homo Sapiens";
console.log("matilda spices", matilda.spices) // "Homo Sapiens"

matilda.calcAge()

console.log("matilda constructor:", matilda) // here also you can find calcAge function. if we add any method in prototype all other prototypes using same constructor will inherit it

// check the inherited prototype

console.log("check the inherited prototype", jonas.hasOwnProperty('firstName')) // true
console.log("check the inherited prototype", jonas.hasOwnProperty('spices')) // false. this is false because it is inherited. it is not in prototype object directly when it is created


console.log("check prototype chain", jonas.__proto__)
console.log("check prototype chain", jonas.__proto__.__proto__) // this points to object prototype
console.log("check prototype chain", jonas.__proto__.__proto__.__proto__) // null

console.log("---- array prototypes ----")
const arr = [3, 4, 5, 6, 7, 2, 2, 3];
console.log(arr.__proto__) // this will print array prototype
console.log("check array prototype", arr.__proto__ === Array.prototype) // true
console.log(arr.__proto__.__proto__) // this will point to the object prototype, because everything inside javascript is an object
console.log(arr.__proto__.__proto__.__proto__) // null. end of the prototype chain

// adding unique named method to the array constructor
Array.prototype.unique = function () {
    return [...new Set(this)]
}

console.log(arr.unique()) // [3, 4, 5, 6, 7, 2]

console.log("--- prototype usecase ------")

const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
}

// creating acclerate methods
Car.prototype.acclerate = function () {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} kmph`)
}

Car.prototype.brake = function () {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} kmph`)
}

const bmw = new Car('BMW', 120);
const mercedes = new Car("Mercedes", 95);

bmw.acclerate();
bmw.acclerate();
bmw.brake();
bmw.acclerate();

mercedes.acclerate();
mercedes.acclerate();
mercedes.brake();