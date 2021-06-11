/**
 * * Array in ES6
 */

console.clear();

let a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//? Print array
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
    console.log(item);
};

console.log('object:', generator(5));