'use strict';

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order: function (starterMenuIndex, mainMenuIndex) {
        return [this.starterMenu[starterMenuIndex], this.mainMenu[mainMenuIndex]];
    },
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },
    orderDelivery: function ({ time = "22:00", address, mainMenuIndex = 0, starterMenuIndex = 1 }) {
        console.log(`Order received! ${this.starterMenu[starterMenuIndex]} and ${this.mainMenu[mainMenuIndex]} will be delivered to ${address} at ${time}`);
    },
    orderPasta: function (ing1, ing2, ing3) {
        console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
    },
    orderPizza: function (mainIngredient, ...otherIngredients) {
        console.log("mainIngredient", mainIngredient);
        console.log("otherIngredients", otherIngredients);
    }
}

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) {
    console.log(item)
}

for (const item of menu.entries()) {
    console.log("entries", item)
}

for (const item of menu.entries()) {
    console.log(`${item[0] + 1} : ${item[1]}`);
}

for (const [i, el] of menu.entries()) {
    console.log(`${i + 1} : ${el}`);
}