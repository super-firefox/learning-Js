"use strict"

let arr = [5, 3, 8, 1];

function filterRangeInPlace(arr, a, b){
    arr.map((item, index, arr) => 
        (item<a || item>b) ? arr.splice(index, 1) : null);
}

filterRangeInPlace(arr, 1, 4);

console.log(arr);