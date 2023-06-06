'use strict';

// in constructor arrow function does not work, because it does not have this keyword.
// the constructor basically produces an object and convention is it should start with capital letter.
// constructor is a blue print, by using constructor we can create multiple instances

// how constructor works:

// 1. A new empty object {} is created
// 2. fuction is called and this keyword is set on this newly created object // this = {}
// 3. this newly created object {} is linked to a prototype
// 4. function automatically returns the object {}

const Person = function (firstName, birthYear) {
    console.log("this:", this) // Person {}
    this.firstName = firstName
    this.birthYear = birthYear
    console.log("this result:", this) // Person { firstName: 'Jonas', birthYear: 1991 }
}

// if we call a funtion with new key word then it would behave as a constructor
const jonas = new Person('Jonas', 1991);
console.log("jonas:", jonas) //  Person { firstName: 'Jonas', birthYear: 1991 }
console.log("check instance:", jonas instanceof Person) // true

const matilda = new Person("Matilda", 1994);
console.log("matilda:", matilda) // Person { firstName: 'Matilda', birthYear: 1994 }

const jack = new Person("Jack", 2000);
console.log("Jack:", jack) // Person { firstName: 'Jack', birthYear: 2000 }

// static method
Person.hey = function () {
    console.log("constructor static", 'Hey there 👋');
    console.log("constructor static this", this)
}

Person.hey()