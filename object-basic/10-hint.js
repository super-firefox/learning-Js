"use strict"

let user = {
    name: "Dane",
    age: 25,
    toString(){
        return this.name;
    },
    valueOf(){
        return this.age;
    },
    [Symbol.toPrimitive](hint) {
        console.log(`hint = ${hint}`);
        return (hint == "string") ? `$name = ${this.name}` : this.age;
    }
}
// console.log(user);
console.log(user.toString());
console.log(user + 10);