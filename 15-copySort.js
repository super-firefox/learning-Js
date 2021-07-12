"use strict"

let arr = ["HTML", "JavaScript", "CSS"];

function copySort(arr) {
    return [].concat(arr).sort();
}

console.log(arr)
console.log(copySort(arr));