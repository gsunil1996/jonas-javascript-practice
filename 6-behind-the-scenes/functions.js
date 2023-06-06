'use strict';

var firstName = "Sunil"

const jonas = {
    firstName: 'Jonas',
    year: 1991,
    calcAge: function () {
        console.log("jonas", this);
        // this will print jonas object
        console.log(2037 - this.year);

        const self = this;


        // solution 1
        const isMillenial = function () {
            console.log(self)
            // this will print jonas object, because in regular function inside method "this" is undefined, because we declare "this" outside and use that const here.
            console.log(self.year >= 1981 && self.year <= 1996);
        }

        isMillenial();

        // solution 2

        const isMillenial2 = () => {
            console.log("solution2", this)
            console.log(this.year >= 1981 && this.year <= 1996)
        }

        isMillenial2()

    },
    greet: () => console.log(this.firstName)
    // output is Sunil, because arrow function "this" points to global
};

jonas.calcAge();
// jonas.greet();


// Arguments

const addExpr = function (a, b) {
    console.log(arguments)
    // arguments is an inbuilt key word, that will print arguments received in this function.
    return a + b
}

addExpr(2, 3, 4, 5);

const addArrow = (a, b) => {
    console.log(arguments)
    // ReferenceError: arguments is not defined, because arrow functions do not have arguments
    return a + b;
}

addArrow(2, 3)