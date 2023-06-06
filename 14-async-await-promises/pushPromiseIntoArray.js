const promises = [];

// Create a function that returns a promise
function createPromise(value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(value);
        }, 1000);
    });
}

// Push promises into the array
promises.push(createPromise(1));
promises.push(createPromise(2));
promises.push(createPromise(3));

// Use Promise.all to wait for all promises to resolve
Promise.all(promises)
    .then(results => {
        // Log the results from the array
        console.log(results);
    })
    .catch(error => {
        // Handle any errors
        console.error(error);
    });
console.log("promises", promises)