"use strict"
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

function getAverageAge(arr) {
    let count = arr.length;
    let sum = arr.reduce((acum, item) => acum += item.age, 0);
    return sum / count;
}

console.log(getAverageAge(arr));