const airline = 'TAP Air Pepper Portugal aer';

console.log(airline.indexOf('r')); // this will give first index of r
console.log(airline.lastIndexOf('r')); // this will give last index of r
console.log(airline.indexOf('Portugal')); // this will print 15, because from 15th position P is started
console.log(airline.indexOf('portugal')); // this will print -1, because it is case sensitive

console.log(airline.slice(4)); // this will print Air Pepper Portugal aer. because at 4th position extraction is strated;

console.log(airline.slice(4, 7)); // this will print Air , because it will start extraction from 4th positon to 6th position, 7-4 = 3; only 3 characters from 4th position it will take and print;

console.log(airline.slice(0, airline.indexOf(' '))) // this will print TAP

console.log(airline.slice(airline.lastIndexOf(' '))); // this will print aer, with space before it because it find the last occurance of space and print whate ever rest parameters in it.

console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // this will print aer without any sapce before
console.log(airline.slice(-2)); // this will print last two letters
console.log(airline.slice(1, -1)) // it will print all expect first and last letters

const checkMiddleSeat = (seat) => {
    const s = seat.slice(-1);
    if (s === "B" || s === "E") {
        console.log("You got middle seat")
    } else {
        console.log("You got Lucky seat")
    }
}

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

var passenger = "jOnAs";

passenger = passenger[0].toUpperCase() + passenger.slice(1).toLocaleLowerCase();

console.log(passenger)

const email = '  Hello@GMail.com \n';

console.log(email.trim().toLocaleLowerCase());

let priceGB = '!123.000';

console.log(priceGB.replace('!', "$").replace(".", ","));

const Announcement = "All passengers bring All Luggage";

console.log(Announcement.replace("All", "One"));
console.log(Announcement.replaceAll("All", "One"));

const plane = 'A320';
console.log(plane.includes(20));
console.log(plane.includes('bio'));


const message = 'Sunil';

console.log(message.padStart(22, "+"))
console.log(message.padEnd(22, "+"))
console.log(message.padStart(20, "+").padEnd(30, "+"));

const maskedCreditCard = (number) => {
    const str = String(number)
    console.log(str.slice(-4).padStart(str.length, "X"))
}

maskedCreditCard(1234567890);
maskedCreditCard(987665431234567890);
maskedCreditCard('ksjhdofhsdjhfldshofjosdhfusi');


const message2 = "repat...."

console.log(message2.repeat(5));