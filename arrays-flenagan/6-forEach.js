let data = [1, 2, 3, 4, 5, 6];

//! sum array`s item
let sum = 0;
data.forEach(item => sum += item);
console.log("sum =", sum);

//! increment every item
data.forEach((item, i, arr) => arr[i] = item+1);
console.log("data = ", data)