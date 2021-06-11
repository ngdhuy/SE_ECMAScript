/** 
 * * Define Class in ES6
 */

console.clear();

//? Define base class (Parent Class)
class Parents {
    // Define attribute inside constructor
    constructor(value = 'anonymous') {
        this.name = value;
    }

    get Name() { 
        return this.name; 
    }

    set Name(value) {
        this.name = value;
    }

    toString() {
        return `Name of object is ${this.name}`;
    }

    static getType() {
        return "Parents";
    }
}


//? Define Child class extends from Parents class
class Child extends Parents {
    constructor() {
        super();                // call attribute or method of Parents
        this.hight = 100;
    }

    toString() {
        return `${this.name} is tall ${this.hight}`;
    }

    static getType() {
        return "Child";
    }
}

let parents = new Parents();
parents.name = "Mary";
parents.Name = "Petter";
console.log(parents);
console.log(parents.toString());
console.log(Parents.getType());

let child = new Child();
console.log(child);
console.log(child.toString());
console.log(Child.getType());