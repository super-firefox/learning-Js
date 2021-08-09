let data = [1, [2, 3, [4, 5, [6, 7]]], [8, 9]];
console.log(data.flat()); // level = 1
console.log(data.flat(2)); // level = 2
console.log(data.flat(3)); // level = 3