const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

console.log(arr.reverse()); // this will reverse array and also modify original array.
console.log(arr); // since reverse() is performed, the array is modified now and this is in reverse

const arr1 = ["a", "b", "c", "d"];
const arr2 = [1, 2, 3, 4];
console.log(arr1.concat(arr2)); // this will merge two arrays and form new array. It does not modify original array
console.log(arr1)
console.log(arr2)
console.log(arr2.concat(arr1));
console.log([...arr1, ...arr2]); // this will also do same job as above
console.log(arr1.join("-")) // this will print string that join array elements with -

// At method

const arr3 = [10, 11, 12];
console.log("AT", arr3[0]);
console.log("AT", arr3.at(0)); // this is same as above
console.log(arr3[arr3.length - 1]); // this will return last element in the array
console.log(arr3.slice(-1)); // this will return last element in the array in a array
console.log(arr3.slice(-1)[0]);// this will return last element in the array
console.log(...arr3.slice(-1));// this will return last element in the array
console.log("AT", arr3.at(-1));// this will return last element in the array

// at method also works on strings
console.log("sunil".at(0));
console.log("sunil".at(-1));

// Looping
console.log("----------of loop----------------")

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const item of movements) {
    console.log(item); // this will print all elements in the array
    if (item > 0) {
        console.log(`You deposited ${item}`)
    } else {
        console.log(`You withdraw ${Math.abs(item)}`);
    }
}

console.log("------------ for each ------------")

// forEach

movements.forEach((item, index, array) => {
    if (item > 0) {
        console.log(`You deposited ${item}`)
    } else {
        console.log(`You withdraw ${Math.abs(item)}`);
    }
})

console.log("------------entries()--------------")

for (const [index, item] of movements.entries()) {
    console.log(index, item);
    if (item > 0) {
        console.log(`Movement ${index + 1} : You deposited${item}`)
    } else {
        console.log(`Movement ${index + 1} : You withdraw ${Math.abs(item)}`)
    }
}

console.log("--------Maps and sets---------------");

const currencies = new Map([
    ['USD', 'United State Dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling']
])

currencies.forEach(function (value, key, map) {
    console.log(`${key} : ${value}`);
})

const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);

currenciesUnique.forEach(function (value, key, map) {
    console.log(`${key} : ${value}`);
    // this will print USD : USD, GBP : GBP. because a set does not having keys and neither index
})
