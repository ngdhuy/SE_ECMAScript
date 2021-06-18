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
let pro = {
    ['product' + value] : 'Number of Product is ' + value,
    ['method_' + value](x) {
        return value + x;
    }
};

console.log(pro);
console.log(pro.method_100(50));

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
let str = JSON.stringify(o);        // convert object to String
console.log("String:", str);
let jsonObject = JSON.parse(str);   // convert string to object json
console.log("Object JSON:", jsonObject);
console.log(Object.getOwnPropertyNames(o));

//? Object destructuring
var user = {
    id : 1,
    name : "Mary", 
    city : "Tokyo", 
    role : "Admin"
};

console.log("Object user: ", user); 

var {id, name, city, role} = user; 

console.log("id:", id); 
console.log("name:", name);
console.log("city:", city); 
console.log("role:", role);

//? Lock OBJECT
console.log("--- LOCK OBJECT ---");
let pObject = {
    id: 1, 
    name: "Product", 
    location: {
        long: 1.25,
        lat: 2.45
    },
    description: "Note something"
};
console.log("Product is", pObject);

//! add new COLOR property for object
pObject.color = Math.round(Math.random() * 100);
console.log("Product is added color Property", pObject);

//! update value of property
pObject.name = "Person";
console.log("Product name is update", pObject);

//! remove property of object
delete pObject.description;
console.log("Description property is deleted", pObject);

//! SEAL is lock object, cannot add or delete property of Object
console.log(pObject);

Object.seal(pObject);

console.log("After Object.seal(), cannot add or delete property");
pObject.size = [200, 300];
console.log(pObject);

delete pObject.color;
console.log(pObject);

console.log("Object can be change value");
pObject.id = 2;
pObject.location.height = 1000;
console.log(pObject);

//! FREEZE is lock all value and property of object
Object.freeze(pObject);

console.log("After Object.freeze(), cannot change value of object");
pObject.id = 1;
console.log(pObject);

pObject.size = [200, 300];
console.log(pObject);

delete pObject.color;
console.log(pObject);

console.log("But object can changed value of sub-object");
delete pObject.location.height;
console.log(pObject);

pObject.location.long = 99.65;
console.log(pObject);