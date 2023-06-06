'use strict';

console.log(this);
// This will ouptput : {}. because this is an empty object in javascript

const calcAge = function (birthYear) {
    console.log(2037 - birthYear);
    console.log(this);
    // this will give output as undefined
}

calcAge(1991);

const calcAgeArrow = birthYear => {
    console.log(2037 - birthYear);
    console.log(this);
    // this will give output as {}.
}

calcAgeArrow(1980);


const jonas = {
    year: 1991,
    calcAge: function () {
        console.log("jonas", this);
        // this will print jonas object
        console.log(2037 - this.year);
    }
}

jonas.calcAge();


const matilda = {
    year: 2017
}

matilda.calcAge = jonas.calcAge;
// In this we are copying calcAge function from jonas object to matilda object

console.log("matilda", matilda)
matilda.calcAge()