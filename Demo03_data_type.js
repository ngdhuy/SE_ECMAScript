/**
 * * Data type in JavaScript / ECMAScript
 */
console.clear();
//? Datatype: number
let a = 4;          // a is Integer

let b = 2.5;        // b is Float

let c = "Hello";    // c is String

let d = { 
    id : 1, 
    name : "Product 1"
};                  // d is object (object JSON)

let e = [ 1, 2, 3, 4, 5 ];  // e is Array (List, Collection)

let f = true;       // f is Boolean

let w = null        // w have not memory
let z = undefined;  // z have memory but not have value

//? Check datatype of Variable

// check is Number
console.log(a, " is a number ", Number.isFinite(a));
console.log(b, " is a number ", Number.isFinite(b));
console.log(c, " is a number ", Number.isFinite(c));
console.log(d, " is a number ", Number.isFinite(d));
console.log(e, " is a number ", Number.isFinite(e));
console.log(f, " is a number ", Number.isFinite(f));

console.log(b, " is a number ", !isNaN(b));
console.log(e, " is a number ", !isNaN(e));
console.log("------------------------------------");

// Check is not a number
console.log(a, " is not a number ", isNaN(a));
console.log(c, " is not a number ", isNaN(c));
console.log("------------------------------------");

// check is Integer number
console.log(a, " is Integer ", Number.isInteger(a));
console.log(b, " is Integer ", Number.isInteger(b));
console.log(c, " is Integer ", Number.isInteger(c));
console.log("------------------------------------");

// check is Float number
console.log(a, " is Float ", Number.isFinite(a) && !Number.isInteger(a));
console.log(b, " is Float ", Number.isFinite(b) && !Number.isInteger(b));
console.log(c, " is Float ", Number.isFinite(c) && !Number.isInteger(c));
console.log("------------------------------------");

// Check MAX and MIN value
console.log("MAX = ", Number.MAX_VALUE);
console.log("MAX SAFE = ", Number.MAX_SAFE_INTEGER)
console.log("MIN = ", Number.MIN_VALUE);
console.log("MIN SAFE = ", Number.MIN_SAFE_INTEGER)
console.log("------------------------------------");

//? Fix value of Float
console.log(b, " is fixed ", b.toFixed(5));
let g = 654321.23456789;
console.log(g, " is fixed ", g.toFixed(5));
console.log(g, " is precision ", g.toPrecision(5));
console.log("------------------------------------");

//? Convert number to string
let h = a.toString();
console.log(h, " is string ", Number.isFinite(h));
console.log(h, " is string ", isNaN(h));        // Cannot use isNaN() to check string
console.log("------------------------------------");

//? Convert string to number
let i = "8";
let j = "9.5";
console.log(i, " + ", j, " = ", i + j);
console.log(i, " + ", j, " = ", parseInt(i) + parseInt(j));
console.log(i, " + ", j, " = ", parseInt(i) + parseFloat(j));
console.log("------------------------------------");

//! Condition in ES6
let k = 8;
let l = "8";
console.log(k, " == ", l, " is ", k == l);      // only equal value but different datatype
console.log(k, " === ", l, " is ", k === l);    // strict equality -> equal value and datatype
console.log("------------------------------------");

//! Compare strict use in ES6
x = undefined; y = undefined;
console.log(x, "&", y, "\t== ", x == y , "\t", "===", x === y);

x = null; y = null;
console.log(x, "\t& ", y, "\t== ", x == y , "\t", "===", x === y);

x = true; y = true;
console.log(x, "\t& ", y, "\t== ", x == y , "\t", "===", x === y);

x = false; y = false;
console.log(x, "\t& ", y, "\t== ", x == y , "\t", "===", x === y);

x = true; y = false;
console.log(x, "\t& ", y, "\t== ", x == y , "\t", "===", x === y);

x = 'food'; y = 'food';
console.log(x, "\t& ", y, "\t== ", x == y , "\t", "===", x === y);

x = 0; y = 0;
console.log(x, "\t&\t", y, "\t== ", x == y , "\t", "===", x === y);

x = 0; y = false;
console.log(x, "\t&\t", y, "\t== ", x == y , "\t", "===", x === y);

x = true; y = 1;
console.log(x, "\t&\t", y, "\t== ", x == y , "\t", "===", x === y);

x = ""; y = false;
console.log(x, "\t&\t", y, "\t== ", x == y , "\t", "===", x === y);

x = ""; y = 0;
console.log(x, "\t&\t", y, "\t== ", x == y , "\t", "===", x === y);

x = "0"; y = 0;
console.log(x, "\t&\t", y, "\t== ", x == y , "\t", "===", x === y);

x = "0"; y = false;
console.log(x, "\t&\t", y, "\t== ", x == y , "\t", "===", x === y);

x = new String("food"); y = "food";
console.log(x, "\t&", y, "\t== ", x == y , "\t", "===", x === y);

x = null; y = undefined;
console.log(x, "\t&\t", y, "\t== ", x == y , "\t", "===", x === y);

let arrA = [1, 2, 3];
let arrB = [1, 2, 3];

let objC = { x: 1, y: 2};
let objD = { x: 1, y: 2};

let objE = "text";
let objF = "te" + "xt";

console.log(arrA, " == ", arrB, " is ", arrA == arrB);
console.log(arrA, " === ", arrB, " is ", arrA === arrB);

console.log(objC, " == ", objD, " is ", objC == objD);
console.log(objC, " === ", objD, " is ", objC === objD);

console.log(objE, " == ", objF, " is ", objE == objF);
console.log(objE, " === ", objF, " is ", objF === objF);
