"use strict"

let user = new Object();
let user2 = {};
let user3 = {
    name: "Ihor",
    age: 29,
    isAdmin: true,
};

console.log(user3.name, user3.age, user3.isAdmin);

delete user3.age;
console.log(user3.name, user3.age, user3.isAdmin);