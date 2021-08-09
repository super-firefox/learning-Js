// flatMap some on flat + map, but more effective
let phrases = ["hello, world", "the defanitive guide"];
let words = phrases.flatMap(phrase => phrase.split(" "));
console.log(words); 
console.log([-2, -1, 1, 2].flatMap(item => item < 0 ? [] : Math.sqrt(item)));