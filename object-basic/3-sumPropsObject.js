"use strict"

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
};

function sum (obj){
    let sum = 0;
    for(let item in obj){
        sum += obj[item];
    }
    return sum;
}

console.log(sum(salaries)); // 390