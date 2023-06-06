var me = 'Sunil';
let job = 'teacher';
const year = 1995;


// console.log(addDecl(1, 2))
// This will give output as 3, because we can able to call functions before it is initilized.

function addDecl(a, b) {
    return a + b;
}

// console.log(addExpr(1, 2))
// This will give referance error, because const addExpr is not a function, it is variable. we are storing "function" inside this variable and we are calling it, like const addExpr(); Since it is not a function, It will result in error saying addExpr is not a function

const addExpr = function (a, b) {
    return a + b;
}

// console.log(addArrow(1, 2))
// This will give referance error, because const addArrow is not a function, it is variable. we are storing "function" inside this variable and we are calling it, like const addArrow(); Since it is not a function, It will result in error saying addArrow is not a function

const addArrow = (a, b) => a + b;


//-------- Dangerous situvations that happens, if we use var -------------//

if (!numberOfProducts) {
    deleteShoppingCart()
    // This will print : All Products should be deleted. because var is hoisted even before it is initilized.
}

var numberOfProducts = 10;

function deleteShoppingCart() {
    console.log("All Products should be deleted");
}