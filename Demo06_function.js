/**
 * * Define function ES6
 */

'use strict'

console.clear();

//? Traditional function
function sum(a, b) {
    return a + b;
}

let a = 10; 
let b = '20';
let result = sum(a, b);
console.log(`${a} + ${b} = ${result}`);

//! pass by value -> default always pass value to function
function doubleValue(value) {
    value = value * 2;
    console.log(`Inside function - value = ${value}`);
}

let value = 10; 
console.log(`Init value = ${value}`);
doubleValue(value);
console.log(`Outside function - value = ${value}`);

//! pass by reference -> pass by OBJECT
function increaseValue(obj) {
    obj.value = obj.value + 10;
    console.log("Inside funtion: ", obj);
}

let obj = { value : 20 };
console.log('Init object: ', obj);
increaseValue(obj);
console.log('Outside function: ', obj);

//! Default parameter
function decreaseValue(value = 10) {
    value -= 2;
    return value;
}

let val = decreaseValue();
console.log(val);
val = decreaseValue(100);
console.log(val);

//? Anonymous function
const showMessage = function (message){
    console.log("Message is: ", message);
};

showMessage("Hello");

//? Arrow function
console.log("--- Arrow function ---");
const sayHello = () => console.log("Hello world!!!");
sayHello();

const triple = a => a * 3;
console.log("10 * 3 =", triple(10));

const power = (a, n) => {
    let result = 1;
    for(let i = 0; i < n; i ++)
        result *= a;
    return result;
};

console.log("2^3 =", power(2, 3));

console.log("--- Special case of Arrow function ---");

let arr = [1, 2, 3, 4, 5];
arr.forEach(item => console.log(item));

const arrow_sum = (a, b = 20, c = 30) => a + b + c;
console.log(arrow_sum(3, 2));
console.log(arrow_sum(3, 2, 1));
console.log(arrow_sum(3));