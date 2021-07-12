"use strict"

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [ vasya, petya, masha ];
console.log(arr);

function sortByAge(arr) {
    arr.sort(((item1, item2) => item1.age - item2.age));
}

sortByAge(arr);
console.log(arr);