"use strict"

// Виводить імя та значення кожної властивості obj. Повертає undefind
function printProps(obj) {
    for (let item in obj) {
        console.log(`${item}: ${obj[item]}`)
    }
}

let address = {
    customer1: "Kyiv",
    customer2: "Lviv",
    customer3: "Chernivtsy",
}

printProps(address);

//Обчислює відстань між точками (x1, y1) та (x2, y2)
//в декартових координатиах
function distanse(x1, y1, x2, y2) {
    let dx = x1 - x2;
    let dy = y1 - y2;
    return +Math.sqrt(dx ** 2 + dy ** 2).toFixed(2);
}

console.log(distanse(5, 6, -2, 3));

//Рекурсивна функція для обчислення факторіалу n!
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n-1);
}

console.log(factorial(5));