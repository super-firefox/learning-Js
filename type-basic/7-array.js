"use strict"
let arr = [1,2,3,4,5];
console.log(arr, "arr.length =", arr.length);
delete arr[2];
console.log(arr, "arr.length =", arr.length);
arr.splice(2, 1);
console.log(arr, "arr.length =", arr.length);
let delArr = arr.splice(0, 2, 10,11, 13);
console.log(delArr);
let copy = arr.slice();
console.log(delArr == copy);
