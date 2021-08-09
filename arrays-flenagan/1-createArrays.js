//! literal array
let empty = [];
let primes = [2, 3, 6, 11];
let misc = [1.1, true, "a"];

let base = 1024;
let table = [base, base+1, base+2, base+3];
console.log("[base, base+1, base+2, base+3]", "=", table);

//! spread syntax
let a = [1, 2, 3];
let spread = [0, ...a, 4];
console.log("[0, ...a, 4]", "=", spread);

let original = ['a', 'b', 'c',];
let copy = [...original];
copy[0] = 'z';
console.log("original / copy", '=', original, "/", copy);

let letters = [..."hello, world"];
console.log('[...new Set(letters)]','=',[...new Set(letters)]);

//! constructor Array()
let empty2 = new Array();
let emptyWithLength = new Array(10);
let full = new Array(1.1, 2.3, 3.3, 6.9);
console.log("empty2, emptyWithLength","=",empty2,",", emptyWithLength);
console.log("emptyWithLength[3]","=",emptyWithLength[3]);
console.log(`full = ${full}`);

//! Array.of() is  fabric's method
console.log("Array.of(), Array.of(10), Array.of(10, 20, 30, 40) =", Array.of(), Array.of(10), Array.of(10, 20, 30, 40));

//! Array.from() is fabric's method
let copy2 = Array.from(original);
console.log("Array.from(original) =",copy2);
console.log(Array.from("welcome")); //! as ... (spread)
console.log(Array.from([1, 2, 3, 4, 5], item => item**2)); //! as map()