let data = [1, 2, 3, 100, 4, 5, 6];
console.log(data.reduce((acum, x) => acum + x, 0));
console.log(data.reduce((acum, x) => acum*x, 1));
console.log(data.reduce((max, x) => max > x ? max : x));