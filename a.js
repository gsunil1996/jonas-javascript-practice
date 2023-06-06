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