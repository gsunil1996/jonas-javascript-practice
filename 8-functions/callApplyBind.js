"use strict";

const vistara = {
    airline: "Vistara",
    iataCode: "VST",
    bookings: [],
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`);
        // this.bookings.push({ flight: `${this.iataCode} ${flightNum}`, name: name })
        this.bookings.push({ flight: `${this.iataCode} ${flightNum}`, name }) // the above code can also written like this
    }
}

vistara.book(100, "Sunil");
vistara.book(101, "Kumar");

console.log(vistara);

// in the above book method, this keywords are working fine, but once if we create a variable outside and store vistara.book in that, it wont work. 

// const booking1 = vistara.book;
// booking1(23, "test")

// now this keywords inside book methods will become undefined. This is happens because in a booking1 is a regular funciton, inside regular functions, this keywords will become undefined. In next section we will see how to fix it.