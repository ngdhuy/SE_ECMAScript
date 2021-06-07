/**
 * * Error Handling in ES6
 */

'use strict'

console.clear();

//? Syntax Error
//! console.log("Hello world!!!);

//? Runtime Error || Logic Error
let a = 5;
for(let i = a; i >= 0; i--)
    console.log(a / i);

//? Use try...catch...final to handle error
var arr = [1, 2, 3, 4, 5];
try {
    for(let i = 0; i <= arr.length; i++) {
        console.log(arr[i]);
    }
} catch (e) {
    console.log("Error message: ", e);
} finally {
    console.log("=> Complete");
}

//? Call stack property
const trace = () => {
    try {
        throw new Error("Have an error occured: ");
    } catch(e) {
        console.log(e.stack);
    }
}

const second = () => trace();

const first = () => second(1, 'SEstudio', {});

first("Demo");

//? Case 02 for error handling
console.log("--- Case 02 ---");
let obj = {};
console.log("Init object:", obj);
try {
    obj.show();
    console.log("Show is completed");
} catch (e) {
    console.log(e);
}
console.log("=> Complete");

//? Case 03 for error handling
console.log("--- Case 03 ---");
const getInfo = (fileName) => {
    try {
        console.log("Code in TRY block: First time");
        let fileContent = fileName.read();
        console.log("Code in TRY block: Second time");
        return fileContent;
    } catch(e) {
        console.log("Code in CATCH blog. Something Error: ", e);
    } finally {
        console.log("Code in FINALLY block");
    }
    return "Cannot read file";
}

//! Test-case 01 
console.log("--- Call getInfo(null) ---");
let info = getInfo(null);
console.log("Info = ", info);

//! Test-case 02
console.log("--- Call getInfo(fileObject) ---");

let fileObject = { 
    name : "file_name",
    read : () => { return "File data is loaded"; } 
};

let file_data = getInfo(fileObject);
console.log(file_data);

//? Error type in ES6
//! 1. Syntax Error
try {
    let x;
    eval(x, hello);    // function eval() is not defined
} catch(e) {
    console.log(e.name);
}

//! 2. Range Error
let num = 1; 
try {
    num.toPrecision(500);   // Out of range
} catch(e) {
    console.log(e.name);
}

//! 3. Reference Error
let x; 
try {
    x = y + 1;              // Y is not defined
} catch(e) {
    console.log(e.name);
}

//! 4. Type Error
num = 1;
try {
    num.toUpperCase();      // num is integer, so cannot call metho toUpperCase()
} catch(e) {
    console.log(e.name);
}

//! 5. URI Error
try {
    let uri = decodeURI("%%%");       // Cannot URI Decode because "%%%" is not URL
    // let uri = decodeURI('https://www.google.com');
    console.log(uri);
} catch (e) {
    console.log(e.name)
}

//?-------------------- THROW ERROR --------------------
// console.clear();
console.log("--- Test throw any Object ---");
try {
    let obj = {};
    throw obj;
} catch (e) {
    console.log(e);
}

console.log("--- Test throw a Symbol ---");
try {
    let symbol = Symbol();
    throw symbol;
} catch(e) {
    console.log(e);
}

console.log("--- Test throw a Number ---");
try {
    let num = 404; 
    throw num;
} catch(e) {
    console.log(e);
}

console.log("--- Test throw a String ---");
try {
    let str = "File not found";
    throw str;
} catch(e) {
    console.log(e);
}

//! Create Object Error
console.log("--- Using Object Error ---");
let myError = new Error("Error something");
console.log("Init object Error");
try {
    throw myError;
} catch(e) {
    console.log(e);
}

//! Catch complex error
let myErr = new Error('Something error');
let rangeErr = new RangeError();
let evalErr = new EvalError("Eval error");

// random value in [0..9]
let randomValue = Math.floor(Math.random() * 10);

// [0, 1, 2, 3]
let randomObject = randomValue % 4;

console.log("Random object: ", randomObject);

try {
    switch(randomObject) {
        case 0: 
            throw myErr;
        case 1:
            throw rangeErr;
        case 2:
            throw evalErr;
        case 3:
            throw "String error is here!!!";
    }
} catch(e) {
    console.log("Type of error = ", (typeof e));
    
    if (e instanceof RangeError)
        console.log("-> RangeError");
    else if (e instanceof EvalError) 
        console.log("-> EvalError");
    else if (e instanceof Error)
        console.log("-> Error!!!");
    else if (typeof e == "string")
        console.log("-> String Error");
    else 
        console.log("->> Another Error type");
}

//! Error Property
// console.clear();
let firstErr = new Error();

firstErr.name = "First Error";
firstErr.message = "This is FIRST ERROR";
try {
    throw firstErr;
} catch(e) {
    console.log("Error Name: ", e.name);
    console.log("Error Message: ", e.message);
    console.log("Type of Error stack:", (typeof e.stack));
    console.log("-----------------");
    console.log(e.stack);
}

//! Re-throw Error
console.clear();
const checkScore = (score) => {
    if (score < 0 || score > 100) {
        throw "Invalid score: "  + score;
    }
}

const checkPlayer = (name, score) => {
    try {
        checkScore(score);
    } catch(e) {
        console.log('Something invalid with player:', name, '>>',  e);
        throw ("Score " + score + " invalid for player " + name);
    }
    console.log('OK, Player', name, 'have score', score);
}

try {
    checkPlayer("Petter", 90);
    checkPlayer("Marry", 110);
} catch(e) {
    console.log(e);
}

