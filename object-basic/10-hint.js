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
}
console.log(user);
console.log(user + "");
console.log(user + 10);