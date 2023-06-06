'use strict';

console.log(3 || "Jonas");
console.log("" || "Sunil");
console.log(true || 0);
console.log(false || 0);
console.log(0 || false);
console.log(undefined || null)
console.log(null || undefined);
console.log(undefined || 0 || "" || null)
console.log(undefined || 0 || "Hello" || "" || null);

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

console.log('----OR----');
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1)

restaurant.numGuests = 23;
const guests2 = restaurant.numGuests || 10;
console.log(guests2);

restaurant.numGuests = 0;
const guests3 = restaurant.numGuests || 10;
console.log(guests3);
console.log("----Nullish operator-----"); // Nullish : null and undefined (not inculde "0" and "");
const guests4 = restaurant.numGuests ?? 10;
console.log(guests4);

console.log('----AND----');
console.log(0 && "Jonas");
console.log(7 && "Jonas");
console.log("Hello" && 23 && null && "Jonas")


console.log('----logical assignment operators-----');
const rest1 = {
    name: "Capri",
    numGuests: 20
}

const rest2 = {
    name: "La Piazza",
    owner: "Sunil"
}

const rest3 = {
    name: "Capri",
    numGuests: 20
}

rest1.numGuests = rest1.numGuests || 10;
rest2.numGuests = rest2.numGuests || 10;

console.log(rest1);
console.log(rest2);

rest1.numGuests ||= 10;
rest2.numGuests ||= 10;

console.log(rest1);
console.log(rest2);
console.log(rest3);

console.log('---logical nullish operator----');
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;
console.log(rest2);
console.log(rest3);

console.log("---logical AND operator----");
rest1.owner &&= '<ANONYMOUS>'
rest2.owner &&= '<ANONYMOUS>'
console.log(rest1);
console.log(rest2);