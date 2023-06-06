function removeItemOnce(arr, value) {
    var index = arr.indexOf(value);
    if (index > -1) {
        arr.splice(index, 1);
    }
    return arr;
}

function removeItemAll(arr, value) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == value) {
            arr.splice(i, 1);
        }
    }
    return arr;
}
// Usage
console.log(removeItemOnce([2, 5, 9, 1, 5, 8, 5], 5))
console.log(removeItemAll([2, 5, 9, 1, 5, 8, 5], 5))