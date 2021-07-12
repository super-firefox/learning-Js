console.log("\u00A9");
console.log("\u{20331}");
console.log("\u{1F60D}");

let str = "";
for (let i = 65; i<=220; i++){
    str += String.fromCodePoint(i);
}
// console.log(str);
console.log("😍".length);