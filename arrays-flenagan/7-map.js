let data = [1, 2, 3, , 4, 5];
data.length = 20;
let sqrData = data.map(item => item*item);
console.log(data, sqrData);

let data2 = [1, 2, 3, 4, 5];
let sqrData2 = data2.map(item => item*item);
console.log(data2, sqrData2);