console.log(Number('23')); // this will convert string to number
console.log(+'23') // // this will convert string to number

// parsing

console.log(Number.parseInt('30Sunil')); // this will output 30 number and remove others
console.log(Number.parseInt('30Sunil12')); // this will output 30 number and remove others, as it sees only numbers before alphabets
console.log(Number.parseInt('  30Sunil12  ')) // this will output 30 number and remove others even spaces

console.log(Number.parseInt('Sunil30')) // this will output Nan, because this method accepts numbers at first

console.log(Number.parseInt('30.11Sunil')) // this method wont take decimal number, so it outputs 30
console.log(Number.parseFloat('30Sunil')); // this will output 30 number and remove others
console.log(Number.parseFloat('30.11Sunil')); // this will output 30.11 number and remove others and it also output decimal values

console.log(Number.parseFloat('  30.11Sunil  ')); // this will output 30.11 number and remove others even spaces


// these will wont work, if it is a decimal number
console.log("-- check it is number or not the best way ----")
// checking is value is a number
console.log(Number.isFinite(20)); // this will return true
console.log(Number.isInteger(20.011)); // this will return false, its a flaw
console.log(Number.isFinite('20')); // this will return false
console.log(Number.isFinite(+'20')) // this will return true
console.log(Number.isFinite(+'20X')) // this will return false
console.log(Number.isFinite(20 / 0)); // this will return false, because infinity is not a number

// these will wont work, if it is a decimal number
console.log("-- check Is integer----")
console.log(Number.isInteger(20)); // this will return true
console.log(Number.isInteger(20.011)); // this will return false, its a flaw
console.log(Number.isInteger('20')); // this will return false
console.log(Number.isInteger(+'20')) // this will return true
console.log(Number.isInteger(+'20X')) // this will return false
console.log(Number.isInteger(20 / 0)); // this will return false, because infinity is not a integer


// sqrt and power
console.log(Math.sqrt(25)) // this will return 5, it calculates square root
console.log(25 ** (1 / 2)) // it means 25 to the power of 1/2 (which is also square root)
console.log(8 ** (1 / 3)); // it means 8 to the power of 1/3 (which is also cubic root)

console.log(Math.max(1, 2, 3, 4, 5, 2, 3));
console.log(Math.min(1, 2, 3, 4, 5, 2, -4, 3));

console.log("--- Math.random ----")
console.log(Math.random() * 6); // this will generate a random number with decimals
console.log(Math.trunc(Math.random() * 6)); // this will remove decimal points

// Math.random if we give 6, the highest number would be 5, so we will add 1;
console.log((Math.random() * 6) + 1);
console.log(Math.trunc(Math.random() * 6) + 1);

console.log('-- genrating random number between specified numbers ----');
const randomInt = (min, max) => Math.trunc(Math.random() * (max - min) + 1) + min;
console.log(randomInt(10, 20));


console.log("--- remove decimal, Math.trunc -----");
console.log(Math.trunc(24.4)); // this will remove decimal 24
console.log(Math.trunc(24.5)); // this will remove decimal 24
console.log(Math.trunc(-24.4)); // -24
console.log(Math.trunc(-24.5)); // -24

console.log("--- Math.round -----");
console.log(Math.round(24.4)) // this will give nearest decimal point : 24
console.log(Math.round(24.5)) // this will give nearest decimal point : 25
console.log(Math.round(-24.4)) // -24
console.log(Math.round(-24.5)) // -24

console.log("--- Math.ceil -----");
// this will always point to the upper decimal
console.log(Math.ceil(24.4)) // 25
console.log(Math.ceil(24.5)) // 25
console.log(Math.ceil(-24.4)) // -24
console.log(Math.ceil(-24.5)) // -24

console.log("--- Math.floor -----");
// this will always point to the upper decimal
console.log(Math.floor(24.4)) // 24
console.log(Math.floor(24.5)) // 24
console.log(Math.floor(-24.4)) // -25
console.log(Math.floor(-24.5)) // -25

console.log("-- rounding decimals----")

console.log((2.4).toFixed(0)); // this will give string 2
console.log((2.5).toFixed(0)); // this will give string 3

console.log((2.4).toFixed(3)) // this will give string 2.400
console.log((2.5).toFixed(3)) // this will give string 2.500
console.log((2.511).toFixed(2)) // this will give string 2.51
console.log((2.541).toFixed(2)) // this will give string 2.54
console.log((2.515).toFixed(2)) // this will give string 2.52
console.log(+(2.515).toFixed(2)) // this will give "number" 2.52

console.log("-- Remainder Operator ---");

// 2) 5 (2 --> Quotient
//    4 
// -------
//    1 --> Remainder

console.log(5 % 2); // this will give remainder 1
console.log(5 / 2); // this will give quotient 2.5


console.log("-- numeric seperators --")
const diameter = 287_460_000_000
console.log(diameter) // this will ignore underscore and print only number 287460000000

const d1 = "287_460_000_000"
console.log(d1) // this will return with underscores because it is string. 287_460_000_000

const PI = 3.1_45
console.log(PI) // this will return 3.145

// the following will lead to error. Because underscore need to be place only between the numbers. if we put underscore starting of the number or ending of the number or before decimal point or immediately afer decimal point, and two underscores one after another it will lead to error

// const PI1 = _3.145
// const PI2 = 3.145_
// const PI3 = 3._145
// const PI4 = 3._145
// const PI5 = 3.1__45

console.log(Number('299_777_88')) // this will give Nan, converting string to number, this wont work
console.log(parseInt('299_777_88')) // this will parse only 299 and output is 299

console.log("-- maximum number that javascript can store safely --");

console.log(2 ** 53 - 1);             // 9007199254740991
console.log(Number.MAX_SAFE_INTEGER) // 9007199254740991

// to get more than this following need to be done

console.log("-- Big int --")

console.log(90071992547409918888) // it output wrong 90071992547409920000
console.log(90071992547409918888n) // it output correct number n 90071992547409918888n

console.log(90071992547409918888n + 1n) // this will give output 90071992547409918889n

const huge = 90071992547409918888n;
const num = 23;

// this will giv error Cannot mix BigInt and other types, use explicit conversions
// console.log(huge + num)

console.log(huge + BigInt(num)) // it will give correct output
console.log(20n > 15) // true

console.log(20n === 20) // false because both are different types
console.log(typeof (huge), typeof (num)) // it will give output bigint, number

console.log(huge + 'is Really big!!') // this will convert bigint to string 90071992547409918888is Really big!!

// math operations did not work on bigInt. error: Cannot convert a BigInt value to a number
// console.log(Math.sqrt(huge)) 

// division
console.log(11 / 3); // 3.666666666666666
console.log(11n / 3n); // 3n, it cuts off decimal, when it is bigInt

console.log("-- dates --");

const now = new Date();
console.log(now) // this will give today date in browser : Mon May 08 2023 10:15:27 GMT+0530 (India Standard Time) and 2023-05-08T04:42:43.889Z in terminal

console.log(new Date('Mon May 08 2023 10:15:27')) // browser : Mon May 08 2023 10:15:27 GMT+0530 (India Standard Time) and 2023-05-08T04:45:27.000Z in terminal

console.log(new Date('December 24, 2015')) // browser : Thu Dec 24 2015 00:00:00 GMT+0530 (India Standard Time) and 2015-12-23T18:30:00.000Z in terminal

console.log(new Date(2037, 10, 19, 15, 23, 5)) // browser : Thu Nov 19 2037 15:23:05 GMT+0530 (India Standard Time). first parameter is year, second one month, "In javascript month starts from 0. it is 0 based, so if we give 10, it shows Nov", third parameter is date, 4th is hours, 5th is minutes and 6th is seconds. In terminal : 2037-11-19T09:53:05.000Z

console.log(new Date(0)) // browser : Thu Jan 01 1970 05:30:00 GMT+0530 (India Standard Time), terminal : 1970-01-01T00:00:00.000Z

// -------------------------  //

// if we want to create 3 days after the above number then
console.log(new Date(3 * 24 * 60 * 60 * 1000)); // browser : Sun Jan 04 1970 05:30:00 GMT+0530 (India Standard Time) and in terminal : 1970-01-04T00:00:00.000Z

// 3 = number of days required
// 24 = number of hours in a day
// 60 = number of minutes in a hour
// 60 = number of seconds in a minute
// 1000 = number of milliseconds in a second

// -------------------------  //

console.log("-- working with dates --")
const future = new Date(2037, 10, 19, 15, 23);
console.log("future", future) // browser : Thu Nov 19 2037 15:23:00 GMT+0530 (India Standard Time) and in terminal : 2037-11-19T09:53:00.000Z

console.log(future.getFullYear()) // 2037
console.log(future.getMonth()) // 10 : note : in javascript month is 0 based, so here month is November
console.log(future.getDate()) // 19, it will give date of the month
console.log(future.getDay()) // 4, day of the week: example 0 is monday and 4th is tuesday
console.log(future.getHours()); // 15 : it shows 15 hours
console.log(future.getMinutes()); // 23 : it shows 23 minutes
console.log(future.getSeconds()); // 0 : it shows 0 seconds
console.log(future.toISOString()) // 2037-11-19T09:53:00.000Z
console.log("time stamp", future.getTime()) // 2142237180000, this is date converted into milliseconds
console.log(new Date(2142237180000)) // if we pass time stamp, we will get back date, browser :Thu Nov 19 2037 15:23:00 GMT+0530 (India Standard Time) and in terminal : 2037-11-19T09:53:00.000Z

console.log("today time stamp", Date.now()) // 1683525916219

console.log("-- setting dates and times --")

future.setFullYear(2040);
console.log("set year", future) // browser : Mon Nov 19 2040 15:23:00 GMT+0530 (India Standard Time), terminal : 2040-11-19T09:53:00.000Z

future.setMonth(0);
console.log("set month", future) // browser : Thu Jan 19 2040 15:23:00 GMT+0530 (India Standard Time), terminal : 2040-01-19T09:53:00.000Z

future.setDate(06);
console.log("set Date", future) // browser : Fri Jan 06 2040 15:23:00 GMT+0530 (India Standard Time), terminal: 2040-01-06T09:53:00.000Z

// this will give error : future.setDay is not a function. we cannot set day : sunday, monday etc
// future.setDay(0);
// console.log("set day", future)

future.setHours(20);
console.log("set hours", future) // browser : Fri Jan 06 2040 20:23:00 GMT+0530 (India Standard Time), terminal: 2040-01-06T14:53:00.000Z

future.setMinutes(30);
console.log("set minutes", future) // browser : Fri Jan 06 2040 20:30:00 GMT+0530 (India Standard Time), terminal: 2040-01-06T15:00:00.000Z

future.setSeconds(40);
console.log("set seconds", future) // browser: Fri Jan 06 2040 20:30:40 GMT+0530 (India Standard Time), terminal: 2040-01-06T15:00:00.000Z

console.log(Number(future)); // 2209474840000 (time stamp / milliseconds)

console.log("-- operations with dates --")

const calcDaysPassed = (date1, date2) => (Math.abs((date2 - date1) / (1000 * 60 * 60 * 24)));

const days1 = calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 24))
console.log(days1) // 10

console.log("-- Internationalizing Dates --");
const now1 = Date.now();
console.log(new Intl.DateTimeFormat('en-US').format(now1)) // 5/8/2023 ( Month, Date, Year)
console.log(new Intl.DateTimeFormat('en-GB').format(now1)) // 08/05/2023 (Date, month, Year)

// to get time

const options = {
    hour: 'numeric',
    minute: 'numeric',
    day: 'numeric',
    // month: '2-digit', // this will give 05, that means May. this is not 0 based.
    month: 'long', // this will output May, directly month
    year: 'numeric',
    weekday: 'long',
    hour12: true
}

console.log(new Intl.DateTimeFormat('en-GB', options).format(now1)) // Monday, 8 May 2023 at 10:14 pm


// ------------------------------------------------------- //

// const locale = navigator.language
// console.log(locale)

// in browser: en-GB and in ternimal it is error : navigator is not defined. This is because navigator is only available for browser not for node
// by using this code we can able to take users local timezone

// console.log(new Intl.DateTimeFormat(locale, options).format(now1)) // Monday, 8 May 2023 at 10:21 pm

// ------------------------------------------------------- //


console.log("-- format numbers --")

const num1 = 3884764.8765;
console.log("US :", new Intl.NumberFormat('en-US').format(num1)) // 3,884,764.877
console.log("GB :", new Intl.NumberFormat('en-GB').format(num1)) // 3,884,764.877

const options1 = {
    style: 'unit',
    unit: 'mile-per-hour'
}

console.log("US :", new Intl.NumberFormat('en-US', options1).format(num1)) // 3,884,764.877 mph
console.log("GB :", new Intl.NumberFormat('en-GB', options1).format(num1)) // 3,884,764.877 mph
console.log("Germany :", new Intl.NumberFormat('de-DE', options1).format(num1)) // 3.884.764,877 mi/h

console.log("-- setTimeOut --")

setTimeout(() => (console.log('Here is Your Pizza')), 1000) // after one second it will print Here is Your Pizza
setTimeout(
    (item1, item2) => (console.log(`Here is your dish ${item1} and ${item2}`)),
    2000,
    'olives',
    'spinach'
) // after two seconds it will print Here is your dish olives and spinach

console.log("-- clear setTimeOut when certain conditions met --");

const ingredients = ['Olives', 'Spinach'];

const pizzaTimer = setTimeout(
    (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2} 🍕`),
    3000,
    ...ingredients
)


if (ingredients.includes('Spinach')) {
    clearTimeout(pizzaTimer) // because condition met we clear setTimeout and it will print nothing
}


console.log("-- setInterval --");

// setInterval(() => {
//     const now = new Date();
//     console.log(now)
// }, 1000) 
// every one second it will print date


// stop this setInterval when conditon met

// let time = 10;
// const intervalId = setInterval(() => {
//     time--;
//     console.log(`Time left: ${time}`);
//     if (time === 0) {
//         clearInterval(intervalId);
//         console.log('Time is up!');
//     }
// }, 1000);
// this timer will automatically stop once it reaches 0

// problem with above timer is it is called after one second, if we want to call it immediately and after every one second, do the following below


let timer;

const startLogOutTimer = function () {
    let time = 3;
    const tick = function () {

        // When 0 seconds, stop timer and log out user
        if (time === 0) {
            clearInterval(timer);
            console.log(`Time left: ${time}`);
            console.log('Time is up!');
        } else {
            console.log(`Time left: ${time}`);
        }
        time--;
    };

    tick(); // to trigger timer immedietly without waiting 2 seconds for first time
    const timer = setInterval(tick, 2000);  // Call the timer every second

    // return timer
};

if (timer) {
    clearInterval(timer)
}

timer = startLogOutTimer()