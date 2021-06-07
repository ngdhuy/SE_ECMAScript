/**
 * * Statement in ES6:
 */

console.clear();

//? if... else
let a = 10 
if (a % 2 == 0)
    console.log(a, 'is even');
else
    console.log(a, 'is odd');

//? Assignment with condition -> a = (condition) ? b : c;
let b = (a % 5 == 0) ? 'Five' : 'Another';
console.log(b);

//? switch...case
let c = 0; 
switch (c) {
    case 1:
        console.log(c, 'is one');
        break;
    case 2: 
        console.log(c, 'is two');
    case 3:
        console.log(c, 'is three');
        break; 
    default: 
        console.log(c, 'is not a number');
}

//? loop statement -> for...
let arr = [1, 2, 3, 4, 5];

console.log("--- For(...) ---");
for(let i = 0; i < arr.length; i++)
    console.log(`arr[${i}] = ${arr[i]}`);

//? loop statement -> while...
console.log("--- while(...) ---");
let i = 0;
while(i < arr.length) {
    if(i == 2)
    {
        i++;
        continue;
    }
    console.log(`arr[${i}] * 2 = ${arr[i] * 2}`);
    i++;
}

//? loop statement -> do...while
console.log("--- do... while(...) ---");
i = 0; 
do {
    if(arr[i] == 4)
        break;

    console.log(`arr[${i}] * 4 = ${arr[i] * 4}`);
    i++;
} while(i < arr.length);

//? loop statement -> foreach ...
console.log("--- array.forEach() ---");
arr.forEach(function(item) {
    console.log(item); // ~ item ~ arr[i]
});

//? loop statement -> for...in...
console.log("--- for ... in ... ---");
for(let index in arr){
    console.log(arr[index])
}

console.log("--- Log object info with for ... in ---");
let obj = {
    id : 1, 
    name : "Product 01", 
    price : 2000
};

for(let key in obj)
    console.log(key, " : ", obj[key]);

//? loop statement -> for...of... 
console.log("--- for ... of ... ---");
for(let item of arr)
    console.log(item);