"use strict"

//Це function-expresion визначає функцію, яка знаходить квадрат
const square = function (x) { return x ** 2; }
console.log(`square(9) = ${square(9)}`);

// Function-expresion ьщжуть включати імена, які корисні для рекурсії
const f = function fact(x) {
    if (x <= 1) {
        return 1;
    }
    return x * fact(x - 1);
}

console.log(`f(9) = ${f(9)}`);

// Function-expresion можуть використовувати як аргументи других функцій
let arr = [5, 7, -9, 10, 100, -100002].sort(function (a, b) { return a - b; });
console.log(`arr = ${arr}`);

//Function-expresion інколи визначаються і зразу виконуються
let tenSquare = (function (x) { return x ** 2; }(10))
console.log(`tenSquare = ${tenSquare}`);