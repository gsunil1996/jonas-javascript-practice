// run a function only one time

// Immediately invoked function expression
(function () {
    console.log("This function run only once")
})();

(() => console.log("This function will also run only once"))();

const secureBooking = function () {
    let passengerCount = 0;
    return function () {
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    }
}

const booker = secureBooking();

booker();
booker();
booker();


let f;
const g = function () {
    const a = 23;
    f = function () {
        console.log(a * 2)
    }
}

const h = function () {
    const b = 777;
    f = function () {
        console.log(b * 2)
    }
}

g()
f()

// re-assigning f function
h()
f()

const boardPassengers = function (n, wait) {
    const perGroup = n / 3;
    // If we comment this line , line 52, peerGroup first check in function, if not found, it check in global level. In global level const perGroup = 1000 is there, so 1000 will be printed.

    setTimeout(() => {
        console.log(`we are boardinga all ${n} passengers`);
        console.log(`There are 3 groups, with each with ${perGroup} passengers`);
    }, wait * 1000)

    console.log(`we start boarding in ${wait} seconds`)
}

const perGroup = 1000;
boardPassengers(180, 3)

