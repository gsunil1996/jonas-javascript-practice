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

restaurant.orderDelivery({
    time: "22: 30",
    address: "Banglore",
    mainMenuIndex: 2,
    starterMenuIndex: 2
})

restaurant.orderDelivery({
    address: "Banglore",
})

const [first, second] = restaurant.categories;
console.log("categories:", first, second);

const [skip, , skip2] = restaurant.categories;
console.log("SkipCategories:", skip, skip2);
// this will print Italian and Vegetarian, because in arrow we are skipping one with empty ",";


// to switch categeories solution 1
let [main, , secondary] = restaurant.categories;
console.log("checkMenu", main, secondary)
const temp = main;
main = secondary;
secondary = temp;
console.log("switchItems:", main, secondary)

// solution 2 : Modren way
let [item1, , item3] = restaurant.categories;
console.log("checkItems:", item1, item3);
[item1, item3] = [item3, item1];
console.log("checkSwitchItems:", item1, item3);

// order
console.log("order", restaurant.order(2, 0));

const [starter, mainCourse] = restaurant.order(2, 0);
console.log("orderItems:", starter, mainCourse);

// nested

const nested = [2, 4, [5, 6]];

const [a, , b] = nested;
console.log("nested:", a, b);

const [i, , [j, k]] = nested;
console.log("destructureNested:", i, j, k);

const [p = 1, q = 2, r = 3] = [8, 9];
console.log("defaultValues", p, q, r);

const { name, openingHours, categories } = restaurant;
console.log("Before rename", name, openingHours, categories);

const { name: restaurantName, openingHours: hours, categories: tags } = restaurant;
console.log("After rename:", restaurantName, hours, tags);

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log("default", menu, starters);


// Mutating Variables
let c = 111;
let d = 999;

const obj = { c: 1, d: 2, e: 3 };
({ c, d } = obj);

console.log("mutatedValues", c, d);

// nestedObjects

const { fri: { open: op, close: cl } } = openingHours;
console.log(op, cl);


//------Spread operator --------------//

const arr = [7, 8, 9];
const newArr = [1, 2, ...arr];
console.log("spread array", newArr);
console.log(...newArr);

// copying new menu with existing one
const newMenu = [...restaurant.mainMenu, 'Idly'];
console.log("newMenu", newMenu);

// copy array
const newMainMenu = [...restaurant.mainMenu];

// Join two arrays
const menuCopy = [...restaurant.mainMenu, ...newMainMenu]
console.log("menuCopy", menuCopy)


// Iterables : arrays, strings, maps and sets ("not objects");

const str = "Jonas";
const letters = [...str, " ", "s."];

console.log("letters", letters);

// const ingredients = [prompt("Let's make a pasta! ingredient 1?"), prompt("ingredient 2?"), prompt("ingredient 3?")];
// console.log("ingredients", ingredients);

// restaurant.orderPasta(...ingredients);

const newRestaurant = { foundedIn: "1990", ...restaurant, founder: "Sunil" }
console.log("newRestaurant", newRestaurant)

const restaurantCopy = { ...restaurant };
restaurantCopy.name = "new Name";

console.log("restaurant", restaurant);
console.log("restaurantCopy", restaurantCopy);


// spread vs rest
const newArr1 = [1, 2, ...[3, 4]];
console.log("newArr1", newArr1);

//----- rest operator---------//

const [f, g, ...others] = [1, 2, 3, 4, 5];
console.log("restOperator", f, g, others);

const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log("checkRest", pizza, risotto, otherFood)

const { sat, ...weekdays } = restaurant.openingHours;
console.log("weekdays", weekdays);

const add = (...numbers) => {
    const sum = numbers.reduce((ac, el) => ac + el);
    console.log(sum)
}

add(2, 3);
add(2, 3, 4, 5);
add(6, 7, 8, 9);

const x = [23, 5, 7];
add(...x);


restaurant.orderPizza('mushrooms', 'onions', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');