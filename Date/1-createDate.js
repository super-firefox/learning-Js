let d1 = new Date();
let d2 = new Date(100000 * 86400000);
let d3 = new Date(1991, 9, 21)
console.log(`
    ${d1}
    ${d2}
    ${d3}
`);

console.log(d3.getFullYear());
console.log(d3.getMonth());
console.log(d3.getDate());
console.log(d3.getDay()) //* 0 - Sunday, 1 - Monday, 2 - Tuesday, ..., 6 - Saturday
console.log(d3.getHours());
console.log(d3.getUTCHours());
console.log(d3.getTime());
console.log(d3.getTimezoneOffset());
// console.log(d3.set);