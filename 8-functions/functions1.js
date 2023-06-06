"use strict"
const bookings = [];

const createBooking = function (flightNumber, numOfPassengers = 1, price = 199 * numOfPassengers) {
    const booking = {
        flightNumber,
        numOfPassengers,
        price
    }
    console.log(booking)
    bookings.push(booking)
}

createBooking('LH123')
createBooking('LH123', 2, 800)
createBooking('LH123', undefined, 800) // if we want to skip the argument, we need to use undefined

const flight = 'LH234';
const jonas = {
    name: "Jonas",
    passport: 1234567890
}

const checkIn = function (flightNumber, pasenger) {
    pasenger.name = 'Mr. ' + pasenger.name // this will modify original jonas object
    flightNumber = 'LH999' // this wont modify original array
}

checkIn(flight, jonas);
console.log("check", flight, jonas);

const newPassport = function (person) {
    person.passport = Math.trunc(Math.random() * 1000000) // this will also change original jonas object
}

newPassport(jonas);
console.log("checkJonas", jonas);

const oneWord = function (str) {
    return str.replace(/ /g, ' ').toLowerCase();
}

const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
}

const transformer = function (str, fn) {
    console.log(`original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);
}

transformer('Javascript is the best!', upperFirstWord) // we are giving upperFirstWord function as a argument here, note function should not be called while passing as an argument

const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`)
    }
}

const greeterHey = greet('Hey');
greeterHey('Sunil');
greeterHey('Kumar');

// the above function can also be written like this

greet('Hey')('Sunil');
greet('Hello')('Kumar');


// the above function can also be written as in this form in arrow function
const greetArr = greeting => name => {
    console.log(`${greeting} ${name}`)
}
greet('HelloArr')('Kumar');