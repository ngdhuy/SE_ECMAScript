/**
 * * Define Object (JSON) with simple method
 */

console.clear(); 

//? Shorthand assignment
let a = 3; 
let a_object = {a};
console.log(a_object);

let b = 4; 
let b_object = {b : b};
console.log(b_object);

//? Method definition
let obj = {
    value : 5,
    double() {
        return this.value * 2; 
    }, 
    square : function() {
        return this.value * this.value;
    }, 
    triple : () => {
        return obj.value * 3;      // Cannot call this.value
    }
};

console.log(obj);
console.log("Value of object: ", obj.value);
console.log("Value of object called by method: ", obj.double());
console.log("Value of object called by Square method: ", obj.square());
console.log("Value of object called by Triple method: ", obj.triple());

//? Computed properties
let value = 100; 
let product = {
    ['product' + value] : 'Number of Product is ' + value,
    ['method_' + value](x) {
        return value + x;
    }
};

console.log(product);
console.log(product.method_100(50));

//? Symbol ~ is immutable and unique
let s1 = Symbol('Symbol 01');
let s2 = Symbol('Symbol 02');

console.log('s1 == s2', s1 == s2);
console.log('s1 === s2', s1 === s2);

let o = {
    [Symbol('id')] : 5, 
    data : 100
};

console.log(o);
console.log(Object.getOwnPropertyNames(o));
console.log(JSON.stringify(o));
console.log(Object.getOwnPropertyNames(o));