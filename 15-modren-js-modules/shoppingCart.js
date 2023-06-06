'use strict';

// Exporting module
console.log('Exporting module');

// blocking code
console.log('start fetching users');
await fetch(`https://jsonplaceholder.typicode.com/users`); // this will block the code, because we are using this outside of the async
console.log('finish fetching users');

const shippingCost = 10;
export const cart = [];

export const addToCart = (product, quantity) => {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
}

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as tq };


// we can able to default export entire function itself
export default (product, quantity) => {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
}

