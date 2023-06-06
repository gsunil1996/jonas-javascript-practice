// differece between map and forEach are map returns new array and it wont modify existing array, but forEach do not return new array, it will make changes in existing array

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log("------map-------")
const euroToUsd = 1.1;
const movementsUsd = movements.map((item) => item * euroToUsd);
console.log(movementsUsd)


console.log("----- Map with index -----")
const movementsDescriptions = movements.map((item, index) => {
    if (item > 0) {
        return (`Movement ${index + 1}: You deposited ${item}`)
    } else {
        return (`Movement ${index + 1}: You withdrew ${Math.abs(item)}`);
    }
})

console.log(movementsDescriptions); // this will return an array


// we can also write the above code like this
const movementsDescriptions1 = movements.map((item, index, array) => `Movement ${index + 1}: You ${item > 0 ? 'deposided' : 'withdrew'} ${Math.abs(item)}`)
console.log(movementsDescriptions1);

console.log("---- User name -------");

const user = 'Steven Thomas Williams';
const username = user.toLocaleLowerCase().split(" ").map(item => item[0]).join('');
console.log(username);
console.log(user) // here you can see the origin string wont modified, because map returns new string.

console.log("--- map with array of numbers ----")
const numArr = [1, 2, 3, 4, 5];
var doubleNum = numArr.map(item => item * item);
console.log(doubleNum);
console.log(numArr)// here you can see the origin array wont modified, because map returns new array.

console.log("----- forEach start ----------");
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

console.log("----- before forEach ----------");
console.log(accounts)

const forEachWorking = (accounts) => {
    accounts.forEach((item) => item.owner = "sunil");
}
forEachWorking(accounts)

console.log("----- after forEach ----------");
console.log(accounts) // now you can see, we modified the original array data by using forEach method, now in all objects in array owner changed to sunil

console.log("----- understand ForEach End----------");


const account5 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};

const account6 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

const account7 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account8 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};

const accountsTest = [account5, account6, account7, account8];

console.log("----- combine both forEach and map functions -----")
const createUserNames = (accountsTest) => {
    // here we are creating new userName property in existing array and giving it a name of fist letter of owner in that array
    accountsTest.forEach(item => item.username = item.owner.toLocaleLowerCase().split(" ").map(item => item[0]).join(""));
}
createUserNames(accountsTest);
console.log(accountsTest);


/////// Filter //////////////

// filter always returns an array of elements that satisfies the condition
const deposits = movements.filter(item => item > 0);
console.log("deposits", deposits);

const withDrawls = movements.filter(item => item < 0);
console.log("withDrawls", withDrawls)

////////// reduce ////////////////////

// ac means accumulator, el means current element, index = index and arr = array
// the last 0 is initial value
// arr is current array on which we are looping
const balance = movements.reduce((ac, el, index, arr) => ac + el, 0)
console.log("balance", balance);

const checkingReduce = movements.reduce((ac, el, index, arr) => {
    console.log(`${ac}-${el}-${index}- Array : ${arr}`);
    return ac + el
}, 0)

const sumMoments = movements.reduce((ac, el) => ac + el, 0);
console.log(sumMoments)

const prodMoments = movements.reduce((ac, el) => ac * el, 1);
console.log(prodMoments)

/// reduce finding max and min in array

const max = movements.reduce((ac, el) => ac > el ? ac : el, movements[0]);
console.log(max)

const min = movements.reduce((ac, el) => ac < el ? ac : el, movements[0]);
console.log(min);

console.log("--- checking results step by step------");

const EuroToUsd = 11;

const totalDeposits = movements.filter((item, index, arr) => {
    console.log("checkFilter", item, index, arr)
    return item > 0
}).map((item, index, arr) => {
    console.log("checkMap", item, index, arr);
    return item * EuroToUsd;
}).reduce((ac, el, index, arr) => {
    console.log("checkReduce", ac, el, index, arr);
    return ac + el
}, 0)

console.log(totalDeposits)

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

console.log("----- Coding challange 2-----")

function calcAverageHumanAge(arr) {
    const humanAges = arr.map(item => item <= 2 ? 2 * item : 16 + item * 4).filter(item => item > 18);
    const average = humanAges.reduce((ac, el, index, arr) => ac + el, 0) / humanAges.length;
    console.log(humanAges);
    console.log(average);

    // the above method can also done like this. average can also calculated as : item1/arr.length + item2/ arr.length = (item1 + item2)/ arr.length;

    const averageAges = arr.map(item => item <= 2 ? 2 * item : 16 + item * 4).filter(item => item > 18).reduce((ac, el, index, arr) => ac + el / arr.length, 0)
    console.log(averageAges);
}
calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);

console.log("---- find method -----");

// find method returns the first element in the array that satisfies the condition.

const firstWithdrawl = movements.find(item => item < 0);

console.log(movements);
console.log(firstWithdrawl); // this will return -400, because first element in the array that matches condition less than 0;

console.log(accountsTest);
const jessicaAccount = accountsTest.find(item => item.owner === "Jessica Davis");
console.log(jessicaAccount)

console.log("---- Includes, some and every -------")
const testArr = [5000, 3400, -150, -790, -3210, -1000, 8500, -30];

// includes check equality, that is, if that paticular element is present there or not and return a boolean value;
console.log("includes", testArr.includes(-150))

// some check the condition and return boolean (true) value if any one element in the array satisfies condition else return fasle
const anyDeposit = testArr.some(item => item > 500);
console.log("some", anyDeposit);
console.log("some", testArr.some(item => item < 0))

// every check the condition and return boolean(true) value if all the elements in the array satisfies condition else return false
console.log("every", testArr.every(item => item > 0));
console.log("every", testArr.every(item => item > -4000));


// call back functions of these methods for reusability

const deposit = item => item > 0;

console.log("some in callback", testArr.some(deposit));
console.log("every in callback", testArr.every(deposit));
console.log("filter in callback", testArr.filter(deposit));

console.log("---- flat and flatmap -----");

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log("flat", arr.flat()); // this will give all elements in a single array

const arrDeep = [[1, [2, 3]], [4, [5, 6]], 7, 8];
console.log("flat", arrDeep.flat())
console.log("flat", arrDeep.flat(2)) // the above array is nested in two depths, so in flat we need to pass how many depts the array will contain

const accountMovements = accountsTest.map(acc => acc.movements);
console.log(accountMovements);
const allMoments = accountMovements.flat();
console.log(allMoments);

const overallBalance = accountsTest.map(acc => acc.movements).flat().reduce((ac, el) => ac + el, 0);
console.log(overallBalance)

console.log("----- Flat Map ------");
// flatmap will go only one level, it wont work on multiple levels. Flat map combines both flat and map method, the above example can be also solved like below

const overallBalance1 = accountsTest.flatMap(acc => acc.movements).reduce((ac, el) => ac + el, 0);
console.log(overallBalance1)


console.log("--- Sorting -----");

// for stings sorting will be
const owners = ["Jonas", "Zach", "Adam", "Martha"];
console.log("sorting Strings", owners.sort());

// for numbers sorting will be
const nums = [8, 5, 9, 10, -16];
console.log("Sorting Numbers in accending order", nums.sort((a, b) => a - b));
// In the above sorting method, a is the current value and b is the next value

console.log("Sorting Numbers in decending order", nums.sort((a, b) => b - a));
// In the above sorting method, b is the next value and a is the current value, we are comparing next value with current value

console.log("---- new ways of creating arrays -----")
console.log(new Array()) // this will create an empty array
const arrTest = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(new Array(1, 2, 3, 4, 5, 6, 7)); // this will create an element contains all the elements
console.log(new Array(5)) // this will be [ <5 empty items> ], which is not all useful. It does not create a single element array

console.log("--- fill method ----");

const arrTest1 = [1, 2, 3, 4, 5, 6, 7, 8]

arrTest1.fill(100, 2, 5); // fill is just like splice method,
// first parameter is 100, which we need to fill array( replace with another elements present in array )
// second and third parametes are those which we need to modify, in this example it will start from index 2 and go to 5-1 = 4th index, from 2nd index to 4th index it will modify the array by replacing other elements in the array to 100;

console.log(arrTest1)

const arrTest2 = [1, 2, 3, 4, 5, 6, 7, 8];
arrTest2.fill(200, 2);
console.log(arrTest2) // in this example, if we didnt specify third parameter, it starts from second parameter index and fill upto end with first parameter

const y = Array.from({ length: 8 }, () => 4); // this will create an array of 8 elements that filled with 4;
console.log(y);

const z = Array.from({ length: 8 }, (item, index) => index + 1); // in this call back is same as map. it will retun 1 to 8 in array;
console.log(z);

const a = Array.from({ length: 8 }, (item, index) => {
    console.log(item, index);
    return index + 1
});
console.log(a);

const b = Array.from({ length: 8 }, (_, index) => index + 1);
// if we dont have item or parameter in callback, we need to give _ there.
console.log(b);