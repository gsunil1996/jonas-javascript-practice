"use strict";

// calling function inside another function

// const cutPieces = function (fruit) {
//     return fruit * 4;
// }

// const fruitProcesser = function (apples, oranges) {
//     const applePieces = cutPieces(apples);
//     const orangePieces = cutPieces(oranges);

//     const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
//     return juice;
// }

// console.log(fruitProcesser(2, 3));

//---------------------------------------------------------------------------------------------------------//

// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }

// const yearsUntillRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     return retirement;
// }

// console.log(yearsUntillRetirement(1991));

//--------------------------------------------------------------------------------------------------------//

// const dolphinsScore = [44, 23, 71];
// const koalasScore = [65, 54, 49];

// const calculateAverage = (arr) => {
//     const sum = arr.reduce((ac, el) => ac + el, 0);
//     return sum / arr.length;
// }

// const checkWinner = (dolphinsScore, koalasScore) => {
//     const dolphinsScoreAverage = calculateAverage(dolphinsScore);
//     const koalasScoreAverage = calculateAverage(koalasScore);
//     console.log(dolphinsScoreAverage, koalasScoreAverage);
// }

// checkWinner(dolphinsScore, koalasScore)

//------------------------------------------------------------------------------------------------------//

// const arr1 = [1991, 1992, 1993];
// const arr2 = new Array(1991, 1992, 1993);

// console.log("arr1 :", arr1);
// console.log("arr2 :", arr2);

// arr2[1] = 1994;
// console.log("arr2 :", arr2);

//------------------------------------------------------------------------------------------------------//

// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// const bills = [125, 555, 44];

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// console.log(tips);

//------------------------------------------------------------------------------------------------------//

// const jonas = {
//     firstName: "Jonas",
//     lastName: "Schmedtmann",
//     age: 2037 - 1991,
//     job: "teacher",
//     friends: ["Michael", "Peter", "Steven"],
// }

// console.log(jonas);
// console.log(jonas.firstName);
// console.log(jonas['firstName']);

// const nameKey = "Name";

// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);

// // const intrestedIn = prompt('what do you want to know about Jonas? Choose between firstName, lastName, age, job and friends');

// // console.log(jonas[intrestedIn])

// jonas.location = 'Portugal';
// jonas['twitter'] = '@jonasSchmedtmann';

// console.log(jonas);

//------------------------------------------------------------------------------------------------------//

// const jonas = {
//     firstName: "Jonas",
//     lastName: "Schmedtmann",
//     age: 2037 - 1991,
//     birthYear: 1991,
//     job: "teacher",
//     friends: ["Michael", "Peter", "Steven"],
//     hasDriverLicence: true,
//     calcAge: function (birthYear) {
//         return 2037 - birthYear;
//     }
// }

// console.log(jonas.calcAge(1991));
// console.log(jonas['calcAge'](1991));
// console.log(jonas.calcAge(jonas.birthYear));

//------------------------------------------------------------------------------------------------------//

// const jonas = {
//     firstName: "Jonas",
//     lastName: "Schmedtmann",
//     age: 2037 - 1991,
//     birthYear: 1991,
//     job: "teacher",
//     friends: ["Michael", "Peter", "Steven"],
//     hasDriverLicence: true,

//     // calcAge: function (birthYear) {
//     //     return 2037 - birthYear;
//     // }

//     calcAge: function () {
//         return 2037 - this.birthYear;
//     }
// }

// console.log(jonas.calcAge());

//------------------------------------------------------------------------------------------------------//

// const jonas = {
//     firstName: "Jonas",
//     lastName: "Schmedtmann",
//     age: 2037 - 1991,
//     birthYear: 1991,
//     job: "teacher",
//     friends: ["Michael", "Peter", "Steven"],
//     hasDriverLicence: true,

//     // calcAge: function (birthYear) {
//     //     return 2037 - birthYear;
//     // }

//     // calcAge: function () {
//     //     return 2037 - this.birthYear;
//     // }

//     calcAge: function () {
//         this.age = 2037 - this.birthYear;
//         return this.age
//     }
// }

// console.log(jonas.age);

//------------------------------------------------------------------------------------------------------//

// const jonas = [
//     "Jonas",
//     "Schmedtmann",
//     2037 - 1991,
//     "teacher",
//     ["Michael", "Peter", "Steven"],
//     true
// ]

// const types = [];

// for (var i = 0; i < jonas.length; i++) {
//     // types[i] = typeof (jonas[i])
//     // types.push(typeof (jonas[i]));
//     types.unshift(typeof (jonas[i]));
// }

// console.log(types);
// console.log(jonas)

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     ages.push(2022 - years[i]);
// }

// console.log("ages", ages)

//------------------------------------------------------------------------------------------------------//

// const jonas = [
//     "Jonas",
//     "Schmedtmann",
//     2037 - 1991,
//     "teacher",
//     ["Michael", "Peter", "Steven"],
//     true
// ]

// console.log("------ONLY STRINGS---------")
// for (let i = 0; i < jonas.length; i++) {
//     if (typeof (jonas[i]) !== "string") {
//         continue;
//     }
//     console.log(jonas[i], typeof (jonas[i]));
// }

// console.log("------ONLY NUMBERS---------")
// for (let i = 0; i < jonas.length; i++) {
//     if (typeof (jonas[i]) === "number") {
//         break;
//     }
//     console.log(jonas[i], typeof (jonas[i]));
// }

//------------------------------------------------------------------------------------------------------//

// FOR LOOP AND WHILE LOOP

// for (var i = 0; i < 5; i++) {
//     console.log(i, "for loop")
// }

// let j = 0;
// while (j < 5) {
//     console.log(j, "while loop");
//     j++
// }

//------------------------------------------------------------------------------------------------------//

// let dice = Math.trunc((Math.random() * 6) + 1);
// // console.log(dice);

// while (dice !== 6) {
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc((Math.random() * 6) + 1);
//     if (dice === 6) {
//         console.log('Loop is about to end.....')
//     }
// }

//------------------------------------------------------------------------------------------------------//

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const calculateAverage = (arr) => {
    const sum = arr.reduce((ac, el) => ac + el, 0);
    return sum / arr.length;
}

const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(calcTip(bills[i]) + bills[i]);
}

console.log(tips, "tips");
console.log(totals, "totals");
console.log("average bills :", calculateAverage(bills), "average tips :", calculateAverage(tips), "average totals :", calculateAverage(totals));

//------------------------------------------------------------------------------------------------------//
