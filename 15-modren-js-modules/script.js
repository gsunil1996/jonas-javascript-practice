'use strict';

// importing module
console.log('Importing module');

/////////////////////////////////////////////////////////////////////////////////////////

// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';

// addToCart('breads', 5);
// console.log(price, tq);

/////////////////////////////////////////////////////////////////////////////////////////

// import * as shoppingCart from "./shoppingCart.js";

// import add, { addToCart, totalPrice as price, tq, cart } from "./shoppingCart.js"; // we can give any name here, because in default export we directly exported unnamed function


// shoppingCart.addToCart('breads', 5);

// addToCart('breads', 5);
// console.log(price, tq);
// add('pizzas', 10);
// console.log(cart);


/////////////////////////////////////////////////////////////////////////////////////////

// // top level await
// // we can able to use await outside of async function, but in our script file it should be mentioned that type=module

// console.log("Start fetching")
// // Note: without using async, this await will block the code
// const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
// const data = await res.json();
// console.log(data);
// console.log("end fetching")

/////////////////////////////////////////////////////////////////////////////////////////

// const getLastPost = async function () {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//     const data = await res.json();
//     // console.log(data);
//     return { title: data.at(-1).title, text: data.at(-1).body } // this will return element in array at end
// }

// const lastPost = getLastPost();

// console.log(lastPost) // this will be promise pending, because we are store we are calling async function and fetch inside it. it always returns a promise. Note: console.log will work here, but not return;

// lastPost.then(item => console.log(item)) // here you can see the results

// // we can also do the above code like this;
// const lastPost2 = await getLastPost();
// console.log(lastPost2);

/////////////////////////////////////////////////////////////////////////////////////////

// immediately invoked function expression

// const shoppingCart2 = (function () {
//     const cart = [];
//     const shippingCost = 10;
//     const totalPrice = 237;
//     const totalQuantity = 23;

//     const addToCart = function (product, quantity) {
//         cart.push({ product, quantity });
//         console.log(`${quantity} ${product} added to cart and shipping cost is ${shippingCost}`);
//     }

//     const orderStock = function (product, quantity) {
//         console.log(`${quantity} ${product} ordered from supplier`);
//     };

//     return {
//         addToCart,
//         cart,
//         totalPrice,
//         totalQuantity
//     }
// })()

// shoppingCart2.addToCart('apple', 4);
// shoppingCart2.addToCart('pizza', 2);
// console.log(shoppingCart2);
// console.log(shoppingCart2.shippingCost); // this will be undefied because we are not returning the value

/////////////////////////////////////////////////////////////////////////////////////////

// // node js import and export
// // the below code will not show in browser, but it will work in node.js

// // export 
// module.addTocart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product} added to cart and shipping cost is ${shippingCost}`);
// }

// // import
// const { addTocart } = require('./shoppingCart')

/////////////////////////////////////////////////////////////////////////////////////////

