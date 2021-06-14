/**
 * * Array in ES6
 */

console.clear();

let a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//? Print array
console.log("--- Print array ---");
for(let i = 0; i < a.length; i++)
    console.log(a[i]);

//? Insert item
console.log("--- Append item to array ---");
a.push(99);
console.log(a);

//? Print all item with forEach
console.log("--- List even element ---");
a.forEach(element => {
    if (element % 2 == 0)
        console.log(element);
});
console.log("--------------------------------------");

//? Get First and Last item of Array
let firstItem = a[0]; 
console.log("First item:", firstItem);
let lastItem = a[a.length - 1];
console.log("Last item:", lastItem);
console.log("Object a is a:", typeof(a));
console.log("Object a is array:", Array.isArray(a));

//? Revert array
a.reverse();
console.log("Array is reverted:", a);

//? Sort array
a.sort();
console.log("Array is sorted:", a);

//? Insert and Remove item at HEAD and TAIL of Array
console.log("--- Add and Remove item at TAIL of array ---");
a.push([888, 66, [11, 22, 33]]); 
console.log(`PUSH: Insert 888 to array:`, a);
let number = a.pop();
console.log(`POP: Remove last item ${number} of array:`, a);

console.log("--- Add and Remove item at HEAD of array ---");
a.unshift([100, 125, 85]);
console.log(`UNSHIFT: Insert 100 array have`, a);
number = a.shift();
console.log(`SHIFT: Number is ${number} and array have`, a);

//? Insert and Remove items at MIDDLE array
console.log("--- Add and Remove item at MIDDLE of array ---");
let b = a.splice(4, 2);
console.log("Remove 2 items is", b, "and array have", a);

a.splice(6, 2, 'a', 'b', 'c');
console.log("Remove 2 items [8, 9] and insert 'a', 'b', 'c' to array", a);

let c = a.slice(2, 5);
console.log("Get sub-array is", c, "and array have", a);

console.log("--------------------------------------");

//? Using MAP
console.log("--- MAP in array ---");
a.map((element, index) => {
    console.log("Element: ", element, "at", index);
});

//? Using FILTER
console.log("--- FILTER in array ---");
let arrA = a.filter((element) => {
    return element % 2 != 0;        // this is condition to filter
});
console.log(arrA);

//? Using REDUCE
console.log("--- REDUCE in array ---");
let arrB = a.reduce((result, element) => {
    return result + element;
});

console.log(arrB);

//? Iterator protocol
console.log("--- Iterator protocol ---");
let str = "abcde";
let arrStrA = [...str];
let arrStrB = Array.from(str);
console.log(arrStrA);
console.log(arrStrB);

let item = [1, 2, 3, 4, 5][Symbol.iterator]();
do {
    var temp = item.next()
    if (temp.done === true)
        break;
    console.log(temp.value);
} while (temp.done === false);

//? Apply Iterator protocol
console.log('--- using iterator protocol to generate object ---')
const generator = (value) => {
    return {
        [Symbol.iterator]() {
            let i = 0; 
            return {
                next() {
                    return {
                        done : (i > value) ? true : false,
                        value: i++
                    };
                }
            }
        }
    };
};

for(let item of generator(5)) {
    console.log("item:", item);
};

console.log('object:', generator(5));