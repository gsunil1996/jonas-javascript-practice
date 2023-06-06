let arr = [6, 1, 2, 3, 4, 4, 5, 1];
arr = [...new Set(arr)];
console.log(arr); // this will return an array [6, 1, 2, 3, 4, 5 ]