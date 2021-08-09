let data = [1, 2, 3, 4, 5];

console.log(data.every(item => item < 10)); // true
console.log(data.every(item => item > 20)); //false


console.log(data.some(item => item % 2 === 0)); // true
console.log(data.some(isNaN)); //false 