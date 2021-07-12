"use strict"
let symbol = Symbol.for("My symbol");
console.log(typeof symbol);
console.log(symbol);

let symbol2 = Symbol.for("My symbol");
console.log(symbol == symbol2);
console.log(Symbol.keyFor(symbol2))

let person = {
    name: "Jack",
    age: 28,
    [Symbol.for('password')]: 'Jack28',
    [symbol2]: "I",
}

console.log(person);
console.log(person.password);
console.log(person[Symbol.for("password")]);
console.log(Object.getOwnPropertySymbols(person));


