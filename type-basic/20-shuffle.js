"use strict"

let arr = [1, 2, 3];

console.log(arr);
function shuffle(arr) {
    arr.sort(() => Math.random() - Math.random());
}

for(let i=0; i<10; i++){
    shuffle(arr);
    console.log(arr);
}

let count = {
    '123': 0,
    '132': 0,
    '213': 0,
    '231': 0,
    '321': 0,
    '312': 0
  };
  
  for (let i = 0; i < 1000000; i++) {
    let array = [1, 2, 3];
    shuffle(array);
    count[array.join('')]++;
  }

  let sum = 0;
  for(let prop in count){
    sum += count[prop];
  }

  // показать количество всех возможных вариантов
  for (let key in count) {
    console.log(`${key}: ${count[key]/sum * 100}`);
  }
