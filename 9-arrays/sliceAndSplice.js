const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

console.log(arr.slice(2));
console.log(arr.slice(2, 4)); // difference is 4-2 = 2. the starting index is 2, so from 2nd index 2 elements are returned.
console.log(arr.slice(-2)); // -2 returns last 2 elements and -1 retruns last 1 element
console.log(arr.slice(1, -1)) // it will returns all elements in the array except 1st and last element;
console.log(arr.slice(1, -2)) // this returns all elements in the array except  1st element and last 2 elements in the array
console.log(arr.slice(2, -2)) // this returns all elements in the array except 1st two elements and last two elements in the array;
console.log("edgeCase1", arr.slice(-4, -2)); // it takes 4th element from last as per first parameter and 3rd parameter from last. it takes 3rd parameter from last because the number is given negitive it will go one step forward. // output : d,e
console.log("edgeCase2", arr.slice(-2, -4)); // this will return an empty array
console.log("check", arr.slice(1, 1)); // this will return as an empty array, since slice works it start from 1st index specified and go untill last but one element specified. here it starts from index1 and it try to go to index0, that is not possible
console.log("check2", arr.slice(-1, -1)); // this will return empty array
console.log("check3", arr.slice(-1, 1));  // this will return empty array

console.log(arr.slice()) // this will make a new copy of the arr, this is same as spread operator as shown in example below
console.log([...arr]);


// splice
var arr1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

console.log("splice", arr1.splice(2)); // this will remove all elements in the array except first two and create a new array with the rest of the elements. This is modifying array.
console.log("splice", arr1); // since we used splice, this array contain only two elements a,b;

var arr2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
console.log("splice2", arr2.splice(-1)); // this will take out last element in the array and create a new array with that last element
console.log("splice2", arr2);

var arr3 = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
console.log("splice3", arr3.splice(1, 4)); // this will take elements from index1 to index4 and create new array
console.log("splice3", arr3)

var arr4 = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
console.log("splice4", arr4.splice(1, -2)) // this will return empty array because it wont have this type of operation, as it wont accept negitive second parameter
console.log("splice4", arr4);


var arr5 = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
console.log("splice5", arr5.splice(-4, -2)) // this will return empty array because it wont have this type of operation, as it wont accept both first and second negitive parameters
console.log("splice5", arr5)