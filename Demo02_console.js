/**
 * * Console object in ECMAScript (ES6)
 */

/// clear all message in console
console.clear();


/// print variable or message to console
let n = "100";
console.log(n);
console.log("n = ", n);

/// print object (JSON object) to console
let obj = {
    id : 1, 
    name: "iPhone 12 Pro Max", 
    price: 1000
};

console.log(obj);

/// print array object (JSON object) to console
let arrObj = [ 
    1, 
    "Hello world!!!", 
    {
        id : 1, 
        name: "iPad Pro M1"
    }, 
    4.25, 
    5 
];

console.log(arrObj);

/// print object with format table
console.table(obj);

let objects = [
    {
        id : 1, 
        name : 'Product 1', 
        price : 1000 
    }, 
    {
        id : 2, 
        name : 'Product 2', 
        price : 1500 
    },
    {
        id : 3, 
        name : 'Product 3', 
        price : 2000 
    }, 
];

console.log(objects);
console.table(objects);

/// format color for log on terminal
const colours = {
    reset: "\x1b[0m",
    bright: "\x1b[1m",
    dim: "\x1b[2m",
    underscore: "\x1b[4m",
    blink: "\x1b[5m",
    reverse: "\x1b[7m",
    hidden: "\x1b[8m",
    
    fg: {
        black: "\x1b[30m",
        red: "\x1b[31m",
        green: "\x1b[32m",
        yellow: "\x1b[33m",
        blue: "\x1b[34m",
        magenta: "\x1b[35m",
        cyan: "\x1b[36m",
        white: "\x1b[37m",
        crimson: "\x1b[38m" // Scarlet
    },
    bg: {
        black: "\x1b[40m",
        red: "\x1b[41m",
        green: "\x1b[42m",
        yellow: "\x1b[43m",
        blue: "\x1b[44m",
        magenta: "\x1b[45m",
        cyan: "\x1b[46m",
        white: "\x1b[47m",
        crimson: "\x1b[48m"
    }
};

console.log(colours.bg.red, colours.fg.yellow, "Hello world", colours.reset);

/// print information with message
console.info("This is basic ECMAScript course of Mr Buoi");

/// Template string
let value = 1000; 
let str = `I have ${value} dollars`;
console.log(str);
console.log("Value is %s of items", value);

/// print time for execute function
console.time('Timer is ...');
for(let i = 0; i < 10; i++) {
    console.count(); // count number of callback
    console.log(i);
}
console.timeEnd('Timer is ...');

/// print all property of object 
console.log(obj);
console.dir(objects);

/// print group info of object 
console.group("List");
objects.forEach(function(item){
    console.group("objItem");
    console.dir(item);
    console.groupEnd("objItem");
});
console.groupEnd("List");