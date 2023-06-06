"use strict";

// start live-server

const lufthansa = {
    airline: "lufthansa",
    iataCode: "LF",
    bookings: [],
}

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
    console.log("this keyword", this);
    this.planes++;
    console.log("This Planes", this.planes)
}
// lufthansa.buyPlane();

// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane)
// the above line, if we see in browser console, "this keyword" will print button and "This Planes" will print NAN.
// this will happen because in an event handler funtion this keyword always points to the element that event handler attached.

// In order to fix this issue we use bind method

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa)) // here this keyword is luftansa.

const addTax = (rate, value) => value + value * rate;
console.log("Add Tax", addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23) // we are using null as first parameter, because there is not "this keyword" to be passed. second paramenter is rate(percentage). we are pre setting the rate parameter here

// the above code is doing same like this : addVAT = value => value + value * 0.23;

console.log("AddVAT", addVAT(100));
console.log("AddVAT", addVAT(150));

// we can do the above with functions

const addTaxRate = function (rate) {
    return function (value) {
        return value + value * rate
    }
}

const addVAT2 = addTaxRate(0.23);
console.log("addVAT2", addVAT2(100));
console.log("addVAT2", addVAT2(150));