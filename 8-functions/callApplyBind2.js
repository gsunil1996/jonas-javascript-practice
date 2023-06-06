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

vistara.book(27, "Sunil");
vistara.book(26, "Kumar");

console.log("Before call", vistara);

const airIndia = {
    name: "Air India",
    iataCode: "AI",
    bookings: []
}

const book = vistara.book;

book.call(airIndia, 25, "pavan"); // call method takes list of arguments after object
console.log("Air India", airIndia);

book.call(vistara, 28, "aravind")
console.log("After call", vistara);

// in this call method, again this keywords inside book methods will again works in normal way


/////////////     Apply Method      ///////////////////////////////

const flightData = [583, "George"]
book.apply(airIndia, flightData); // apply method takes list of arguments and an array.
console.log("apply", airIndia);

// we can replace apply with call, refer below example;
book.call(airIndia, ...flightData);
console.log("replaceApply", airIndia);

const tataAirLines = {
    name: "Tata Airlines",
    iataCode: "TA",
    bookings: []
}

/////////////     Bind Method      ///////////////////////////////

const bookTA = book.bind(tataAirLines); // bind method returns function, where we can pass arguments as normal functions
bookTA(23, "steven");
console.log("Bind", tataAirLines);

const bookTA1 = book.bind(tataAirLines, 24); // in bind method we can directly add parameter here and missing parameters in function call
bookTA1("sunil");
bookTA1("kumar"); // this will come extremly useful for many cases
console.log("bind1", tataAirLines)

const lufthansa = {
    airline: "lufthansa",
    iataCode: "LF",
    bookings: [],
}

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
    console.log(this);
    this.planes++;
    console.log("This Planes", this.planes)
}
lufthansa.buyPlane();
console.log("lufthansa", lufthansa)