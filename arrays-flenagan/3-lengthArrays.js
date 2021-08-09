[].length; // 0
['a', 'b', 'c'].length; // 3
console.log([].length, ['a', 'b', 'c'].length);

let alph = [..."qwertyuiopasdfghjklzxcvbnm"];
console.log(alph);
console.log(alph.length);
alph.length = 10; //! delete elem from 10  to 25 position
console.log(alph);
console.log(alph.length);