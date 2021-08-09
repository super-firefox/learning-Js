//! write and read array's item
let words = ["bananas"];
let wordValue = words[0];
words[1] = "applepie";
let i = 2;
words[i] = "milk";
words[i+1] = "sugar";
words[i+2] = 4;
words[words[i+2]] = words[0];
console.log(words);

//! feature
words[-1.23] = true;
words[5.000] = "fish"
words["20"] = 0;
console.log(words, words.length);

for(let el of words) {
    console.log(el)
}

console.log(words.length)