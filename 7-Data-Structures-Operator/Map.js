console.log(new Map());
const rest = new Map();

rest.set("name", "Classic Italiano");
console.log(rest);

rest.set(1, "France, japan");
console.log(rest);

rest
    .set("Categories", ["Italian", "Pizzerea", "Vegetarian", "Organic"])
    .set("open", 11)
    .set("close", 23)
    .set(true, "We are open")
    .set(false, "We are close")

console.log(rest)

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 22;

console.log(rest.get(time > rest.get("open") && time < rest.get("close")));
console.log(rest.has('Categories'))
rest.delete(1);
console.log(rest)
console.log(rest.size)

rest.set([1, 2], "Test")
console.log(rest.get([1, 2])) // it will be undefined, because the way we array use it in here

const arr = [3, 4];
rest.set(arr, "TEST");
console.log("check rest", rest);
// rest.set(document.querySelector('h1'), 'Heading');
console.log(rest.get(arr));

console.log("Main rest", rest)

rest.clear();
console.log(rest)

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

const question = new Map([
    ['question', 'What is the best programming language in the world'],
    [1, "C"],
    [2, "Java"],
    [3, "Javascript"],
    ['correct', 3],
    [true, 'Correct'],
    [false, 'try again!']
])

console.log("question", question);

console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log("hoursMap", hoursMap);

// quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
    // console.log(key, value)
    if (typeof (key) === 'number') {
        console.log(`Answer ${key}: ${value}`);
    }
}

// const answer = Number(prompt('Your answer'));
// console.log(answer)
const answer = 3;
console.log(question.get(question.get('correct') === answer));

// converting map into array
console.log("mapToArray", [...question]);
console.log("entries", question.entries());
console.log("entries1", [...question.entries()]);
console.log("keys", [...question.keys()]);
console.log("values", [...question.values()]);