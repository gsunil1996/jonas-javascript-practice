const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};

const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};

const accounts = [account1, account2, account3, account4];

const bankDepositSum = accounts.flatMap(item => item.movements).filter(item => item > 0).reduce((ac, el) => ac + el, 0);
console.log(bankDepositSum)


const CountDepositsAbove1000 = accounts.flatMap(item => item.movements).filter(item => item > 1000).length;
console.log(CountDepositsAbove1000);

// above can also be written like this
const depositAbove1000 = accounts.flatMap(item => item.movements).reduce((ac, el) => el > 1000 ? ac + 1 : ac, 0);
console.log(depositAbove1000)

// ++ operator working

var a = 10;
console.log("postIncrement", a++); // this result in 10, because ++ is after variable, at this stage it does not update variable, if we console.log below we can see the updated result. This is because of postIncrement
console.log("postIncrement", a);

var b = 10;
console.log("preIncrement", ++b); // this results in 11, because ++ is before variable and it will update variable immediately
console.log("preIncrement", b);


const postIncrement = accounts.flatMap(item => item.movements).reduce((ac, el) => el > 1000 ? ac++ : ac, 0);
console.log("ReducepostIncrement", postIncrement) // this will give result 0;

const preIncrement = accounts.flatMap(item => item.movements).reduce((ac, el) => el > 1000 ? ++ac : ac, 0);
console.log("ReducePretIncrement", preIncrement) // this will give result 5

console.log("---- Advance use case of reduce -----");

const sums = accounts.flatMap(item => item.movements).reduce((ac, el) => {
    el > 0 ? (ac.deposits += el) : (ac.withdrawls += el);
    return ac
}, { deposits: 0, withdrawls: 0 });

console.log("AdvanceReduceMethodUse", sums)

// the above can also written like this in destructure mode
const { deposits, withdrawls } = accounts.flatMap(item => item.movements).reduce((ac, el) => {
    el > 0 ? (ac.deposits += el) : (ac.withdrawls += el);
    return ac
}, { deposits: 0, withdrawls: 0 });

console.log("AdvanceReduceMethodUse", deposits, withdrawls)

// the above code can also written like this one more destructuring;

const { deposits1, withdrawls1 } = accounts.flatMap(item => item.movements).reduce((ac, el) => {
    // el > 0 ? (ac.deposits1 += el) : (ac.withdrawls1 += el);
    ac[el > 0 ? "deposits1" : "withdrawls1"] += el;
    return ac
}, { deposits1: 0, withdrawls1: 0 });

console.log("AdvanceReduceMethodUse", deposits1, withdrawls1);

console.log("--- change case -----")
let firstLetterCapital = "sUniL"

for (var i = 0; i < firstLetterCapital.length; i++) {
    firstLetterCapital = firstLetterCapital[0].toUpperCase() + firstLetterCapital.slice(1).toLocaleLowerCase();
};

console.log(firstLetterCapital)

const convertTitleCase = function (title) {

    const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

    // const titleCase = title.toLowerCase().split(" ").map(item => item[0].toUpperCase() + item.slice(1));
    // return titleCase

    const titleCase = title.toLowerCase().split(" ").map(item => exceptions.includes(item) ? item : item[0].toUpperCase() + item.slice(1)).join(" ");
    return titleCase

};

console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));


// the above code can also be written like this

console.log("---- code 2 -----")

const convertTitleCase1 = function (title) {
    const capitalize = str => str[0].toUpperCase() + str.slice(1);

    const exceptions1 = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

    const titleCase1 = title.toLowerCase().split(" ").map(item => exceptions1.includes(item) ? item : capitalize(item)).join(" ");
    return capitalize(titleCase1);
};

console.log(convertTitleCase1('this is a nice title'));
console.log(convertTitleCase1('this is a LONG title but not too long'));
console.log(convertTitleCase1('and here is another title with an EXAMPLE'));

