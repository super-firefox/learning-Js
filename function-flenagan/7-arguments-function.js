//! Додає перераховані імена масиву
//! і повертає а
//! Якщо аргумент а опущений, тоді  створює і повертає новий масив

function getPropertyNames(o, a){
    if(a === undefined) a = []; // or a = a || [];
    for(let property in o){
        a.push(property);
    }
    return a;
}

let o = {x: 1};
let p = {y: 2, z: 3};
let a = getPropertyNames(o);
console.log(a); // [ 'x' ]
getPropertyNames(p, a);
console.log(a); // [ 'x', 'y', 'z' ]

//! якщо аргумент age опущено то приймає стандартне значення

function person(name, age = 18){
    return {name, age}
}

let p1 = person('Misha', 22); // { name: 'Misha', age: 22 }
let p2 = person('Ivanka'); // { name: 'Ivanka', age: 18 }
console.log(p1, p2);

//! Ця функція повертає обєкт, з розмірами прямокутника
//! Якщо є лише ширина робить висоту у два рази більшу

function rectangle(width, height = width*2) {
    return {width, height};
}
console.log(rectangle(100)); //  { width: 100, height: 200 }
console.log(rectangle(100, 150)); //  { width: 100, height: 150 }

//! функція з параметром остачі (...res)

function max(first = -Infinity, ...rest){
    let maxValue = first;
    for(let n of rest){
        if(n > maxValue){
            maxValue = n;
        }
    }
    return maxValue;
}

console.log(max(1, 10, 100, 2, 3, 1000, 4, 5, 6)); // 1000

//! Операція поширення для функції
let numbers = [5, 2, 10, -1, 9, 100, 1];
let min = Math.min(...numbers); // -1
console.log(min);

//! Використання операції поширення та параметра остачі
//! Ця функція приймає функцію і повертає
//! версію у вигляді оболонки

function timed(f) {
    return function(...args) {
        console.log(`Вхід в функцію ${f.name}`);
        let startTime = Date.now();
        try {
            return f(...args);
        } finally {
            console.log(`Виход із ${f.name} через ${Date.now() - startTime}мс`); 
        }
    };
}

function benchmark(n) {
    let sum = 0;
    for(let i = 0; i <= n; i++) {
        sum +=1;
    }
    return sum;
}

timed(benchmark)(10000000);

//! Деструктизація аргументів функції в параметри

//* Додавання двоїх векторів vectorAdd
function vectorAdd([x1, y1], [x2, y2]){
    return [x1 + x1, y1 + y2];
}
let v;
console.log(v = vectorAdd([1, 2], [3, 4]));

//* Множення вектора на скаляр vectorMultiplay
function vectorMultiplay({x, y, z=0}, scalar) {
    return {x: x*scalar, y: y*scalar, z: z*scalar};
}
console.log(vectorMultiplay({x: 2, y: 4}, 2));

//* Скалярний добуток
function scalarMultiplay ({x: x1, y: y1}, {x: x2, y: y2}){
    return x1*x2 + y1*y2;
}
console.log(scalarMultiplay({x: 2, y: 4}, {x: 2, y: 4})) // 20

//* Функція копіює задану кількість елементів з одного масиву в інший
function arraycopy({from, to=from, n=from.length, fromIndex=0, toIndex=0}){
    let valuesToCopy = from.slice(fromIndex, fromIndex + n);
    to.splice(toIndex, 0, ...valuesToCopy);
    return to;
}
let a2 = [1,2,3,4,5], b2 = [9,8,7,6,5];
let ac = arraycopy({from: a2, n: 3, to: b2, toIndex: 4});
console.log(ac);