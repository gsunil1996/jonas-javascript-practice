'use strict';

const weekdays = ["mon", "tue", "wed", "thr", "fri", "sat", "sun"];

const openingHours = {
    [weekdays[3]]: {
        open: 12,
        close: 22,
    },
    [weekdays[4]]: {
        open: 11,
        close: 23,
    },
    [weekdays[5]]: {
        open: 0, // open 24 hours
        close: 24,
    },
}

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order(starterMenuIndex, mainMenuIndex) {
        return [this.starterMenu[starterMenuIndex], this.mainMenu[mainMenuIndex]];
    },
    openingHours,
    orderDelivery({ time = "22:00", address, mainMenuIndex = 0, starterMenuIndex = 1 }) {
        console.log(`Order received! ${this.starterMenu[starterMenuIndex]} and ${this.mainMenu[mainMenuIndex]} will be delivered to ${address} at ${time}`);
    },
    orderPasta(ing1, ing2, ing3) {
        console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
    },
    orderPizza(mainIngredient, ...otherIngredients) {
        console.log("mainIngredient", mainIngredient);
        console.log("otherIngredients", otherIngredients);
    }
}

console.log(restaurant)

const days = ["mon", "tue", "wed", "thr", "fri", "sat", "sun"];

for (const day of days) {
    // console.log("day", day)
    const open = restaurant.openingHours[day]?.open ?? "closed"
    console.log(`On ${day}, we are ${open}`)

}

// Methods
console.log(restaurant.order?.(0, 1) ?? "Method does not exist");
console.log(restaurant.orderTest?.(0, 1) ?? "Method does not exist");

// Arrays
const users = [{ name: "Sunil", email: "Sunil@email.com" }];
console.log(users[0].name ?? "User array empty");

// looping objects;


// Property Names
const properties = Object.keys(openingHours);
console.log("properties", properties);

let openStr = `We are open on ${properties.length} days: `

for (const day of properties) {
    console.log("objectDay", day);
    openStr += `${day} `
}

console.log("openStr", openStr);

// Property Values
const values = Object.values(openingHours);
console.log("values", values);

// Entire Object
const entries = Object.entries(openingHours);
console.log("entries", entries);

for (const x of entries) {
    console.log("entrie object loop", x)
}

for (const [keys, value] of entries) {
    console.log(keys, ":", value, "checkKeyValue")
}

for (const [key, { open, close }] of entries) {
    // console.log(key, open, close, "checkOpenClose");
    console.log(`On ${key} we open at ${open} and close at ${close}`)
}

