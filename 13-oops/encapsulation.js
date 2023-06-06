// methods for private class fields and methods

// Public fields
// Private fields
// Public methods
// Private methods


class Account {

    // public fields : These are present in all "instances" in class, not in prototype
    locale = navigator.language; // semicolan should be must for public fields

    // private fields : these are not accessable outside the class
    #movements = [];
    #pin; // it points to undefined, but later inside the constructor we are setting value

    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;

        // private fields start
        this.#pin = pin;
        // private fields end

        console.log(`Thanks for opening an account, ${owner}`); // Thanks for opening an account, Jona
    }

    // public interface (API) / Public methods
    getMoments() {
        console.log("get moments", this.#movements)
        return this.#movements;
    }

    deposit(val) {
        this.#movements.push(val);
        return this; // this we are using because of prototype chaining. because every time we need to return entire class
    }

    withdraw(val) {
        this.deposit(-val); // we can use another methods inside it
        return this;
    }


    requestLoan(val) {
        if (this.#approveLoan(val)) {
            this.deposit(val);
            console.log(`Loan Approved`)
            return this;
        }
    }

    getApprovedLoadStatus() {
        console.log("approveLoan", this.#approveLoan()) // true
    }


    // private methods
    #approveLoan(val) {
        return true;
    }

    // static method
    static helper() {
        console.log("Static Helper")
    }

}

const acc1 = new Account('Jonas', 'EUR', 1111);
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
acc1.getApprovedLoadStatus(1000); // true  // we can able to access private methods like this by calling methods
acc1.getMoments() //  [250, -140, 1000] // we can able to access private fields like this by calling methods
console.log(acc1)  // Account {locale: 'en-GB', #movements: Array(3), owner: 'Jonas', currency: 'EUR', #pin: 1111}
// now locale and-moments are became public fields

// static
Account.helper() // Static Helper

console.log("-- chaining methods --");

acc1.deposit(300).deposit(500).withdraw(35).requestLoan(2500).withdraw(4000); // Loan Approved
acc1.getMoments() // [250, -140, 1000, 300, 500, -35, 2500, -4000]


console.log("-- coding example --")

class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }
    acclerate() {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/h`)
    }
    brake() {
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/h`)
        return this; // because we are using chaining method on it
    }

    // getters
    get speedUS() {
        return this.speed / 1.6;
    }

    // setters
    set speedUS(speed) {
        this.speed = speed * 1.6
    }
}

class EVCl extends CarCl {

    // private field
    #charge;

    constructor(make, speed, charge) {
        super(make, speed);
        this.#charge = charge
    }

    chargeBattery(chargeTo) {
        this.#charge = chargeTo
        return this; // because we are using chaining method on it
    }
    acclerate() {
        this.speed += 20;
        this.#charge--;
        console.log(`${this.make} is going at ${this.speed} km/hr, with a charge of ${this.#charge}`);
        return this; // because we are using chaining method on it
    }
}

const tesla = new EVCl('Tesla', 120, 23);
console.log(tesla)
tesla.acclerate().acclerate().acclerate().brake().chargeBattery(50).acclerate(); // Tesla is going at 195 km/hr, with a charge of 49

console.log(tesla.speedUS); // 121.875 : getter method