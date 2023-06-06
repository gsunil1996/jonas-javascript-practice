console.log("set", new Set());
const orderSet = new Set([
    'Pasta',
    'Pizza',
    'Pizza',
    'Risotto',
    'Pasta',
    'Pizza',
])

console.log("orderSet", orderSet);
console.log(new Set("Sunil"));
console.log(new Set("Sunil").size);
console.log("setLength", orderSet.size);

console.log(orderSet.has("Pizza"));
console.log(orderSet.has("Bread"));

orderSet.add("Garlic Bread");
orderSet.add("Garlic Bread");
console.log("orderSet", orderSet);

orderSet.delete("Risotto");
console.log("orderSet", orderSet);

for (const order of orderSet) {
    console.log("order", order)
}

orderSet.clear();
console.log("orderSet", orderSet);

const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter'];
let staffUnique = [...new Set(staff)];
console.log("staffUnique", staffUnique)