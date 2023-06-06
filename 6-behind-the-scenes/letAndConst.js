let age = 30;
let oldAge = age;
age = 50;

console.log("age", age);
// this will print age : 50
console.log("oldAge", oldAge);
// this will print age : 30

const me = {
    name: 'Jonas',
    age: 30
}

const friend = me;

me.age = 20;

console.log("friend", friend);
// this will print age also 20;

console.log("me", me);
// this will print age: 20;


let lastName = "Williams";
let oldLastName = lastName;

console.log("names:", lastName, oldLastName);

const jessica = {
    firstName: "Jessica",
    lastName: "Williams",
    age: 27
}

const marriedJessica = jessica;
marriedJessica.lastName = "Davis";

console.log("Before Marriage", jessica);
console.log("After Marriage", marriedJessica);
// the both above will print "Davis" as lastName;

const jessica2 = {
    firstName: "Jessica",
    lastName: "Williams",
    age: 27
}

const jessicaCopy = Object.assign({}, jessica2);
// this will create a new object named jessicaCopy with same values as jessica2;

console.log("jessicaCopy", jessicaCopy)
jessicaCopy.lastName = "Davis";
console.log("Before Marriage", jessica2);
// this will print lastName : "Williams"
console.log("After Marriage", jessicaCopy);
// this will print lastName : "Davis"

//------ Object.assign has limitations, it will clone only at top level, but not in deep-------//

const jessica3 = {
    firstName: "Jessica",
    lastName: "Williams",
    age: 27,
    family: ['Alice', 'Bob']
}

const jessicaCopy2 = Object.assign({}, jessica3);
jessicaCopy2.lastName = "Davis";
jessicaCopy2.family.push("Marry");
jessicaCopy2.family.push("John");


console.log("Before Marriage: jessica3:", jessica3);
// this will print lastName : "Williams" and family as Alice', 'Bob', 'Marry', 'John
console.log("After Marriage: jessicaCopy2:", jessicaCopy2);
// this will print lastName : "Davis"and family as Alice', 'Bob', 'Marry', 'John


// This is happened because Object.assign  only clone  top level, but is array is deep nested level. to manipulate array we need third party packages like lodash