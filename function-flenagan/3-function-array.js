"use strict"

const sum = (x, y) => x + y;
console.log(`sum(10, 9) = ${sum(10, 9)}`);

const polynomial = x => x**2 + 2*x + 3;
console.log(`polynomial(8) = ${polynomial(8)}`);

const constFunc = () => 42;
console.log(`constFunc() = ${constFunc()}`)

//Правильно виводить обєкт
const f = x => {return {code: x};};
console.log('f(19) = ', f(19))

//Правильно виводить обєкт
const g = x => ({name: x});
console.log('g("Ihor") = ', g("Ihor"))