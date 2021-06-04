/**
 * * Variable in ECMAScript (ES6) - Un-type variable
 */

// variable --> un-type variable
a = 1;
console.log("a = ", a);

a = "hello world";
console.log("a = ", a);

// define constant
const MAX = 100;
console.log("const MAX = ", MAX);

//MAX = 50; --> Error because cannot assign value to constant variable

// define global variable
var b = 88; 
console.log("Global variable: b = ", b);

function showGlobalVariable()
{
    console.log("Global variable in function: b = ", b);
    b = 100;
    console.log("Upage global varibal in fucntion: b = ", b);
}

showGlobalVariable();
console.log("Global variable outside function: b = ", b);

// define local variable
let c = 50; 
console.log("Local variable: c = ", c);

function updateLocalVariable()
{
    c = 222;
    console.log("Local variable inside function: c =", c);
    let d = 77; 
    console.log("Local variable of function: d = ", d);
}

updateLocalVariable();
console.log("Outside function - local variable: c = ", c);
// console.log("Outside function - local variable of function: d = ", d); --> Error because d is not define outside function

// Const variable is same Let variable -> constant is local variable

function showConstVariable()
{
    const MAX_VALUE = 1000; 
    console.log("Constant variable inside function: MAX_VALUE = ", MAX_VALUE);
}

showConstVariable();
// console.log("Constant variable outside function: MAX_VALUE = ", MAX_VALUE); --> Error because Const MAX_VALUE is not define outside function