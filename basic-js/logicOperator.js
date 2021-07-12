let result = 0 || "apple" || true;
let fall = 0 || "" || NaN || false || undefined;
let bad = "yes"&& false && "tack";
let good = "yes"&&"tack"&&"good";
// console.log(result); 
// console.log(fall);
// console.log(bad);
// console.log(good);

let date;
console.log(date ?? "not date");

